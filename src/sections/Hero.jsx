import { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { shoes, statistics } from "../utility";

const Hero = () => {
  const [shoeNow, setShoeNow] = useState(shoes[0]);

  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-[40%] flex flex-col justify-center items-start max-xl:padding-x pt-28">
        <p className="capitalize text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-[72px] lg:text-8xl leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-[7] pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <button className="btn btn-sm lg:btn-md btn-primary font-montserrat capitalize">
          shop now <FaHandPointRight />
        </button>
        {/* numbers */}
        <div className="flex flex-wrap justify-start items-start w-full mt-20 gap-16">
          {statistics.map((stat) => {
            const { value, label } = stat;
            return (
              <div key={label}>
                <p className="text-4xl font-palanquin font-bold">{value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center">
        {/* big shoe picture */}
        <img
          src={shoeNow.bigShoe}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-[5]"
        />

        {/* small shoe pictures */}
        <div className="flex gap-x-4 sm:gap-x-6 absolute -bottom-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => {
            const { thumbnail, bigShoe } = shoe;

            return (
              <div
                key={index}
                className={`border-2 rounded-xl max-sm:flex-1 ${
                  shoeNow.bigShoe === bigShoe
                    ? "border-coral-red"
                    : "border-transparent"
                }`}
                onClick={() => setShoeNow(shoes[index])}
              >
                <div className="flex justify-center items-center bg-card bg-cover bg-center rounded-xl w-28 h-28 sm:w-40 sm:h-40 max-sm:p-4 cursor-pointer">
                  <img
                    src={thumbnail}
                    alt="shoe collection"
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
