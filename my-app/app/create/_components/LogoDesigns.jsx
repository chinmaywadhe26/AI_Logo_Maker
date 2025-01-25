import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import LogoDesign from "@/app/_data/LogoDesign";
import Image from "next/image";
const LogoDesigns = ({ onHandleInputChange, formData }) => {
  const [selectedOption, setSelectedOption] = useState(formData?.design?.title);
  return (
    <div>
      <HeadingDescription
        title={"Choose your logo style"}
        description={
          "Select the type of logo design that best represents your brands unique identity"
        }
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {LogoDesign.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design);
            }}
            className={`
              p-1 cursor-pointer
              ${
                selectedOption == design.title &&
                "border-2  border-black rounded-lg"
              }`}
          >
            <Image
              className="w-full rounded-md h-[150px] object-top"
              src={design.image}
              alt={design.title}
              width={300}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoDesigns;
