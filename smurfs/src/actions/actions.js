import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";


export const fetchSmurf = (smurfs) => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then((res) => {
            console.log(res);
            dispatch({ type: "FETCH_SMURF_SUCCESS", payload: res.data });
        })
        .catch((err) => {
            console.error(err);
            dispatch({
                type: "FETCH_SMURF_ERROR",
                payload: "unable to fetch smurfs",
            });
        });
}

export const addSmurf = (smurfs) => dispatch => {
    console.log(`addSmurf() action: ${smurfs}`);
    dispatch({ type: "ADD_SMURF_START" });
    axios
        .post("http://localhost:3333/smurfs", smurfs)
        .then((res) => {
            console.log(res);
            dispatch({ type: "ADD_SMURF_SUCCESS", payload: res.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: "ADD_SMURF_ERROR",
                payload: "unable to add smurf",
            });
        });
}
