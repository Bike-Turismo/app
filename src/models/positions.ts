export interface ICoord {
  lat: number;
  lng: number;
}

export interface IPositions {
  positions?: Array<ICoord>;
}

class PositionsModel implements IPositions {
  private _positions?: Array<ICoord>;

  public constructor({ positions }: IPositions) {
    if (positions !== undefined) this.positions = positions;
  }

  public get positions(): Array<ICoord> | undefined {
    return this._positions;
  }

  public set positions(value: Array<ICoord> | undefined) {
    this._positions = value;
  }
}

export default PositionsModel;
