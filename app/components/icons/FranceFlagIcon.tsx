import { ComponentPropsWithoutRef } from "react";

export const FranceFlagIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  const { size = 24, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      id="flag-of-france"
      {...rest} // Passe les autres props (comme className, style, etc.)
    >
      {/* Partie centrale blanche */}
      <rect
        width="199.2"
        height="460.12"
        x="156.4"
        y="25.94"
        fill="#f2f2f2"
      ></rect>

      {/* Partie bleue à gauche */}
      <path
        fill="#293788"
        d="M171.83,25.94V486.06h-101A67.39,67.39,0,0,1,3.5,418.72V93.28A67.36,67.36,0,0,1,70.83,25.94Z"
      ></path>

      {/* Partie rouge à droite */}
      <path
        fill="#ef2b2d"
        d="M508.5,93.28V418.72a67.35,67.35,0,0,1-67.33,67.34h-101V25.94h101A67.32,67.32,0,0,1,508.5,93.28Z"
      ></path>

      {/* Ombre blanche */}
      <path
        fill="#fff"
        d="M441.42,54H70.83A39.28,39.28,0,0,0,31.55,93.25V303.1a27.54,27.54,0,0,0,31.34,27.19C295.39,299.07,409.25,155.88,455,77.53A15.68,15.68,0,0,0,441.42,54Z"
        opacity=".12"
      ></path>
    </svg>
  );
};
