import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpateProduct = () => {
  const productData = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffe = form.coffe.value;
    const details = form.details.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photoUrl = form.photoUrl.value;

    const coffeInfo = {
      coffe,
      details,
      chef,
      supplier,
      taste,
      category,
      photoUrl,
    };

    console.log(coffeInfo);

    fetch(`http://localhost:4000/addCoffee/${productData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Product is Updated",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    // <div>
    //   <Link to={"/"}>Back to home</Link>
    //   <form
    //     onSubmit={handleUpdate}
    //     className="w-6/12 container m-auto mt-20 bg-black p-10"
    //   >
    //     <div className="grid md:grid-cols-2 md:gap-6"></div>
    //     <div className="grid md:grid-cols-2 md:gap-6">
    //       <div className="relative z-0 w-full mb-6 group">
    //         <input
    //           type="text"
    //           name="coffe"
    //           id="floating_phone"
    //           className="block py-2.5 px-0 w-full text-sm font-bold text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-sm dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           htmlFor="floating_phone"
    //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Coffee Name
    //         </label>
    //       </div>
    //       <div className="relative z-0 w-full mb-6 group">
    //         <input
    //           type="text"
    //           name="chef"
    //           id="floating_company"
    //           className="block py-2.5 px-0 w-full text-sm font-bold text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-sm dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           htmlFor="floating_company"
    //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Coffee Chef
    //         </label>
    //       </div>
    //       <div className="relative z-0 w-full mb-6 group">
    //         <input
    //           type="text"
    //           name="supplier"
    //           id="floating_company"
    //           className="block py-2.5 px-0 w-full text-sm font-bold text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-sm dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           htmlFor="floating_company"
    //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Coffe Supplier
    //         </label>
    //       </div>
    //       <div className="relative z-0 w-full mb-6 group">
    //         <input
    //           type="text"
    //           name="taste"
    //           id="floating_company"
    //           className="block py-2.5 px-0 w-full text-sm font-bold text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-sm dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           htmlFor="floating_company"
    //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Coffee Taste
    //         </label>
    //       </div>
    //       <div className="relative z-0 w-full mb-6 group">
    //         <input
    //           type="text"
    //           name="category"
    //           id="floating_company"
    //           className="block py-2.5 px-0 w-full text-sm font-bold text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-sm dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           htmlFor="floating_company"
    //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Coffee Category
    //         </label>
    //       </div>
    //       <div className="relative z-0 w-full mb-6 group">
    //         <input
    //           type="text"
    //           name="details"
    //           id="floating_company"
    //           className="block py-2.5 px-0 w-full text-sm font-bold text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-sm dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           htmlFor="floating_company"
    //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Coffee Details
    //         </label>
    //       </div>
    //     </div>

    //     <div className="relative z-0 w-full mb-6 group">
    //       <input
    //         type="url"
    //         name="photoUrl"
    //         id="floating_email"
    //         className="block py-2.5 px-0 w-full text-sm font-bold text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-sm dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //         placeholder=" "
    //         required
    //       />
    //       <label
    //         htmlFor="floating_email"
    //         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //       >
    //         Photo URL
    //       </label>
    //     </div>
    //     <button
    //       type="submit"
    //       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div>

    <div className="lg:w-6/12 px-10 lg:px-0 container m-auto  space-y-5 my-8">
      <Link
        className="flex items-center gap-2 mb-5 hover:text-blue-400 font-rancho text-xl font-bold"
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
        <button>Back to home</button>
      </Link>
      <form onSubmit={handleUpdate} className="bg-[#F4F3F0]   p-10 rounded">
        <div className=" text-center space-y-2 pb-10">
          <h2 className="text-2xl font-bold">Update Existing Coffee Details</h2>
          <p className="text-gray-500">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group ">
            <input
              type="text"
              name="coffe"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm bg-transparent font-bold text-black  border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              defaultValue={productData?.coffe}
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm font-bold text-black  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Coffee Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="chef"
              id="floating_company"
              className="block py-2.5 px-0 w-full font-bold text-black  text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              defaultValue={productData?.chef}
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-smfont-bold text-black duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Coffee Chef
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="supplier"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm font-bold text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-sm dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              defaultValue={productData?.supplier}
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Coffe Supplier
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="taste"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm font-bold text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-sm dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              defaultValue={productData?.taste}
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm  dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Coffee Taste
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="category"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm font-bold text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-sm dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              defaultValue={productData?.category}
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Coffee Category
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="details"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm font-bold text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-sm dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              defaultValue={productData?.details}
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Coffee Details
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="url"
            name="photoUrl"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm font-bold text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-sm dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            defaultValue={productData?.photoUrl}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Photo URL
          </label>
        </div>
        <button
          type="submit"
          className=" w-full bg-[#D2B48C] p-2 text-[#331A15] border-[#331A15] btn btn-success border-2 rounded-md font-medium  text-center"
        >
          Add Coffee
        </button>
        {/* <Toaster /> */}
      </form>
    </div>
  );
};

export default UpateProduct;
