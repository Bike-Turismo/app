import { DocumentReference } from 'utils/firebase/firestore/types';
import { ILocalization } from './localization';

export type RouteDifficulties = 'easy' | 'medium' | 'hard';

export interface IRoute {
  name?: string;
  id?: string;
  description?: string;
  distance_in_kilometers?: number;
  preview_url?: string;
  localization?: DocumentReference<ILocalization>;
  difficulty?: RouteDifficulties;
  elevation?: number;
}

class RouteModel implements IRoute {
  private _name?: string;

  private _id?: string;

  private _description?: string;

  private _distance_in_kilometers?: number;

  private _preview_url?: string;

  private _localization?: DocumentReference<ILocalization>;

  private _difficulty?: RouteDifficulties;

  private _elevation?: number;

  public constructor({
    name,
    id,
    description,
    distance_in_kilometers,
    preview_url,
    localization,
    difficulty,
    elevation,
  }: IRoute) {
    if (name !== undefined) this.name = name;
    if (id !== undefined) this.id = id;
    if (description !== undefined) this.description = description;
    if (distance_in_kilometers !== undefined) this.distance_in_kilometers = distance_in_kilometers;
    if (preview_url !== undefined) this.preview_url = preview_url;
    if (localization !== undefined) this.localization = localization;
    if (difficulty !== undefined) this.difficulty = difficulty;
    if (elevation !== undefined) this.elevation = elevation;
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

  public get distance_in_kilometers(): number | undefined {
    return this._distance_in_kilometers;
  }

  public set distance_in_kilometers(value: number | undefined) {
    this._distance_in_kilometers = value;
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

  public get difficulty(): RouteDifficulties | undefined {
    return this._difficulty;
  }

  public set difficulty(value: RouteDifficulties | undefined) {
    this._difficulty = value;
  }

  public get elevation(): number | undefined {
    return this._elevation;
  }

  public set elevation(value: number | undefined) {
    this._elevation = value;
  }

  public toJSON() {
    return {
      name: this.name,
      id: this.id,
      description: this.description,
      distanceInKilometers: this.distance_in_kilometers,
      previewURL: this.preview_url,
      localization: { ...(this.localization || {}) },
      difficulty: this.difficulty,
      elevation: this.elevation,
    };
  }
}

export default RouteModel;
