import { useEffect } from "react";
import { IEmailDto } from "../../dto/emailsDTO";
import { addEmailInFavorite, filterFavorite } from "../../features/emailSlice";
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
          <Button
            handleClick={() => {
              if (!emailSort.favorite.includes(id)) {
                dispatch(addEmailInFavorite(id));
                // dispatch(filterFavorite());
              }
            }}
          >
            Mark as favorite
          </Button>
        </div>
        <div
          style={{
            paddingRight: "1rem",
            lineHeight: "1.5rem",
          }}
        >
          <p
            style={{
              margin: "1rem 0rem",
            }}
          >
            {useDateFormat(date)}
          </p>
          <p dangerouslySetInnerHTML={{ __html: body }} className = "email-details__content"></p>
        </div>
      </div>
    </div>
  );
};
