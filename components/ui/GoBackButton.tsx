"use client";

import { useRouter } from "next/navigation";

interface GoBackButtonProps {
  text?: string;
  onClick?: () => void;
}

export default function GoBackButton({
  text = "Retour",
  onClick,
}: GoBackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white text-center w-24 rounded-xl h-8 relative text-black text-sm font-semibold group overflow-hidden transition-all duration-300 shadow-md focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
      type="button"
      aria-label={text}
    >
      {/* Animation au hover */}
      <div
        className="bg-blue-600 rounded-xl h-7 w-1/4 flex items-center justify-center absolute left-1 top-[2px] 
        group-hover:w-[90px] z-10 duration-500 transition-all ease-in-out"
      >
        {/* Icône SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          height="14px"
          width="14px"
          aria-hidden="true"
        >
          <path
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            fill="#ffffff"
          ></path>
          <path
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      {/* Texte du bouton */}
      <p className="relative text-center ml-4">{text}</p>
    </button>
  );
}
