import type { SVGProps } from 'react';
const SvgButtonRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={46}
    viewBox="0 0 46 46"
    fill="none"
    {...props}
  >
    <circle cx={23} cy={23} r={23} fill="#F5F5F5" />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.5 23H31m0 0-7-7m7 7-7 7"
    />
  </svg>
);
export default SvgButtonRight;
