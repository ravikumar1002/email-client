import {
  filterFavorite,
  filterReadEmail,
  filterUnreadEmail,
} from "../../features/emailSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { Button } from "../button/Button";
import "./filter.css";
export const Filter = () => {
  const dispatch = useAppDispatch();

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
          handleClick={() => {
            dispatch(filterUnreadEmail());
          }}
        >
          Unread
        </Button>
        <Button
          handleClick={() => {
            dispatch(filterReadEmail());
          }}
        >
          read
        </Button>
        <Button
          handleClick={() => {
            dispatch(filterFavorite());
          }}
        >
          Favorite
        </Button>
      </div>
    </div>
  );
};
