import { useEffect } from "react";
import "./App.css";
import { Avatar } from "./components/avatar/Avatar";
import { useAppDispatch } from "./hooks/reduxHooks";
import { getAllEmailThunk, getEmailThunk } from "./thunk/emailsThunk";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllEmailThunk());
    dispatch(getEmailThunk("3"));
  }, []);
  return (
    <div className="App">
      <Avatar avatarText = "avatar" />
    </div>
  );
}

export default App;
