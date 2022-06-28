import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Styles from "../styles/pages/About.module.scss";
import CodeAnimation from "../components/animation";
import { FiChevronRight } from "react-icons/fi";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Jyothsna Ashok</title>
      </Head>
      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.heading}>About Me</div>

        <div className={Styles.aboutText}>
          I like to learn new tools and technologies and experiment with them. I
          am a keen observer and a quick learner, and pick up anything that
          piques my attention. My interests predominantly lie in Full-stack
          development and Designing, actively working on Full Stack development
          projects for Web and mobile. I am also constantly reading, learning,
          and upskilling myself about fintech, blockchain, web3, and the latest
          technologies.
        </div>

        <div className={Styles.heading}>Work Experience</div>
      </div>
      <Footer />
    </>
  );
}
