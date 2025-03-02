import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";
import { getCookie, removeCookie, setCookie } from "../../utils/utils";


const initialState = {
    loading: false,
    // authenticated: false,
    // name: null,
    // id: null,
    authenticated: getCookie('isAuthenticated') || false,
    name: getCookie('name') || null,
    id: getCookie('id') || null,
    preference: []
}

export const SignUp = createAsyncThunk('/register', async (data, { rejectWithValue }) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, data)
        return res.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const login = createAsyncThunk('/login', async (data, { rejectWithValue }) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, data, { withCredentials: true })
        const verifyRes = await axios.get(`${import.meta.env.VITE_API_URL}/auth/verify`, { withCredentials: true })
        // return res.data
        // Merging login & verify api data
        return { ...res.data, ...verifyRes.data }
    } catch (error) {
        return rejectWithValue(error)
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signOut: function (state) {
            state.authenticated = false
            state.id = null
            state.name = null
            removeCookie('isAuthenticated')
            removeCookie('name')
            removeCookie('id')
        }
    },
    extraReducers: (builder) => {
        builder.addCase(SignUp.pending, (state) => {
            state.loading = true
        }).addCase(SignUp.fulfilled, (state, action) => {
            state.loading = false
            console.log(action.payload);
            console.log(action.payload.message);
            toast.success(action.payload.message)
        }).addCase(SignUp.rejected, (state, action) => {
            state.loading = false
            console.log(action.payload);
            toast.error(action.payload.response.data.message)
        }).addCase(login.pending, (state) => {
            state.loading = true
        }).addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.authenticated = action.payload.authenticated
            state.name = action.payload.name
            state.id = action.payload.id
            setCookie('isAuthenticated', action.payload.authenticated)
            setCookie('name', action.payload.name)
            setCookie('id', action.payload.id)
            state.preference = action.payload.preference
            console.log(action.payload);
            toast.success(action.payload.message)

        }).addCase(login.rejected, (state, action) => {
            state.loading = false
        })
    }

})

export default authSlice.reducer

export const { signOut } = authSlice.actions