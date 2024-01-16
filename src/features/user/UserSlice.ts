import { createSlice } from '@reduxjs/toolkit';

import { IGeocoding } from '@/interfaces/geocoding';
import { getAddress } from '@/services/apiGeocoding';

interface IPositionObject {
  coords: IGeocoding;
}

const getPosition = (): Promise<IPositionObject> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const fetchAddress = async () => {
  // get user's geolocation position
  const positionObj = await getPosition();

  const position: IGeocoding = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // getting description of user address based
  // on geolocation
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj.postcode}, ${addressObj?.countryName}`;

  return { position, address };
};

const initialState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
