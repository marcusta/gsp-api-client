export interface Club {
  name: string;
  spinMin: number;
  spinMax: number;
  speedMin: number;
  speedMax: number;
  vlaMin: number;
  vlaMax: number;
  carryMin: number;
  carryMax: number;
}

export interface BallData {
  Speed: number;
  SpinAxis: number;
  TotalSpin: number;
  HLA: number;
  VLA: number;
}

export interface ShotData {
  DeviceID: string;
  Units: string;
  ShotNumber: number;
  APIversion: string;
  BallData: BallData;
  ShotDataOptions: {
    ContainsBallData: boolean;
    ContainsClubData: boolean;
  };
} 