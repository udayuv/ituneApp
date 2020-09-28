import { createiTuneApi } from './apiUtil';

const ITUNE_URL = 'https://itunes.apple.com/search';
const ituneApi = createiTuneApi(ITUNE_URL);

export const getSongs = searchKey => ituneApi.get(`?term=${searchKey}`);