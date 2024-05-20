import React from "react";
import logo from "../images/photo-1631049123177-37356471f3dd.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      className="relative z-[1] flex lg:flex-row min-h-screen bg-slate-600"
      style={
        window.innerWidth <= 1023
          ? {
              backgroundImage: `url(${logo})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }
          : {}
      }
    >
      <div className="w-full h-full absolute bg-black opacity-55 inset-0 -z-[1]"></div>
      <div className="flex justify-center items-center w-full lg:w-8/12">
        <div className="sm:container sm:mx-auto">
          <header className="px-4 lg:flex items-center">
            <div className="w-full py-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                BeastLung: Advanced AI-Powered Lung Cancer Prediction and Early
                Detection
              </h1>
              <div className="w-40 h-2 bg-purple-500 my-4 rounded-full" />
              <p className="text-xl mb-10 text-white">
                BeastLung: Advanced AI-Powered Prediction offers cutting-edge
                technology for early detection of lung and breast cancer.
                Utilizing sophisticated algorithms, our platform provides
                accurate predictions to aid in timely diagnosis and treatment.
                Empower your health decisions with BeastLung's innovative and
                reliable cancer prediction tools.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <Link
                  to="lung-predict"
                  className="bg-purple-500 text-white text-xl font-medium px-4 py-2 rounded shadow"
                >
                  Predict Here for Lung Cancer
                </Link>
                <Link
                  to="breast-predict"
                  className="bg-purple-500 text-white text-xl font-medium px-4 py-2 rounded shadow"
                >
                  Predict Here for Breast Cancer
                </Link>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div
        className="hidden lg:block lg:flex-grow"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </section>
  );
}

export default Home;
