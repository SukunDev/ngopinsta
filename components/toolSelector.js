import React, { useEffect, useState } from "react";

export default function ToolSelector({ pathname, toolsData, onClick }) {
  const [clicked, setClicked] = useState(pathname === "/" ? "video" : "reels");

  useEffect(() => {
    if (pathname === "/") {
      setClicked("video");
    } else {
      setClicked("reels");
    }
  }, [pathname]);

  return (
    <ul className="flex items-center justify-center text-xs font-light capitalize md:text-base">
      {pathname === "/"
        ? toolsData.single.map((item, idx, { length }) => (
            <li
              className={`flex items-center gap-1 px-2 py-2 transition duration-300 ${
                idx === 0 ? `rounded-l-lg` : ""
              }${
                length - 1 === idx ? `rounded-r-lg` : ""
              } cursor-pointer sm:px-4 xs:px-3 bg-white/20 ${
                item.tools === clicked ? `bg-white/30` : `hover:bg-white/25`
              }`}
              onClick={() => {
                onClick({
                  title: item.title,
                  description: item.description,
                  tools: null,
                });
                setClicked(item.tools);
              }}
              key={idx}
            >
              {item.icon}
              {item.tools}
            </li>
          ))
        : ""}
      {pathname === "/grabber"
        ? toolsData.grabber.map((item, idx, { length }) => (
            <li
              className={`flex items-center gap-1 px-2 py-2 transition duration-300 ${
                idx === 0 ? `rounded-l-lg` : ""
              }${
                length - 1 === idx ? `rounded-r-lg` : ""
              } cursor-pointer sm:px-4 xs:px-3 bg-white/20 ${
                item.tools === clicked ? `bg-white/30` : `hover:bg-white/25`
              }`}
              onClick={() => {
                onClick({
                  title: item.title,
                  description: item.description,
                  tools: item.tools,
                });
                setClicked(item.tools);
              }}
              key={idx}
            >
              {item.icon}
              {item.tools}
            </li>
          ))
        : ""}
    </ul>
  );
}
