import React from "react";

function PredictionResult({ prediction }) {
 
  const textColor =
    prediction === "Stroke"
      ? "text-red-500"
      : prediction === "No Stroke"
        ? "text-green-500"
        : "text-gray-700"; 

  return (
    <div className="-translate-y-20">
      <h2 className="text-gray-700 text-2xl font-bold">
        Prediction:{" "}
        <span className={textColor}>
          {prediction || "No prediction available"} 
        </span>
      </h2>
    </div>
  );
}

export default PredictionResult;
