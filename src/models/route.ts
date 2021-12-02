export interface IRoute {
  name?: string;
  index?: string;
  description?: string;
  distance_in_kilo_meters?: number;
  preview_url?: string;
}

class RouteModel implements IRoute {
  private _name?: string;

  private _index?: string;

  private _description?: string;

  private _distance_in_kilo_meters?: number;

  private _preview_url?: string;

  public constructor({ name, index, description, distance_in_kilo_meters, preview_url }: IRoute) {
    if (name !== undefined) this.name = name;
    if (index !== undefined) this.index = index;
    if (description !== undefined) this.description = description;
    if (distance_in_kilo_meters !== undefined) this.distance_in_kilo_meters = distance_in_kilo_meters;
    if (preview_url !== undefined) this.preview_url = preview_url;
  }

  public get name(): string | undefined {
    return this._name;
  }

  public set name(value: string | undefined) {
    this._name = value;
  }

  public get index(): string | undefined {
    return this._index;
  }

  public set index(value: string | undefined) {
    this._index = value;
  }

  public get description(): string | undefined {
    return this._description;
  }

  public set description(value: string | undefined) {
    this._description = value;
  }

  public get distance_in_kilo_meters(): number | undefined {
    return this._distance_in_kilo_meters;
  }

  public set distance_in_kilo_meters(value: number | undefined) {
    this._distance_in_kilo_meters = value;
  }

  public get preview_url(): string | undefined {
    return this._preview_url;
  }

  public set preview_url(value: string | undefined) {
    this._preview_url = value;
  }

  public toJSON() {
    return {
      name: this.name,
      index: this.index,
      description: this.description,
      distanceInKiloMeters: this.distance_in_kilo_meters,
      previewURL: this.preview_url,
    };
  }
}

export default RouteModel;
