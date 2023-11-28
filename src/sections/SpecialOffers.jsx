import { offer } from "../assets/images";
import { FaHandPointRight } from "react-icons/fa";

const SpecialOffers = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      {/* picture */}
      <div className="flex-1">
        <img
          src={offer}
          alt="shoe promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      {/* title */}
      <div>
        <h2 className="mt-10 font-palanquin text-4xl lg:max-w-lg font-bold capitalize">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-6 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 mb-10 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <button className="btn btn-sm lg:btn-md btn-primary font-montserrat capitalize">
          shop now <FaHandPointRight />
        </button>
        <button className="ml-6 btn btn-sm lg:btn-md bg-white border-slate-gray font-montserrat capitalize">
          learn more
        </button>
      </div>
    </section>
  );
};

export default SpecialOffers;
