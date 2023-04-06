/* eslint-disable @next/next/no-img-element */
const header = () => {
  return (
    <header>
      <div className="fixed w-full">
        <div className="py-2.5">
          <div className="flex justify-between max-w-screen-2xl mx-auto px-5">
            <div>
              <h1 className="font-extrabold text-3xl">aliments</h1>
            </div>
            <div>
              <button className="bg-black p-2 rounded-full ">
                <img className="h-5 w-5" alt="cart" src="/cart.png"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
