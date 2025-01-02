"use client";
import AuthorCard from '@/components/AuthorCard';
import Navbar from '@/components/Navbar';
import React from 'react';
import Footer from '../Footer/page';

const AboutMe = () => {
  return (
    <>
    <Navbar/>
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/background.jpg')", backgroundColor: '#1A1A1D' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1D] via-[#3B1C32] to-[#6A1E55] opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 py-12 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#FAB12F]">About Yummy Hub:)</h2>
        <p className="text-lg md:text-xl mb-8">
          Welcome to <span className="text-[#FAB12F] font-bold">YummyHub:)</span>, your ultimate destination for all things delicious! Whether you’re a seasoned chef, a passionate foodie, or someone who just loves exploring new flavors, our blog is here to inspire your taste buds. 
        </p>
        <p className="text-lg md:text-xl mb-8">
          At YummyHub, we celebrate the art of cooking, savoring, and sharing mouthwatering recipes from around the world. Our mission is to bring joy to your kitchen and make every meal an unforgettable experience.
        </p>
        <p className="text-lg md:text-xl">
          From easy-to-follow recipes to culinary tips and tricks, YummyHub is more than just a blog—it’s a community of food lovers. Join us as we embark on this flavorful journey together.
        </p>

        {/* Call to Action */}
        <div className="mt-8">
          <a
            href="/Blogs"
            className="px-6 py-3 bg-[#FAB12F] text-[#1A1A1D] font-bold uppercase rounded-md hover:bg-white transition duration-300"
          >
            Explore Recipes
          </a>
        </div>
      </div>
    </div>
    
    <AuthorCard/>
    <Footer/>
    </>
  );
};

export default AboutMe;
