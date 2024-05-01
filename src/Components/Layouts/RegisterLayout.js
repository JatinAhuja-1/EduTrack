import React from "react";
import { FaUniversity } from "react-icons/fa";
import { PiStudentThin, PiUserThin } from "react-icons/pi";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";

// layout of the register route
const RegisterLayout = () => {
  const location = useLocation().pathname;

  return (
    <main
      id="register"
      className="relative z-0 flex h-screen items-center justify-center  to-slate-300 py-8 text-slate-900  dark:text-slate-200"
    >
      <section className="my-8 flex h-fit w-fit  flex-col  justify-start gap-6 rounded-md p-4 text-black opacity-70  focus:opacity-100 dark:text-black-50 md:p-8 lg:flex-row xl:w-1/2 border-solid border-2 border-black">
        <div className="flex flex-col-reverse justify-between lg:flex-col">
          <h1 className="text-4xl font-semibold lg:text-5xl">
            {location === "/register/reg_staff" ? "Staff" : "Student"}
            <br />
            Registration
          </h1>
          <div className="m-2 flex flex-col-reverse gap-4 text-4xl md:text-5xl  lg:flex-col ">
            <div className="flex gap-4 ">
              <NavLink to={"./reg_staff"}>
                <PiUserThin className="rounded-full border-[1px] border-slate-900 p-[2px] font-light dark:border-slate-300 md:p-2" />
              </NavLink>
              <NavLink to={"./reg_student"}>
                <PiStudentThin className="rounded-full border-[1px] border-slate-900 p-[2px] font-light dark:border-slate-300 md:p-2" />
              </NavLink>
            </div>
            <Link
              className="flex items-center font-spectral text-xl font-semibold text-slate-900 dark:text-slate-50"
              to="../"
            >
              <FaUniversity className="text-black mr-3" />
              <p className="text-black decoration-2 hover:underline ">
                Edu
                <span className="text-violet-600">Track</span>
              </p>
            </Link>
          </div>
        </div>
        <div className=" scrollWidth w-full">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default RegisterLayout;
