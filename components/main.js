/* eslint-disable @next/next/no-img-element */
const main = () => {
  return (
    <section>
      <div className="grid grid-cols-2 px-10 lg:py-12">
        <div className="  place-self-center mr-auto  ">
          <h1 className="text-4xl font-bold   md:text-5xl 2xl:text-8xl mb-5">
            {' '}
            UItimate <br /> Fiery Sensation{' '}
          </h1>

          <p className="md:text-5xl 2xl:text-7xl font-light mb-10">
            For a Exotic Experience
          </p>

          <p className="lg:text-lg 2xl:text-3xl text-gray-300 mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore
          </p>
          <div className="flex  gap-x-5 lg:mb-10 xl:mb-40 ">
            <div>
              {' '}
              <button className="py-4 px-10 bg-red-700 rounded-lg text-white text-sm">
                View Menu
              </button>
            </div>
            <div>
              <button className="py-4 px-10 bg-gray-200 rounded-lg text-gray-600 text-sm">
                Book Now
              </button>
            </div>


          </div>
          <div>
            <p className="xl:text-2xl font-extrabold">Breakfast</p>
            <p className="xl:text-lg text-gray-300 px-10  ">9:00 am to 9:30 am</p>
          </div>
        </div>

        <div className="  place-self-center ">
          <img alt="img" src="/1.png"></img>
        </div>
      </div>
    </section>
  );
};

export default main;
