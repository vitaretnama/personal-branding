import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const ArtikelOpini = ({
  listArtikelOpini = [
    {
      image: "/assets/UMKM.jpg",
      link: "https://www.gesuri.id/pemerintahan/andreas-tegaskan-umkm-miliki-peran-penting-bagi-perekonomian-tanah-air-b2hRvZD15",
      text:
        " Andreas Tegaskan UMKM Miliki Peran Penting Bagi Perekonomian Tanah Air",
    },
    {
      image: "/assets/milenial.jpg",
      link: "https://malangposcomedia.id/andreas-dorong-generasi-milenial-berani-berinvestasi/",
      text:
        "Andreas Mendorong Generasi Milenial Untuk Berani Dalam Berinvestasi",
    },
    {
      image: "/assets/inflasi.jpg",
      link: "https://www.tribunnews.com/bisnis/2022/08/02/anggota-komisi-xi-dpr-tpid-harus-bergotong-royong-perang-tekan-inflasi",
      text:
        "Andreas : TPID Harus Bergotong-royong Dalam Usaha Menekan Inflasi",
    },
    {
      image: "/assets/ciptakerja.jpg",
      link: "https://www.tribunnews.com/kilas-non-kementrian/2020/10/01/ruu-cipta-kerja-segera-disahkan-andreas-eddy-diharapkan-bisa-mendongkrak-umkm",
      text:
        "UU Cipta Kerja Segera Disahkan, Andreas Eddy: Diharapkan Bisa Mendongkrak UMKM",
    },
    {
      image: "/assets/pajakkarbon.jpg",
      link: "https://www.tribunnews.com/kilas-non-kementrian/2020/10/01/ruu-cipta-kerja-segera-disahkan-andreas-eddy-diharapkan-bisa-mendongkrak-umkm",
      text:
        "Andreas Soroti Rencana Pemberlakuan Kebijakan Pajak Karbon",
    },
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
          slidesToScroll: 2,
          speed: 7000,
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
        {listArtikelOpini.map((listTestimonis, index) => (
          <a
            key={index}
            href={listTestimonis.link}
          >
            <div className="px-3 flex items-stretch" key={index}>
              <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-10 flex flex-col">
                <div className="flex flex-col w-full items-stretch xl:items-center ">
                  <div className="flex order-2 xl:order-1">
                    <Image
                      src={listTestimonis.image}
                      height={200}
                      width={300}
                      className="w-full"
                      alt="Icon People"
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

export default ArtikelOpini;
