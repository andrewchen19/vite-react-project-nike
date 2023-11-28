import React from "react";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex max-lg:flex-col items-center justify-between gap-10 max-container"
    >
      <h3 className="font-palanquin text-3xl lg:text-4xl lg:max-w-md text-center font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>

      <div className="w-full lg:max-w-[40%] flex justify-between items-center p-2.5 border border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="outline-none ml-2"
        />
        <button className="btn btn-sm btn-primary rounded-full capitalize">
          sign up
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
