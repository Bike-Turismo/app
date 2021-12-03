export interface ILocalization {
  city?: string;
  state?: string;
}

class LocalizationModel implements ILocalization {
  private _city?: string;

  private _state?: string;

  public constructor({ city, state }: ILocalization) {
    this.city = city;
    this.state = state;
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
}

export default LocalizationModel;
