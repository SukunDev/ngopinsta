"use client";

import useUtils from "@/hooks/useUtils";
import React, { useState } from "react";
import UserCard from "./userCard";
import MediaContainer from "./mediaContainer";
import { PiArrowClockwiseLight, PiSpinnerGapBold } from "react-icons/pi";
import axios from "axios";
import { toast } from "react-toastify";

export default function AllMediaContainer({ data, tools }) {
  const utils = useUtils();
  const [user, setUser] = useState(data.user);
  const [allMedia, setAllMedia] = useState(data.items);
  const [moreAvailable, setMoreAvailable] = useState(
    data?.pagging_info?.more_available
  );
  const [maxId, setMaxId] = useState(data?.pagging_info?.max_id);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreButton = async () => {
    if (!moreAvailable) {
      return;
    }
    try {
      setIsLoading(true);
      const headers = utils.createHeaders(
        `/instagram/${user.username}/${tools}`
      );
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/instagram/${user.username}/${tools}`,
        {
          max_id: maxId,
        },
        {
          headers: {
            ...headers,
          },
        }
      );
      setMaxId(res.data.result.pagging_info.max_id);
      setMoreAvailable(res.data.result.pagging_info.more_available);
      const mergeData = utils.mergeItems(allMedia, res.data.result.items);
      setAllMedia(mergeData);
      setIsLoading(false);
    } catch (error) {
      toast.error("Something wen't wrong");
      setIsLoading(false);
    }
  };

  return (
    <>
      <UserCard user={user} />
      <div className="grid grid-cols-1 gap-2 mt-16 border-t-2 dark:border-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {allMedia.length > 0
          ? allMedia.map((items) =>
              items.product_type == "carousel_container" ? (
                items.carousel_media.map((carousel) => (
                  <MediaContainer
                    key={carousel.media.url}
                    username={user.username}
                    profilePicture={user.profile_picture}
                    media={carousel.media}
                  />
                ))
              ) : (
                <MediaContainer
                  key={items.media.url}
                  username={user.username}
                  profilePicture={user.profile_picture}
                  media={items.media}
                />
              )
            )
          : "Error"}
      </div>
      {tools ? (
        moreAvailable ? (
          isLoading ? (
            <div className="mt-4 space-y-4 text-center">
              <PiSpinnerGapBold className="justify-center w-full text-6xl animate-spin" />
              <p>Mengambil data, harap tunggu beberapa detik</p>
            </div>
          ) : (
            <button
              aria-label="button loadmore"
              className="flex items-center justify-center w-56 gap-2 px-4 py-2 mx-auto mt-8 text-lg text-white capitalize transition duration-300 bg-green-500 rounded-md hover:bg-green-400 disabled:opacity-50"
              onClick={loadMoreButton}
            >
              <PiArrowClockwiseLight className="text-2xl" />
              load more
            </button>
          )
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </>
  );
}
