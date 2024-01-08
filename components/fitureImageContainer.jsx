import Image from "next/image";
import React from "react";

export default function FitureImageContainer({
  src,
  title,
  description,
  revrese,
}) {
  return (
    <div
      className={
        (revrese ? "lg:flex-row-reverse" : "lg:flex-row") +
        " flex flex-col items-start"
      }
    >
      <div className="w-full lg:w-2/5">
        <Image
          src={src}
          className="mx-auto"
          width={320}
          height={335}
          alt={title}
        />
      </div>
      <div className="w-full mt-4 lg:w-3/5 lg:mt-0">
        <h3 className="text-base font-medium text-gray-800 md:text-xl dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-4 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}
