import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full max-container"
    >
      <div>
        <h2 className="mt-10 font-palanquin text-4xl lg:max-w-lg font-bold capitalize">
          We Provide You
          <br />
          <span className="text-coral-red">Super Quality</span>
          <br />
          Shoes
        </h2>
        <p className="mt-6 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 mb-10 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <button className="btn btn-sm lg:btn-md btn-primary font-montserrat capitalize">
          view details
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
