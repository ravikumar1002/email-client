import { Avatar } from "../avatar/Avatar";
import { PillButton } from "../button/PillButton";
import "./email-details_open.css";

export const EmailDetailsOpen = () => {
  return (
    <div className="email-details__open">
      <div>
        <Avatar avatarText={"1"} />
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
          <h2>Lorem, ipsum.</h2>
          <PillButton
            handleClick={() => {
              console.log("mark as fav");
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
            May 15
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            culpa, nulla laborum quidem voluptatibus nobis qui nam iusto dolorem
            odio eius beatae quibusdam odit non explicabo accusamus fugiat!
            Omnis nemo nihil praesentium nobis! Quas harum a ex aliquam. Nisi
            sed accusantium et ea libero maxime perspiciatis sequi nemo? Cum
            blanditiis reiciendis sed cumque praesentium sunt perspiciatis
            repellendus soluta suscipit obcaecati excepturi, a tempore inventore
            corrupti id, quasi temporibus nesciunt! Non reiciendis quod,
            voluptatem, eaque officiis ab quidem ipsum maxime magni et porro sit
            rem? Officia, eveniet tenetur. Voluptatem doloremque esse a iure!
            Tempore odio natus inventore animi iusto repudiandae vel
            repellendus, voluptatibus tenetur quaerat cum eius incidunt
            reiciendis! Saepe minima similique non tempore quaerat a
            exercitationem minus voluptate aspernatur, corporis porro explicabo
            eveniet quas qui sint fugit optio neque repellendus beatae nisi rem.
            Dolore veniam odio quidem ut facilis recusandae exercitationem
            excepturi amet enim minus! Excepturi accusamus suscipit aperiam quo
            dolorum, placeat minima voluptas, beatae quas ullam illum vero at
            autem assumenda non blanditiis saepe doloribus, voluptatum maxime
            maiores sit repellendus velit sapiente. Voluptatibus blanditiis
            tempore nobis laudantium illum! Ex deserunt, magni rem assumenda et,
            magnam adipisci quisquam temporibus saepe culpa debitis aspernatur
            aliquid, perspiciatis nesciunt laborum eum nam laudantium?
          </p>
        </div>
      </div>
    </div>
  );
};
