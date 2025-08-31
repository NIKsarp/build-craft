export const Image = ({ alt, src }) => {
  return (
    <img
      alt={alt}
      src={`about-us-images/${src}`}
      loading="lazy"
      className="about-us__image rounded-2xl shadow-xl"
    />
  );
};
