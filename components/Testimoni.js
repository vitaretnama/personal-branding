import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Alfian Hidayat",
      image: "/assets/man.jpg",
      job: "Wiraswasta",
      testimoni:
        "Yang dibutuhkan kami adalah pemimpin yang jujur, dapat memahami persoalan rakyat secara mendalam dan dapat membantu pengusaha-pengusaha kecil seperti saya ini"
    },
    {
      name: "Irmanisa Ikhwani",
      image: "/assets/wanita.jpg",
      job: "Mahasiswa",
      testimoni:
        "Pemimpin yang baik menurut saya adalah pemimpin yang jujur, bertanggung jawab, memiliki pemikiran yang out of the box namun tetap dapat memecahkan masalah yang ada",
    },
    {
      name: "Rudi Usman",
      image: "/assets/man.jpg",
      job: "Karyawan Swasta",
      testimoni:
        "Pemimpin yang baik adalah pemimpin yang tindakannya sesuai dengan ucapannya. Mau turun ke bawah untuk melihat persoalan yang ada dan memperhatikan nasib pekerja",
    },
    {
      name: "Said Banawir",
      image: "/assets/man.jpg",
      job: "UMKM",
      testimoni:
        "Pemimpin itu jangan hanya membela yang berduit saja, tidak boleh membeda-bedakan antar kalangan masyarakat. Intinya pemimpin harus adil seadil-adilnya",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="flex">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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
          slidesToScroll: 1,
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
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.job}
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
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

export default Testimoni;
