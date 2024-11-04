"use client";

import React from "react";
import { ArrowBigUpDash } from "lucide-react";
import { useWindowScroll } from "react-use";

const BackToTopButton: React.FC = () => {
  const { y: scrollY } = useWindowScroll();
  const isVisible = scrollY > 300;

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
