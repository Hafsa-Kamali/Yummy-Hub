import React from "react";
import Image from "next/image";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
  };
  isDarkBackground: boolean;
}


export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <div
      className={`relative group w-[90%] h-full rounded-xl overflow-hidden  transition-transform duration-500
        hover:-translate-y-3 hover:shadow-lg border-2 border-[#FAB12F] hover:shadow-[#FAB12F]
        ${isDarkBackground ? "bg-[#740938]" : "bg-[#3B1C32]"}
      `}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-80 z-20
            ${isDarkBackground
              ? "bg-gradient-to-b from-transparent via-[#3B1C32]/70 to-[#1A1A1D]"
              : "bg-gradient-to-b from-transparent via-[#6A1E55]/70 to-[#3B1C32]"}
          `}
        />
      </div>

      {/* Content Section */}
      <div className="relative z-20 px-6 pt-6 pb-8">
        {/* Title */}
        <h2
          className={` text-2xl font-bold text-center mb-4 transition-transform duration-300 group-hover:scale-110 mt-2
            ${isDarkBackground ? "text-white" : "text-[#FAB12F]"}
          `}
        >
          {post.title}
        </h2>

        {/* Description */}
        <p
          className={`text-center mb-6 text-sm transition-opacity duration-500 group-hover:opacity-90
            ${isDarkBackground ? "text-white/80" : "text-white/90"}
          `}
        >
          {post.description}
        </p>

        {/* Metadata */}
        <div className="flex flex-col items-center space-y-4">
          <p
            className={`text-sm transition-opacity duration-500
              ${isDarkBackground ? "text-white/60 group-hover:text-white/80" : "text-white/70 group-hover:text-white/90"}
            `}
          >
            Published on: {new Date(post.date).toLocaleDateString()}
          </p>

         

          {/* Call-to-Action Button */}
          <a
            href={`/posts/${post.id}`}
            className={`relative px-8 py-3 font-medium rounded-md overflow-hidden group transition-all duration-300
              transform hover:scale-105 active:scale-95 border-2
              ${isDarkBackground
                ? "border-white hover:border-[#6A1E55] text-white hover:text-[#3B1C32] font-semibold hover:shadow-[#FAB12F] shadow-md "
                :"border-white  text-white hover:shadow-white/80 shadow-md font-semibold" }
            `}
          >
            {/* Button Animation Layer */}
            <span
              className={`absolute inset-0 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0
                ${isDarkBackground ? "bg-[#FAB12F] ": "bg-[#740937c9]"}
              `}
            />
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent"
            />
            <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
              Read More
            </span>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className={`absolute top-0 right-0 w-20 h-20 rounded-full transform translate-x-10 -translate-y-10 opacity-50 group-hover:opacity-100 transition-all duration-500
          ${isDarkBackground ? "bg-[#6A1E55]/80" : "bg-[#FAB12F]/80"}
        `}
      />

      <div
        className={`absolute bottom-0 left-0 w-16 h-16 transform translate-y-8 -translate-x-8 rotate-45 opacity-0 group-hover:opacity-50 transition-all duration-500
          ${isDarkBackground ? "bg-gradient-to-tr from-[#FAB12F]/90 to-transparent" : "bg-gradient-to-tr from-[#A64D79]/90 to-transparent"}
        `}
      />

      {/* Hover Accent Lines */}
      <div
        className={`absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-500 group-hover:border-[rgba(250,177,47,0.5)]`}
      />
    </div>
  );
}

