import Link from "next/link";
import { FaGoogle, FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

export default function SignUpBox() {
  return (
    <div>
      {/* Sign Up Box */}
      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center px-10 text-center rounded-2xl shadow-2xl max-w-xl">
          <div className="w-4/5 p-5">
            <div className="py-10">
              <h2 className="text-3xl font-bold text-custom-main-dark mb-2">
                Create Account
              </h2>
              <div className="border-2 w-10 border-custom-main-dark inline-block mb-2"></div>
              <p className=" text-xs mb-2">Fill in your credentials below.</p>
              <div className="flex flex-col items-center">
                    {/* Username */}
                    <h1 className="flex w-64 text-xs">Username</h1>
                    <div className="bg-gray-200 w-64 p-2 flex items-center m-2 rounded-2xl">
                        <FaRegUser className="text-gray-400 m-2" />
                        <input
                            type="username"
                            name="username"
                            placeholder="Enter username"
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
                        placeholder="Enter password"
                        className="border-2 bg-gray-200 
                                    outline-none text-sm flex-1"
                    />
                    </div>
                    {/* END OF: Password */}
                    <a href="#" className="border-2 border-custom-main-dark text-custom-main-dark 
                            rounded-full px-12 py-2 mt-5 inline-block font-semibold
                            hover:bg-custom-main-dark hover:text-white"> Sign Up
                    </a>
              </div>
            </div>
                <Link className="text-xs mt-3 text-right" href={"/signin"}>
                    Already have an account? <span 
                    className="underline px-1"> Login </span>
                </Link>
          </div>
        </div>
      </main>
      {/* END OF: Sign Up Box  */}
    </div>
  );
}
