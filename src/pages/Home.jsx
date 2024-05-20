import React from "react";
import logo from "../images/photo-1631049123177-37356471f3dd.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-wrap bg-slate-600 min-h-screen">
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl font-bold">
                BeastLung: Advanced AI-Powered Lung Cancer Prediction and Early
                Detection
              </h1>
              <div className="w-20 h-2 bg-purple-700 my-4" />
              <p className="text-xl mb-10">
                BeastLung: Advanced AI-Powered Prediction offers cutting-edge
                technology for early detection of lung and breast cancer.
                Utilizing sophisticated algorithms, our platform provides
                accurate predictions to aid in timely diagnosis and treatment.
                Empower your health decisions with BeastLung's innovative and
                reliable cancer prediction tools.
              </p>
              <div className="flex space-x-4">
                <Link to="lung-predict" className="bg-purple-500 text-white text-xl font-medium px-4 py-2 rounded shadow">
                  Predict Here for Lung Cancer
                </Link>
                <Link to="breast-predict" className="bg-purple-500 text-white text-xl font-medium px-4 py-2 rounded shadow">
                  Predict Here for Breast Cancer
                </Link>
              </div>
            </div>
          </header>
        </div>
      </div>
      <img
        src={logo}
        alt="Leafs"
        className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
      />
    </div>
  );
}

export default Home;
