import Link from "next/link";
import { FaGoogle, FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

//import SnapChefLogo from "../assets/SnapChefV1.svg";

export default function SignInBox() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          {/* Sign In Section */}
          <div className="w-3/5 p-5">
            <div className="py-10">
              <h2 className="text-3xl font-bold text-custom-main-dark mb-2">
                Sign In
              </h2>
              <div className="border-2 w-10 border-custom-main-dark inline-block mb-2"></div>
              <div className="flex flex-col items-center">
                {/* Username */}
                <h1 className="flex w-64 text-xs">Username</h1>
                <div className="bg-gray-200 w-64 p-2 flex items-center m-2 rounded-2xl">
                  <FaRegUser className="text-gray-400 m-2" />
                  <input
                    type="username"
                    name="username"
                    placeholder="Enter your username"
                    className="border-2 bg-gray-200 
                                outline-none text-sm flex-1"
                  />
                </div>
                {/* END OF: Username */}
                {/* Password */}
                <h1 className="flex w-64 text-xs">Password</h1>
                <div className="bg-gray-200 w-64 p-2 flex items-center m-2 rounded-2xl">
                  <RiLockPasswordLine className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="border-2 bg-gray-200 
                                outline-none text-sm flex-1"
                  />
                </div>
                {/* END OF: Password */}
                <div className="flex w-64 mb-5 justify-between text-gray-600">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />{" "}
                    Remember Me
                  </label>
                  <a href="#" className="text-xs">
                    Forgot Password?
                  </a>
                </div>
                <a
                  href="#"
                  className="border-2 border-custom-main-dark text-custom-main-dark rounded-full px-12 py-2 inline-block font-semibold
                            hover:bg-custom-main-dark hover:text-white"
                >
                  Sign In
                </a>
                <p className="text-gray-400 my-4"> or </p>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="border-2 border-gray-400 rounded-full p-4 mx-1 hover:bg-custom-main-dark hover:text-white"
                  >
                    <FaGoogle className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* END OF: Sign In Section */}
          {/*Register Section */}
          <div className="w-2/5 bg-custom-main-dark text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Create Account</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Start saving recipes today!</p>
            <Link
              href="/signup"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold
                    hover:bg-white hover:text-custom-main-dark"
            >
              Sign Up
            </Link>
          </div>
          {/* END OF: Register Section */}
        </div>
      </main>
    </div>
  );
}
