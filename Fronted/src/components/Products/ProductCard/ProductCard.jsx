import { PropTypes } from "prop-types";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

const ProductCard = ({ singleCoffeeData, handleDelete }) => {
  const { coffe, chef, _id, photoUrl } = singleCoffeeData || {};

  // const handleDelete = (_id) => {

  // };

  return (
    <div>
      <div className="text-center">
        <div className="md:ml-10 py-4 md:p-0 md:mt-10 ">
          <div className="flex flex-col w-[20rem]  md:w-[32rem] md:h-60 justify-between py-10 px-5  gap-4 bg-[#F5F4F1] border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
            <div className="flex justify-center">
              <img
                className="object-cover w-full  md:h-auto md:w-48 "
                src={photoUrl}
                alt=""
              />
            </div>
            <div className="flex flex-col md:flex-row  justify-between items-center w-full px-3  ">
              <div className="text-black text-start">
                <h5 className="mb-2 text-lg  text-gray-500">
                  <span className="text-black font-semibold">Name:</span>{" "}
                  {coffe}
                </h5>
                <h5 className="mb-2 text-lg  text-gray-500">
                  <span className="text-black font-semibold">Chef:</span> {chef}
                </h5>
                <h5 className="mb-2 text-lg  text-gray-500">
                  <span className="text-black font-semibold">Price:</span> 290TK
                </h5>
              </div>
              <div className="flex flex-row md:flex-col gap-3">
                <Link to={`/details/${_id}`}>
                  <button className="bg-[#D2B48C] btn-secondary btn btn-sm border-none text-white rounded p-1">
                    <AiOutlineEye className="text-2xl" />
                  </button>
                </Link>
                <Link to={`/update/${_id}`}>
                  <button className="bg-[#534d51] text-white btn btn-sm border-none rounded btn-success p-1">
                    <MdOutlineDriveFileRenameOutline className="text-2xl" />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(_id)}
                  className="bg-red-400 rounded text-white btn btn-sm border-none p-1 btn-primary"
                >
                  <AiOutlineDelete className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  singleCoffeeData: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ProductCard;
