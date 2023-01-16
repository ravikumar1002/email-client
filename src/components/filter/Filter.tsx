import {
  filterFavorite,
  filterReadEmail,
  filterUnreadEmail,
} from "../../features/emailSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { PillButton } from "../button/PillButton";
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
        <PillButton
          handleClick={() => {
            dispatch(filterUnreadEmail());
          }}
        >
          Unread
        </PillButton>
        <PillButton
          handleClick={() => {
            dispatch(filterReadEmail());
          }}
        >
          read
        </PillButton>
        <PillButton
          handleClick={() => {
            dispatch(filterFavorite());
          }}
        >
          Favorite
        </PillButton>
      </div>
    </div>
  );
};
