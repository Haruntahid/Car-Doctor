import PropTypes from "prop-types";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

function ServiceCart({ service }) {
  const { _id, title, img, price } = service;
  return (
    <>
      <div className="card p-6 bg-base-100 shadow-xl border-2 border-[#E8E8E8]">
        <figure>
          <img src={img} alt={title} className="rounded-xl h-[250px] w-full" />
        </figure>
        <h2 className="my-4 text-[24px] text-[#444] font-bold">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-xl text-[#FF3811]">
            Price : ${price}
          </p>
          <Link
            to={`/checkout/${_id}`}
            className="hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center"
          >
            <IoArrowForward size={25} className="text-[#FF3811]" />
          </Link>
        </div>
      </div>
    </>
  );
}

ServiceCart.propTypes = {
  service: PropTypes.object,
};

export default ServiceCart;
