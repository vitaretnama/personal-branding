import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import LogoVPN from "../../public/assets/Logo.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            {/* <LogoVPN className="h-8 w-auto" /> */}
            <h5 className="text-xl">Andreas Eddy Susetyo</h5>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-maroon-500 animation-active "
                  : " text-black-500 hover:text-maroon-500 a")
              }
            >
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="program"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("program");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "feature"
                  ? " text-maroon-500 animation-active "
                  : " text-black-500 hover:text-maroon-500 ")
              }
            >
              Program Kerja
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="riwayat"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("riwayat");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-maroon-500 animation-active "
                  : " text-black-500 hover:text-maroon-500 ")
              }
            >
              Riwayat Hidup
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="artikel"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("artikel");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-maroon-500 animation-active "
                  : " text-black-500 hover:text-maroon-500 ")
              }
            >
              Artikel Opini
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-maroon-500 animation-active "
                  : " text-black-500 hover:text-maroon-500 ")
              }
            >
              Suara Massa
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="media"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("media");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "media"
                  ? " text-maroon-500 animation-active "
                  : " text-black-500 hover:text-maroon-500 ")
              }
            >
              Media Massa
            </LinkScroll>
          </ul>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-1 sm:px-8 shadow-t text-center">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="program"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("program");
              }}
              className={
                "mx-1 sm:mx-2 px-1 sm:px-2 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-maroon-500 text-maroon-500"
                  : " border-transparent ")
              }
            >
              {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg> */}
              <img className="w-6 h-6" src="/assets/Icon/paper-document-svgrepo-com.svg" />
              Program Kerja
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="riwayat"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("riwayat");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-maroon-500 text-maroon-500"
                  : " border-transparent ")
              }
            >
              {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg> */}
              <img className="w-6 h-6" src="/assets/Icon/curriculum-portfolio-svgrepo-com.svg" />
              Riwayat Hidup
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "pricing"
                  ? "  border-maroon-500 text-maroon-500"
                  : " border-transparent ")
              }
            >
              {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg> */}
              <img className="w-6 h-6" src="/assets/Icon/user-speak-rounded-svgrepo-com.svg" />
              Suara Massa
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="artikel"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("artikel");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimoni"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg> */}
              <img className="w-6 h-6" src="/assets/Icon/article-svgrepo-com.svg" />
              Artikel Opini
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="media"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("media");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "media"
                  ? "  border-maroon-500 text-maroon-500"
                  : " border-transparent ")
              }
            >
              {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg> */}
              <img className="w-6 h-6" src="/assets/Icon/newspaper-thin-svgrepo-com.svg" />
              Media Massa
            </LinkScroll>

          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
