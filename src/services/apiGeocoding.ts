import { IGeocoding } from '@/interfaces/geocoding';

export const getAddress = async ({ latitude, longitude }: IGeocoding) => {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  );

  if (!res.ok) throw new Error('Failed getting address');

  const data = await res.json();
  return data;
};
