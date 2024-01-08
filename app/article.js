"use client";

import AllMediaContainer from "@/components/allMediaContainer";
import FitureImageContainer from "@/components/fitureImageContainer";
import { useThemeContext } from "@/components/providers";

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
              src={"/img/card0.webp"}
              title={"Instagram Video Downloader"}
              description={`Nikmati kemudahan unduh video Instagram dengan ${process.env.NEXT_PUBLIC_APP_TITLE}. Aplikasi ini memungkinkan Anda backup dan simpan video tanpa batasan kecepatan. Dapatkan akses cepat untuk mendownload berbagai konten video Instagram favorit Anda. ${process.env.NEXT_PUBLIC_APP_TITLE} hadir sebagai solusi andal. Antarmuka yang sederhana memastikan pengelolaan koleksi video Instagram menjadi lebih efisien. Nikmati pengalaman terbaik dalam unduhan video dengan ${process.env.NEXT_PUBLIC_APP_TITLE}.`}
            />

            <FitureImageContainer
              revrese={true}
              src={"/img/card1.webp"}
              title={"Instagram Photo Downloader"}
              description={`Nikmati kenyamanan unduh koleksi foto kolase dari Instagram dengan ${process.env.NEXT_PUBLIC_APP_TITLE}. Aplikasi ini memberikan akses cepat dan handal untuk mendownload berbagai kolase foto Instagram tanpa batasan kecepatan. ${process.env.NEXT_PUBLIC_APP_TITLE} diciptakan untuk memenuhi kebutuhan Anda dalam pengelolaan dan penyimpanan foto kolase favorit Anda. Antarmuka yang sederhana dan efisien memastikan pengalaman pengguna yang optimal. Jelajahi ${process.env.NEXT_PUBLIC_APP_TITLE} sekarang!`}
            />

            <FitureImageContainer
              revrese={false}
              src={"/img/card2.webp"}
              title={"Instagram Reel Downloader"}
              description={`Dapatkan kemudahan backup konten Reel dari Instagram dengan ${process.env.NEXT_PUBLIC_APP_TITLE}. Aplikasi ini menyediakan solusi andal untuk mendownload banyak konten Reel Instagram tanpa batasan kecepatan. ${process.env.NEXT_PUBLIC_APP_TITLE} memastikan akses mudah dan cepat ke konten Reel yang ingin Anda simpan. Antarmuka yang ramah pengguna membuat pengelolaan konten Reel menjadi lebih sederhana. Gunakan ${process.env.NEXT_PUBLIC_APP_TITLE} dan nikmati pengalaman terbaik dalam backup konten Reel Instagram Anda!`}
            />

            <FitureImageContainer
              revrese={true}
              src={"/img/card4.webp"}
              title={"Instagram Stories Downloader"}
              description={`Backup konten Stories dari Instagram dengan ${process.env.NEXT_PUBLIC_APP_TITLE}. Aplikasi ini menyediakan cara andal untuk mendownload banyak konten Stories Instagram tanpa batasan kecepatan. ${process.env.NEXT_PUBLIC_APP_TITLE} diciptakan untuk mempermudah pengelolaan dan penyimpanan konten Stories favorit Anda. Antarmuka yang user-friendly memastikan pengalaman pengguna yang optimal. Jelajahi ${process.env.NEXT_PUBLIC_APP_TITLE} sekarang!`}
            />
          </div>
        </article>
      )}
    </>
  );
}
