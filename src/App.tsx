import { useEffect } from "react";
import "./App.css";
import { useAppDispatch } from "./hooks/reduxHooks";
import { getAllEmailThunk } from "./thunk/emailsThunk";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllEmailThunk());
  }, []);
  return <div className="App"></div>;
}

export default App;
