import Link from "next/link";
import { arrow } from "../../public/icons";
import Image from "next/image";
const InfoBox = ({ text, link, btn_text }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link href={link} className="neo-brutalism-white neo-btn">
        {btn_text}
        <Image src={arrow} alt="text" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Bhavesh</span>
      <br />A Full Stack Developer from India
    </h1>
  ),
  2: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious about the impact?"
      link="/projects"
      btn_text="Visit my portfolio"
    />
  ),
  3: (
    <InfoBox
      text={
        "Need a project done or looking for a dev? I'm just a few keystrokes away."
      }
      link={"/about"}
      btn_text={"Learn more about me"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Need a project done or looking for a dev? <br/> I'm just a few keystrokes away."
      }
      link={"/contact"}
      btn_text={"Let's talk"}
    />
  ),
};

const Popup = ({ currentStage }) => {
  return currentStage in renderContent ? renderContent[currentStage] : null;
};

export default Popup;
