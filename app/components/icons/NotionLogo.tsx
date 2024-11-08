import { ComponentPropsWithoutRef } from "react";

export const NotionLogo = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 256 268"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <title>Notion</title>
      <g>
        <path
          d="M16.0924984,11.5384656 L164.089991,0.608048392 C182.268719,-0.952166138 186.940447,0.0998642306 198.370133,8.40912104 L245.613429,41.6907258 C253.405586,47.4144843 256,48.9746988 256,55.2066414 L256,237.73391 C256,249.172512 251.845372,255.939385 237.304172,256.973584 L65.4398551,267.377986 C54.5272689,267.895086 49.3295257,266.334872 43.6146827,259.050899 L8.82635648,213.813593 C2.58549836,205.486505 0,199.254562 0,191.970589 L0,29.7261093 C0,20.3737376 4.1546284,12.572665 16.0924984,11.5384656 Z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M164.089991,0.608048392 L16.0924984,11.5384656 C4.1546284,12.572665 0,20.3737376 0,29.7261093 L0,191.970589 C0,199.254562 2.58549836,205.486505 8.82635648,213.813593 L43.6146827,259.050899 C49.3295257,266.334872 54.5272689,267.895086 65.4398551,267.377986 L237.304172,256.973584 C251.836456,255.939385 256,249.172512 256,237.73391 L256,55.2066414 C256,49.2956572 253.664136,47.5927945 246.790277,42.5466149 C246.394749,42.2616979 245.999494,41.9764014 245.604513,41.6907258 L198.370133,8.40912104 C186.940447,0.0998642306 182.268719,-0.952166138 164.089991,0.608048392 Z M69.3270182,52.219945 C55.2940029,53.1649893 52.1111653,53.3789615 44.1406979,46.8973846 L23.8757401,30.7781396 C21.8162569,28.6919099 22.8504562,26.0885805 28.039284,25.5714809 L170.313018,15.1759943 C182.259804,14.1328795 188.482831,18.2964234 193.154559,21.9339521 L217.556314,39.6134116 C218.599429,40.1394268 221.193843,43.2509404 218.073414,43.2509404 L71.1457825,52.0951279 L69.3270182,52.219945 Z M52.9670544,236.173696 L52.9670544,81.2221043 C52.9670544,74.455231 55.0443686,71.3348019 61.2673957,70.8087867 L230.020199,60.9303999 C235.743958,60.4133002 238.329456,64.0508289 238.329456,70.8087867 L238.329456,224.726179 C238.329456,231.493052 237.286341,237.216811 227.942885,237.73391 L66.4562234,247.095198 C57.1127673,247.612297 52.9670544,244.500784 52.9670544,236.173696 Z M212.376402,89.5313611 C213.410601,94.2120046 212.376402,98.8926482 207.695758,99.4275789 L199.912517,100.969962 L199.912517,215.373807 C193.154559,219.011336 186.931532,221.08865 181.733788,221.08865 C173.424532,221.08865 171.347217,218.485321 165.12419,210.693164 L114.225535,130.614039 L114.225535,208.089834 L130.326949,211.736279 C130.326949,211.736279 130.326949,221.097566 117.337048,221.097566 L81.523438,223.17488 C80.4803232,221.08865 81.523438,215.890907 85.1520513,214.856708 L94.5044229,212.262294 L94.5044229,109.823065 L81.523438,108.771035 C80.4803232,104.090391 83.0747371,97.3324337 90.3497945,96.8064185 L128.77565,94.2209202 L181.733788,175.334245 L181.733788,103.573292 L168.235704,102.021993 C167.192589,96.2893189 171.347217,92.1257749 176.536045,91.6175908 L212.376402,89.5313611 L212.376402,89.5313611 Z"
          fill="#000000"
        ></path>
      </g>
    </svg>
  );
};
