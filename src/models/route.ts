export interface IRoute {
  name?: string;
}

class RouteModel implements IRoute {
  private _name?: string;

  public constructor({ name }: IRoute) {
    if (name) this.name = name;
  }

  public get name(): string | undefined {
    return this._name;
  }

  public set name(value: string | undefined) {
    this._name = value;
  }
}

export default RouteModel;
