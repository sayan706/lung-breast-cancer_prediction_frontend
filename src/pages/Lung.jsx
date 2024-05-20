import React, { useState } from "react";
import lungApi from "../axios/axios";
import pic from "../images/pic-2.png";
import toast from "react-hot-toast";

function Lung() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    GENDER: "",
    AGE: "",
    SMOKING: "",
    YELLOW_FINGERS: "",
    ANXIETY: "",
    PEER_PRESSURE: "",
    CHRONIC_DISEASE: "",
    FATIGUE: "",
    ALLERGY: "",
    WHEEZING: "",
    ALCOHOL_CONSUMING: "",
    COUGHING: "",
    SHORTNESS_OF_BREATH: "",
    SWALLOWING_DIFFICULTY: "",
    CHEST_PAIN: "",
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

    if (isNaN(formData.AGE) || formData.AGE <= 0 || formData.AGE >= 100) {
      newErrors.AGE = "Age must be a number between 0 and 100.";
    }

    if (formData.GENDER !== "0" && formData.GENDER !== "1") {
      newErrors.GENDER = "Gender must be 0 or 1.";
    }

    const fields = [
      "SMOKING",
      "YELLOW_FINGERS",
      "ANXIETY",
      "PEER_PRESSURE",
      "CHRONIC_DISEASE",
      "FATIGUE",
      "ALLERGY",
      "WHEEZING",
      "ALCOHOL_CONSUMING",
      "COUGHING",
      "SHORTNESS_OF_BREATH",
      "SWALLOWING_DIFFICULTY",
      "CHEST_PAIN",
    ];

    fields.forEach((field) => {
      if (formData[field] !== "1" && formData[field] !== "2") {
        newErrors[field] = `${field.replace("_", " ")} must be 1 or 2.`;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  async function predictLungCancer(payload) {
    try {
      const res = await lungApi.post("/lung-predict", payload);
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

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      const postData = {};

      for (let key in formData) {
        postData[key] = Number(formData[key]);
      }

      predictLungCancer(postData);
    } else {
      console.log("Form is not valid");
    }
  }

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
            <div>
              <input
                type="number"
                name="GENDER"
                id="GENDER"
                required
                placeholder="If male enter 1 for female enter 0"
                className="block w-full p-4 text-lg rounded bg-black bg-opacity-80"
                value={formData.GENDER}
                onChange={handleChange}
                onWheelCapture={(e) => e.target.blur()}
              />
              {errors.GENDER && (
                <p className="font-medium text-red-500">{errors.GENDER}</p>
              )}
            </div>
            <div>
              <input
                type="number"
                name="AGE"
                id="AGE"
                placeholder="Enter Age"
                required
                className="block w-full p-4 text-lg rounded bg-black bg-opacity-80"
                value={formData.AGE}
                onChange={handleChange}
                onWheelCapture={(e) => e.target.blur()}
              />
              {errors.AGE && (
                <p className="font-medium text-red-500">{errors.AGE}</p>
              )}
            </div>
            {[
              "SMOKING",
              "YELLOW_FINGERS",
              "ANXIETY",
              "PEER_PRESSURE",
              "CHRONIC_DISEASE",
              "FATIGUE",
              "ALLERGY",
              "WHEEZING",
              "ALCOHOL_CONSUMING",
              "COUGHING",
              "SHORTNESS_OF_BREATH",
              "SWALLOWING_DIFFICULTY",
              "CHEST_PAIN",
            ].map((field) => (
              <div key={field}>
                <input
                  type="number"
                  name={field}
                  id={field}
                  placeholder={`Enter ${field.replace("_", " ")} (1 or 2)`}
                  required
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

export default Lung;
