import { PillButton } from "../button/PillButton";
import "./filter.css";
export const Filter = () => {
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
            console.log("click");
          }}
        >
          Unread
        </PillButton>
        <PillButton
          handleClick={() => {
            console.log("click");
          }}
        >
          read
        </PillButton>
        <PillButton
          handleClick={() => {
            console.log("click");
          }}
        >
          Favorite
        </PillButton>
      </div>
    </div>
  );
};
