export class Rabbit {
  speed: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  color: "white" | "brown";
  distanceTraveled: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  position: { x: number; y: number };

  constructor(
    speed: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    color: "white" | "brown",
    distanceTraveled: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    position: { x: number; y: number }
  ) {
    this.speed = speed;
    this.color = color;
    this.distanceTraveled = distanceTraveled;
    this.position = position;
  }

  run(): void {
    this.distanceTraveled++;
  }
}
