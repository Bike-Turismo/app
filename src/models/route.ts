import { DocumentReference } from 'utils/firebase/firestore/types';
import { ILocalization } from './localization';

export interface IRoute {
  name?: string;
  id?: string;
  description?: string;
  distance_in_kilo_meters?: number;
  preview_url?: string;
  localization?: DocumentReference<ILocalization>;
}

class RouteModel implements IRoute {
  private _name?: string;

  private _id?: string;

  private _description?: string;

  private _distance_in_kilo_meters?: number;

  private _preview_url?: string;

  private _localization?: DocumentReference<ILocalization>;

  public constructor({ name, id, description, distance_in_kilo_meters, preview_url }: IRoute) {
    if (name !== undefined) this.name = name;
    if (id !== undefined) this.id = id;
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

  public get id(): string | undefined {
    return this._id;
  }

  public set id(value: string | undefined) {
    this._id = value;
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

  public get localization(): DocumentReference<ILocalization> | undefined {
    return this._localization;
  }

  public set localization(value: DocumentReference<ILocalization> | undefined) {
    this._localization = value;
  }

  public toJSON() {
    return {
      name: this.name,
      id: this.id,
      description: this.description,
      distanceInKiloMeters: this.distance_in_kilo_meters,
      previewURL: this.preview_url,
      localization: { ...(this.localization || {}) },
    };
  }
}

export default RouteModel;
