import type { SVGProps } from 'react';
const SvgComputer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} fill="none" {...props}>
    <g stroke="currentColor" strokeLinecap="round" strokeWidth={2} clipPath="url(#computer_svg__a)">
      <path
        strokeLinejoin="round"
        d="M46.667 9.333H9.333A2.333 2.333 0 0 0 7 11.667V35a2.333 2.333 0 0 0 2.333 2.333h37.334A2.333 2.333 0 0 0 49 35V11.667a2.333 2.333 0 0 0-2.333-2.334M16.333 46.667h23.334M21 37.333v9.334M35 37.333v9.334"
      />
      <path d="M8 32h40" />
    </g>
    <defs>
      <clipPath id="computer_svg__a">
        <path fill="#fff" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComputer;
