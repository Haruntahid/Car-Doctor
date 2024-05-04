import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className="mt-24">
        <div className="text-center ">
          <p className="text-xl font-bold text-[#FF3811]">Service</p>
          <p className="font-bold text-5xl">Our Service Area</p>
          <p className="text-[#737373] mt-5">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which dont look even slightly
            believable.{" "}
          </p>
        </div>
        {/* cards */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCart key={service._id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="btn btn-outline text-[#FF3811] border-[#FF3811] text-[18px]">
            More Services
          </button>
        </div>
      </div>
    </>
  );
}

export default Services;
