import "./avatar.css"

interface IAvatarProps {
  avatarText: string;
}

export const Avatar = (props: IAvatarProps) => {
  const { avatarText } = props;

  return (
    <>
      <span className="avatar-wrapper">
        <span className="avatar">{avatarText[0].toUpperCase()}</span>
      </span>
    </>
  );
};
