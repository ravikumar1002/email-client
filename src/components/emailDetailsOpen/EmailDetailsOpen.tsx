import { IEmailDto } from "../../dto/emailsDTO";
import { addEmailInFavorite } from "../../features/emailSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Avatar } from "../avatar/Avatar";
import { PillButton } from "../button/PillButton";
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
          <h2>{short_description}</h2>
          <PillButton
            handleClick={() => {
              console.log("mark as fav");
              if (!emailSort.favorite.includes(id)) {
                dispatch(addEmailInFavorite(id));
              }
            }}
          >
            Mark as favorite
          </PillButton>
        </div>
        <div>
          <p
            style={{
              margin: "1rem 0rem",
            }}
          >
            {date}
          </p>
          {body}
        </div>
      </div>
    </div>
  );
};
