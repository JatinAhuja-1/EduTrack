import { useContext } from "react";
import { useRouteError } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import UserContext from "../../Hooks/UserContext";

const ErrorElement = () => {
  const { user } = useContext(UserContext);
  const error = useRouteError();

  return (
    <div className="relative flex flex-col bg-white">
      {user && <Header />}
      <main className="mt-[3.15rem] flex h-[calc(100vh-3.15rem)] whitespace-nowrap bg-white  dark:from-white dark:to-violet-950/60">
        {user && <Nav />}
        <div className="outlet-border z-[1] mt-1 w-full overflow-y-auto  p-4 text-slate-900 bg-violet-300 dark:from-75% dark:to-[#200c45] dark:text-slate-400 lg:p-10">
          <h2 className="text-6xl font-bold text-violet-700 ">Oops!</h2>
          <p className="text-red-500">
            Sorry, an unexpected error has occurred.
          </p>
          <p>
            <i className="text-red-500">{error.statusText || error.message}</i>
          </p>
        </div>
      </main>
    </div>
  );
};

export default ErrorElement;
