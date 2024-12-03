import React from "react";
import insta from "../Assets/insta-line.svg";
import linkedin from "../Assets/linkedin-line.svg";
import bg from "../Assets/start-up-bg.png";

const ProfileCard = ({ img, width, name, role, linkedinLink, instaLink }) => {
  return (
    <div className="relative md:w-[270px] lg:w-[330px]  transition-all ease-in duration-150">
      {/* <img src={bg} alt="" width="300px" height="200px"/> */}
      <div className="group transition-transform transform hover:-translate-y-4">
        <img
          src={img}
          alt="member"
          className={
            "profileMemberCard" +
            `${width === "sm" ? "md:w-[270px] lg:w-[330px]" : ""} relative`
          }
        />

        <div className="hidden gap-1 customMedia absolute left-[100px] top-[30rem] lg:left-[130px] lg:top-[210px] group-hover:flex">
          {linkedinLink && (
            <a target="_blank" rel="noopener noreferrer" href={linkedinLink}>
              <img
                src={linkedin}
                alt="Linked"
                className="hover:cursor-pointer w-7"
              />
            </a>
          )}
          {instaLink && (
            <a href={instaLink} target="_blank" rel="noreferrer">
              <img
                src={insta}
                alt="Instagram"
                className="hover:cursor-pointer w-7"
              />
            </a>
          )}
        </div>
      </div>

      <div className="absolute lg-bottom-0 md md:bottom-[-60px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <p className="font-bold  text-lg xl:text-xl uppercase w-full">{name}</p>
        <p className="text-yellow-600 font-semibold text-lg capitalize">
          {role}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
