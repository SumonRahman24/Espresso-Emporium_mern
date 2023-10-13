import { PropTypes } from "prop-types";
import ProductCard from "./ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Products = ({ coffeData }) => {
  const [products, setProducts] = useState(coffeData);

  const handleDelete = (_id) => {
    console.log(_id, "working");

    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure that you want to delete it?!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/addCoffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainData = products.filter((data) => data._id !== _id);
              setProducts(remainData);
            }
          });
      }
    });
  };

  return (
    <div className="text-center py-10 bg-[url('/public/images/more/1.png')]  bg-no-repeat bg-contain mt-12">
      <p>--- Sip & Savor ---</p>
      <h2 className="text-3xl font-bold mb-3 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
        Our Popular Products
      </h2>
      <Link to={"/addCoffee"}>
        <button className="bg-[#E3B577] btn btn-primary  rounded border-[#331A15] border-2 text-gray-50 font-normal capitalize hover:text-white btn-sm h-10 ">
          Add Coffee{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
          >
            <path
              d="M13.7143 11.4286V2.28571H2.28571V11.4286C2.28571 12.0348 2.52653 12.6162 2.95518 13.0448C3.38384 13.4735 3.96522 13.7143 4.57143 13.7143H11.4286C12.0348 13.7143 12.6162 13.4735 13.0448 13.0448C13.4735 12.6162 13.7143 12.0348 13.7143 11.4286ZM1.14286 0H18.2857C18.8919 0 19.4733 0.240816 19.902 0.66947C20.3306 1.09812 20.5714 1.67951 20.5714 2.28571V5.71429C20.5714 6.3205 20.3306 6.90188 19.902 7.33053C19.4733 7.75918 18.8919 8 18.2857 8H16V11.4286C16 12.641 15.5184 13.8038 14.6611 14.6611C13.8037 15.5184 12.641 16 11.4286 16H4.57143C3.35901 16 2.19625 15.5184 1.33894 14.6611C0.481631 13.8038 0 12.641 0 11.4286V1.14286C0 0.839753 0.120408 0.549062 0.334735 0.334735C0.549063 0.120408 0.839752 0 1.14286 0ZM16 2.28571V5.71429H18.2857V2.28571H16Z"
              fill="#331A15"
            />
          </svg>
        </button>
      </Link>
      <div className="grid justify-items-center grid-cols-1  lg:grid-cols-2 md:px-24   md:justify-items-center md:container ">
        {products?.map((singleCoffeeData) => (
          <ProductCard
            key={singleCoffeeData?._id}
            singleCoffeeData={singleCoffeeData}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  coffeData: PropTypes.array.isRequired,
};

export default Products;
