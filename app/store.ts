import {
    Action,
    AnyAction,
    combineReducers,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
  import { createWrapper, HYDRATE } from 'next-redux-wrapper';
  import { productsReducer } from '../features/products';
  import { userReducer } from '../features/user';

  const combinedReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
  });
  
  const reducer = (state: any, action: AnyAction) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, 
        ...action.payload,
      };
      return nextState;
    } else {
      return combinedReducer(state, action);
    }
  };
  
  export const makeStore = () =>
    configureStore({
      reducer,
    }) ;
  
  type Store = ReturnType<typeof makeStore>;
  
  export type AppDispatch = Store['dispatch'];
  export type RootState = ReturnType<Store['getState']>;
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >;
  
  export const wrapper = createWrapper(makeStore, { debug: true });
  

//   import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
// import { createWrapper, HYDRATE } from 'next-redux-wrapper';
// import { productsReducer } from '../features/products';
//   import { userReducer } from '../features/user';

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     products: productsReducer,
//   },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

// const makeStore = () => store;

// export const wrapper = createWrapper(makeStore);