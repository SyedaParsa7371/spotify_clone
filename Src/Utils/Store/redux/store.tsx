import { configureStore } from "@reduxjs/toolkit";
import auth from './index'

export const store = configureStore({
    reducer:{
        Authentication : auth
    },
})

