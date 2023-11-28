import { products } from "../utility";
import { MdOutlineStar } from "react-icons/md";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin text-4xl font-bold capitalize">
          Our <span className="text-coral-red">Popular</span> products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 sm:gap-4">
        {products.map((product) => {
          const { imgURL, name, price, rate } = product;
          return (
            <article key={name} className="flex-1 flex flex-col w-full gap-1.5">
              <img
                src={imgURL}
                alt={name}
                className="w-[240px] h-[240px] cursor-pointer hover:scale-[1.03] duration-300"
              />

              <div className="mt-4 flex justify-start gap-2">
                <MdOutlineStar className="w-[24px] h-[24px] text-yellow-500" />
                <p>({rate})</p>
              </div>

              <h3 className="text-xl leading-normal font-semibold font-palanquin">
                {name}
              </h3>

              <p className="tracking-wide font-montserrat text-slate-gray">
                {price}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
