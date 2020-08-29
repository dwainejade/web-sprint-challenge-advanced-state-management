import React, { useEffect } from "react";
import { useDispatch} from 'react-redux';
import { fetchSmurf } from '../actions/actions';
import Form from './Form';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSmurf())
  },[])

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <Form />
    </div>
  );
}

export default App;
