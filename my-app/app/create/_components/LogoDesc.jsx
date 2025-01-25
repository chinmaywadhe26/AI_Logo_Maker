import React from "react";
import HeadingDescription from "./HeadingDescription";

const LogoDesc = ({ onHandleInputChange, formData }) => {
  return (
    <div className="my-10">
      <HeadingDescription
        title={"Describe your idea"}
        description={
          "Share your vision, theme or inspiration to create a logo that resembles with your brand"
        }
      />
      <input
        type="text"
        placeholder="Add your Logo Idea Here.."
        className="p-4 border rounded-lg mt-5 w-full"
        defaultValue={formData?.desc}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
};

export default LogoDesc;
