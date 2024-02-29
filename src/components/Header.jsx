import React from "react";

import { Link, useLocation } from "react-router-dom";
import {Img}  from "./Img";
import { Text } from "./Text";
import { Button } from "./Button";



const Header = (props) => {
  const {pathname}= useLocation();
  const pathSegments = pathname.split('/');
  const path = pathSegments[pathSegments.length - 1];
  //console.log("current path is: ",path);

  
  return (
    <>
      <header className={props.className}>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 mb-16 items-center justify-center p-6 sm:px-5 w-full">
          <div className="header-row mt-0.5 mb-[5px]">
            <div className="flex flex-row gap-3.5 items-center justify-center">
              <Img className="h-6 w-6" src="images/img_edit.svg" alt="edit" />
             <Link to={"/"}>
              <Text
                  className="text-2xl md:text-[22px] text-gray-600 sm:text-xl uppercase"
                  size="txtNunitoSansExtraBold24"
                >
                  Blogsly
                </Text>
             </Link>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-start md:ml-[0] ml-[211px] w-[29%] md:w-full">
            <div className="flex flex-col items-start justify-start w-1/5 sm:w-full">
            <Link to={"/"}>
              <Text
                  className="text-indigo-900 text-lg tracking-[0.12px]"
                  size="txtPublicSansBold18Indigo900"
                >
                  Home
              </Text>
              {path === "" ? (<div className="bg-indigo-900 h-px mt-1 w-[64%]" ></div>):("")}
            </Link>
            </div>
            <Text
              className="text-indigo-200 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
            >
              Podcast
            </Text>
            <Link to={"/blogdetails"}>
              <Text
                className="ml-[29px] text-indigo-200 text-lg tracking-[0.12px]"
                size="txtPublicSansBold18"
              >
                Blog
              </Text>
              {path === "blogdetails" ? (<div className="bg-indigo-900 h-px mt-1 w-[64%]" ></div>):("")}
            </Link>
            <Link to={"/bloggerdetails"}>
              <Text
                className="ml-[30px] text-indigo-200 text-lg tracking-[0.12px]"
                size="txtPublicSansBold18"
              >
                About
              </Text>
              {path === "bloggerdetails" ? (<div className="bg-indigo-900 h-px mt-1 w-[64%]"></div>):("")}
            </Link>
            <Link to={"/contactus"}>
              <Text
                className="ml-[29px] text-indigo-200 text-lg tracking-[0.12px]"
                size="txtPublicSansBold18"
              >
                Contact
              </Text>
              {path === "contactus" ? (<div className="bg-indigo-900 h-px mt-1 w-[64%]" ></div>):("")}
            </Link>
          </div>
          <Link to={"/createblog"}>
            <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[140px] p-3 rounded-lg text-center"
                
                shape="round"
                color="indigo_900_67"
              >
                <div className="font-bold font-publicsans leading-[normal] sm:pl-5 text-left text-lg tracking-[0.12px]">
                  Create Blog ➕
                </div>
            </Button> 
          </Link>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
