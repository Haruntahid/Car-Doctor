import img from "../assets/images/login/login.svg";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function SignUp() {
  return (
    <>
      <div className="flex items-center">
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
        {/* from */}
        <div className="w-1/2">
          <div className="w-full max-w-lg p-16 space-y-3 rounded-xl bg-white text-[#444] border-2 border-[#D0D0D0]">
            <h1 className="text-4xl font-bold text-center">Sign Up</h1>
            <form noValidate="" action="" className="space-y-6">
              <div className="space-y-2 text-sm mt-10">
                <label className="block text-[#444]  font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-md border border-[#E8E8E8]  text-[#444] "
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="block text-[#444]  font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-md border border-[#E8E8E8]  text-[#444] "
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="block text-[#444]  font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Type your Password"
                  className="w-full px-4 py-3 rounded-md border border-[#E8E8E8]  text-[#444] "
                />
              </div>
              <button className="block w-full p-3 text-center rounded-sm text-white bg-[#FF3811]">
                Sign Up
              </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
              <p className="px-3 text-sm text-gray-400">Or Sign Up with</p>
              <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <FaGoogle />
              </button>
              <button
                aria-label="Log in with Twitter"
                className="p-3 rounded-sm"
              >
                <FaGithub />
              </button>
            </div>
            <p className="text-[18px] text-center sm:px-6 text-[#737373]">
              Don&apos;t have an account?
              <a
                rel="noopener noreferrer"
                href="#"
                className="underline text-[#FF3811]"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
