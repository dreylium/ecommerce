import type { SVGProps } from 'react';
const SvgColon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={4} height={16} fill="none" {...props}>
    <circle cx={2} cy={2} r={2} fill="#E07575" />
    <circle cx={2} cy={14} r={2} fill="#E07575" />
  </svg>
);
export default SvgColon;
