import type { SVGProps } from 'react';
const SvgSmartWatch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} fill="none" {...props}>
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      clipPath="url(#smart_watch_svg__a)"
    >
      <path
        strokeLinejoin="round"
        d="M35 14H21a7 7 0 0 0-7 7v14a7 7 0 0 0 7 7h14a7 7 0 0 0 7-7V21a7 7 0 0 0-7-7M21 42v7h14v-7M21 14V7h14v7"
      />
      <path d="M24 23v11M28 28v6M32 26v8" />
    </g>
    <defs>
      <clipPath id="smart_watch_svg__a">
        <path fill="#fff" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSmartWatch;
