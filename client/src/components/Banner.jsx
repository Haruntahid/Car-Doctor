import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";
import img4 from "../assets/images/banner/4.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Banner() {
  return (
    <>
      <div className="carousel w-full lg:h-[600px] mt-12 rounded-2xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute justify-start  pt-20 pl-20 w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
            <div className="w-4/12">
              <p className="text-6xl font-bold text-white leading-[75px]">
                Affordable Price For Car Servicing
              </p>
              <p className="text-white my-10 text-[18px]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-[#FF3811] border-none text-white font-semibold text-[18px]">
                  Discover More
                </button>
                <button className="btn btn-outline text-white border-white ml-5 font-semibold text-[18px]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2  right-20 bottom-0">
            <a
              href="#slide4"
              className="btn btn-circle mr-5 hover:bg-[#FF3811]"
            >
              <FaArrowLeft size={20} />
            </a>
            <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">
              <FaArrowRight size={20} />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-2xl" />
          <div className="absolute justify-start  pt-20 pl-20 w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full rounded-2xl">
            <div className="w-4/12">
              <p className="text-6xl font-bold text-white leading-[75px]">
                Affordable Price For Car Servicing
              </p>
              <p className="text-white my-10 text-[18px]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-[#FF3811] border-none text-white font-semibold text-[18px]">
                  Discover More
                </button>
                <button className="btn btn-outline text-white border-white ml-5 font-semibold text-[18px]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2  right-20 bottom-0">
            <a
              href="#slide1"
              className="btn btn-circle mr-5 hover:bg-[#FF3811]"
            >
              <FaArrowLeft size={20} />
            </a>
            <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">
              <FaArrowRight size={20} />
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-2xl" />
          <div className="absolute justify-start  pt-20 pl-20 w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full rounded-2xl">
            <div className="w-4/12">
              <p className="text-6xl font-bold text-white leading-[75px]">
                Affordable Price For Car Servicing
              </p>
              <p className="text-white my-10 text-[18px]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-[#FF3811] border-none text-white font-semibold text-[18px]">
                  Discover More
                </button>
                <button className="btn btn-outline text-white border-white ml-5 font-semibold text-[18px]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2  right-20 bottom-0">
            <a
              href="#slide2"
              className="btn btn-circle mr-5 hover:bg-[#FF3811]"
            >
              <FaArrowLeft size={20} />
            </a>
            <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">
              <FaArrowRight size={20} />
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-2xl" />
          <div className="absolute justify-start  pt-20 pl-20 w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full rounded-2xl">
            <div className="w-4/12">
              <p className="text-6xl font-bold text-white leading-[75px]">
                Affordable Price For Car Servicing
              </p>
              <p className="text-white my-10 text-[18px]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-[#FF3811] border-none text-white font-semibold text-[18px]">
                  Discover More
                </button>
                <button className="btn btn-outline text-white border-white ml-5 font-semibold text-[18px]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2  right-20 bottom-0">
            <a
              href="#slide3"
              className="btn btn-circle mr-5 hover:bg-[#FF3811]"
            >
              <FaArrowLeft size={20} />
            </a>
            <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">
              <FaArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
