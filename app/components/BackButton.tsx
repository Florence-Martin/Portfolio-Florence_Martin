"use client";

import React, { useEffect, useState } from "react";
import { ArrowBigUpDash } from "lucide-react";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="back-to-top-button-wrapper fixed bottom-5 right-5">
          <a href="#Top" className="button-circle bg-gray-300 w-inline-block">
            <ArrowBigUpDash className="icon-arrow-up" />
          </a>
        </div>
      )}
    </>
  );
};

export default BackToTopButton;
