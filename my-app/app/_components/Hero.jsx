"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Hero() {
  const [title, setTitle] = useState(""); // Initialize state
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (title.trim()) {
      router.push(`/create?title=${encodeURIComponent(title)}`); // Redirect with query parameter
    } else {
      alert("Please enter a valid input."); // Validation for empty input
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground mb-6">
            Create Stunning Logos with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Transform your ideas into professional logos in seconds using our
            advanced AI technology. Just describe your vision, and watch it come
            to life.
          </p>

          <form
            className="w-full max-w-xl space-y-4"
            onSubmit={handleSubmit} // Attach submit handler
          >
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Describe your perfect logo..."
                className="flex-1 text-lg h-12"
              />
              <Button type="submit" size="lg" className="font-semibold p-6">
                Generate Logo
              </Button>
            </div>
          </form>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">AI-Powered Design</h3>
              <p className="text-muted-foreground">
                Advanced algorithms create unique and professional logos
                tailored to your brand.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
              <p className="text-muted-foreground">
                Get multiple logo variations in seconds, ready for your review
                and customization.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Professional Quality
              </h3>
              <p className="text-muted-foreground">
                High-resolution logos suitable for all your branding needs.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
