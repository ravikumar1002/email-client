import { useState } from "react";
import { EmailCard } from "../components/email-card/EmailCard";
import { EmailDetailsOpen } from "../components/emailDetailsOpen/EmailDetailsOpen";
import { useAppSelector } from "../hooks/reduxHooks";
import "./email-page.css";

export const EmailPage = () => {
  const { emails, emailData } = useAppSelector((state) => state.emailsList);
  const [openEmailDetails, setOpenEmailDetails] = useState<boolean>(false);

  const openEmailCardStyle = {
    width: "40%",
    height: "100vh",
    overflow: "auto",
  };

  const closeEmailCardStyle = {
    width: "100%",
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        width: "100%",
      }}
    >
      <div
        className="emails-container"
        style={openEmailDetails ? openEmailCardStyle : closeEmailCardStyle}
      >
        {emails.length > 0 &&
          emails.map((email) => {
            return (
              <div
                key={email?.id}
                onClick={() => {
                  setOpenEmailDetails(true);
                }}
              >
                <EmailCard emailData={email} />
              </div>
            );
          })}
      </div>
      {openEmailDetails && (
        <div
          style={{
            width: "60%",
          }}
        >
          <EmailDetailsOpen />
        </div>
      )}
    </div>
  );
};
