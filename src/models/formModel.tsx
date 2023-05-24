export type FormStructure = {
  name: string;
  lastName: string;
  Birthdate: string;
  gender: string;
  email: string;
  newsletter: boolean;
};

export class Form implements FormStructure {
  static generateId() {
    return Math.trunc(Math.random() * 1_000_000_000_000).toString();
  }

  name!: string;
  newsletter: boolean;
  constructor(public lastName: string, public Birthdate: string) {
    this.newsletter = false;
  }
}
