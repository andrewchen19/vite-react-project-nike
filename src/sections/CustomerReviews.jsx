import { reviews } from "../utility";
import { MdOutlineStar } from "react-icons/md";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl text-center font-bold capitalize">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="mt-4 info-text text-center max-w-lg m-auto">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-24 flex justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => {
          const { imgURL, customerName, rating, feedback } = review;

          return (
            <article
              key={customerName}
              className="flex flex-col justify-center items-center"
            >
              <img
                src={imgURL}
                alt="customer"
                className="rounded-full w-[120px] h-[120px] object-center"
              />
              <p className="mt-6 info-text max-w-sm text-center">{feedback}</p>
              <div className="mt-4 flex justify-start gap-2">
                <MdOutlineStar className="w-[24px] h-[24px] text-yellow-500" />
                <p>({rating})</p>
              </div>
              <h3 className="mt-1 font-palanquin text-xl text-center font-bold ">
                {customerName}
              </h3>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
