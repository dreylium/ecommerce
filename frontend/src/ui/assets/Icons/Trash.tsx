import type { SVGProps } from 'react';
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16.106}
    height={23}
    viewBox="0 0 6.114 7.938"
    strokeWidth={0.288}
    fill="none"
    stroke="currentColor"
    strokeLinecap="square"
    {...props}
  >
    <rect width={5.826} height={0.922} x={0.144} y={0.85} ry={0.22} />
    <path d="M2.449.582V.268c0-.08.065-.143.145-.143h.926c.08 0 .145.064.145.143v.314" />
    <path d="M5.283 2.06v5.31a.42.42 0 0 1-.423.424H1.254A.42.42 0 0 1 .83 7.37V2.06" />
    <path d="M3.057 2.65v4.555" />
    <path d="M4.2 3.218v3.418M1.913 3.218v3.418" />
  </svg>
);
export default SvgTrash;
