const CoffeeQuality = () => {
  return (
    <div className="bg-[#ECEAE3]">
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center px-20 container m-auto  lg:grid-cols-4">
        <div className=" w-48 py-6 space-y-2">
          <img src="/public/images/icons/1.png" alt="icons" />
          <h2 className="text-xl font-bold">Awesome Aroma</h2>
          <p className="text-gray-700">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className=" w-48 py-6 space-y-2">
          <img src="/public/images/icons/2.png" alt="icons" />
          <h2 className="text-xl font-bold">High Quality</h2>
          <p className="text-gray-700">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className=" w-48 py-6 space-y-2">
          <img src="/public/images/icons/3.png" alt="icons" />
          <h2 className="text-xl font-bold">Pure Grades</h2>
          <p className="text-gray-700">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className=" w-48 py-6 space-y-2">
          <img src="/public/images/icons/4.png" alt="icons" />
          <h2 className="text-xl font-bold">Proper Roasting</h2>
          <p className="text-gray-700">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeQuality;
