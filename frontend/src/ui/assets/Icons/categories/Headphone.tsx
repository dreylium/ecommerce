import type { SVGProps } from 'react';
const SvgHeadphone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} fill="none" {...props}>
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#headphone_svg__a)"
    >
      <path d="M16.333 30.333H14A4.667 4.667 0 0 0 9.333 35v7A4.667 4.667 0 0 0 14 46.667h2.333A4.667 4.667 0 0 0 21 42v-7a4.667 4.667 0 0 0-4.667-4.667M42 30.333h-2.333A4.667 4.667 0 0 0 35 35v7a4.667 4.667 0 0 0 4.667 4.667H42A4.667 4.667 0 0 0 46.667 42v-7A4.667 4.667 0 0 0 42 30.333" />
      <path d="M9.333 35v-7a18.667 18.667 0 0 1 37.334 0v7" />
    </g>
    <defs>
      <clipPath id="headphone_svg__a">
        <path fill="#fff" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeadphone;
