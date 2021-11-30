export interface IUser {
  name?: string;
}

class UserModel implements IUser {
  private _name?: string;

  public constructor({ name }: IUser) {
    if (name) this.name = name;
  }

  public get name(): string | undefined {
    return this._name;
  }

  public set name(value: string | undefined) {
    this._name = value;
  }
}

export default UserModel;
