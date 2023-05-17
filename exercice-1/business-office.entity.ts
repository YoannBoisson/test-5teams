import { Office } from './office.entity';

export class BusinessOffice extends Office {
  availableSpaceRate(): number {
    const spaceUsed =
      this.peopleNumber -
      3 * this.networkSocketNumber +
      this.peopleNumber -
      3 * this.powerSocketNumber +
      this.peopleNumber -
      this.phoneSocketNumber +
      this.peopleNumber -
      1.5 * this.chairNumber +
      this.peopleNumber -
      this.tableNumber;

    return spaceUsed;
  }
}
