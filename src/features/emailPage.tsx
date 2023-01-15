import { EmailCard } from "../components/email-card/EmailCard";
import { useAppSelector } from "../hooks/reduxHooks";
import "./email-page.css"

export const EmailPage = () => {
  const { emails } = useAppSelector((state) => state.emailsList);

  return (
    <div>
      <div className="emails-container">
        {emails.length > 0 &&
          emails.map((email) => {
            return <EmailCard emailData={email} key={email.id} />;
          })}
      </div>

    </div>
  );
};
