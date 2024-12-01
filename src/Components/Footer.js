import React from "react";
import logo from "../Assets/logo.svg";
import videoImg from "../Assets/team_group_photo.svg";
import phone from "../Assets/phone.svg";
import mail from "../Assets/mail.svg";
import location from "../Assets/location.svg";
import Links from "./Links";
import galgotiasLogo from "../Assets/galgotaisLogo.png";
import intro from '../Assets/Intro-video.mp4'

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center lg:justify-around gap-5 ">
        <div>
          <div className="flex items-center  gap-4 ">
            <img src={logo} alt="logo" className="w-[40px]" />
            <p className="text-lg font-bold w-[290px] text-left">
              The Enterpreneurship Cell, Galgotias University
            </p>
          </div>
          <div className="py-4 w-[300px] md:w-[371px]">
            <p className="md:text-left">
              Entrepreneurship Cell, Galgotias University strives to stimulate
              and encourage entrepreneurship and innovation, both within
              Entrepreneurship Cell and beyond.
            </p>
          </div>
          <div className="w-40 h-40 rounded-full">
            {/* <video
              autoPlay
              loop
              muted
              playsInline
              className=" w-20 h-20 absolute  rounded-full"
            >
              <source
                src={intro}
                type="video/mp4"
              />
            </video> */}
          </div>
        </div>
        <div className="flex gap-20 md:gap-20 flex-wrap justify-center md:justify-start">
          <div>
            <h3 className="text-left font-bold text-xl">Links</h3>
            <ul className="flex xs: flex-row md:flex-col items-start gap-4 text-lg mt-4">
              <a href="#Home">Home</a>
              <a href="#About">About</a>
              <a href="#Events">Events</a>
              <a href="#Team">Team</a>
            </ul>
          </div>
          <div>
            <h3 className="text-left font-bold text-xl">Contact</h3>
            <div className="flex flex-col gap-6 mt-4">
              <p className="flex gap-2 items-center">
                <img src={phone} alt="phone" className="w-[15px] mt-1" />
                8051163017, 7290089542
              </p>
              <p className="flex gap-2 items-center">
                <img src={mail} alt="phone" className="w-[15px] mt-1" />
                ecell@galgotiasuniversity.edu.in
              </p>
              <p className="flex gap-2 items-center text-left w-[200px]">
                <img src={location} alt="phone" className="w-[15px] mt-1" />
                Plot No.2, Sector 17-A Yamuna Expressway, Greater Noida, Gautam
                Buddh Nagar, Uttar Pradesh, India Opposite Buddh International
                Circuit.
              </p>
            </div>
            <div className="pl-5 md:hidden">
              <Links direction="row" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-4">
        <img src={galgotiasLogo} alt="Uni logo" />
      </div>
    </>
  );
};

export default Footer;
