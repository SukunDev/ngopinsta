"use client";

import { useState } from "react";
import { PiSpinnerGapBold } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import axios from "axios";
import useUtils from "@/hooks/useUtils";
import { toast } from "react-toastify";

export default function ToolInput({ pathname, tools, onResult }) {
  const utils = useUtils();
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formData, setFormData] = useState({
    url: "",
  });

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitButton = async (e) => {
    e.preventDefault();
    setFormError(false);
    if (pathname === "/") {
      if (!utils.isUrl(formData.url)) {
        setFormError(true);
        return;
      }
      if (
        !formData.url.includes("/p/") &&
        !formData.url.includes("/reel/") &&
        !formData.url.includes("/stories/")
      ) {
        setFormError(true);
        return;
      }
      if (!formData.url.includes("instagram.com")) {
        setFormError(true);
        return;
      }
      try {
        setIsLoading(true);
        const headers = utils.createHeaders("/instagram");
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/instagram`,
          { target_url: formData.url },
          {
            headers: {
              ...headers,
            },
          }
        );
        onResult(res.data.result);
      } catch (error) {
        toast.error("Something wen't wrong");
      }
    } else {
      const username = utils.extractUsername(formData.url);
      if (username === "/p/" || username === "/reel/") {
        setFormError(true);
        return;
      }
      try {
        setIsLoading(true);
        const headers = utils.createHeaders(`/instagram/${username}/${tools}`);
        if (tools === "stories") {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/instagram/${username}/${tools}`,
            {
              headers: {
                ...headers,
              },
            }
          );
          onResult(res.data.result);
        } else {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/instagram/${username}/${tools}`,
            {},
            {
              headers: {
                ...headers,
              },
            }
          );
          onResult(res.data.result);
        }
      } catch (error) {
        toast.error("Something wen't wrong");
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      {!isLoading ? (
        <form
          onSubmit={submitButton}
          className="relative flex flex-col items-center gap-2 mt-4 md:flex-row mb-14"
        >
          {formError ? (
            <div className="absolute inset-x-0 lg:-top-20 md:-top-[5rem] sm:-top-20 -top-[6.5rem]">
              <div className="w-full px-4 py-2 bg-yellow-300 rounded-md">
                <button
                  aria-label="button close error message"
                  onClick={() => {
                    setFormError(false);
                  }}
                  className="absolute text-lg text-black transition duration-300 hover:text-gray-600 top-1 right-1"
                >
                  <GrFormClose />
                </button>
                <div className="absolute left-3 -bottom-4 w-0 h-0 border-l-[9px] border-l-transparent border-t-[16px] border-t-yellow-300 border-r-[9px] border-r-transparent"></div>
                <p className="text-gray-800">
                  {pathname === "/"
                    ? "The data you entered is not a link, please enter a valid link for example:"
                    : " Invalid Value, please enter a valid Value for example:"}{" "}
                  <span className="font-bold">
                    {pathname === "/"
                      ? "https://www.instagram.com/reel/CmI9qu-ISqx/"
                      : "https://instagram.com/sukundev/"}
                  </span>
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          <input
            onChange={handleInput}
            value={formData.url}
            type="text"
            name="url"
            className="w-full px-4 py-2.5 text-black bg-white rounded-md"
            placeholder={
              pathname === "/" ? "Paste URL Here" : "Paste Username Here"
            }
            required
          />
          <button
            type="submit"
            aria-label="Button Download"
            className="flex items-center justify-center w-full gap-2 px-4 py-2 text-lg font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-400 md:w-fit disabled:opacity-50"
            disabled={isLoading}
          >
            <MdOutlineFileDownload className="text-2xl" />
            Download
          </button>
        </form>
      ) : (
        <div className="mt-4 space-y-4 text-center">
          <PiSpinnerGapBold className="justify-center w-full text-6xl animate-spin" />
          <p>Mengambil data, harap tunggu beberapa detik</p>
        </div>
      )}
    </>
  );
}
