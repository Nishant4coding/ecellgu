import React, { useEffect, useRef } from "react";
import mouseIcon from "../Assets/mouseIcon.svg";
import mouseLine from "../Assets/mouseLine.svg";
import heroImg from "../Assets/heroImg.png";
import Navbar from "../Components/Navbar";
import rocketPath from "../Assets/rocketPath.svg";
import rocket from "../Assets/rocket.svg";
import Footer from "../Components/Footer";
import Links from "../Components/Links";
import Event from "../Components/Event";
import pitch1 from "../Assets/Pitchme_1.jpg";
import pitch2 from "../Assets/Pitchme_2.jpg";
import pitch3 from "../Assets/Pitchme_3.jpg";
// import launchPadBg from "../Assets/launchPad-bg.png";
import startUpBg from "../Assets/start-up-bg.png";
// import ProfileCard from "../Components/ProfileCard";
// import memberTushar from "../Assets/member-1.png";
// import memberAnanya from "../Assets/member-2.png";
// import memberPriyanshu from "../Assets/member-0.png";
// import memberAthrav from "../Assets/member-3.png";
// import memberVishal from "../Assets/member-4.png";
// import memberShreyansh from "../Assets/member-5.png";
// import memberVansh from "../Assets/member-6.png";
// import menberRishabh from "../Assets/member-10.png";
// import memberSaksham from "../Assets/member-11.png";
// import memberAastha from "../Assets/aastha.png";
// import memberNishant from "../Assets/nishant.png";
// import memberAnshu from "../Assets/anshu.png";
// import memberAyush from "../Assets/ayush.png";
// import memberShivansh from "../Assets/shivansh.png";
// import memberAbhinna from "../Assets/abhinna.png";
// import memberAvanya from "../Assets/avanya.png";
// import dummy from "../Assets/blank.png";
// import Raj from "../Assets/rajsir.png";
// import Aradhana from "../Assets/member.png";
import { TypeAnimation } from "react-type-animation";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Button from "../Components/Button";
import { useState } from "react";
import EventR from "../Components/Event_R";
import DummyButton from "../Components/Dummy_Button";

