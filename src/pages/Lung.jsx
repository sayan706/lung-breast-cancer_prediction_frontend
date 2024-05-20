import React, { useState } from "react";
import axios from "axios";
import pic from "../images/pic-2.png";
import Toast from "../components/Toast";
function Lung() {
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

  const [errors, setErrors] = useState({});
  const [isToaster, setToaster] = useState(false);
  const [message, setMessage] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const postData = {};
      for (let key in formData) {
        postData[key] = Number(formData[key]);
      }
      axios
        .post("http://127.0.0.1:8000/api/v1/lung-predict", postData)
        .then((response) => {
          console.log(response.data);
          setMessage(response.data.message);
          setToaster(true);
          window.scrollTo(0, 0);
        })
        .catch((error) => {
          console.error(error);
        });
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
              <div className="pb-2 pt-4">
                <input
                  type="number"
                  name="GENDER"
                  id="GENDER"
                  required
                  placeholder="If male enter 1 for female enter 0"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  value={formData.GENDER}
                  onChange={handleChange}
                />
                {errors.GENDER && (
                  <p className="text-red-500">{errors.GENDER}</p>
                )}
              </div>
              <div className="pb-2 pt-4">
                <input
                  type="number"
                  name="AGE"
                  id="AGE"
                  placeholder="Enter Age"
                  required
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  value={formData.AGE}
                  onChange={handleChange}
                />
                {errors.AGE && <p className="text-red-500">{errors.AGE}</p>}
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
                <div key={field} className="pb-2 pt-4">
                  <input
                    type="number"
                    name={field}
                    id={field}
                    placeholder={`Enter ${field.replace("_", " ")} (1 or 2)`}
                    required
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
      {isToaster && <Toast message={message} setToaster={setToaster} />}
    </>
  );
}

export default Lung;
