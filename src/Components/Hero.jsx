import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>

      <div className="bg-primary py-10 lg:flex lg:items-center">
        <div className="flex justify-center space-y-20 flex-col items-center container h-screen mx-auto px-4 lg:justify-between lg:flex-row lg:px-7">
          <div className="flex flex-col space-y-5 w-full lg:w-1/2">
            <div className="space-y-1 flex flex-col">
              <p className="text-white text-sm leading-[35px] font-semibold lg:text-xl">
                Hello, I'm{" "}
              </p>

              <p className="text-white text-3xl font-semibold lg:text-5xl">
                Omokaro Jonathan Osagumwenro
              </p>
            </div>
            <p className="text-grey tracking-wide opacity-100 lg:text-xl">
  A passionate
  <span className="text-secondary"> Backend Web Developer </span>
  with 3 years of experience building robust, scalable, and efficient server-side applications.
</p>

            <div className="flex space-x-4 text-xl text-white lg:text-2xl">
              <Link to="https://www.linkedin.com/in/omokaro-jonathan-47a9b0344?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpsqlCvHPRtiwK3qIs2hAlQ%3D%3D" className="">
                <FaLinkedin className="" />
              </Link>
              <Link to="https://x.com/real_og_exchang?s=21" className="">
                <FaTwitter className="" />
              </Link>
              <button className="">
                <FaYoutube className="" />
              </button>
              <Link to="https://www.instagram.com/omokarojoenathan" className="">
                <FaInstagram className="" />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img className="mx-auto" src="/web.png" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
