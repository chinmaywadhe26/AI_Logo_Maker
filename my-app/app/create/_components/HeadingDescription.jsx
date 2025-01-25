"use client";

import React from "react";

const HeadingDescription = ({ title, description }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-bold text-left">{title}</h2>
      <p className="text-left text-lg text-muted-foreground">{description}</p>
    </div>
  );
};

export default HeadingDescription;
