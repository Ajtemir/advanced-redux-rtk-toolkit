import {IUser} from "../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";
import {TypedActionCreator} from "@reduxjs/toolkit/dist/mapBuilders";

export interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users:[],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice(
    {
        name: 'user',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            });
            builder.addCase(fetchUsers.fulfilled, (state,action) => {
                state.isLoading = false;
                state.error = ''
                state.users = action.payload
            });
            builder.addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                if (typeof action.payload === 'string') {
                    state.error = action.payload;
                } else {
                    state.error = "Неизвестная ошибка";
                }
            });
        }
    }
)

export default userSlice.reducer;