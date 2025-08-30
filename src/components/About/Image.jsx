export const Image = ({ alt, src }) => {
  return (
    <img
      alt={alt}
      src={`about-us-images/${src}`}
      loading="lazy"
      className="rounded-2xl shadow-xl"
    />
  );
};
