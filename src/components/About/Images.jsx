import { Image } from "./Image";

export const Images = () => {
  return (
    <div className="about-us__images-grid grid grid-cols-2 gap-4">
      <div className="about-us__images-column about-us__images-column--left space-y-4">
        <Image alt="Construction team working on site" src="1st.jpg" />
        <Image alt="Modern architectural design" src="2nd.jpg" />
      </div>

      <div className="about-us__images-column about-us__images-column--right space-y-4 mt-8">
        <Image alt="Interior design showcase" src="3rd.jpg" />
        <Image alt="Structural engineering blueprints" src="4th.jpg" />
      </div>
    </div>
  );
};
