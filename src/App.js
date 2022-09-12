import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { connect, useDispatch, useSelector } from 'react-redux';
// import { vadiveluComedyAction, goundamaniComedyAction, subscribeChannel } from './index';

// function App() {
//   const comedies = useSelector(state => state);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <h1>Namasthe ReactJS learners</h1>
//       <p>The subscription status is {comedies.isSubscribed ? '"TRUE"' : '"FALSE"'}</p>
//       <img src={comedies.img}></img>
//       <button disabled={!comedies.isSubscribed} onClick={()=>dispatch(vadiveluComedyAction())}>Vadivelu</button> &nbsp;
//       <button disabled={!comedies.isSubscribed} onClick={()=>dispatch(goundamaniComedyAction())}>Goundamani</button> &nbsp;
//       <button onClick={()=>dispatch(subscribeChannel())}>{!comedies.isSubscribed ? "Subscribe" : "Unsubscribe"}</button>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Namasthe ReactJS learners</h1>
        <p>loading:{this.props.loading ? 'TRUE' : 'FALSE'}</p>
        <p>data:{JSON.stringify(this.props.data)}</p>
        <p>error:{this.props.error}</p>
        <button onClick={() => this.props.login()}>Login</button>
        {/* <p>The subscription status is {this.props.isSubscribed ? '"TRUE"' : '"FALSE"'}</p>
      <img src={this.props.img}></img>
      <button disabled={!this.props.isSubscribed} onClick={()=>this.props.vadiveluComedyAction()}>Vadivelu</button> &nbsp;
      <button disabled={!this.props.isSubscribed} onClick={()=>this.props.goundamaniComedyAction()}>Goundamani</button> &nbsp;
      <button onClick={()=>this.props.subscribeChannel()}>{!this.props.isSubscribed ? "Subscribe" : "Unsubscribe"}</button> */}
      </div>
    )
  }
}
const middleware = () => {
  return dispatch => {
    dispatch({ type: "LOGIN_START" });
    fetch('https://jsonplaceholder.typicode.com/todos/1') //Change the fake JSON API URL to throw error
      .then(response => response.json())
      .then(json => dispatch({type:"LOGIN_SUCCESS", payload:json}))
      .catch(err => dispatch({type:"LOGIN_FAILED", error:'ERROR'}))
  }
}

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(middleware())
    // vadiveluComedyAction : () => dispatch(vadiveluComedyAction()),
    // goundamaniComedyAction : () => dispatch(goundamaniComedyAction()),
    // subscribeChannel : () => dispatch(subscribeChannel())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
