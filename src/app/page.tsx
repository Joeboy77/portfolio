"use client"
import Link from "next/link";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <main>
      {/* ---------header------------ */}
     <header className={`header flex justify-end items-center transition-opacity duration-300 ${isSidebarOpen ? "opacity-50" : "opacity-100"}`}>
        <div>
          <Link href={"#home"} className="logo ">
            Joseph
          </Link>
        </div>
        <nav className="navbar">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger className="tablet:hidden">
              <Menu className="menu-icon mr-4" />
            </SheetTrigger>
            <SheetContent className="pt-4 text-3xl">
              <br />
              <br />
              <br />
              <Link href={"#home"} onClick={closeSidebar}>
                Home
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#about"} onClick={closeSidebar}>
                About
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#education"} onClick={closeSidebar}>
                Project
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#skills"} onClick={closeSidebar}>
                Skills
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#contact"} onClick={closeSidebar}>
                Contact
              </Link>
              <br />
            </SheetContent>
          </Sheet>
          <ul className="hidden tablet:flex gap-x-8 text-[1.7rem]">
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#home"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#education"}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#skills"}
              >
                Skills
              </Link>{" "}
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/*-------------- home section-------------- */}

      <section className={` bg-cover bg-center transition-opacity duration-300 ${isSidebarOpen ? "opacity-50" : "opacity-100"}`} id="home">
        <div className="home-content">
          <h1>
            Hi, I'm<span> Joseph Acheampong</span>{" "}
          </h1>
          <div className="text-animated">
            <h3>Full Stack Mobile  and Web Engineer</h3>
          </div>
          <p>
            I'm a passionate Full Stack mobile and web engineer currently honing my skills at
            RnT Devs. On the front-end, I've mastered React.js and Tailwind CSS,
            creating responsive and dynamic web user interfaces also react native for mobile applications. As I continue my
            journey, I have dived deeper into back-end technologies for building
            comprehensive <span style={{color: 'green'}}>(MERN)</span>, full-stack applications. Stay tuned as I continue to
            expand my skill set and bring innovative ideas to life!
          </p>
        
          <div className="btn-box">
            <Link
              href={
                "https://www.linkedin.com/in/acheampong-joseph-32b969261"
              }
              className="btn" target="_blank"
            >
              Hire me
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/acheampong-joseph-32b969261"
              }
              className="btn" target="_blank"
            >
              Let's talk
            </Link>
          </div>
          <div className="flex-space-x-4 home-sci">
            <Link
              href="https://www.linkedin.com/in/acheampong-joseph-32b969261"
              target="_blank"
              rel="noopener noreferrer"
              className="bx-bx1-linkedin"
            >
              <LinkedInIcon className="icon" sx={{ fontSize: 25 }} />
            </Link>
            <Link
              href={"https://github.com/joeboy77"}
              target="_blank"
              className="bx-bx1-github"
            >
              <GitHubIcon className="icon" sx={{ fontSize: 25 }} />
            </Link>
            <Link
              href={"https://x.com/Acheampong98911"}
              target="_blank"
              className="bx-bx1-x"
            >
              <XIcon className="icon" sx={{ fontSize: 25 }} />
            </Link>
          </div>
        </div>

        <div className="home-imgHover"></div>
      </section>

      {/* --------------About Section------------- */}

      <section className="about" id="about">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
            
        <div className="about-image relative w-[25rem] h-[25rem] rounded-full flex justify-center items-center">
      <Image
        src="/me1.png" 
        alt="Profile Image"
        width={225}
        height={225}
        className="Image rounded-full border-[.2rem] border-[var(--main-color)]"
      />
      <span className="circle-spin absolute"></span>
    </div>

        <div className="about-content">
          <h2>Full Stack Engineer</h2>
          <p className="about-para">
            I'm a passionate Full Stack Mobile and Web Engineer currently honing my skills at
            RnT Devs. On the front-end, I've mastered React.js and Tailwind CSS,
            creating responsive and dynamic web user interfaces and react native for mobile applications. As I continue my
            journey, I dived deeper into back-end technologies to build
            comprehensive <span style={{color: 'green'}}>(MERN)</span>, full-stack applications. Stay tuned as I continue to
            expand my skill set and bring innovative ideas to life!
          </p>

          <div className="btn-box btns">
            <a href="#about" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* -----------------------project section--------------------------- */}

      <section className="education" id="education">
        <h2 className="heading">
          My <span>Projects </span>
        </h2>

        <div className="education-row">
          <div className="education-column">
            {/* <h3 className="title">Education</h3> */}

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>Business App</h3>
                  </div>
                  <p>
                    The Business App is a comprehensive and active mobile application built with react native and firebase (BaaS) where users can advertise their business, users can get services on the platform and more
                    <Link
                      href="https://github.com/Joeboy77/BusinessApp.git"
                      className="text-blue-500 hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>Tour App</h3>
                  </div>
                  <p>
                    A classic Tour mobile app. It allows users to expliot the numerous tourist attraction around their current location as well as the service they porvide.
                    <Link
                      href="https://github.com/Joeboy77/AppTour.git"
                      className="text-blue-500 
                      hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>ASCII_CONVERTOR</h3>
                  </div>
                  <p>
                  A site for converting words and letters to its ASCII equivalence. Built with HTML, CSS, and plain Javascript
                    <Link
                      href="https://github.com/Joeboy77/ASCII_Convertor.git"
                      className="text-blue-500 hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --------------2nd column----------- */}

          <div className="education-column">
            {/* <h3 className="title">Experience</h3> */}
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>HCI</h3>
                  </div>
                  <p>
                  This react native app helps you borrow and buy book directly from a library withou you going there to. Has section for users and admins. Admins can accept borrow requests, decline, send messages to the user if their borrow time is up. Books are divided into several sections and departments
                    <Link
                      href="https://github.com/Joeboy77/HCI_App.git"
                      className="text-blue-500 
                      hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>To-Do App</h3>
                  </div>
                  <p>
                  A simple to-do list application.
                  Users are prompted to enter tasks, which are added to a list. The program continues to ask for more tasks until the user confirms they are finished. Finally, the completed to-do list is displayed.
                    <Link
                      href="https://github.com/Joeboy77/Todo_App.git"
                      className="text-blue-500 
                       hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>Cloth_App</h3>
                  </div>
                  <p>
                  A mobile app where user can buy cloth categorized into women, men and children
                    <Link
                      href="https://github.com/Joeboy77/ClothApp.git"
                      className="text-blue-500 
                       hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------skill section--------------------------- */}
      <section className="skills" id="skills">
        <h2 className="heading">
          {" "}
          My <span>Skills</span>
        </h2>
            <h3 className="skill-title">Coding Skills</h3>

        <div className="skills-row">
          <div className="skills-column">

            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                    HTML <span>96%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    CSS <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Javascript <span>85%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    React Native <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                  <div className="bar">
                    <span></span>
                  </div>
              </div>
            </div>
          </div>

          {/* ----------------------For another Column--------------------------- */}

          <div className="skills-column">
            {/* <h3 className="title">Professional Skills</h3> */}
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                  React.JS <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Tailwind CSS <span>70%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Express <span>87%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                  Node Js <span>86%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                  <div className="bar">
                    <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <center></center>
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form action="#">
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Full Name" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Address" required />
              <span className="focus"></span>
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input type="string" placeholder="Mobile Number" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Subject" required />
              <span className="focus"></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Your Message"
              required
            ></textarea>
            <span className="focus"></span>
          </div>

          <div className="btn-box btns">
            <button type="submit"  className="btn">
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* --------------footer-------------- */}

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by Joseph | All Right Reserved.</p>
        </div>

        <div className="footer-iconTop">
          <Link href="/" className=" bg-cyan-500 bx-bx1-arrowUpWardIcon">
            <ArrowUpwardIcon className="icon" sx={{ fontSize: 25 }} />
          </Link>
        </div>
      </footer>
    </main>
  );
}
