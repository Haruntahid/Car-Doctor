import person from "../assets/images/about_us/person.jpg";
import parts from "../assets/images/about_us/parts.jpg";

function AboutUs() {
  return (
    <>
      <div className="flex mt-24 gap-14">
        <div className="w-1/2 relative">
          <img src={person} alt="" className="rounded-2xl w-[80%] h-[80%]" />
          <img
            src={parts}
            alt=""
            className="rounded-2xl border-8 absolute bottom-0 w-1/2  right-0"
          />
        </div>
        <div className="w-1/2 space-y-7">
          <p className="text-xl font-bold text-[#FF3811]">About Us</p>
          <p className="text-5xl font-bold text-[#151515]">
            We are qualified <br /> & of experience <br /> in this field
          </p>
          <p className="text-[#737373] max-w-[500px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.{" "}
          </p>
          <p className="text-[#737373] max-w-[500px]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] border-none text-white font-semibold text-[18px]">
            Get More Info
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
