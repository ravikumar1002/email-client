import { ALL, FAVORITE, READ, UNREAD } from "../../constants";
import { saveFilterType } from "../../features/appSlice";
import {
  allEmails,
  filterFavorite,
  filterReadEmail,
  filterUnreadEmail,
} from "../../features/emailSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Button } from "../button/Button";
import "./filter.css";

export const Filter = () => {
  const dispatch = useAppDispatch();
  const { activeFilter } = useAppSelector((state) => state.appData);

  return (
    <header className="filter__wrapper">
      <div>
        <p>Filter By: </p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <Button
          variant={activeFilter === ALL ? "contained" : "transparent"}
          handleClick={() => {
            dispatch(saveFilterType(ALL));
            dispatch(allEmails());
          }}
        >
          {ALL}
        </Button>

        <Button
          variant={activeFilter === UNREAD ? "contained" : "transparent"}
          handleClick={() => {
            dispatch(saveFilterType(UNREAD));
            dispatch(filterUnreadEmail());
          }}
        >
          {UNREAD}
        </Button>
        <Button
          variant={activeFilter === READ ? "contained" : "transparent"}
          handleClick={() => {
            dispatch(saveFilterType(READ));
            dispatch(filterReadEmail());
          }}
        >
          {READ}
        </Button>
        <Button
          variant={activeFilter === FAVORITE ? "contained" : "transparent"}
          handleClick={() => {
            dispatch(saveFilterType(FAVORITE));
            dispatch(filterFavorite());
          }}
        >
          {FAVORITE}
        </Button>
      </div>
    </header>
  );
};
