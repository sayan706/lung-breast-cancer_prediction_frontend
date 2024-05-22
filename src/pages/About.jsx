import React from "react";
import hetc from "../images/hetc.png";
import sayan from "../images/sayan.png";
import supratim from "../images/supratim.png";
import arijit from "../images/arijit.png";
import biswarup from "../images/Biswarup.png";

function About() {
  return (
    <div className="font-roboto mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-gray-800 min-h-screen">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-white">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-200">
            Welcome to our Breast and Lung Cancer Prediction platform. Here, we
            harness the power of Machine Learning (ML) and Artificial
            Intelligence (AI) to provide early and accurate cancer predictions.
            Our mission is to revolutionize cancer detection, offering a vital
            tool in the fight against two of the most prevalent and deadly
            cancers worldwide. By utilizing advanced algorithms and vast
            datasets, our technology identifies patterns and markers that may be
            missed by traditional methods. This enables earlier diagnosis and
            improves the chances of successful treatment. Our commitment is to
            empower healthcare providers with cutting-edge tools that enhance
            decision-making and ultimately save lives. Join us in our journey to
            make cancer detection more precise, accessible, and life-saving.
          </p>
        </div>
        <div className="w-full lg:w-8/12 shadow-lg shadow-gray-900">
          <img className="w-full h-full" src={hetc} alt="hetc college" />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-white">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-gray-200">
            Our story began with a vision to combat breast and lung cancer using
            Machine Learning (ML) and Artificial Intelligence (AI). Faced with
            challenges in data and technology, our dedicated team worked
            tirelessly to develop a powerful platform for early and accurate
            cancer prediction. Through innovation and perseverance, we have
            created a tool that offers hope and a better chance for successful
            treatment, demonstrating the transformative power of technology in
            healthcare.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg shadow-gray-900 rounded-md text-white">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src={sayan} alt="sayan" />
              <img className="md:hidden block" src={sayan} alt="sayan" />
              <p className="font-medium text-xl leading-5 mt-4">
                Sayan Chatterjee
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src={supratim} alt="supratim" />
              <img className="md:hidden block" src={supratim} alt="supratim" />
              <p className="font-medium text-xl leading-5 mt-4">Supratim Das</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src={arijit} alt="arijit" />
              <img className="md:hidden block" src={arijit} alt="arijit" />
              <p className="font-medium text-xl leading-5 mt-4">
                Arijit Debnath
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src={biswarup} alt="biswarup" />
              <img className="md:hidden block" src={biswarup} alt="biswarup" />
              <p className="font-medium text-xl leading-5 mt-4">
                Biswarup Ghosh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
