import {configureStore} from "@reduxjs/toolkit";

import { articleReducer } from "../feature/articleSlice";


 const store=configureStore({
    reducer:{
        articles:articleReducer
    }
})
export default store

