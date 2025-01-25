import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Colors from "@/app/_data/Colors";

const LogoPalette = ({ onHandleInputChange, formData }) => {
  const [selectedPallete, setSelectedPallete] = useState(formData?.pallete);
  return (
    <div className="my-10">
      <HeadingDescription
        title={"Choose your palette"}
        description={"Pick the colors that reflect your brands personality"}
      />
      <div className="grid grid-cols-3 md:grid-cols-3 gap-5 mt-5">
        {Colors.map((pallete, index) => (
          <div
            key={index}
            className={`flex p-2 cursor-pointer${
              selectedPallete === pallete.name &&
              "border rounded-sm border-black"
            }`}
          >
            {pallete.colors.map((item, index) => (
              <div
                className="h-24 w-full"
                key={index}
                onClick={() => {
                  setSelectedPallete(pallete.name);
                  onHandleInputChange(pallete.name);
                }}
                style={{ backgroundColor: item }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoPalette;
