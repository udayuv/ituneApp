import { create } from 'apisauce';

export const createiTuneApi = baseURL => {
  const api = create({
    baseURL,
    headers: { 'Content-Type': 'application/json' }
  });
  return api;
};
