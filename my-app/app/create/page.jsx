"use client";
import React, { useState } from "react";
import LogoTitle from "./_components/LogoTitle";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LogoDesc from "./_components/LogoDesc";
import LogoPalette from "./_components/LogoPalette";
import LogoDesigns from "./_components/LogoDesigns";
import LogoIdea from "./_components/LogoIdea";

const Create = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();
  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  console.log(formData);
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4">
      <Card className="p-6 w-full max-w-3xl">
        <CardHeader className="p-0 mb-6">
          {step == 1 ? (
            <LogoTitle
              onHandleInputChange={(v) => onHandleInputChange("title", v)}
              formData={formData}
            />
          ) : step == 2 ? (
            <LogoDesc
              onHandleInputChange={(v) => onHandleInputChange("desc", v)}
              formData={formData}
            />
          ) : step == 3 ? (
            <LogoPalette
              onHandleInputChange={(v) => onHandleInputChange("palette", v)}
              formData={formData}
            />
          ) : step == 4 ? (
            <LogoDesigns
              onHandleInputChange={(v) => onHandleInputChange("design", v)}
              formData={formData}
            />
          ) : step == 5 ? (
            <LogoIdea
              onHandleInputChange={(v) => onHandleInputChange("idea", v)}
              formData={formData}
            />
          ) : null}
          <div className="flex items-center justify-between">
            {step != 1 && (
              <Button onClick={() => setStep(step - 1)}>
                <ArrowLeft />
                Previous
              </Button>
            )}
            <Button onClick={() => setStep(step + 1)}>
              <ArrowRight />
              Continue
            </Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Create;
