import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IGeocoding } from '@/interfaces/geocoding';
import { getAddress } from '@/services/apiGeocoding';
import { RootState } from '@/store/store';

interface IPositionObject {
  coords: IGeocoding;
}

const getPosition = (): Promise<IPositionObject> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const fetchAddress = createAsyncThunk('user/fetchAddress', async () => {
  // get user's geolocation position
  const positionObj = await getPosition();

  const position: IGeocoding = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // getting description of user address based
  // on geolocation
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city}, ${addressObj.postcode} ${addressObj?.countryName}`;

  // payload of fulfilled sate
  return { position, address };
});

interface IPosition {
  latitude?: number;
  longitude?: number;
}
interface initialState {
  username: string;
  status: string;
  position: IPosition;
  address: string;
  error: string;
}

const initialState: initialState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
        state.error = '';
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error';
        state.error =
          'There was a problem 😭 getting your address' || action.error.message;
      }),
});

export const { updateName } = userSlice.actions;

export const getUsername = (state: RootState) => state.user.username;

export default userSlice.reducer;
