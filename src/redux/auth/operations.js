import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', credentials);
            setAuthHeader(`Bearer ${response.data.token}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', credentials);
            setAuthHeader(`Bearer ${response.data.token}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            setAuthHeader('');
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        try {
            const state = thunkAPI.getState();
             setAuthHeader(`Bearer ${state.auth.token}`);
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
    {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      return state.auth.token !== null;
    },
  }
);

  