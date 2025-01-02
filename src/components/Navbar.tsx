"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState(``);
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentDateTime(
        now.toLocaleString("en-US", options) +
          "" +
          now.toLocaleTimeString("en-US", { hour12: false })
      );
    };
    updateDateTime();
    const interValId = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValId);
  }, []);

  return (
    <header className="text-gray-500 body-font font-family shadow-lg">
      <div className="bg-[#3B1C32]  py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <LuPhone className="text-[#FAB12F] text-lg" />
                <span className="text-sm sm:text-base text-white">
                  (225) 555-0118
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <TfiEmail className="text-[#FAB12F] text-lg" />
                <span className="text-sm sm:text-base text-white">
                  michelle.rivera@example.com
                </span>
              </div>
            </div>

            {/* Promo Text */}
            <div className="text-center text-sm sm:text-base order-first md:order-none text-[#FAB12F]">
              Follow Us and get more exciting updates
            </div>

            {/* DateTime */}
            <div className="text-sm sm:text-base text-white">
              <span>{currentDateTime}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-full bg-[#1A1A1D] flex flex-wrap p-6 flex-col md:flex-row items-center">
        <div className="flex justify-start items-center ">
          <Image
            src="/assets/logo (2).jpg"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full w-[25%] h-[25%]"
          />
          <h1 className="text-[40px] font-thin font-serif text-[#FAB12F] ml-4">
            Yummy<span className="Inline-flex px-1 font-bold">Hub:)</span>{" "}
          </h1>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-white text-xl justify-center space-x-8">
          <Link
            href="/"
            className="mr-5 relative after:content-[' '] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#FAB12F] after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-[#FAB12F] transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="mr-5 relative after:content-[' '] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#FAB12F] after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-[#FAB12F] transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/Blogs"
            className="mr-5 relative after:content-[' '] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#FAB12F] after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-[#FAB12F] transition-colors duration-300"
          >
            Blogs
          </Link>
          <Link
            href="/Contact"
            className="mr-5 relative after:content-[' '] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#FAB12F] after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-[#FAB12F] transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center text-end ml-auto">
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full font-bold text-white text-[30px]font-family">
            <FaFacebook className="mr-2 text-2xl hover:scale-125 hover:text-[#FAB12F] " />
            <Link href="#"></Link>
            <FaInstagram className="mr-2 text-2xl hover:scale-125 hover:text-[#FAB12F]" />
            <Link href=""></Link>
            <FaTwitter className="mr-2 text-2xl hover:scale-125 hover:text-[#FAB12F]" />
            <Link href=""></Link>
            <FaYoutube className="mr-2 text-2xl hover:scale-125 hover:text-[#FAB12F]" />
            <Link href=""></Link>
          </div>
        </div>
      </div>
    </header>
  );
}
