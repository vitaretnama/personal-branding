import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const MediaGaleri = ({
  listArtikelOpini = [
    {
      image: "/assets/News/malang.jpeg",
      link: "https://bangsaonline.com/berita/119162/digelar-dua-hari-iki-malang-ker-suguhkan-berbagai-produk-umkm-kota-malang",
      text: "Digelar Dua Hari, 'Iki Malang Ker' Suguhkan Berbagai Produk UMKM Kota Malang",
    },
    {
      image: "/assets/News/jaranan.jpg",
      link: "https://www.gesuri.id/kerakyatan/semarakkan-bulan-bung-karno-andreas-geber-jaranan-di-115-desa-b2hRuZD1i/",
      text: "Semarakkan Bulan Bung Karno, Andreas Geber Jaranan di 115 Desa",
    },
    {
      image: "/assets/News/perkokoh.jpg",
      link: "https://www.gesuri.id/pemerintahan/andreas-ajak-perkokoh-persatuan-amp-kesatuan-bangsa-b2hPAZCYs",
      text: "Andreas Ajak Untuk Memperkokoh Persatuan & Kesatuan Bangsa!",
    },
    {
      image: "/assets/News/malang.jpeg",
      link: "https://malangposcomedia.id/meriahandreas-bangga-even-iki-malang-ker/",
      text: "Meriah, Andreas Bangga Atas Terselenggaranya Even “Iki Malang Ker !”",
    },
    {
      image: "/assets/News/andreas.jpeg",
      link: "https://getradius.id/news/87589-sam-aes-telinga-senayan-untuk-bhumi-arema",
      text: "Sam Aes: Telinga Senayan Untuk Bhumi Arema",
    },
    {
      image: "/assets/News/penyuluhan.jpg",
      link: "https://malangposcomedia.id/andreas-saatnya-ekonomi-syariah-menjadi-pendorong-pertumbuhan/",
      text: "Andreas: Saatnya, Ekonomi Syariah menjadi Pendorong Pertumbuhan",
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
        {listArtikelOpini.map((listTestimonis, index) => (
          <a key={index} href={listTestimonis.link} target="_blank">
            <div className="px-3 flex items-stretch" key={index}>
              <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-10 flex flex-col">
                <div className="flex flex-col w-full items-stretch xl:items-center ">
                  <div className="flex order-2 xl:order-1">
                    <Image
                      src={listTestimonis.image}
                      height={200}
                      width={300}
                      className="w-full"
                      alt="Berita"
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

export default MediaGaleri;
