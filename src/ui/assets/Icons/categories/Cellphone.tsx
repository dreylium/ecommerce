import type { SVGProps } from 'react';
const SvgCellphone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} fill="none" {...props}>
    <g stroke="currentColor" clipPath="url(#cellphone_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M38.938 6.125H17.062a2.734 2.734 0 0 0-2.734 2.734v38.282a2.734 2.734 0 0 0 2.735 2.734h21.875a2.734 2.734 0 0 0 2.734-2.734V8.859a2.734 2.734 0 0 0-2.734-2.734"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M25.667 7h5.468" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M28 44.005v.026" />
      <path strokeWidth={2} d="M15.167 39.833h25.666" />
    </g>
  </svg>
);
export default SvgCellphone;
