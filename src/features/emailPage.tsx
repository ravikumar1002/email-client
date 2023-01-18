import { useEffect, useState } from "react";
import { EmailCard } from "../components/email-card/EmailCard";
import { EmailDetailsOpen } from "../components/emailDetailsOpen/EmailDetailsOpen";
import { IEmailDto } from "../dto/emailsDTO";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useDateFormat } from "../hooks/useDateFormat";
import { getEmailThunk } from "../thunk/emailsThunk";
import "./email-page.css";
import { addEmailInRead, filterUnreadEmail } from "./emailSlice";

export const EmailPage = () => {
  const { emails, filterEmails, emailData, emailSort } = useAppSelector(
    (state) => state.emailsList
  );
  const [openEmailDetails, setOpenEmailDetails] = useState<boolean>(false);
  const [currentOpenEmailData, setCurrentEmailData] = useState<IEmailDto>({
    id: "",
    from: {
      email: "",
      name: "",
    },
    date: 0,
    subject: "",
    short_description: "",
  });

  const dispatch = useAppDispatch();

  const openEmailCardStyle = {
    width: "40%",
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
        className="emails-container scrollbar"
        id="scrollbar-style"
        style={openEmailDetails ? openEmailCardStyle : closeEmailCardStyle}
      >
        {filterEmails.length > 0 &&
          filterEmails.map((email) => {
            return (
              <div
                key={email?.id}
                onClick={(e) => {
                  e.preventDefault();
                  if (!emailSort.read.includes(email?.id)) {
                    dispatch(addEmailInRead(email?.id));
                  }
                  setCurrentEmailData(email);
                  dispatch(getEmailThunk(email?.id));
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
            width: " 60%",
            height: " calc(100vh - 5rem)",
            padding: "1rem",
          }}
          className="scrollbar"
          id="scrollbar-style"
        >
          <EmailDetailsOpen emailDetails={currentOpenEmailData} />
        </div>
      )}
    </div>
  );
};
