import { combineReducers, configureStore} from '@reduxjs/toolkit'
import { productsSlice } from './products/reducer';

const rootReducer = combineReducers({
  products: productsSlice.reducer,

});

export const store = configureStore({
 reducer: rootReducer,
 middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootStateType = ReturnType<typeof rootReducer>;
export default store