import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTimes } from "@fortawesome/free-solid-svg-icons";

function FileUpload({ setPrediction }) {
  const [file, setFile] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (
      selectedFile &&
      !["image/jpeg", "image/png"].includes(selectedFile.type)
    ) {
      alert("Please upload a file in JPG, JPEG, or PNG format.");
      return;
    }

    setFile(selectedFile);
    setImagePreview(URL.createObjectURL(selectedFile));
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error uploading file", error);
      setPrediction("Error during prediction");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClearPreview = () => {
    setFile(null);
    setImagePreview(null);
    setPrediction(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0) {
      const droppedFile = droppedFiles[0];

      if (!["image/jpeg", "image/png"].includes(droppedFile.type)) {
        alert("Please upload a file in JPG, JPEG, or PNG format.");
        return;
      }

      setFile(droppedFile);
      setImagePreview(URL.createObjectURL(droppedFile));
      handleSubmit(e);
    }
  };

  const handlePaste = (e) => {
    const items = e.clipboardData.items;
    for (const item of items) {
      if (item.kind === "file") {
        const pastedFile = item.getAsFile();

        if (!["image/jpeg", "image/png"].includes(pastedFile.type)) {
          alert("Please upload a file in JPG, JPEG, or PNG format.");
          return;
        }

        setFile(pastedFile);
        setImagePreview(URL.createObjectURL(pastedFile));
        handleSubmit(e);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("paste", handlePaste);

    return () => {
      window.removeEventListener("paste", handlePaste);
    };
  }, []);

  return (
    <>
      <div
        className={`w-1/3 bg-primary border-gray-400 rounded border-8 flex flex-col items-center justify-center -translate-y-40 h-96 ${
          isDragActive ? "border-dashed border-white" : ""
        } shadow-xl`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {imagePreview ? (
          <div className="w-full h-full relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-full object-cover rounded"
            />
            {/* Clear button in the top-right corner */}
            <div className="absolute top-1 right-1 flex justify-center rounded-full items-center bg-red-500 w-7 h-7 bg-red hover:outline-none">
              <button onClick={handleClearPreview} className="text-white">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            {/* Upload Icon (clickable) */}
            <div onClick={handleButtonClick} className="cursor-pointer">
              <FontAwesomeIcon
                icon={faUpload}
                className="text-5xl text-white mb-4"
              />
            </div>

            {/* Button to trigger file selection */}
            <button
              type="button"
              onClick={handleButtonClick}
              className="text-white rounded text-2xl mt-4"
            >
              Upload and Predict
            </button>

            {/* Completely hidden file input with accepted file types */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png"
              className="hidden"
            />

            <div className="text-center">
              <p className="block font-bold text-white text-base">Or</p>{" "}
              <p className="block text-white text-sm">
                drag and drop the files here.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Show submit button only if a file is selected */}

      {file && (
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-6 rounded -translate-y-28"
        >
          {isSubmitting ? "Predicting..." : "Submit"}
        </button>
      )}
    </>
  );
}

export default FileUpload;
