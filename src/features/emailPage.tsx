import { EmailCard } from "../components/email-card/EmailCard";
import { EmailDetailsOpen } from "../components/emailDetailsOpen/EmailDetailsOpen";
import { useAppSelector } from "../hooks/reduxHooks";
import "./email-page.css";

export const EmailPage = () => {
  const { emails, emailData } = useAppSelector((state) => state.emailsList);

  return (
    <div>
      <div className="emails-container">
        {emails.length > 0 &&
          emails.map((email) => {
            return <EmailCard emailData={email} key={email.id} />;
          })}
      </div>
      <div>
        <EmailDetailsOpen />
      </div>
    </div>
  );
};