const Home = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    
  
    const sectionRef = useRef();
    const [sectionVisible, setSectionVisible] = useState(false);
  
    useEffect(() => {
      function counter(id, start, end, duration, updateFunction) {
        let current = start;
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const step = Math.abs(Math.floor(duration / range));
  
        function updateCount() {
          if (current !== end) {
            current += increment;
            updateFunction(current);
            requestAnimationFrame(updateCount);
          }
        }
  
        updateCount();
      }
  
      if (sectionVisible) {
        counter("count1", 0, 100, 1000, setCount1);
        counter("count2", 0, 500, 1000, setCount2);
      }
    }, [sectionVisible]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setSectionVisible(true);
            }
          });
        },
        { threshold: 0.1 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, [sectionRef]);
  



  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 900) {
      setVisible(true);
    } else if (scrolled <= 900) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="overflow-hidden">
      {/*Section-1(HeroSection) Starting*/}
      <div
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div className="h-screen mt-40 transition-all ease-in-out delay-200">
          <div className="text-2xl ls:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            The
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
                " Entrepreneurship",
                1000,
                " Innovation",
                1000,
                " Startup",
                1000,
                " Idea",
                1000,
              ]}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
              // style={{ fontSize: '2em' }}
              cursor={false}
              className="text-[#f9c922] type"
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
            Cell
          </div>

          <div className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold mt-5 lg:mt-12 xl:mt-16">
            Galgotias University
          </div>

          <div className="hidden sm:flex flex-row-reverse max-w-full mt-5 ">
            <div className=" ontop fixed flex px-2 h-[50px] items-center justify-center">
              <div className="flex flex-col justify-between gap-y-6 items-center w-[50px]">
                <div className="right-[-6px] top-20 uppercase text-sm font-semibold origin-center rotate-[-90deg] tracking-wide w-[150px]">
                  social handles
                </div>
                <Links direction="flex-col" />
              </div>
            </div>
          </div>
          {/* <div className='sm:flex sm:items-start flex-row-reverse max-w-full mt-10 '>
                        <div className='ontop fixed flex px-8 h-[350px] items-center justify-center'>
                            <div className='flex flex-col justify-between gap-y-6 items-center w-[50px]'>
                                <div className='right-[-6px] top-60 uppercase text-sm font-semibold origin-center rotate-[-90deg] tracking-wide w-[150px]'>
                                    social handles
                                </div>
                                <Links direction="flex-col" />
                            </div>
                        </div>
                    </div> */}

          <div className="absolute bottom-16 sm:bottom-0 left-[50%] lg:top-[700px]">
            <div className="flex justify-center items-center">
              <img
                src={mouseIcon}
                alt="mouseIcon"
                className="h-6 sm:h-7 animate-bounce"
              />
              <img
                src={mouseLine}
                alt="mouseLine"
                className="absolute top-[-30px] h-24 sm:h-28 sm:top-[-80px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/*Section-1 Ending*/}

      {/*Section-2 (AboutUs) Starting*/}
      <div className="h-max  relative" id="About">
        <div className="uppercase text-3xl mt-16 font-semibold">
          <p>
            <span className="text-[#f9c922]">About</span> us
          </p>
        </div>
        <Fade left>
          <div className="hidden sm:flex absolute z[-1]">
            <img src={rocketPath} alt="path" className="w-44 xl:w-64" />
            <img
              src={rocket}
              alt="Rocket"
              className="w-8 mb-7 xl:mb-9 xl:w-10"
            />
          </div>
        </Fade>

        <div className="gradient-div w-[40%] h-[40%] rounded-full absolute top-[70%] sm:top-[30%]" />
        <div className="gradient-div w-[45%] h-[45%] rounded-full absolute top-16 right-0" />
        <div className="w-full sm:w-8/12 lg:w-3/4 mx-auto mt-20 sm:text-xl md:text-2xl ">
          <p className="text-center px-4 my-3 leading-7 md:leading-10">
            Entrepreneurship Cell, Galgotias University strives to stimulate and
            encourage entrepreneurship and innovation, both within
            Entrepreneurship Cell and beyond. We endeavour to help aspiring
            entrepreneurs overcome any hurdles they face and support them in any
            way possible, including by connecting them to mentors and investors
            and providing any other support they need. Apart from this, we
            attempt to enhance the culture of entrepreneurship and invention.
            From hosting talks with the leaders of various industries,
            conducting workshops to propagate skills related to entrepreneurship
            to organizing events and competitions that enable participants to
            showcase their skills, E-Cell aims to build a community of
            innovation and excellence.
          </p>
        </div>
        {visible && (
          <div className="hidden sm:flex flex-row-reverse px-8 mt-8">
            <Flip left>
              <div
                className="rocketIcon flex items-center justify-center fixed top-[650px] z-50 cursor-pointer "
                onClick={scrollToTop}
              >
                <img
                  src={rocket}
                  alt="Rokect"
                  className="origin-center rotate-[-55deg] w-8"
                />
              </div>
            </Flip>
          </div>
        )}
      </div>
      {/*Section-2 Ending*/}
      {/*Start-up community Section*/}
      <div className="h-max relative" id="Start-up">
        <div className="hidden xl:flex items-center justify-center ">
          <img src={startUpBg} alt="bg" />
        </div>
        <div className="top-20 flex flex-col justify-center items-center">
          <div className="uppercase text-3xl mt-16 font-semibold">
            <p>
              <span className="text-[#f9c922]">STARTUP</span> COMMUNITY
            </p>
          </div>
          <div className="w-[80%]  flex items-center justify-center flex-col mt-12">
            <div className="md:w-[80%] lg:w-[60%]">
              <span className="font-semibold text-2xl">AIM</span>
              <p className="text-lg my-5">
                To bring the Startups of Galgotias University under one
                community which will help in smooth networking of like-minded
                people. Ultimate aim to make the launchpad of Galgotias
                University successful. Planning Start-up events in the Galgotias
                University to boost an overall understanding of
                Entrepreneurship.
              </p>
            </div>
            <div className="md:w-[80%] lg:w-[60%] mt-8 md:mt-0 lg-mt-8">
              <span className="font-semibold text-2xl ">Community</span>
              <p className="text-lg my-5">
                Being part of an engaging community gives us a sense of
                belonging. It enables us to share personal relatedness and
                support the perpetual growth of each other, ourselves, and our
                environment.
                <br />
                <br />
                The Start-ups community will act as a catalyst in the process of
                planning and launching the start-ups from the university and
                also help in the overall growth of the university as well.
              </p>
            </div>

            <Button
              title={"JOIN STARTUP COMMUNITY"}
              link={"http://bit.ly/4fHyjXm"}
              hideOnSmall={false}
            />

            <div className="flex flex-row mt-20 gap-10 " ref={sectionRef}>
              <DummyButton
                title={`${count1}+ Startups`}
                link={"https://bit.ly/3CTTaWl"}
                radius="lg"
                hideOnSmall={false}
                
              />
              <DummyButton
                title={`${count2}+ Members`}
                link={"https://bit.ly/3CTTaWl"}
                radius="lg"
                hideOnSmall={false}
              />
            </div>
          </div>
        </div>
      </div>
      {/*Start-up community Section ending*/}

      {/*Section-3 (Events) starting*/}
      <div className=" relative mt-16 shadow-2xl" id="Events">
        <div className="uppercase text-3xl mt-16 font-semibold">
          <p>
            <span className="text-[#f9c922]">Our</span> Events
          </p>
          <p>
            <span className="text-[#f9c922]">2022</span> - 2023
          </p>
        </div>
        <div className="w-[90%] mx-auto md:my-36">
          <Event
            eventTitle="Pitch Me"
            eventDesc="Pitch Me is a series event of pitching competiton which occurs yearly. Industry investors come and judges the idea. Pitch Me was an annual entrepreneurial extravaganza where innovators had 10 minutes to pitch their game-changing ideas to industry investors and a panel of seasoned judges. This dynamic event combined high-stakes competition with invaluable networking opportunities, offering entrepreneurs the chance to secure investment, refine their concepts, and form lasting connections within the startup ecosystem. Joining us at Pitch Me meant witnessing the birth of the next big thing and being a part of the innovation revolution."
            imgOne={pitch1}
            imgTwo={pitch2}
            imgThree={pitch3}
            isOpp={false}
          />
        </div>
        <div className="w-[90%] mx-auto my-36">
          <EventR
            eventTitle="Launch Pad"
            eventDesc="Launchpad , an event that would spark innovation and creativity by bringing together founders, budding entrepreneurs, mentors, and industry leaders. It is going to be an official event series hosted by Entrepreneurship Cell, Galgotias University. It will be a 24-hour hackathon where people will get together to solve problems or create new ideas around a specific topic. There will be certain rules that everyone needs to follow while developing their product. There will also be a jury who will evaluate the final product.
                    North- India’s Biggest Student Start-up & Entrepreneurship Event of 2023, 2 Day event on campus."
            paraTwo="Launchpad, would start by a speaker session which would act as a fuel in the minds of the budding entrepreneurs. The Speaker would be a renowned founder from the start-up ecosystem."
            isOpp={false}
            // bgImg={launchPadBg}
            // extendDescWidth={true}
            // isCentered={true}
            link="https://www.ecellgu.in/launchpad"
            imgOne={pitch1}
            imgTwo={pitch2}
            imgThree={pitch3}
          />
        </div>
        <div className="w-[90%] mx-auto md:my-36">
          <Event
            eventTitle="100+ Startup Milestone"
            eventDesc="Our E-Cell community is thrilled to celebrate a significant milestone, as we proudly announce the inclusion of over 100 startups under our wings. This achievement is a testament to the dedication, innovation, and entrepreneurial spirit that permeates our community. Each of these startups represents a unique journey, a visionary idea, and the unwavering determination to transform those ideas into reality. We're excited to continue nurturing these startups, providing them with the support, resources, and guidance they need to thrive and make a lasting impact on the world. The future is bright, and our E-Cell community is at the forefront of shaping it."
            imgOne={pitch1}
            imgTwo={pitch2}
            imgThree={pitch3}
            isOpp={false}
          />
        </div>
        <div className="gradient-div md:w-[40rem] md:h-[40rem] rounded-full absolute top-[30%] sm:left-[10%] md:left-[20%] lg:left-[30%]" />
      </div>
      <div className=" relative mt-16 shadow-2xl" id="Events">
        <div className="uppercase text-3xl mt-16 font-semibold">
          <p>
            <span className="text-[#f9c922]">2023</span> - 2024
          </p>
        </div>
        <div className="w-[90%] mx-auto md:my-36">
          <Event
            eventTitle="Law meet AI"
            eventDesc="At the Entrepreneurship Cell, innovation and compliance are at the core of fostering successful startups. This dynamic event featured engaging discussions on how Artificial Intelligence is transforming legal frameworks and businesses. Dr. Rodney D. Ryder led an interactive workshop where participants learned about intellectual property rights, regulatory compliance, and AI-powered solutions in the legal domain. The event included live case studies, group discussions, and a Q&A session, leaving attendees with a robust understanding of legal strategies for startups."
            imgOne={pitch1}
            imgTwo={pitch2}
            imgThree={pitch3}
            isOpp={false}
          />
        </div>
        <div className="w-[90%] mx-auto my-36">
          <EventR
            eventTitle="E-talk 1"
            eventDesc="As part of the E-Talk series, this session combined inspiration and practical guidance. Yatinder Singh shared his remarkable journey of resilience, offering tips on overcoming personal and professional challenges. Fit Minds Singha delved into how mindfulness and mental fitness can enhance decision-making and productivity in entrepreneurship. Attendees actively participated in an engaging dialogue about balancing mental well-being with entrepreneurial demands. The event concluded with a fitness-oriented activity, leaving participants energized and motivated."
            isOpp={false}
            // bgImg={launchPadBg}
            // extendDescWidth={true}
            // isCentered={true}
            imgOne={pitch1}
            imgTwo={pitch2}
            imgThree={pitch3}
          />
        </div>
        <div className="w-[90%] mx-auto md:my-36">
          <Event
            eventTitle="EAD"
            eventDesc="EAD Noida 2023 was a flagship event that brought together some of India’s most successful entrepreneurs to inspire and mentor the next generation. The event featured keynote speeches, interactive sessions, and fireside chats covering a range of topics such as scaling businesses, navigating challenges, and embracing innovation. Attendees had the opportunity to network with leaders from companies like Info Edge, Kuku FM, Pesto Tech, Sirona Hygiene, and AstroTalk. The event concluded with an open forum where participants posed questions and received valuable advice, leaving with actionable insights and inspiration."
            imgOne={pitch1}
            imgTwo={pitch2}
            imgThree={pitch3}
            isOpp={false}
          />
        </div>
        <div className="w-[90%] mx-auto my-36">
          <EventR
            eventTitle="Meta AI certification program"
            eventDesc="This exclusive Meta Certification Program was a hands-on learning experience where participants explored the nuances of digital branding, marketing, and analytics. Led by industry experts, the program featured interactive workshops, live demonstrations, and personalized feedback sessions. Participants developed strategies for building a strong online presence, leveraging social media platforms, and driving engagement. The program concluded with a certification ceremony, equipping attendees with skills and credentials to excel in the competitive startup ecosystem."
            isOpp={false}
            // bgImg={launchPadBg}
            // extendDescWidth={true}
            // isCentered={true}
            imgOne={pitch1}
            imgTwo={pitch2}
            imgThree={pitch3}
          />
        </div>
        <div className="w-[90%] mx-auto md:my-36">
          <Event
            eventTitle="E-talk 2"
            eventDesc="This session explored the rapidly evolving world of fintech and its impact on global industries. Rahul Pal, a leading fintech expert, discussed blockchain innovations, digital payments, and financial inclusion strategies. Attendees participated in engaging discussions and case studies, gaining actionable insights into navigating the fintech ecosystem. The event’s highlight was a collaborative brainstorming session where participants pitched fintech-based solutions to real-world problems, fostering innovation and teamwork."
            imgOne={pitch1}
            imgTwo={pitch2}
            imgThree={pitch3}
            isOpp={false}
          />
        </div>
        <div className="w-[90%] mx-auto my-36">
          <EventR
            eventTitle="Pitch Me 2.0"
            eventDesc="Taking the momentum from the first edition, Pitch Me: Edition 2 was designed to elevate entrepreneurial skills. Participants worked on refining their business models, enhancing presentation strategies, and addressing real-world market challenges. The expert panel provided actionable critiques, helping participants create pitches that resonated with investors and stakeholders. This event marked a step forward in fostering innovation and building investor-ready startups, offering a competitive yet nurturing environment for aspiring founders.This edition introduced advanced frameworks for pitching and market strategy development, guided by the same expert panel of Mr. Khalid Wani, Ms. Bahu, Ms. Trina Das, and Dr. Vishal Gandhi. The event empowered participants to think critically, develop market-fit solutions, and pitch confidently, showcasing their potential to disrupt industries."
            isOpp={false}
            // bgImg={launchPadBg}
            // extendDescWidth={true}
            // isCentered={true}
            imgOne={pitch1}
            imgTwo={pitch2}
            imgThree={pitch3}
          />
        </div>
        <div className="gradient-div md:w-[40rem] md:h-[40rem] rounded-full absolute top-[30%] sm:left-[10%] md:left-[20%] lg:left-[30%]" />
      </div>
      {/*Section-3 Ending */}


      {/* Past Speaker Section */}

      <div className="h-max relative" id="Speakers">
       
            </div>








      {/*Section-4 (Our teams) starting*/}
      {/* <div className="w-screen pb-20 mb-40" id="Team">
        <div className="uppercase text-3xl mt-16 font-semibold">
          <p>
            Our <span className="text-[#f9c922]">Team</span>{" "}
          </p>
        </div>
        <div className="flex flex-col gap-y-24 mt-24 w-[80%] mx-auto">
          <div className="flex lg:flex-row flex-col gap-40 items-center justify-center mb-40">
            <div>
              <p className="text-md lg:text-xl text-[#f9c922] py-5">
                <i>Under the guidance of</i>
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-around items-center md:w-[60%] mx-auto">
                <Fade bottom>
                  <ProfileCard
                    img={Aradhana}
                    name={"Aradhana Galgotia"}
                    role={""}
                    linkedinLink={
                      "https://www.linkedin.com/company/entrepreneurship-cell-galgotias-university/"
                    }
                    instaLink={
                      "https://instagram.com/ecellgu"
                    }
                  />
                </Fade>
              </div>
            </div>

            <div>
              <p className="text-md lg:text-xl  text-[#f9c922] py-5">
                <i>Under the mentorship of</i>
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-around items-center md:w-[60%] mx-auto">
                <Fade bottom>
                  <ProfileCard
                    img={Raj}
                    name={"Raj Singh Bhati"}
                    role={""}
                    linkedinLink={
                      "https://www.linkedin.com/company/entrepreneurship-cell-galgotias-university/"
                    }
                    instaLink={
                      "https://instagram.com/ecellgu"
                    }
                  />
                </Fade>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:gap-4 gap-10  sm:flex-row justify-around items-center md:w-[60%] mx-auto mb-40">
            <Fade bottom>
              <ProfileCard
                img={memberVishal}
                name={"Vishal Diavisine"}
                role={"President"}
                linkedinLink={"https://www.linkedin.com/in/vishal-diavisine-40a97a232/"}
                instaLink={
                  "https://www.instagram.com/vishal.20_/?hl=en"
                }
              />
            </Fade>

            <Fade bottom>
              <ProfileCard
                img={memberSaksham}
                name={"Saksham Chawla"}
                role={"Vice President"}
                linkedinLink={
                  "https://www.linkedin.com/in/22sc/"
                }
                instaLink={
                  "https://www.instagram.com/variatebruh/?hl=en"
                }
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberAthrav}
                name={"Atharva Srivastava"}
                role={"Secretary"}
                linkedinLink={
                  "https://www.linkedin.com/in/atharva-srivastava-profile/"
                }
                instaLink={"https://www.instagram.com/atharvva_/?hl=en"}
              />
            </Fade>

            <Fade bottom>
              <ProfileCard
                img={memberVansh}
                name={"Vansh Taneja"}
                role={"Treasurer"}
                linkedinLink={"https://www.linkedin.com/in/vansh-taneja-0809381a0/"}
                instaLink={
                  "https://www.instagram.com/taneja.vansh/?hl=en"
                }
              />
            </Fade>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row justify-around items-center md:w-[90%] mx-auto ">
            <Fade bottom>
              <ProfileCard
                img={memberShivansh}
                name={"Shivansh Srivastava"}
                role={"Startup Development Head"}
                linkedinLink={
                  "https://www.linkedin.com/in/shivansh-srivastava-698405239/"
                }
                instaLink={"https://www.instagram.com/harsh.mnob/"}
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberNishant}
                name="Nishant Srivastava"
                role="Technical Head"
                linkedinLink={"https://www.linkedin.com/in/nishant-srivastava-/"}
                instaLink={"https://www.instagram.com/srivastava4nishant/"}
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberAvanya}
                name={"Avanya Tyagi"}
                role="Public Relations Head"
                linkedinLink={
                  "https://www.linkedin.com/in/avanyatyagi08/"
                }
                instaLink={
                  "https://www.instagram.com/avanyatyagiii/"
                }
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberAnshu}
                name={"Anshu Raj"}
                role="Digital Media & Promotions Head"
                linkedinLink={
                  "https://www.linkedin.com/in/anshu-raj2006/"
                }
                instaLink={
                  "https://www.instagram.com/anshraj_world/"
                }
              />
            </Fade>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-around items-center md:w-[90%] mx-auto">
            <Fade bottom>
              <ProfileCard
                img={memberAastha}
                name={"Aastha Bajaj"}
                role="Marketing Head"
                linkedinLink={"https://www.linkedin.com/in/aastha-bajaj-862a2225a/"}
                instaLink={"https://www.instagram.com/aastha_prerna/"}
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberAyush}
                name={"Ayush Gupta"}
                role={"Ambassador Head"}
                linkedinLink={
                  "https://www.linkedin.com/in/guptaayush8218/"
                }
                instaLink={"https://www.instagram.com/ayush__gupta_._/"}
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberAbhinna}
                name={"Abhinna Chaudhary"}
                role="Event Management Head"
                linkedinLink={"https://www.instagram.com/abhiinnaa/"}
                instaLink={"https://www.instagram.com/abhiinnaa/"}
              />
            </Fade>
          </div>
        </div>
      </div> */}
      {/*Section-4 Ending*/}
<div id="Contact">
      <Footer />
      </div>
    </div>
  );
};

export default Home;
