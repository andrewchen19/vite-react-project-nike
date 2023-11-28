import { services } from "../utility";

const Services = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-x-4 max-container">
      {services.map((service) => {
        const { icon, label, subtext } = service;
        return (
          <article
            key={label}
            className="group w-full rounded-[20px] shadow-xl hover:shadow-3xl duration-300 px-8 py-10 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-coral-red grid place-items-center text-[18px] group-hover:scale-105">
              {icon}
            </div>
            <h3 className="mt-4 font-palanquin text-2xl leading-normal font-bold">
              {label}
            </h3>
            <p className="mt-4 font-montserrat text-lg leading-normal text-slate-gray">
              {subtext}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default Services;
