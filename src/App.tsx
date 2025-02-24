import React, { useState } from "react";
import { clubs, applyRandomVariation } from "./clubs";
import { Club, ShotData, BallData } from "./types";

export default function App() {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [originalClub, setOriginalClub] = useState<Club | null>(null);
  const [ballData, setBallData] = useState<BallData>({
    Speed: 0,
    SpinAxis: 0.0,
    TotalSpin: 0,
    HLA: 0.0,
    VLA: 0,
  });
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleClubSelect = (club: Club) => {
    // Store the original club values
    setOriginalClub(club);
    // Apply random variations when selecting the club
    const randomizedClub = applyRandomVariation(club);
    setSelectedClub(randomizedClub);
    setBallData({
      ...ballData,
      Speed: randomizedClub.ballSpeed,
      TotalSpin: randomizedClub.spin,
      VLA: randomizedClub.vla,
      HLA: randomizedClub.hla || 0,
      SpinAxis: randomizedClub.spinAxis || 0,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Allow empty string to handle backspace/delete
    const newValue = value === "" ? 0 : parseFloat(value);

    // Only update if it's a valid number
    if (!isNaN(newValue)) {
      setBallData((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    }
  };

  const handleShot = async () => {
    if (!selectedClub) return;

    const shotData: ShotData = {
      DeviceID: "GSPro LM 1.1",
      Units: "Yards",
      ShotNumber: 1,
      APIversion: "1",
      BallData: ballData,
      ShotDataOptions: {
        ContainsBallData: true,
        ContainsClubData: false,
      },
    };

    try {
      const response = await fetch("/shot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shotData),
      });

      if (!response.ok) {
        throw new Error("Shot failed");
      }

      setStatusMessage("Shot made successfully");
      setTimeout(() => setStatusMessage(""), 3000);
    } catch (error) {
      console.error("Error sending shot:", error);
      setStatusMessage("Failed to send shot");
      setTimeout(() => setStatusMessage(""), 3000);
    }
  };

  const calculateVariationPercent = (current: number, base: number): string => {
    if (!base) return "0%";
    const variation =
      ((current - originalClub?.[getBaseProperty(current)] || base) / base) *
      100;
    return `${variation > 0 ? "+" : ""}${variation.toFixed(1)}%`;
  };

  // Helper function to get the corresponding base property
  const getBaseProperty = (current: number): keyof Club => {
    if (current === ballData.Speed) return "ballSpeed";
    if (current === ballData.TotalSpin) return "spin";
    return "vla";
  };

  return (
    <div className="container p-4">
      <h1 className="title">Golf Shot Simulator</h1>

      <div className="buttons">
        {clubs.map((club) => (
          <button
            key={club.name}
            className={`button ${
              selectedClub?.name === club.name ? "is-primary" : ""
            }`}
            onClick={() => handleClubSelect(club)}
          >
            {club.name}
          </button>
        ))}
      </div>

      {selectedClub && (
        <div className="box">
          <h2 className="subtitle">Shot Configuration - {selectedClub.name}</h2>

          <div className="field">
            <label className="label">Ball Speed</label>
            <div className="control is-flex is-align-items-center">
              <input
                type="number"
                className="input"
                name="Speed"
                value={ballData.Speed || ""}
                onChange={handleInputChange}
                step="1"
              />
              <span className="ml-2">
                {calculateVariationPercent(
                  ballData.Speed,
                  originalClub?.ballSpeed || 0
                )}
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Total Spin</label>
            <div className="control is-flex is-align-items-center">
              <input
                type="number"
                className="input"
                name="TotalSpin"
                value={ballData.TotalSpin || ""}
                onChange={handleInputChange}
                step="100"
              />
              <span className="ml-2">
                {calculateVariationPercent(
                  ballData.TotalSpin,
                  originalClub?.spin || 0
                )}
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Vertical Launch Angle</label>
            <div className="control is-flex is-align-items-center">
              <input
                type="number"
                className="input"
                name="VLA"
                value={ballData.VLA || ""}
                onChange={handleInputChange}
                step="1"
              />
              <span className="ml-2">
                {calculateVariationPercent(
                  ballData.VLA,
                  originalClub?.vla || 0
                )}
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Horizontal Launch Angle</label>
            <div className="control">
              <input
                type="number"
                className="input"
                name="HLA"
                value={ballData.HLA || ""}
                onChange={handleInputChange}
                step="0.1"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Spin Axis</label>
            <div className="control">
              <input
                type="number"
                className="input"
                name="SpinAxis"
                value={ballData.SpinAxis || ""}
                onChange={handleInputChange}
                step="0.1"
              />
            </div>
          </div>

          {statusMessage && (
            <div
              className={`notification ${
                statusMessage.includes("Failed") ? "is-danger" : "is-success"
              } is-light`}
            >
              {statusMessage}
            </div>
          )}

          <button className="button is-success" onClick={handleShot}>
            Take Shot
          </button>
        </div>
      )}
    </div>
  );
}
