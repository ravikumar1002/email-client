// interface IEmailData {
//   date: number;
//   from: {
//     email: string;
//     name: string;
//   };
//   id: string;
//   short_description: string;
//   subject: string;
// }

import "./email-card.css";

import { IEmailDto } from "../../dto/emailsDTO";
import { Avatar } from "../avatar/Avatar";

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

  return (
    <section className="email-card__wrapper">
      <div>
        <Avatar avatarText={name} />
      </div>
      <div className="email-card__content">
        <div>
          <p>
            From: <strong>{`${name} ${email}`}</strong>
          </p>
          <p>
            Subject <strong>{`${subject}`}</strong>
          </p>
        </div>
        <div>
          <p>{short_description}</p>
          <p>
            <time dateTime={`${date}`}>May 15</time>
            <small
              style={{
                color: "red",
              }}
            >
              Favorite
            </small>
          </p>
        </div>
      </div>
    </section>
  );
};
