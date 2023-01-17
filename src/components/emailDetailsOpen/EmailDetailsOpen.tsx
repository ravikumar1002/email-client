import { useEffect } from "react";
import { IEmailDto } from "../../dto/emailsDTO";
import {
  addEmailInFavorite,
  filterFavorite,
  removeFromFavorite,
} from "../../features/emailSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useDateFormat } from "../../hooks/useDateFormat";
import { Avatar } from "../avatar/Avatar";
import { Button } from "../button/Button";
import "./email-details_open.css";

interface IEmailDetailsOpenProps {
  emailDetails: IEmailDto;
}

export const EmailDetailsOpen = (props: IEmailDetailsOpenProps) => {
  const { emailSort, emailData } = useAppSelector((state) => state.emailsList);
  const { activeFilter } = useAppSelector((state) => state.appData);

  const dispatch = useAppDispatch();
  const {
    date,
    from: { email, name },
    short_description,
    subject,
  } = props.emailDetails;

  const { id, body } = emailData;

  useEffect(() => {}, []);

  return (
    <div className="email-details__open">
      <div>
        <Avatar avatarText={name} />
      </div>
      <div
        style={{
          flexGrow: "1",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2>{subject}</h2>
          {emailSort.favorite.includes(id) ? (
            <Button
              variant="contained"
              handleClick={() => {
                if (activeFilter === "Favorite") {
                  dispatch(removeFromFavorite(id));
                  dispatch(filterFavorite());
                } else {
                  dispatch(removeFromFavorite(id));
                }
              }}
            >
              Remove favorite
            </Button>
          ) : (
            <Button
              variant="outlined"
              handleClick={() => {
                if (activeFilter === "Favorite") {
                  dispatch(addEmailInFavorite(id));
                  dispatch(filterFavorite());
                } else {
                  dispatch(addEmailInFavorite(id));
                }
              }}
            >
              Mark as favorite
            </Button>
          )}
        </div>
        <div
          style={{
            paddingRight: "1rem",
            lineHeight: "1.5rem",
            paddingBottom: "1rem",
          }}
        >
          <p
            style={{
              margin: "1rem 0rem",
            }}
          >
            {useDateFormat(date)}
          </p>
          <p
            dangerouslySetInnerHTML={{ __html: body }}
            className="email-details__content"
          ></p>
        </div>
      </div>
    </div>
  );
};
