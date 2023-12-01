import "./App.css";
import LeftSideBarSection from "./LeftSideBarSection";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
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
      </div>
      <Footer />
    </>
  );
}

export default App;
