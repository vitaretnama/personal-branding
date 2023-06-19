import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ArtikelOpini from "./ArtikelOpini";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="riwayat"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              <span className="text-maroon-500">Riwayat</span> Sam Andreas
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Sepak Terjang Sam Andreas
            </motion.p>
          </ScrollAnimationWrapper>

          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/backgroundandreas.jpg"
                    width={400}
                    height={300}
                    alt="Free Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Fungsi Legislatif
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Mengusulkan UU Pengampunan Pajak untuk masuk dalam prolegnas
                    2015
                  </li>
                  <li className="relative check custom-list my-2">
                    Mengusulkan Undang-undang Pencegahaan dan Penanganan Krisis
                    Sistem Keuangan (PPKSK)
                  </li>
                  <li className="relative check custom-list my-2">
                    Menjadi Ketua Panitia Khusus (Pansus) Rancangan
                    Undang-Undang (RUU) Kewirausahaan Nasional
                  </li>
                  <li className="relative check custom-list my-2">
                    Menjadi Timmus (Tim Perumus) UU Cipta Kerja
                  </li>
                </ul>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/ciptakerja.jpg"
                    width={400}
                    height={300}
                    alt="Standard Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Fungsi Anggaran
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Membahas Anggaran untuk kebijakan pembiayaan Ibu Kota
                    Nusantara (IKN)
                  </li>
                  <li className="relative check custom-list my-2">
                    Mengusulkan adanya pelebaran defisit anggaran dari batas
                    maksimal saat ini sebesar tiga persen terhadap PDB, untuk
                    memperluas ruang gerak fiskal pemerintah
                  </li>
                  <li className="relative check custom-list my-2">
                    Turut memberikan persetujuan pagu anggaran BPKP di tahun
                    2018
                  </li>
                </ul>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/inflasi.jpg"
                    width={400}
                    height={300}
                    alt="Premium Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Fungsi Pengawasan
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Menjadi Badan Akuntabilitas Keuangan Negara (BAKN) DPR RI
                    dan meminta pemerintah segera mengevaluasi tata kelola Dana
                    Desa
                  </li>
                  <li className="relative check custom-list my-2">
                    Melakukan Kunjungan Kerja Spesifik Komisi XI DPR RI Di BPK
                    Jatim untuk melakukan pengawasan dengan cara memilah dan
                    mengkaji hasil pemeriksaan BPK
                  </li>
                  <li className="relative check custom-list my-2">
                    Memperjuangkan Aspirasi Petani Tegalrejo
                  </li>
                </ul>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="artikel">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Artikel <span className="text-maroon-500">Opini</span>
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Artikel Opini Sam Andreas
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <ArtikelOpini />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Suara <span className="text-maroon-500">Massa</span>
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Suara Massa Sam Andreas
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
