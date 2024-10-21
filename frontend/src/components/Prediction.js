import React, { useState } from "react";
import FileUpload from "./FileUpload";
import PredictionResult from "./PredictionResult";

function Prediction() {
  const [prediction, setPrediction] = useState("");

  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="h-1/2 bg-secondary flex pt-20 justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-gray-700 text-5xl font-bold">
              Brain Stroke detection
            </h1>
          </div>
        </div>

        <div className="h-1/2 bg-white flex flex-col items-center justify-center">
          <FileUpload setPrediction={(setPrediction)} />
          {prediction && <PredictionResult prediction={prediction} />}
        </div>
      </div>
    </>
  );
}

export default Prediction;
