export class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  toString(): string {
    return this.name + " " + this.age;
  }
}
