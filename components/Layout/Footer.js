import React from "react";
import Link from "next/link";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-2 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <h1 className="text-2xl">Andreas Eddy Susetyo</h1>
          {/* <p className="mb-4">
            <strong className="font-medium">Radius</strong> is a private
            virtual network that has unique features and has high security.
          </p> */}
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <Link href="https://www.facebook.com/andreas.eddysusetyo">
              <a target="_blank" rel="noopener noreferrer">
                <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                  <Facebook className="h-6 w-6" />
                </div>
              </a>
            </Link>
            <Link href="https://twitter.com/andreassusetyo">
              <a target="_blank" rel="noopener noreferrer">
                <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                  <Twitter className="h-6 w-6" />
                </div>
              </a>
            </Link>
            <Link href="https://www.instagram.com/andreas.susetyo/">
              <a target="_blank" rel="noopener noreferrer">
                <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                  <Instagram className="h-6 w-6" />
                </div>
              </a>
            </Link>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} -{" "}
            <Link href="https://studione.getradius.id/">
              <a target="_blank" rel="noopener noreferrer">
                Radius Supermedia
              </a>
            </Link>
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Sam Andreas</p>
          <ul className="text-black-500 ">
            <li
              className="my-2 hover:text-orange-500 cursor-pointer transition-all"
              id="riwayat"
            >
              Riwayat Hidup
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Program
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">
            Berita dan Opini
          </p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Artikel Opini
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Suara Massa
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Media Massa
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
