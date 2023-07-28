import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Konten = ({
  listYoutube = [
    {
      image: "/assets/Thumbnail/YT-1.jpg",
      link: "https://www.youtube.com/watch?v=zuxM23vzVPY",
      text: "Desa Karangkates Hidup Damai Melalui Budaya | Bersama Sam Andreas",
    },
    {
      image: "/assets/Thumbnail/YT-2.jpg",
      link: "https://www.youtube.com/watch?v=xs4ou1pKw78&t=2s",
      text: "Desa Karangkates Rakyat Berdaya, Desa Sejahtera | Bersama Sam Andreas",
    },
    {
      image: "/assets/Thumbnail/YT-3.jpg",
      link: "https://www.youtube.com/watch?v=olqdQ3zAL24",
      text: "Desa Peniwen Harmonisasi Alam dan Budaya | Bersama Sam Andreas",
    },
    {
      image: "/assets/Thumbnail/YT-4.jpg",
      link: "https://www.youtube.com/watch?v=0P_LwIPT2bw&t=1s",
      text: "Porsi Bagi Hasil Cukai Tembakau Untuk Masyarakat |Telinga Senayan di Bhumi Arema Bersama Sam Andreas",
    },
    {
      image: "/assets/Thumbnail/YT-5.jpg",
      link: "https://www.youtube.com/watch?v=BeWMildppxQ&t=11s",
      text: "Ekonomi Syariah di Indonesia: Raksasa yang Masih Tertidur | Telinga Senayan di Bhumi Arema",
    },
    {
      image: "/assets/Thumbnail/YT-6.jpg",
      link: "https://www.youtube.com/watch?v=Skw9ORoSC0g",
      text: "Nawak Milenial Podcast | Menuju Senayan Pertama Kali : Sudah Diprediksi Sejak Umur 20-an",
    }
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listYoutube.map((listTestimonis, index) => (
          <a key={index} href={listTestimonis.link} target="_blank">
            <div className="px-3 flex items-stretch" key={index}>
              <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-10 flex flex-col">
                <div className="flex flex-col w-full items-stretch xl:items-center ">
                  <div className="flex order-2 xl:order-1">
                    <Image
                      src={listTestimonis.image}
                      height={200}
                      width={350}
                      className="w-full"
                      alt="Thumbnail"
                    />
                  </div>
                </div>
                <p className="mt-5 text-left">“{listTestimonis.text}”.</p>
              </div>
            </div>
          </a>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Konten;
