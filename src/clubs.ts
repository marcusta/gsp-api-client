import { Club } from "./types";

export const clubs: Club[] = [
  // Driver
  {
    name: "260",
    spin: 2212,
    ballSpeed: 163.1,
    vla: 15.1,
  },
  {
    name: "250",
    spin: 2632,
    ballSpeed: 160.2,
    vla: 15.2,
  },
  {
    name: "240",
    spin: 2726,
    ballSpeed: 156.2,
    vla: 14.9,
  },
  // 3 wood
  {
    name: "230",
    spin: 3037,
    ballSpeed: 153.2,
    vla: 14.5,
  },
  {
    name: "220",
    spin: 3257,
    ballSpeed: 147.2,
    vla: 14.2,
  },
  {
    name: "210",
    spin: 3345,
    ballSpeed: 142.5,
    vla: 14.8,
  },
  {
    name: "200",
    spin: 3674,
    ballSpeed: 139.5,
    vla: 14.6,
  },
  {
    name: "190",
    spin: 4584,
    ballSpeed: 136.9,
    vla: 15.2,
  },
  {
    name: "180",
    spin: 5167,
    ballSpeed: 132.8,
    vla: 15.1,
  },
  {
    name: "170",
    spin: 6000,
    ballSpeed: 129,
    vla: 16,
  },
  // 3 iron
  {
    name: "160",
    spin: 6500,
    ballSpeed: 124,
    vla: 16,
  },
  // 5 iron
  {
    name: "150",
    spin: 7200,
    ballSpeed: 118,
    vla: 18,
  },
  {
    name: "140",
    spin: 8300,
    ballSpeed: 113,
    vla: 19,
  },
  {
    name: "130",
    spin: 8800,
    ballSpeed: 107,
    vla: 22,
  },
  {
    name: "120",
    spin: 9200,
    ballSpeed: 101,
    vla: 23,
  },
  {
    name: "110",
    spin: 9300,
    ballSpeed: 94,
    vla: 25,
  },
  {
    name: "100",
    spin: 9700,
    ballSpeed: 88,
    vla: 26,
  },
  {
    name: "90",
    spin: 10000,
    ballSpeed: 82,
    vla: 28,
  },
  {
    name: "80",
    spin: 9800,
    ballSpeed: 75,
    vla: 29,
  },
  {
    name: "70",
    spin: 9800,
    ballSpeed: 68,
    vla: 30,
  },
  {
    name: "60",
    spin: 9800,
    ballSpeed: 61.5,
    vla: 31,
  },
  {
    name: "50",
    spin: 9400,
    ballSpeed: 56,
    vla: 32,
  },
  {
    name: "40",
    spin: 9200,
    ballSpeed: 48,
    vla: 32,
  },
  {
    name: "30",
    spin: 7400,
    ballSpeed: 41,
    vla: 33,
  },
  {
    name: "25",
    spin: 5500,
    ballSpeed: 37,
    vla: 33,
  },
  {
    name: "20",
    spin: 4000,
    ballSpeed: 32.9,
    vla: 34,
  },
  {
    name: "15",
    spin: 3500,
    ballSpeed: 28.5,
    vla: 34,
  },
  {
    name: "10",
    spin: 6000,
    ballSpeed: 24.5,
    vla: 34,
  },
  {
    name: "7m chip",
    spin: 6000,
    ballSpeed: 18,
    vla: 28,
  },
  {
    name: "5",
    spin: 6000,
    ballSpeed: 16.5,
    vla: 34,
  },
  {
    name: "3",
    spin: 6000,
    ballSpeed: 12.5,
    vla: 34,
  },
  {
    name: "Green Bunker",
    spin: 8500,
    ballSpeed: 38,
    vla: 40,
  },
  {
    name: "3m putt",
    spin: 0,
    ballSpeed: 4.2,
    vla: 0,
  },
  {
    name: "5m putt",
    spin: 0,
    ballSpeed: 5.3,
    vla: 0,
  },
  {
    name: "7m putt",
    spin: 0,
    ballSpeed: 6.5,
    vla: 0,
  },
  {
    name: "9m putt",
    spin: 0,
    ballSpeed: 7.75,
    vla: 0,
  },
  {
    name: "11m putt",
    spin: 0,
    ballSpeed: 8.85,
    vla: 0,
  },
  {
    name: "13m putt",
    spin: 0,
    ballSpeed: 9.87,
    vla: 0,
  },
  {
    name: "15m putt",
    spin: 0,
    ballSpeed: 10.92,
    vla: 0,
  },
  {
    name: "18m putt",
    spin: 0,
    ballSpeed: 12.12,
    vla: 0,
  },
  {
    name: "21m putt",
    spin: 0,
    ballSpeed: 13.92,
    vla: 0,
  },
  {
    name: "24m putt",
    spin: 0,
    ballSpeed: 15.12,
    vla: 0,
  },
  {
    name: "26m putt",
    spin: 0,
    ballSpeed: 15.9,
    vla: 0,
  },
  {
    name: "31m putt",
    spin: 0,
    ballSpeed: 18.3,
    vla: 0,
  },
];

