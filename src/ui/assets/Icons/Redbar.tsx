import type { SVGProps } from 'react';
const SvgRedbar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={40} fill="none" {...props}>
    <rect width={20} height={40} fill="#DB4444" rx={4} />
  </svg>
);
export default SvgRedbar;
