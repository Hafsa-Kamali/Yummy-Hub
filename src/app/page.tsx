import AuthorCard from "@/components/AuthorCard";
import MainHero from "@/components/MainHero";
import Mega from "@/components/Mega";
import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <MainHero/>
      <Mega/>
      <AuthorCard/>
  <Footer/>
    </div>
  );
}
