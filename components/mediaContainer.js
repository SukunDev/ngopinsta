import Link from "next/link";
import React from "react";
import { PiImageThin, PiVideoThin } from "react-icons/pi";

export default function MediaContainer({ username, profilePicture, media }) {
  return (
    <div className="m-2 border-2 rounded-md dark:border-white/5 group dark:bg-white/5">
      <Link
        href={`https://instagram.com/${username}`}
        className="flex items-center gap-2 p-2 border-b-2"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="w-10 rounded-full"
          src={`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/token/${profilePicture}`}
          loading="lazy"
        />
        <p className="font-semibold text-gray-800 dark:text-gray-200">
          {username}
        </p>
      </Link>
      <div className="relative overflow-hidden">
        <div className="aspect-w-1 aspect-h-1">
          <img
            className="object-cover transition duration-300 group-hover:blur-sm group-hover:rotate-6 group-hover:scale-110"
            src={`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/token/${media.thumbnail}`}
            loading="lazy"
          />
        </div>
        <div className="absolute top-1 right-1">
          {media.type == "video" ? (
            <PiVideoThin className="text-3xl text-white" />
          ) : (
            <PiImageThin className="text-3xl text-white" />
          )}
        </div>
        <div className="absolute inset-x-2 bottom-2">
          <a
            href={`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/token/${media.url}`}
            className="block text-md text-center bg-blue-600 py-2 text-white font-medium rounded-md w-full shadow-[0px_10px_30px_20px_rgba(0,0,0,5)] capitalize hover:bg-blue-500 transition duration-300"
          >
            download {media.type}
          </a>
        </div>
      </div>
    </div>
  );
}
