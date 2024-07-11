import type { SVGProps } from 'react';
const SvgDelivery = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={81} height={80} fill="none" {...props}>
    <path
      fill="#2F2E30"
      d="M80.5 40c0 22.091-17.909 40-40 40S.5 62.091.5 40s17.909-40 40-40 40 17.909 40 40m-69.093 0c0 16.068 13.026 29.093 29.093 29.093 16.068 0 29.093-13.026 29.093-29.093S56.567 10.907 40.5 10.907 11.407 23.933 11.407 40"
      opacity={0.3}
    />
    <circle cx={40.5} cy={40} r={29} fill="#000" />
    <g
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#delivery_svg__a)"
    >
      <path d="M32.167 51.667a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667M48.833 51.667a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667" />
      <path d="M28.833 48.334H27.5a2 2 0 0 1-2-2v-4.667m-1.667-13.333h16.334a2 2 0 0 1 2 2v18m-6.667 0h10m6.667 0H53.5a2 2 0 0 0 2-2v-8m0 0H42.167m13.333 0-4.417-7.363a2 2 0 0 0-1.715-.97h-7.201" />
      <path d="M28.5 48h-1.333a2 2 0 0 1-2-2v-4.667M23.5 28h16.333a2 2 0 0 1 2 2v18M35.5 48h9.667m7.333 0h.667a2 2 0 0 0 2-2v-8m0 0H41.833m13.334 0-4.418-7.362a2 2 0 0 0-1.715-.971h-7.2M25.5 31.818h6.667M22.318 35.455h6.667M25.5 39.09h6.667" />
    </g>
    <defs>
      <clipPath id="delivery_svg__a">
        <path fill="#fff" d="M20.5 20h40v40h-40z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDelivery;
