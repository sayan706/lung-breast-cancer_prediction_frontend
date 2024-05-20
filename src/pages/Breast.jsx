import React, { useState } from "react";
import breastApi from "../axios/axios";
import pic from "../images/pic-2.png";
import toast from "react-hot-toast";

function Breast() {
  const [errors, setErrors] = useState({});
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

  async function predictBreastCancer(payload) {
    try {
      const res = await breastApi.post("/breast-predict", payload);
      console.log(res);
      const { data } = res;
      console.log(data);
      toast.success(data.message);
      window.scrollTo(0, 0);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      predictBreastCancer(formData);
    } else {
      console.log("Form is not valid");
    }
  };

  return (
    <React.Fragment>
      <section className="min-h-screen flex text-white">
        <div
          style={{
            backgroundImage: `url(${pic})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="hidden h-screen sticky top-0 min-[992px]:flex w-1/2 justify-center items-center"
        >
          <div className="w-full h-full absolute bg-black opacity-60 inset-0 z-[0]"></div>
          <div className="px-10 z-[1]">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Keep it special
            </h1>
            <p className="text-3xl my-4">
              Capture your personal memory in a unique way, anywhere.
            </p>
          </div>
        </div>
        <section
          className={`relative w-full min-[992px]:w-1/2 py-4 z-[1] bg-slate-800`}
          style={
            window.innerWidth <= 991
              ? {
                  backgroundImage: `url(${pic})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "fixed",
                }
              : {}
          }
        >
          <div className="block min-[992px]:hidden w-full h-full absolute bg-black opacity-60 inset-0 -z-[1]"></div>
          <h2 className="font-medium text-2xl text-center">
            Enter Details for Prediction
          </h2>
          <form
            onSubmit={handleSubmit}
            className="px-6 sm:px-20 md:px-40 min-[992px]:px-4 py-4 w-full flex flex-col gap-4"
          >
            {Object.keys(formData).map((field) => (
              <div key={field}>
                <input
                  type="number"
                  name={field}
                  id={field}
                  placeholder={`Enter ${field.replace(/_/g, " ")}`}
                  required
                  min="0"
                  max="100"
                  className="block w-full p-4 text-lg rounded bg-black bg-opacity-80"
                  value={formData[field]}
                  onChange={handleChange}
                  onWheelCapture={(e) => e.target.blur()}
                />
                {errors[field] && (
                  <p className="font-medium text-red-500">{errors[field]}</p>
                )}
              </div>
            ))}
            <div>
              <button className="uppercase block w-full py-4 text-lg font-medium rounded-full duration-200 bg-indigo-600 hover:bg-indigo-800 focus:outline-none">
                Predict
              </button>
            </div>
          </form>
        </section>
      </section>
    </React.Fragment>
  );
}

export default Breast;
