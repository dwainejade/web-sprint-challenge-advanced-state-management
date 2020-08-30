import React, { useEffect } from 'react';
import { connect } from "react-redux";
// import axios from 'axios';
import Form from './Form';
import { addSmurf } from '../actions/actions'



const App = props => {

  useEffect(() => {
    addSmurf();
  }, []);

  // const [smurfs, setSmurfs] = useState([]);

  // const makeSmurf = () => {
  //   axios
  //     .get('http://localhost:3333/smurfs')
  //     .then(res => {
  //       setSmurfs(res.data);
  //       console.log("smurf-log", res.data)
  //     }).catch(err => {
  //     });
  // }



  return (
    <div className="App">
      <h1>SMURFS! Maker</h1>
      <Form />
      {props.smurfs.map(smurf =>
        <ul key={smurf.id}>
          <h3>Name: {smurf.name}</h3>
          <h3>Age: {smurf.age}</h3>
          <h3>Height: {smurf.height}</h3>
          <br />
        </ul>)}
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
  };
};

const mapDispatchToProps = { addSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(App);