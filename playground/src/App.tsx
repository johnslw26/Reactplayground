import "./App.css";
import LeftSideBarSection from "./LeftSideBarSection";
import Header from "./Header";
import Footer from "./Footer";
import ListGroup from "./components/ListGroup";
import SimpleButton from "./components/SimpleButton";
import { useState } from "react";
import Accordion from "./components/Accordion";

function App() {
  const [isAlertActive, setAlertActivity] = useState(false);
  let items = ["New York", "San Francisco", "Pittsburgh", "Cleveland"];
  let names = [
    "Dave Argos",
    "Adam Montoya",
    "Bailey Seikler",
    "Darleen Fontana",
    "Tyler Ulders",
    "Blake Negala",
    "Richie Farmdale",
    "Lucas Johns",
    "Marie Johns",
    "Bart Simpson",
  ];
  return (
    <>
      <Header
        onAlertStatusChanged={() =>
          //This portion of code Lifts the state of the alert component to the App.tsx since the buttons we used and the header both share this as a common component.
          isAlertActive ? setAlertActivity(false) : setAlertActivity(true)
        }
        isAlertActive={isAlertActive}
      />
      <div id="flex-container">
        <div className="flex-item top-desc">
          <h2>A Warm Welcome</h2>
          <p>
            Welcome to Family Haven Hub, where we specialize in creating a
            unique and comforting space for families in the afterlife. At Family
            Haven Hub, we understand the importance of connection and continuity
            beyond this life, and our mission is to unite families in a haven
            that transcends the boundaries of time. Our platform serves as a
            bridge between the past and the afterlife, providing a digital
            sanctuary for families to come together, share memories, and
            strengthen the bonds that endure beyond physical existence. We
            believe in the power of technology to preserve legacies, allowing
            families to celebrate the lives of their loved ones in a meaningful
            and interactive way. Family Haven Hub offers a range of personalized
            features, from virtual memorial spaces to interactive family trees,
            ensuring that each family's experience is tailored to their unique
            story. Our commitment is to provide solace, support, and a sense of
            continuity, allowing families to cherish and honor their connections
            for generations to come. Join us at Family Haven Hub, where the
            spirit of family lives on, and memories become timeless legacies.
          </p>
        </div>
        <div className="flex-item left-col responsive-full-length">
          <p>
            Step into the future with VR – where reality meets the
            extraordinary! Elevate your experiences, from immersive gaming to
            mind-blowing entertainment. Don't just play, live the adventure! 🚀
            #VRRevolution #ImmerseNow
          </p>
          <SimpleButton
            backgroundColor="#3d3e3d"
            onClick={() => setAlertActivity(true)}
          >
            Show Alert
          </SimpleButton>
          <SimpleButton onClick={() => console.log("Click")}>
            Buy VR Now
          </SimpleButton>
          <ListGroup
            items={items}
            heading="Cities"
            onSelectItem={(item) => console.log(item)}
          />
        </div>
        <div className="flex-item right-col responsive-full-length">
          <ListGroup
            items={names}
            heading="People Names"
            onSelectItem={(item) => console.log(item)}
          />
        </div>
        <div className="flex-item">
          <LeftSideBarSection />
        </div>
        <div className="flex-item left-col responsive-full-length">
          <img className="specialImg" src="./public/minimalvr.jpg" />
        </div>
        <div className="flex-item right-col responsive-full-length">
          <h2>What Is VR?</h2>
          <p>
            Virtual Reality (VR) transforms the way we perceive and interact
            with digital environments, offering a truly immersive experience.
            Through specialized headsets and sensory technology, VR creates a
            simulated reality that engages multiple senses, transporting users
            to new worlds or augmenting their existing surroundings. From gaming
            and entertainment to education and healthcare, VR has applications
            across diverse industries. It enhances training simulations,
            facilitates virtual travel, and provides therapeutic interventions.
            As VR technology advances, it promises to redefine communication and
            collaboration, bringing people together in shared virtual spaces.
            The evolving landscape of VR holds immense potential, unlocking
            possibilities for innovation and connectivity in the digital age.
          </p>
          <LeftSideBarSection />
        </div>
        <div className="flex-item responsive-full-length">
          <h2>What can I do in VR?</h2>
          <Accordion accordionDescription="Discover the Virtual Frontier">
            <ul>
              <li>
                <b>Q: What is virtual reality (VR)?</b>
              </li>
              <li>
                A: VR is a groundbreaking technology that creates immersive,
                lifelike experiences in a computer-generated environment. It's a
                revolutionary way to interact with digital content.
              </li>
              <br />
              <li>
                <b>Q: What can I do with VR?</b>
              </li>
              <li>
                A: VR opens up a world of possibilities, from gaming adventures
                to virtual tourism. Dive into new experiences, explore alternate
                realities, and redefine your entertainment.
              </li>
            </ul>
          </Accordion>
          <Accordion accordionDescription="Immerse Yourself in Unseen Realms">
            <ul>
              <li>
                <b>Q: How does VR create immersion?</b>
              </li>
              <li>
                A: VR uses advanced technologies, such as motion tracking and
                realistic graphics, to trick your senses into believing you're
                in a different environment. It's a truly immersive, sensory
                experience.
              </li>
              <br />
              <li>
                <b>Q: Is VR only for gaming?</b>
              </li>
              <li>
                A: No, VR extends beyond gaming. It's a versatile tool for
                education, training simulations, virtual tourism, and more.
                Immerse yourself in a variety of applications tailored to your
                interests.
              </li>
            </ul>
          </Accordion>
          <Accordion accordionDescription="Revolutionize Your Entertainment">
            <ul>
              <li>
                <b>Q: Can I watch movies or attend concerts in VR?</b>
              </li>
              <li>
                A: Absolutely! VR enhances your entertainment by placing you in
                the center of the action. Enjoy movies in a virtual theater or
                attend live concerts from the comfort of your own space.
              </li>
              <br />
              <li>
                <b>
                  Q: How does VR change the way we experience entertainment?
                </b>
              </li>
              <li>
                A: VR adds a new dimension to entertainment, making it more
                interactive and engaging. It's not just watching – it's living
                the experience.
              </li>
            </ul>
          </Accordion>
          <Accordion accordionDescription="Connect and Conquer Together">
            <ul>
              <li>
                <b>Q: Can I interact with others in VR?</b>
              </li>
              <li>
                A: Yes! VR offers social experiences where you can connect with
                friends in virtual spaces. Engage in multiplayer games, explore
                together, and create shared memories in a way that transcends
                physical distances.
              </li>
              <br />
              <li>
                <b>Q: Is VR a solitary experience?</b>
              </li>
              <li>
                A: Not at all. VR fosters social connections, allowing you to
                interact with others in virtual environments. It's a
                collaborative and shared experience that brings people together.
              </li>
            </ul>
          </Accordion>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
