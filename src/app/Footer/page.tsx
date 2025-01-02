import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center py-12"
      style={{ backgroundImage: "url('/assets/background-card.jpg')", backgroundColor: '#1A1A1D' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1D] via-[#3B1C32] to-[#6A1E55] opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-[#FAB12F] mb-4">About YummyHub</h3>
            <p className="text-sm">
              YummyHub is your go-to destination for discovering mouthwatering recipes, cooking tips, and everything Link foodie loves. Join our community and bring joy to your kitchen!
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold text-[#FAB12F] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#FAB12F] transition">Home</Link>
              </li>
              <li>
                <Link href="/Blogs" className="hover:text-[#FAB12F] transition">Recipes</Link>
              </li>
              <li>
                <Link href="/About" className="hover:text-[#FAB12F] transition">About Us</Link>
              </li>
              <li>
                <Link href="/Contact" className="hover:text-[#FAB12F] transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-xl font-bold text-[#FAB12F] mb-4">Subscribe</h3>
            <p className="text-sm mb-4">
              Stay updated with the latest recipes and food inspiration. Subscribe to our newsletter!
            </p>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-transparent border border-[#FAB12F] text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#FAB12F]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#FAB12F] text-[#1A1A1D] font-bold uppercase rounded-md hover:bg-white transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-sm text-white">
          <p>
            &copy; {new Date().getFullYear()} YummyHub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
