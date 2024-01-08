"use client";

import AllMediaContainer from "@/components/allMediaContainer";
import FitureImageContainer from "@/components/fitureImageContainer";
import { useThemeContext } from "@/components/providers";
import React from "react";

export default function Article() {
  const { data } = useThemeContext();
  return (
    <>
      {data.result ? (
        <AllMediaContainer data={data.result} tools={data.tools} />
      ) : (
        <article className="font-light text-gray-500 dark:text-gray-200">
          <div className="text-center">
            <h2 className="text-2xl font-medium text-gray-800 capitalize md:text-3xl dark:text-gray-100">
              semua fitur dari {process.env.NEXT_PUBLIC_APP_TITLE}
            </h2>
            <p className="mt-4 text-sm md:text-base">
              {process.env.NEXT_PUBLIC_APP_TITLE} medukung semua type link
              instagram
            </p>
          </div>
          <div className="p-4 mx-2 mt-16 space-y-16 rounded-lg sm:mx-0 sm:p-8 dark:bg-white/5">
            <FitureImageContainer
              revrese={false}
              src={"/img/card2.webp"}
              title={"Instagram Reels Grabber"}
              description={`Nikmati kemudahan unduh semua konten Reels dari akun Instagram dengan ${process.env.NEXT_PUBLIC_APP_TITLE}. Aplikasi kami dilengkapi fitur canggih untuk mengelola dan membuat cadangan konten Reels Anda dengan sederhana dan efisien. Kami berkomitmen memberikan pengalaman pengguna optimal dengan kecepatan unduh tinggi dan antarmuka mudah digunakan. Tak perlu khawatir kehilangan konten berharga, ${process.env.NEXT_PUBLIC_APP_TITLE} hadir untuk melindungi konten Anda. Dapatkan aplikasi terbaik untuk memenuhi kebutuhan unduh konten Reels sekarang!`}
            />

            <FitureImageContainer
              revrese={true}
              src={"/img/card0.webp"}
              title={"Instagram Posts Grabber"}
              description={`Dapatkan semua konten Feeds dari akun Instagram dengan ${process.env.NEXT_PUBLIC_APP_TITLE}. Aplikasi kami memberikan akses mudah dan cepat ke semua unggahan di Feeds Anda. Dengan kemampuan unduh yang cepat dan handal, ${process.env.NEXT_PUBLIC_APP_TITLE} adalah solusi terbaik untuk membackup konten Feeds secara berkala. Kami memahami pentingnya menyimpan kenangan berharga Anda, itulah sebabnya kami menawarkan layanan dengan kualitas terbaik. Jelajahi aplikasi kami sekarang dan nikmati kemudahan mengelola konten Feeds Instagram Anda!`}
            />

            <FitureImageContainer
              revrese={false}
              src={"/img/card4.webp"}
              title={"Instagram Stories Grabber"}
              description={`Jelajahi semua konten Stories di Instagram dengan ${process.env.NEXT_PUBLIC_APP_TITLE}. Aplikasi kami memudahkan membuat cadangan konten Stories Anda. Kami menyediakan antarmuka intuitif dan fitur-fitur khusus untuk pengalaman pengguna optimal. ${process.env.NEXT_PUBLIC_APP_TITLE} hadir dengan kecepatan unduh luar biasa, memberikan akses cepat dan handal ke semua cerita yang ingin Anda simpan. Jangan biarkan momen berharga terlewat, gunakan ${process.env.NEXT_PUBLIC_APP_TITLE} sekarang dan rasakan kemudahan mengelola konten Stories Instagram Anda!`}
            />
          </div>
        </article>
      )}
    </>
  );
}
