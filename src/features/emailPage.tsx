import { useEffect, useState } from "react";
import { EmailCard } from "../components/email-card/EmailCard";
import { EmailDetailsOpen } from "../components/emailDetailsOpen/EmailDetailsOpen";
import { IEmailDto } from "../dto/emailsDTO";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getEmailThunk } from "../thunk/emailsThunk";
import "./email-page.css";
import {
  addEmailInRead,
  closeDetailEmail,
  filterUnreadEmail,
} from "./emailSlice";

export const EmailPage = () => {
  const dispatch = useAppDispatch();

  const { emails, filterEmails, emailData, emailSort, emailsStatus } =
    useAppSelector((state) => state.emailsList);
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

  const openEmailCardStyle = {
    width: "40%",
  };

  const closeEmailCardStyle = {
    width: "100%",
  };

  return (
    <main
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <div
        className="emails-container scrollbar"
        id="scrollbar-style"
        style={openEmailDetails ? openEmailCardStyle : closeEmailCardStyle}
      >
        {emailsStatus === "pending" && (
          <div className="spinner-box">
            <div className="three-quarter-spinner"></div>
          </div>
        )}

        {filterEmails.length > 0 &&
          filterEmails.map((email) => {
            return (
              <div
                key={email?.id}
                onClick={(e) => {
                  e.preventDefault();
                  if (!emailSort.read.includes(email?.id)) {
                    dispatch(addEmailInRead(email?.id));
                    const storageData = localStorage?.getItem("read")
                      ? // @ts-ignore
                        JSON.parse(localStorage?.getItem("read"))
                      : "";
                    const readLocalStorage = [...storageData, email?.id];
                    localStorage.setItem(
                      "read",
                      JSON.stringify(readLocalStorage)
                    );
                  }
                  if (email?.id == emailData.id) {
                    setOpenEmailDetails(false);
                    dispatch(closeDetailEmail());
                  } else {
                    setCurrentEmailData(email);
                    dispatch(getEmailThunk(email?.id));
                    setOpenEmailDetails(true);
                  }
                }}
                style={{
                  background: emailSort?.read.includes(email?.id)
                    ? "var(--bg-read)"
                    : "var(--bg-color)",
                  borderRadius: "10px",
                  cursor: "auto",
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
    </main>
  );
};
