import Link from "next/link";
import React, { useState } from "react";

export default function UserCard({ user }) {
  const [username, setUsername] = useState(user.username);
  const [fullName, setFullName] = useState(user.full_name);
  const [jumlahFollowers, setJumlahFollowers] = useState(user.jumlah_followers);
  const [jumlahFollowing, setJumlahFollowing] = useState(user.jumlah_following);
  const [jumlahPosts, setJumlahPosts] = useState(user.jumlah_posts);
  const [categoryName, setCategoryName] = useState(user.category_name);
  const [biography, setBiography] = useState(user.biography);
  const [photoProfile, setPhotoProfile] = useState(user.profile_picture);

  return (
    <div className="flex flex-col items-center max-w-3xl p-2 mx-2 text-gray-600 dark:text-gray-400 md:mx-auto md:flex-row sm:mx-0 sm:p-8">
      <div className="w-full md:w-2/5">
        <Link
          href={`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/token/${photoProfile}`}
          className="block"
          target="__blank"
          rel="noopener noreferrer"
        >
          <img
            className="mx-auto rounded-full w-28 md:w-36"
            src={`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/token/${photoProfile}`}
            loading="lazy"
          />
        </Link>
      </div>
      <div className="w-full mt-4 space-y-2 md:w-3/5 md:mt-0">
        <Link
          href={`https://www.instagram.com/${username}`}
          className="text-xl font-bold text-gray-800 dark:text-gray-200"
          target="__blank"
          rel="noopener noreferrer"
        >
          @{username}
        </Link>
        <ul className="flex items-center justify-between">
          <li>
            <span className="font-medium text-gray-800 dark:text-gray-200">
              {jumlahPosts}
            </span>{" "}
            posts
          </li>
          <li>
            <span className="font-medium text-gray-800 dark:text-gray-200">
              {jumlahFollowers}
            </span>{" "}
            followers
          </li>
          <li>
            <span className="font-medium text-gray-800 dark:text-gray-200">
              {jumlahFollowing}
            </span>{" "}
            following
          </li>
        </ul>
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
          {fullName}
        </h3>
        <p>{biography}</p>
      </div>
    </div>
  );
}
