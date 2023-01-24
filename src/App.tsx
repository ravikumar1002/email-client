import { useEffect } from "react";
import "./App.css";
import { Filter } from "./components/filter/Filter";
import { ALL } from "./constants";
import { saveFilterType } from "./features/appSlice";
import { EmailPage } from "./features/emailPage";
import { saveLocalStorageData } from "./features/emailSlice";
import { useAppDispatch } from "./hooks/reduxHooks";
import { getAllEmailThunk } from "./thunk/emailsThunk";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllEmailThunk());
    dispatch(saveFilterType(ALL));

    const getreadEmailFromLocalStorage = JSON.parse(
      //@ts-ignore
      localStorage.getItem("read")
    );
    const getFavoriteFromLocalStorage = JSON.parse(
      //@ts-ignore
      localStorage.getItem("favorite")
    );
    dispatch(
      saveLocalStorageData({
        read: getreadEmailFromLocalStorage,
        favorite: getFavoriteFromLocalStorage,
      })
    );
  }, []);

  return (
    <div className="App">
      <Filter />
      <EmailPage />
    </div>
  );
}

export default App;
