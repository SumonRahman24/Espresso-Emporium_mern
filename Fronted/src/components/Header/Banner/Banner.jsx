const Banner = () => {
  return (
    <div className="bg-[url('/public/images/more/3.png')] h-[80vh] bg-cover  flex justify-center items-center lg:pl-96">
      <div className=" space-y-2 text-center lg:text-start px-12 lg:px-48">
        <h2 className="text-white text-3xl font-raleway">
          Would you like a Cup of Delicious Coffee?
        </h2>

        <p className="text-gray-400 font-raleway">
          It is coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <div>
          <button className="bg-[#E3B577] font-rancho btn btn-success   border-none rounded-none text-black capitalize btn-sm text-lg  h-10 ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
