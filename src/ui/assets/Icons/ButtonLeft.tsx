import type { SVGProps } from 'react';

const SvgButtonLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={46}
    fill="none"
    viewBox="0 0 46 46"
    {...props}
  >
    <circle cx={23} cy={23} r={23} fill="#F5F5F5" />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m22 16-7 7 7 7m-7-7h16"
    />
  </svg>
);
export default SvgButtonLeft;
