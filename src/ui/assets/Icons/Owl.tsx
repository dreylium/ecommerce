const SvgOwl = ({ current }: { current: boolean }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`rounded-full ${current ? 'border-2 border-white fill-[#DB4444]' : 'fill-[#808080]'}`}
  >
    <circle cx="6" cy="6" r="6" />
  </svg>
);

export default SvgOwl;
