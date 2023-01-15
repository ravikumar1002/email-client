import { useEffect } from "react";
import "./App.css";
import { useAppDispatch } from "./hooks/reduxHooks";
import { getAllEmailThunk, getEmailThunk } from "./thunk/emailsThunk";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllEmailThunk());
    dispatch(getEmailThunk("3"));
  }, []);
  return <div className="App"></div>;
}

export default App;
