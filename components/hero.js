"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ToolSelector from "./toolSelector";
import {
  PiVideoLight,
  PiImageLight,
  PiPlayCircleLight,
  PiFilmSlateLight,
  PiArrowClockwiseFill,
} from "react-icons/pi";
import ToolInput from "./toolInput";
import { useThemeContext } from "./providers";

const toolsData = {
  single: [
    {
      title: "Instagram Video Downloader",
      description: "Masukan URL Instagram Video di Bawah ini",
      tools: "video",
      icon: <PiVideoLight className="text-xl" />,
    },
    {
      title: "Instagram Photo Downloader",
      description: "Masukan URL Instagram Photo di Bawah ini",
      tools: "photo",
      icon: <PiImageLight className="text-xl" />,
    },
    {
      title: "Instagram Reel Downloader",
      description: "Masukan URL Instagram Reel di Bawah ini",
      tools: "reel",
      icon: <PiFilmSlateLight className="text-xl" />,
    },
    {
      title: "Instagram Stories Downloader",
      description: "Masukan URL Instagram Stories di Bawah ini",
      tools: "stories",
      icon: <PiPlayCircleLight className="text-xl" />,
    },
  ],
  grabber: [
    {
      title: "Instagram Reels Grabber",
      description: "Masukan URL atau Username Instagram di Bawah ini",
      tools: "reels",
      icon: <PiVideoLight className="text-xl" />,
    },
    {
      title: "Instagram Posts Grabber",
      description: "Masukan URL atau Username Instagram di Bawah ini",
      tools: "posts",
      icon: <PiImageLight className="text-xl" />,
    },
    {
      title: "Instagram Stories Grabber",
      description: "Masukan URL atau Username Instagram di Bawah ini",
      tools: "stories",
      icon: <PiPlayCircleLight className="text-xl" />,
    },
  ],
};

export default function Hero() {
  const pathname = usePathname();
  const { data, handleDataChange } = useThemeContext();

  const [title, setTitle] = useState(
    pathname === "/" ? toolsData.single[0].title : toolsData.grabber[0].title
  );
  const [description, setDescription] = useState(
    pathname === "/"
      ? toolsData.single[0].description
      : toolsData.grabber[0].description
  );
  const [tools, setTools] = useState(
    pathname === "/" ? null : toolsData.grabber[0].tools
  );
  const [onResult, setOnResult] = useState(null);

  useEffect(() => {
    if (pathname === "/") {
      setTitle(toolsData.single[0].title);
      setDescription(toolsData.single[0].description);
    } else {
      setTitle(toolsData.grabber[0].title);
      setDescription(toolsData.grabber[0].description);
      setTools(toolsData.grabber[0].tools);
    }
  }, [pathname]);

  useEffect(() => {
    handleDataChange({
      tools: tools,
      result: onResult,
    });
  }, [tools, onResult]);

  if (pathname === "/" || pathname === "/grabber") {
    return (
      <>
        <div className="container p-4 mx-auto mt-2">
          <div className="flex items-center justify-center text-white">
            <div className="w-full max-w-xl">
              <ToolSelector
                pathname={pathname}
                toolsData={toolsData}
                onClick={(e) => {
                  setTitle(e.title);
                  setDescription(e.description);
                  setTools(e.tools);
                  setOnResult(null);
                }}
              />
              <div className="mt-4 space-y-2 text-center">
                <h1 className="text-2xl font-medium xs:text-3xl sm:text-4xl">
                  {title}
                </h1>
                <p className="text-xs font-light xs:text-sm sm:text-base">
                  {description}
                </p>
              </div>
              {data.result ? (
                <div className="relative flex flex-col items-center gap-2 mt-4 md:flex-row mb-14">
                  <button
                    aria-label="button download more"
                    onClick={() => {
                      setDescription(
                        pathname === "/"
                          ? toolsData.single[0].description
                          : toolsData.grabber[0].description
                      );
                      setOnResult(null);
                    }}
                    className="flex items-center justify-center w-full gap-2 px-2 py-2 text-sm text-white transition duration-300 bg-gray-500 rounded-md xs:text-base sm:text-lg md:px-4 hover:bg-gray-400 disabled:opacity-50"
                  >
                    <PiArrowClockwiseFill className="text-xl" />
                    Download More
                  </button>
                </div>
              ) : (
                <ToolInput
                  pathname={pathname}
                  tools={tools}
                  onResult={(e) => {
                    setDescription("Results");
                    setOnResult(e);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
