'use client'
import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ImageTabs = () => {
   const [activeTab, setActiveTab] = useState("oraganize");

  return (
    <section className="bg-white border-t py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Tabs */}
          <div className="flex gap-2 justify-center mb-8">
            <Button
              onClick={() => setActiveTab("oraganize")}
              variant="outline"
              className={`rounded-lg text-sm font-medium  px-6 py-3 transition-colors duration-300 ${
                activeTab === "oraganize"
                  ? "bg-violet-400 text-white"
                  : "bg-white text-violet-400"
              }`}
            >
              Organize applications
            </Button>
            <Button
              onClick={() => setActiveTab("hired")}
              variant="outline"
              className={`rounded-lg text-sm font-medium  px-6 py-3 transition-colors duration-300 ${
                activeTab === "hired"
                  ? "bg-violet-400 text-white"
                  : "bg-white text-violet-400"
              }`}
            >
              Get hired
            </Button>
            <Button
              onClick={() => setActiveTab("boards")}
              variant="outline"
              className={`rounded-lg text-sm font-medium  px-6 py-3 transition-colors duration-300 ${
                activeTab === "boards"
                  ? "bg-violet-400 text-white"
                  : "bg-white text-violet-400"
              }`}
            >
              Manage boards
            </Button>
          </div>
          {/* Hero images */}
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
            {activeTab === "oraganize" && (
              <Image
                src="/hero-images/hero1.png"
                alt="Hero image 1"
                width={1200}
                height={800}
              />
            )}

            {activeTab === "hired" && (
              <Image
                src="/hero-images/hero2.png"
                alt="Hero image 2"
                width={1200}
                height={800}
              />
            )}

            {activeTab === "boards" && (
              <Image
                src="/hero-images/hero3.png"
                alt="Hero image 3"
                width={1200}
                height={800}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageTabs
