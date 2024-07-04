import React from "react";
import AGD from "../assets/AGD.webp";
import Brian from "../assets/Brain.jpg";
import Weather from "../assets/Weather.jpeg";
import Game from "../assets/Game.jpeg";

export default function Project() {
  return (
    <>
      <div className="bg-indigo-800 m-5 sm:m-20">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-white mt-10">Projects</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
            <div className="flex flex-col md:flex-row">
              <div className="md:shrink-0 p-5 order-1 md:order-none">
                <img
                  src={AGD}
                  alt="loading"
                  className="w-36 h-36 rounded-full border-4 border-white object-cover"
                />
              </div>
              <div className="p-8 order-2 md:order-none">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Age-Gender Detection
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black"
                >
                  Minor Project
                </a>
                <p className="mt-2 text-slate-500 text-justify">
                    We four members created a project on Age and gender detection using SVM and CNN algorithm.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
            <div className="flex flex-col md:flex-row">
              <div className="md:shrink-0 p-5 order-1 md:order-none">
                <img
                  src={Brian}
                  alt="loading"
                  className="w-36 h-36 rounded-full border-4 border-white object-cover"
                />
              </div>
              <div className="p-8 order-2 md:order-none">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Brain Haemorrhage Detection
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black"
                >
                  Major Project
                </a>
                <p className="mt-2 text-slate-500 text-justify">
                  This was a major project where we created a model to detect brain haemorrhage using YOLOv5 for detection and u-net for segmentation.</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
            <div className="flex flex-col md:flex-row">
              <div className="md:shrink-0 p-5 order-1 md:order-none">
                <img
                  src={Game}
                  alt="loading"
                  className="w-36 h-36 rounded-full border-4 border-white object-cover"
                />
              </div>
              <div className="p-8 order-2 md:order-none">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Simone-Game
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black"
                >
                  Javascript 1st Project
                </a>
                <p className="mt-2 text-slate-500 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, officia veritatis. Sapiente.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
            <div className="flex flex-col md:flex-row">
              <div className="md:shrink-0 p-5 order-1 md:order-none">
                <img
                  src={Weather}
                  alt="loading"
                  className="w-36 h-36 rounded-full border-4 border-white object-cover"
                />
              </div>
              <div className="p-8 order-2 md:order-none">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Weather API
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black"
                >
                  React 1st Project
                </a>
                <p className="mt-2 text-slate-500 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, officia veritatis. Sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
