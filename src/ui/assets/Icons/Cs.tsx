import type { SVGProps } from 'react';
const SvgCs = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} fill="none" {...props}>
    <path
      fill="#2F2E30"
      d="M80 40c0 22.091-17.909 40-40 40S0 62.091 0 40 17.909 0 40 0s40 17.909 40 40m-69.093 0c0 16.068 13.026 29.093 29.093 29.093 16.068 0 29.093-13.026 29.093-29.093S56.067 10.907 40 10.907 10.907 23.933 10.907 40"
      opacity={0.3}
    />
    <circle cx={40} cy={40} r={29} fill="#000" />
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#cs_svg__a)"
    >
      <path d="M33.333 45a3.333 3.333 0 0 0-6.666 0v3.333a3.333 3.333 0 0 0 6.666 0zM53.333 45a3.333 3.333 0 0 0-6.666 0v3.333a3.333 3.333 0 0 0 6.666 0z" />
      <path d="M26.667 45v-5a13.333 13.333 0 1 1 26.666 0v5M50 51.667c0 1.326-1.054 2.597-2.929 3.535S42.652 56.667 40 56.667" />
    </g>
    <defs>
      <clipPath id="cs_svg__a">
        <path fill="#fff" d="M20 20h40v40H20z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCs;
