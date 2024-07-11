type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
};

const Picture: React.FC<Props> = ({ src, alt, className, imgClassName, width, height }) => {
  const [baseName] = String(src).split('.');
  return (
    <picture {...{ className }}>
      <source srcSet={`/min/${baseName}.avif`} type="image/avif" />
      <source srcSet={`/min/${baseName}.webp`} type="image/webp" />
      <img
        src={`/images/${src}`}
        alt={alt}
        {...{ width, height, className: imgClassName }}
        loading="lazy"
      />
    </picture>
  );
};
export default Picture;
