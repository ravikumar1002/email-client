import { useEffect } from "react";
import "./App.css";
import { Filter } from "./components/filter/Filter";
import { EmailPage } from "./features/emailPage";
import { useAppDispatch } from "./hooks/reduxHooks";
import { getAllEmailThunk } from "./thunk/emailsThunk";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllEmailThunk());
  }, []);

  return (
    <div className="App">
      <Filter />
      <EmailPage />
    </div>
  );
}

export default App;
