import type { SVGProps } from 'react';
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    viewBox="0 0 7.938 7.938"
    {...props}
  >
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeMiterlimit={0}
      strokeWidth={0.8}
    >
      <path d="M7.042.895.895 7.042M.949.949l6.147 6.147" />
    </g>
  </svg>
);
export default SvgClose;
