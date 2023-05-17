export class Hunter {
  bulletNumber: number;
  hungerLevel: number;
  distanceTraveled: number;
  position: { x: number; y: number };

  constructor(
    bulletNumber: number,
    hungerLevel: number,
    distanceTraveled: number,
    position: { x: number; y: number }
  ) {
    this.bulletNumber = bulletNumber;
    this.hungerLevel = hungerLevel;
    this.distanceTraveled = distanceTraveled;
    this.position = position;
  }

  hunt(): void {
    this.bulletNumber--;
    this.hungerLevel--;
    this.distanceTraveled++;
  }
}
