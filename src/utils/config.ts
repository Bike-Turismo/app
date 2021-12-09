/* eslint-disable import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { MAPS_API_KEY } from '@env';

interface IConfig {
  MAPS_API_KEY: string;
}

const config: IConfig = { MAPS_API_KEY };

export default config;
