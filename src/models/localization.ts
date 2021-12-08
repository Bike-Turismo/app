export interface ILocalization {
  id?: string;
  city?: string;
  state?: string;
}

class LocalizationModel implements ILocalization {
  private _id?: string | undefined;

  private _city?: string;

  private _state?: string;

  public constructor({ id, city, state }: ILocalization) {
    if (id !== undefined) this.id = id;
    if (city !== undefined) this.city = city;
    if (state !== undefined) this.state = state;
  }

  public get id(): string | undefined {
    return this._id;
  }

  public set id(value: string | undefined) {
    this._id = value;
  }

  public get city(): string | undefined {
    return this._city;
  }

  public set city(value: string | undefined) {
    this._city = value;
  }

  public get state(): string | undefined {
    return this._state;
  }

  public set state(value: string | undefined) {
    this._state = value;
  }

  public toString() {
    return `${this.city}, ${this.state}`;
  }
}

export default LocalizationModel;
