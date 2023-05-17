export class Office {
  networkSocketNumber: number;
  powerSocketNumber: number;
  phoneSocketNumber: number;
  chairNumber: number;
  tableNumber: number;
  peopleNumber: number;
  constructor(
    networkSocketNumber: number,
    powerSocketNumber: number,
    phoneSocketNumber: number,
    chairNumber: number,
    tableNumber: number,
    peopleNumber: number
  ) {
    this.networkSocketNumber = networkSocketNumber;
    this.powerSocketNumber = powerSocketNumber;
    this.phoneSocketNumber = phoneSocketNumber;
    this.chairNumber = chairNumber;
    this.tableNumber = tableNumber;
    this.peopleNumber = peopleNumber;
  }

  availableSpaceRate(): number {
    const spaceUsed =
      this.peopleNumber -
      this.networkSocketNumber +
      this.peopleNumber -
      this.powerSocketNumber +
      this.peopleNumber -
      this.phoneSocketNumber +
      this.peopleNumber -
      this.chairNumber +
      this.peopleNumber -
      this.tableNumber;

    return spaceUsed;
  }
}
