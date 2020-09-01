import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Form from './Form';
import { fetchSmurf } from '../actions/actions';

const App = ({ smurfs, fetchSmurf }) => {

  useEffect(() => {
    fetchSmurf();
  }, [fetchSmurf]);

  return (
    <div className="App">
      <h1>All New SMURF Maker 200!</h1>
      <h3>Create your very own Smurfs!</h3>
      <Form />
      {smurfs.map(smurf =>
        <ul key={smurf.id}>
          <h3>Name: {smurf.name}</h3>
          <h4>Age: {smurf.age}</h4>
          <h4>Height: {smurf.height}</h4>
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

const mapDispatchToProps = { fetchSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(App);