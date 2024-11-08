import { ComponentPropsWithoutRef } from "react";

export const TrelloLogo = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 256 256"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <g>
          <rect
            fill="#0079BF" // Couleur bleue Trello sans dégradé
            x="0"
            y="0"
            width="256"
            height="256"
            rx="25"
          ></rect>
          <rect
            fill="#FFFFFF"
            x="144.64"
            y="33.28"
            width="78.08"
            height="112"
            rx="12"
          ></rect>
          <rect
            fill="#FFFFFF"
            x="33.28"
            y="33.28"
            width="78.08"
            height="176"
            rx="12"
          ></rect>
        </g>
      </g>
    </svg>
  );
};
