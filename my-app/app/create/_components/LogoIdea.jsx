import React, { useEffect, useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Prompt from "@/app/_data/Prompt";
import axios from "axios";
import { Dice1, Loader2Icon } from "lucide-react";
const LogoIdea = ({ formData, onHandleInputChange }) => {
  const [ideas, setIdeas] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  useEffect(() => {
    generateLogoDesignIdea();
  }, []);
  const generateLogoDesignIdea = async () => {
    setLoading(true);
    const PROMPT = Prompt.DESIGN_IDEA_PROMPT.replace(
      "{logoType}",
      formData?.design.title
    )
      .replace("{logoTitle}", formData?.title)
      .replace("{logoDesc}", formData?.desc)
      .replace("{logoPrompt}", formData?.design.prompt);
    const result = await axios.post("/api/ai-design-ideas", {
      prompt: PROMPT,
    });
    console.log(result.data);
    setIdeas(result.data.ideas);
    setLoading(false);
  };
  return (
    <div className="my-10">
      <HeadingDescription
        title={"select your design"}
        description={
          "choose a design that aligns with your vision, or ksip to recieve a random suggestion"
        }
      />
      <div className="flex items-center justify-center">
        {loading && <Loader2Icon className="animate-spin my-10" />}
      </div>
      <div className="flex flex-wrap gap-3 mt-6">
        {ideas &&
          ideas.map((idea, index) => (
            <h2
              onClick={() => {
                setSelectedOption(idea);
                onHandleInputChange(idea);
              }}
              key={index}
              className={`p-2 rounded-full border w-fit  px-3 cursor-pointer hover:border-black ${
                selectedOption == idea && "border-black"
              }`}
            >
              {idea}
            </h2>
          ))}
        <h2
          onClick={() => {
            setSelectedOption("Let AI select the best Idea");
            onHandleInputChange("Let AI select the best Idea");
          }}
          className={`p-2 rounded-full border w-fit  px-3 cursor-pointer hover:border-black ${
            selectedOption == "Let AI select the best Idea" && "border-black"
          }`}
        >
          Let AI select the best Idea
        </h2>
      </div>
    </div>
  );
};

export default LogoIdea;
