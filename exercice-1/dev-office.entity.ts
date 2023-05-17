import { Office } from './office.entity';

export class DevOffice extends Office {
  availableSpaceRate(): number {
    const spaceUsed =
      this.peopleNumber -
      this.networkSocketNumber +
      this.peopleNumber -
      this.powerSocketNumber +
      this.peopleNumber -
      2 * this.phoneSocketNumber +
      this.peopleNumber -
      2 * this.chairNumber +
      this.peopleNumber -
      this.tableNumber;

    return spaceUsed;
  }
}
