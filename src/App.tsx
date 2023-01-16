import { useEffect } from "react";
import "./App.css";
import { Avatar } from "./components/avatar/Avatar";
import { PillButton } from "./components/button/PillButton";
import { EmailCard } from "./components/email-card/EmailCard";
import { Filter } from "./components/filter/Filter";
import { EmailPage } from "./features/emailPage";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { useDateFormat } from "./hooks/useDateFormat";
import { getAllEmailThunk, getEmailThunk } from "./thunk/emailsThunk";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllEmailThunk());
    dispatch(getEmailThunk("3"));
  }, []);

  return (
    <div className="App">
      
      <Filter />
      <button onClick={() => {
        useDateFormat()
      }}>checkDate</button>
      <EmailPage />
    </div>
  );
}

export default App;
