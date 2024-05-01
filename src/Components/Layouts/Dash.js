import { Link } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { RiUserAddLine } from "react-icons/ri";
import { PiBooks, PiUser, PiStudent } from "react-icons/pi";
import { useContext, useEffect } from "react";
import UserContext from "../../Hooks/UserContext";
import axios from "../../config/api/axios";

const Dash = () => {
  const { user, setPaperList } = useContext(UserContext);

  useEffect(() => {
    const getPapers = async () => {
      const response = await axios.get(`paper/${user.userType}/${user._id}`);
      setPaperList(response.data);
    };
    getPapers();
  }, [setPaperList, user]);

  return (
    <main className="self-center ">
      <h2 className="m-6 font-spectral mx-auto text-center text-6xl font-bold dark:text-violet-600">
        Home
      </h2>
      <div className="grid grid-cols-1 place-content-center gap-3 px-1 py-4 lg:grid-cols-2 lg:gap-4 lg:px-8 xl:grid-cols-3 bg-white">
        <Link
          className="flex gap-2 rounded-lg bg-violet-600 p-6 text-base hover:bg-violet-400/90  dark:hover:bg-violet-800 dark:hover:text-slate-300 duration-200 lg:text-lg"
          to={"./paper"}
        >
          <GiBookshelf className="text-[2.5rem] lg:text-[4rem] text-white " />
          <div className="font-semibold text-white">
            Papers
            <p className="text-sm font-normal lg:text-base ">
              View Papers and Notes
            </p>
          </div>
        </Link>

        <Link
          className="flex gap-2 rounded-lg bg-violet-600 p-6 text-base hover:bg-violet-400/90  dark:hover:bg-violet-800 dark:hover:text-slate-300 duration-200 lg:text-lg"
          to={"./attendance"}
        >
          <IoCalendarOutline className="text-[2.5rem] lg:text-[4rem] text-white " />
          <div className="font-semibold text-white">
            Attendance
            <p className="text-sm font-normal lg:text-base ">
              Add or Edit Attendance
            </p>
          </div>
        </Link>

        <Link
          className="flex gap-2 rounded-lg bg-violet-600 p-6 text-base hover:bg-violet-400/90  dark:hover:bg-violet-800 dark:hover:text-slate-300 duration-200 lg:text-lg"
          to={"./internal"}
        >
          <HiOutlineDocumentReport className="text-[2.5rem] lg:text-[4rem] text-white " />
          <div className="font-semibold text-white">
            Internal Mark
            <p className="text-sm font-normal lg:text-base ">
              View or Edit Internal Marks
            </p>
          </div>
        </Link>

        <Link
          className="flex gap-2 rounded-lg bg-violet-600 p-6 text-base hover:bg-violet-400/90  dark:hover:bg-violet-800 dark:hover:text-slate-300 duration-200 lg:text-lg"
          to={"./time_schedule"}
        >
          <AiOutlineSchedule className="text-[2.5rem] lg:text-[4rem] text-white " />
          <div className="font-semibold text-white">
            Time Schedule
            <p className="text-sm font-normal lg:text-base ">
              View or Edit Time Schedule
            </p>
          </div>
        </Link>

        {user.role === "HOD" && (
          <>
            <Link
              className="flex gap-2 rounded-lg bg-violet-600 p-6 text-base hover:bg-violet-400/90  dark:hover:bg-violet-800 dark:hover:text-slate-300 duration-200 lg:text-lg text-white"
              to={"./add_paper"}
            >
              <BiBookAdd className="text-[2.5rem] lg:text-[4rem] text-white " />
              <div className="font-semibold text-white">
                Add Paper
                <p className="text-sm font-normal lg:text-base ">
                  Add a New Paper
                </p>
              </div>
            </Link>

            <Link
              className="flex gap-2 rounded-lg bg-violet-600 p-6 text-base hover:bg-violet-400/90  dark:hover:bg-violet-800 dark:hover:text-slate-300 duration-200 lg:text-lg "
              to={"./approve_staff"}
            >
              <RiUserAddLine className="text-[2.5rem] lg:text-[4rem] text-white" />
              <div className="font-semibold text-white">
                Approve Staff
                <p className="text-sm font-normal lg:text-base ">
                  Approve registered staff(s)
                </p>
              </div>
            </Link>
          </>
        )}
        {user.role === "student" && (
          <Link
            className="flex gap-2 rounded-lg bg-violet-600 p-6 text-base hover:bg-violet-400/90  dark:hover:bg-violet-800 dark:hover:text-slate-300 duration-200 lg:text-lg"
            to={"./join_paper"}
          >
            <PiBooks className="text-[2.5rem] lg:text-[4rem] text-white " />
            <div className="font-semibold text-white">
              Manage Paper
              <p className="text-sm font-normal lg:text-base ">
                Join or Leave Paper
              </p>
            </div>
          </Link>
        )}
        <Link
          className="flex gap-2 rounded-lg bg-violet-600 p-6 text-base hover:bg-violet-400/90  dark:hover:bg-violet-800 dark:hover:text-slate-300 duration-200 lg:text-lg text-white"
          to={"./profile"}
        >
          {user.role === "student" ? (
            <PiStudent className="text-[2.5rem] lg:text-[4rem] " />
          ) : (
            <PiUser className="text-[2.5rem] lg:text-[4rem] " />
          )}
          <div className="font-semibold">
            Profile
            <p className="text-sm font-normal lg:text-base ">
              View or Edit Profile
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Dash;
