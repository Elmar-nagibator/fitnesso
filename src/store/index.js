import {configureStore} from "@reduxjs/toolkit";
import user from './redusers/user'
import clother from './redusers/clother'
import basket from './redusers/basket'
import { rememberReducer, rememberEnhancer } from 'redux-remember';
const rememberedKeys = [ 'user','clother','basket'];

const store = configureStore({

    reducer : rememberReducer({
        clother,
        user,
        basket


    }),    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(
        rememberEnhancer(
            window.localStorage, // or window.sessionStorage, or your own custom storage driver
            rememberedKeys
        )
    )
})
export default store