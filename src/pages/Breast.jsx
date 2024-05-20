import React, { useState } from "react";
import pic from "../images/pic-2.png";

function Breast() {
  const [formData, setFormData] = useState({
    Radius_mean: "",
    smoothness_mean: "",
    compactness_mean: "",
    concavity_mean: "",
    "concave points_mean": "",
    symmetry_mean: "",
    radius_se: "",
    compactness_se: "",
    concavity_se: "",
    "concave points_se": "",
    radius_worst: "",
    texture_worst: "",
    smoothness_worst: "",
    compactness_worst: "",
    concavity_worst: "",
    "concave points_worst": "",
    symmetry_worst: "",
    fractal_dimension_worst: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const value = parseFloat(formData[key]);
      if (isNaN(value) || value < 0 || value > 100) {
        newErrors[key] = `${key.replace(
          /_/g,
          " "
        )} must be a number between 0 and 100.`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-stretch text-white">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage: `url(${pic})`,
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0" />
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Keep it special
            </h1>
            <p className="text-3xl my-4">
              Capture your personal memory in a unique way, anywhere.
            </p>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
          style={{ backgroundColor: "#161616" }}
        >
          <div
            className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage: `url(${pic})`,
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0" />
          </div>
          <div className="w-full py-6 z-20">
            <p className="text-gray-100">Enter Details for Prediction</p>
            <form
              onSubmit={handleSubmit}
              className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
            >
              {Object.keys(formData).map((field) => (
                <div key={field} className="pb-2 pt-4">
                  <input
                    type="number"
                    name={field}
                    id={field}
                    placeholder={`Enter ${field.replace(/_/g, " ")}`}
                    required
                    min="0"
                    max="100"
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    value={formData[field]}
                    onChange={handleChange}
                  />
                  {errors[field] && (
                    <p className="text-red-500">{errors[field]}</p>
                  )}
                </div>
              ))}
              <div className="px-4 pb-2 pt-4">
                <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                  Predict
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Breast;
