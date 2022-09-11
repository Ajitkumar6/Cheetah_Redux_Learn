import React from 'react';
import ReactDOM  from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// Actions can also be written like this in typescript files
/* const vadiveluComedyAction = () => {
  return (
    type : "VADIVELU_COMEDY"
  )
}

const goundamaniComedyAction = () => {
  return (
    type : "GOUNDAMANI_ACTION"
  )
} */



// Selectors 
const VADIVELU_COMEDY = "VADIVELU_COMEDY";
const GOUNDAMANI_COMEDY = "GOUNDAMANI_COMEDY";

// Actions 
const vadiveluComedyAction = () => ({type:VADIVELU_COMEDY})
const goundamaniComedyAction = () => ({type:GOUNDAMANI_COMEDY})

// Reducers 
export const comedyReducer = (state,actions) => {
  switch (actions.type) {
    case VADIVELU_COMEDY:
      return state = "Pongada Vennaigala"
    case GOUNDAMANI_COMEDY:
      return state = "Innoru valaipalam enga"
     default:
      return state = "Aaniye pudunga venam" 
    }
}

let store = configureStore({reducer:comedyReducer});
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(vadiveluComedyAction())
store.dispatch(goundamaniComedyAction())

ReactDOM.render(<h1>Namasthe Reactjs</h1>,document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//  Redux learning