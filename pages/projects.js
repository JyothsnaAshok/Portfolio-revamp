import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Styles from "../styles/pages/Project.module.scss";

const projects = [
  //   {
  //     name: "Portfolio Revamp",
  //     description: "A portfolio website that I built for my portfolio.",
  //     link: "https://jyothsnaashok.github.io/portfolio-revamp/",
  //   },
  {
    name: "Svayam",
    description: "E-Commerce Platform for Self Help Groups",
    technologies: "Next.js, Node.js, IPFS",
    link: "https://svayam.vercel.app/",
  },
  {
    name: "Indusby",
    description: "B2B portal for listing Industrial waste",
    technologies: "Ionic, Firebase, React.js",
    link: "https://indusby.netlify.app/login",
  },
  {
    name: "SexEdify",
    description: "All things sex education",
    technologies: "React, Sass, GraphQL",
    link: "https://sexedify.co/",
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Jyothsna Ashok</title>
      </Head>
      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.heading}>Projects</div>
        <div className={Styles.projects}>
          {projects.map((project, index) => (
            <div className={Styles.project} key={index}>
              {project.name}{" "}
              <span style={{ color: "#607b96", fontSize: "0.8rem" }}>
                // {project.technologies}
              </span>
              <div className={Styles.projectCard}>
                <div className={Styles.projectImage}></div>
                <div className={Styles.projectTitle}>
                  {project.description}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={Styles.projectButton}>view-project</div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
