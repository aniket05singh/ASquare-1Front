import React from 'react';
import GaugeChart from "react-gauge-chart";
const Gauge1234 = ({ name, value }) => {
    if(value>1 || name == "Iodine"){
        value = 1;
    }
  return (
    <>
    <div className="h-[300px] w-[300px]">
    <div className={`p-4 mx-auto rounded-xl shadow-md text-center 
  ${value < (100 / 900) ? "bg-red-800" :value < (200 / 900) ? "bg-red-600" :value < (300 / 900) ? "bg-red-500" : value < ((4 * 100) / 900) ? "bg-yellow-700" :value < ((500) / 900) ? "bg-yellow-600" :value < ((6 * 100) / 900) ? "bg-yellow-500" : "bg-green-700"}`}>

      <h2 className="text-xl text-white font-semibold mb-4">{name}</h2>
      <GaugeChart 
        id="gauge-chart"
        nrOfLevels={3} 
        percent={value} 
        colors={["#D61F1F", "#FFD301","#006B3D"]} 
        arcWidth={0.3} 
        cornerRadius={0}
      />
    </div>
    <div className="text-center">
  
</div>

    </div>
    </>
  )
}

export default Gauge1234;
