export class Burrow {
    position: { x: number; y: number };
    isOccupied: boolean;
    
    constructor(position: { x: number; y: number }, isOccupied: boolean) {
        this.position = position;
        this.isOccupied = isOccupied;
    }
}
