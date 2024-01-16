//Components Import
import Button from "../Components/Button";
import HeroSection from "../Components/HeroSection";
import IconBox from "../Components/IconBox";
import LineBarWithNumber from "../Components/LineBarWithNumber";
import NavBar from "../Components/NavBar";
import PortfolioCard from "../Components/PortfolioCard";
import ResumeBoxInfo from "../Components/ResumeBoxInfo";
import TitleWithBackground from "../Components/TitleWithBackground";
import ContactWay from "../Components/ContactWay";

//Custom Style Import
import "../Styles/custom.css";

//React Icons Import
import { IoBriefcaseOutline } from "react-icons/io5";
import { PiGraduationCapLight } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomePage() {
  const inputStyles =
    "p-4 bg-bgBox border border-borderColor rounded text-textGray";

  const socialIconFooterStyle =
    "border p-4 border-borderColor rounded-full hover:scale-110 transition";

  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <HeroSection />

        {/* About Me Section */}
        <section className="flex p-5 flex-col gap-3 items-center my-[80px]">
          <motion.div
            className="w-full"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            duration={{ duration: 0.5 }}
          >
            <TitleWithBackground title="About Me" color="#fec544" />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-5 my-5">
            <motion.img
              src="/src/assets/about.jpg"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-2 items-start p-3"
            >
              <h2 className="text-4xl text-white">
                Hi There! I am Farid Lotfi
              </h2>
              <p className="text-textYellow">Frontend Developer</p>
              <p className="text-textGray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                dicta consequuntur soluta expedita magnam provident sunt facere
                officia sequi veniam tempora laboriosam minus eaque ad omnis,
                obcaecati, aliquam quos iure.
              </p>
              <ul className="text-textGray flex flex-col gap-5 my-3">
                <li>Birthday : 1994</li>
                <li>Phone : 09195399423</li>
                <li>Email : 1994</li>
                <li>Birthday: 1994</li>
                <li>Birthday: 1994</li>
                <li>Birthday: 1994</li>
              </ul>
              <Button
                title="Hire Me"
                textColor="black"
                backColor="#fec544"
                borderRadius="25px"
                padding="10px 50px"
              />
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="flex p-5 flex-col gap-3 items-center my-[80px]">
          <motion.div
            className="w-full"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            duration={{ duration: 0.5 }}
          >
            <TitleWithBackground title="Services" color="#fec544" />
          </motion.div>

          <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-8 md:m-6">
            <motion.dev
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <IconBox
                title="Sketches"
                icon="/src/assets/icon1.png"
                desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium commodi earum quas porro eius ullam!"
              />
            </motion.dev>
            <motion.dev
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <IconBox
                title="UI/UX Design"
                icon="/src/assets/icon2.png"
                desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium commodi earum quas porro eius ullam!"
              />
            </motion.dev>

            <motion.dev
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <IconBox
                title="Product Design"
                icon="/src/assets/icon3.png"
                desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium commodi earum quas porro eius ullam!"
              />
            </motion.dev>
            <motion.dev
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <IconBox
                title="App Design"
                icon="/src/assets/icon4.png"
                desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium commodi earum quas porro eius ullam!"
              />
            </motion.dev>

            <motion.dev
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <IconBox
                title="Motion Graphics"
                icon="/src/assets/icon5.png"
                desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium commodi earum quas porro eius ullam!"
              />
            </motion.dev>

            <motion.dev
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <IconBox
                title="Responsive Design"
                icon="/src/assets/icon6.png"
                desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium commodi earum quas porro eius ullam!"
              />
            </motion.dev>
          </div>
        </section>
      </div>

      {/* Skills Section */}
      <section className="bg-thirdBgColor py-10">
        <motion.div
          className="w-full"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          duration={{ duration: 0.5 }}
        >
          <TitleWithBackground title="Skills" color="#fec544" />
        </motion.div>
        <div className="container mx-auto py-5">
          <div className="grid grid-cols-1 m-10 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col gap-5">
                <h2 className="text-white text-4xl flex flex-col gap-4">
                  All the skills that I have in that field of work are
                  mentioned.
                </h2>
                <p className="text-textGray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores. Stet clita kasd gubergren, no sea takimata
                  sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                  amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col gap-2 mb-5">
                <LineBarWithNumber title="HTML" percent="90%" />
                <LineBarWithNumber title="CSS" percent="80%" />
                <LineBarWithNumber title="JavaScript" percent="60%" />
                <LineBarWithNumber title="React" percent="40%" />
                <LineBarWithNumber title="Bootstrap" percent="50%" />
                <LineBarWithNumber title="Tailwind CSS" percent="80%" />
              </div>
            </motion.div>
          </div>

          {/* Resume Section */}
          <div className="my-16 p-5">
            <motion.div
              className="w-full"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              duration={{ duration: 0.5 }}
            >
              <TitleWithBackground title="Resume" color="#fec544" />
            </motion.div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 my-16">
              <div className="my-10">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex gap-3 items-center">
                    <IoBriefcaseOutline color="#393E4B" size="2rem" />
                    <h2 className="text-white text-3xl font-bold">Education</h2>
                  </div>{" "}
                </motion.div>

                <div className="flex flex-col gap-5 my-10 px-11 mx-4 border-l border-borderColor">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <ResumeBoxInfo
                      title="Master of Computer Science"
                      year="2015 - 2016"
                      location="University of XYZ"
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <ResumeBoxInfo
                      title="Bachelor of Computer Science"
                      year="2010 - 2014"
                      location="University of ABC"
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <ResumeBoxInfo
                      title="Diploma in Computer Science"
                      year="2006 - 2010"
                      location="XYZ Institution"
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
                    />
                  </motion.div>
                </div>
              </div>

              <div className="my-10">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex gap-3 items-center">
                    <PiGraduationCapLight color="#393E4B" size="2rem" />
                    <h2 className="text-white text-3xl font-bold">
                      Experience
                    </h2>
                  </div>{" "}
                </motion.div>

                <div className="flex flex-col gap-5 my-10 px-11 mx-4 border-l border-borderColor">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <ResumeBoxInfo
                      title="Senior UX/UI Designer"
                      year="Jan 2020 - Present"
                      location="Bergnaum, Hills and Howe"
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <ResumeBoxInfo
                      title="Product Designer"
                      year="Jan 2016 - December 2019"
                      location="Langosh, Sipes and Raynor"
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <ResumeBoxInfo
                      title="UI/UX Designer"
                      year="Jan 2014 - December 2015"
                      location="Strosin, Maggio and Homenick"
                      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="container p-5 mx-auto">
        <motion.div
          className="w-full"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          duration={{ duration: 0.5 }}
        >
          <TitleWithBackground title="Portfolio" color="#fec544" />
        </motion.div>
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 mx-6">
          <motion.dev
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <PortfolioCard
              title="Sketches"
              image="/src/assets/portfolio1.jpg"
              category="Web Design"
            />
          </motion.dev>

          <motion.dev
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <PortfolioCard
              title="UI/UX Design"
              image="/src/assets/portfolio2.jpg"
              category="Web Design"
            />
          </motion.dev>

          <motion.dev
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <PortfolioCard
              title="Product Design"
              image="/src/assets/portfolio3.jpg"
              category="Web Design"
            />
          </motion.dev>

          <motion.dev
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <PortfolioCard
              title="App Design"
              image="/src/assets/portfolio4.jpg"
              category="Web Design"
            />
          </motion.dev>
          <motion.dev
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <PortfolioCard
              title="Motion Graphics"
              image="/src/assets/portfolio5.jpg"
              category="Web Design"
            />
          </motion.dev>
          <motion.dev
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <PortfolioCard
              title="Responsive Design"
              image="/src/assets/portfolio6.jpg"
              category="Web Design"
            />
          </motion.dev>
        </div>
      </section>

      {/* Contact Me Section*/}
      <section className="container mx-auto my-16">
        <motion.div
          className="w-full"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          duration={{ duration: 0.5 }}
        >
          <TitleWithBackground title="Contact" color="#fec544" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form
              className="flex flex-col gap-6 p-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className="text-white text-3xl">Just say Hello</h2>
              <input
                type="text"
                placeholder="Your Name"
                className={inputStyles}
              />
              <input
                type="text"
                placeholder="Your Email"
                className={inputStyles}
              />
              <input
                type="text"
                placeholder="Your Subject"
                className={inputStyles}
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className={inputStyles}
              />
              <Button
                title="Send Message"
                textColor="black"
                backColor="#fec544"
                borderRadius="25px"
                padding="15px 50px"
              />
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex flex-col gap-2 p-5">
              <h2 className="text-white text-3xl">Contact Info</h2>
              <p className="text-textGray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ligula nulla tincidunt id faucibus sed suscipit feugiat.
              </p>

              <ContactWay
                title="Email"
                icon="/src/assets/envelope-paper.svg"
                firstInfo="soafery@gmail.com"
                secondInfo="soafery@gmail.com"
              />
              <ContactWay
                title="Phone"
                icon="/src/assets/envelope-paper.svg"
                firstInfo="0919 539 9423"
                secondInfo="0912 345 6789"
              />
              <ContactWay
                title="Address"
                icon="/src/assets/envelope-paper.svg"
                firstInfo="Iran, Kurdistan, Marivan"
                secondInfo="Ebdata Blvd"
              />
              <h2 className="text-textGray text-xl">
                Visite my social profile and get connected
              </h2>
              <div className="flex gap-5">
                <FaGithub
                  size="4rem"
                  color="#a9adb8"
                  className={socialIconFooterStyle}
                />
                <FaLinkedin
                  size="4rem"
                  color="#a9adb8"
                  className={socialIconFooterStyle}
                />
                <FaTelegramPlane
                  size="4rem"
                  color="#a9adb8"
                  className={socialIconFooterStyle}
                />
                <FaWhatsapp
                  size="4rem"
                  color="#a9adb8"
                  className={socialIconFooterStyle}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
