import { saveFilterType } from "../../features/appSlice";
import {
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
    <div className="filter__wrapper">
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
          variant={activeFilter === "Unread" ? "contained" : "outlined"}
          handleClick={() => {
            dispatch(saveFilterType("Unread"));
            dispatch(filterUnreadEmail());
          }}
        >
          Unread
        </Button>
        <Button
          variant={activeFilter === "read" ? "contained" : "outlined"}
          handleClick={() => {
            dispatch(saveFilterType("read"));
            dispatch(filterReadEmail());
          }}
        >
          read
        </Button>
        <Button
          variant={activeFilter === "Favorite" ? "contained" : "outlined"}
          handleClick={() => {
            dispatch(saveFilterType("Favorite"));
            dispatch(filterFavorite());
          }}
        >
          Favorite
        </Button>
      </div>
    </div>
  );
};
