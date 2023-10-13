import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const coffeData = useLoaderData();
  console.log(coffeData);

  const { coffe, details, chef, supplier, taste, category, photoUrl } =
    coffeData || {};
  return (
    <div className="py-10">
      <div className="flex justify-center items-center">
        <div className="ml-10">
          <Link
            className="flex items-center gap-2 mb-5 font-rancho text-xl font-bold hover:text-blue-400 "
            to={"/"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
            >
              <path
                d="M16.5 8H1.5M1.5 8L8.25 14.75M1.5 8L8.25 1.25"
                stroke="#331A15"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>{" "}
            <button className="">Back to home</button>
          </Link>
          <div className="flex justify-around  w-[45rem] h-80 flex-col  items-center bg-[#F4F3F0] border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 ">
            <div>
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={photoUrl}
                alt=""
              />
            </div>
            <div className="  ">
              <div>
                <h5 className="mb-2 text-lg  text-gray-500">
                  <span className="text-black font-semibold">Name:</span>{" "}
                  {coffe}
                </h5>
                <h5 className="mb-2 text-lg  text-gray-500">
                  <span className="text-black font-semibold">Chef:</span> {chef}
                </h5>
                <h5 className="mb-2 text-lg  text-gray-500">
                  <span className="text-black font-semibold">Supplier:</span>{" "}
                  {supplier}
                </h5>
                <h5 className="mb-2 text-lg  text-gray-500">
                  <span className="text-black font-semibold">Taste:</span>{" "}
                  {taste}
                </h5>
                <h5 className="mb-2 text-lg  text-gray-500">
                  <span className="text-black font-semibold">Category:</span>{" "}
                  {category}
                </h5>
                <h5 className="mb-2 text-lg  text-gray-500">
                  <span className="text-black font-semibold">Details:</span>{" "}
                  {details}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
