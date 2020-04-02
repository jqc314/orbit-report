export class Satellite {
  name: string;
  launchDate: string;
  orbitType: string;
  operational: boolean;
  type: string;

  constructor(
    name: string,
    type: string,
    launchDate: string,
    orbitType: string,
    operational: boolean
  ) {
    (this.name = name),
      (this.launchDate = launchDate),
      (this.orbitType = orbitType),
      (this.operational = operational),
      (this.type = type);
  }
  shouldShowWarning() {
    if (this.type.toLowerCase() === 'space debris') {
       return true;
    } else {
      return false;
    }
  }
}
