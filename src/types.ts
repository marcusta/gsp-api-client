export interface Club {
  name: string;
  spin: number;
  ballSpeed: number;
  vla: number;
  hla?: number;
  spinAxis?: number;
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
