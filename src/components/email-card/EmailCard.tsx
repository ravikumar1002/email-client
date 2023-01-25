import "./email-card.css";

import { IEmailDto } from "../../dto/emailsDTO";
import { Avatar } from "../avatar/Avatar";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useDateFormat } from "../../hooks/useDateFormat";

interface IEmailCardProps {
  emailData: IEmailDto;
}

export const EmailCard = (props: IEmailCardProps) => {
  const {
    date,
    from: { email, name },
    id,
    short_description,
    subject,
  } = props.emailData;

  const {
    emailSort: { favorite },
    emailData,
  } = useAppSelector((state) => state.emailsList);

  return (
    <section
      className="email-card__wrapper"
      style={{
        border:
          emailData.id === id
            ? "2px solid Var(--accent)"
            : "2px solid var(--border-color)",
      }}
    >
      <div>
        <Avatar avatarText={name} />
      </div>
      <div className="email-card__content">
        <div>
          <p>
            From: <strong>{`${name} <${email}>`}</strong>
          </p>
          <p>
            Subject: <strong>{`${subject}`}</strong>
          </p>
        </div>
        <div>
          <p className="truncate">{short_description}</p>
          <p>
            <time dateTime={`${date}`}>{useDateFormat(date)}</time>
            {favorite && favorite.includes(id) && (
              <small
                style={{
                  color: "var(--accent)",
                  marginLeft: "1rem",
                  fontWeight: "bold"
                }}
              >
                Favorite
              </small>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};
