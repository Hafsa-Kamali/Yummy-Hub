import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/background.jpg"
          alt="Food background"
          className="object-cover w-full h-full brightness-50"
          layout="fill"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full bg-black/30">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            {/* Main Title */}
            <h1 className="text-4xl  md:text-6xl lg:text-7xl font-bold text-[#FAB12F] mb-4">
              Discover the Art of 
              <span className="block mt-2">Culinary Excellence</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Where every recipe tells a story and every dish becomes an adventure
            </p>

            {/* Description */}
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Join our community of food enthusiasts exploring flavors, sharing recipes, 
              and celebrating the joy of cooking from around the world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/Blogs">
              <button
              type='button'
              className="md:px-8 px-4 py-3 bg-[#FAB12F] text-[#3B1C32] font-semibold rounded-lg 
                               hover:bg-[#FAB12F]/90 transition-colors duration-300 
                               text-lg shadow-lg">
                              
                Explore Recipes
              </button>
              </Link>
              <Link href="/Contact"><button
               type='button'
              className="md:px-8 px-4 py-3 border-2 border-[#FAB12F] text-[#FAB12F] 
                               font-semibold rounded-lg hover:bg-[#FAB12F]/10 
                               transition-colors duration-300 text-lg">
                              
                Join Community
              </button>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                          animate-bounce hidden md:block">
              <div className="w-8 h-8 border-r-2 border-b-2 border-[#FAB12F] 
                            rotate-45 transform origin-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