// Define the structure for randomization settings
interface RandomizationConfig {
  spinVariation: number; // percentage (e.g., 10 means ±10%)
  vlaVariation: number; // percentage
  hlaRange: number; // degrees (e.g., 3 means ±3 degrees)
  spinAxisFactor: {
    // multiplier range for HLA to SpinAxis
    min: number;
    max: number;
  };
  speedFactor: {
    // divider range for spin to speed relationship
    min: number;
    max: number;
  };
}

// Configuration for different ball speed tiers
export const randomizationTiers: {
  [key: string]: {
    minSpeed: number;
    maxSpeed: number;
    config: RandomizationConfig;
  };
} = {
  highSpeed: {
    minSpeed: 145,
    maxSpeed: Infinity,
    config: {
      spinVariation: 10,
      vlaVariation: 5,
      hlaRange: 3,
      spinAxisFactor: { min: 1.5, max: 2.5 },
      speedFactor: { min: 3.5, max: 4.5 },
    },
  },
  mediumSpeed: {
    minSpeed: 115,
    maxSpeed: 145,
    config: {
      spinVariation: 7,
      vlaVariation: 4,
      hlaRange: 2,
      spinAxisFactor: { min: 1.3, max: 2.2 },
      speedFactor: { min: 3.2, max: 4.2 },
    },
  },
  lowSpeed: {
    minSpeed: 0,
    maxSpeed: 115,
    config: {
      spinVariation: 5,
      vlaVariation: 3,
      hlaRange: 1.5,
      spinAxisFactor: { min: 1.2, max: 2.0 },
      speedFactor: { min: 3.0, max: 4.0 },
    },
  },
};

function getConfigForSpeed(ballSpeed: number): RandomizationConfig {
  for (const tier of Object.values(randomizationTiers)) {
    if (ballSpeed > tier.minSpeed && ballSpeed <= tier.maxSpeed) {
      return tier.config;
    }
  }
  return randomizationTiers.lowSpeed.config; // fallback
}

export function applyRandomVariation(club: Club): Club {
  const config = getConfigForSpeed(club.ballSpeed);

  // Generate random spin variation
  const spinVariationPercent =
    (Math.random() * 2 * config.spinVariation - config.spinVariation) / 100;
  const newSpin = Math.round(club.spin * (1 + spinVariationPercent) * 10) / 10;

  // Ball speed varies with spin - random factor
  const speedFactor =
    config.speedFactor.min +
    Math.random() * (config.speedFactor.max - config.speedFactor.min);
  const speedVariationPercent = spinVariationPercent / speedFactor;
  const newBallSpeed =
    Math.round(club.ballSpeed * (1 + speedVariationPercent) * 10) / 10;

  // Random VLA variation
  const vlaVariationPercent =
    (Math.random() * 2 * config.vlaVariation - config.vlaVariation) / 100;
  const newVLA = Math.round(club.vla * (1 + vlaVariationPercent) * 10) / 10;

  // Random draw/fade
  const randomHLA =
    Math.round((Math.random() * 2 * config.hlaRange - config.hlaRange) * 10) /
    10;

  // SpinAxis calculation
  let spinAxis: number;
  if (randomHLA === 0) {
    // When HLA is 0, add a slight random tilt
    const randomTilt = 0.2 + Math.random() * 0.4; // Random value between 0.2 and 0.6
    spinAxis = Math.random() < 0.5 ? randomTilt : -randomTilt; // Randomly choose positive or negative
  } else {
    // Normal calculation for non-zero HLA
    const spinAxisFactor =
      config.spinAxisFactor.min +
      Math.random() * (config.spinAxisFactor.max - config.spinAxisFactor.min);
    spinAxis = Math.round(-randomHLA * spinAxisFactor * 10) / 10;
  }

  return {
    ...club,
    spin: newSpin,
    ballSpeed: newBallSpeed,
    vla: newVLA,
    hla: randomHLA,
    spinAxis: spinAxis,
  };
}
