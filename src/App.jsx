import Navbar from "./components/Navbar";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  Subscribe,
  SpecialOffers,
} from "./sections";

function App() {
  return (
    <main className="relative">
      <Navbar />
      <section className="padding-b xl:padding-l wide:padding-r">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue ">
        <CustomerReviews />
      </section>
      <section className="padding-x py-16 sm:py-32 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
