import { Link } from "react-router-dom";

const Landing = (props: any) => {
  return (
    <div className="min-h-screen w-screen bg-[#1c1c1c]">
      <div className="flex h-screen w-screen justify-center pt-10 text-primary-white">
        <div className="container flex w-5/6 max-w-[590px] flex-col space-y-12 md:w-3/5">
          {/* header */}
          <div className="mb-20 flex items-center justify-between space-x-2">
            <a href="/">
              <svg
                width="94"
                height="93"
                viewBox="0 0 94 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M57.4692 18C57.4692 8.05888 65.5281 0 75.4692 0C85.4104 0 93.4692 8.05888 93.4692 18C93.4692 27.9411 85.4104 36 75.4692 36C65.5281 36 57.4692 27.9411 57.4692 18Z"
                  fill="#EDEDED"
                />
                <path
                  d="M76.5587 43.9771V56.9305C76.5587 62.6694 76.5555 66.729 76.2921 69.9005C76.0327 73.0242 75.5417 74.9265 74.7664 76.419C73.2561 79.3265 70.8855 81.6971 67.9781 83.2074C66.4856 83.9826 64.5833 84.4736 61.4596 84.733C58.288 84.9964 54.2285 84.9996 48.4896 84.9996H36.5383C30.7995 84.9996 26.7399 84.9964 23.5683 84.733C20.4446 84.4736 18.5423 83.9826 17.0498 83.2074C14.1424 81.6971 11.7718 79.3265 10.2615 76.419C9.4862 74.9265 8.99525 73.0242 8.73584 69.9005C8.47246 66.729 8.46924 62.6694 8.46924 56.9305V44.9793C8.46924 39.2404 8.47246 35.1808 8.73584 32.0092C8.99525 28.8855 9.4862 26.9832 10.2615 25.4907C11.7718 22.5833 14.1424 20.2127 17.0498 18.7024C18.5423 17.9271 20.4446 17.4362 23.5683 17.1768C26.7399 16.9134 30.7994 16.9102 36.5383 16.9102H49.4916C49.6072 14.1061 50.1669 11.4166 51.1022 8.91016L36.3604 8.91016C30.8395 8.91012 26.4477 8.9101 22.9062 9.2042C19.2789 9.50544 16.1867 10.1358 13.362 11.6031C8.99345 13.8724 5.43147 17.4344 3.16217 21.803C1.69486 24.6276 1.06452 27.7198 0.763286 31.3471C0.46918 34.8886 0.469207 39.2804 0.469239 44.8013V57.1084C0.469207 62.6294 0.46918 67.0211 0.763286 70.5626C1.06452 74.19 1.69486 77.2821 3.16217 80.1068C5.43147 84.4754 8.99345 88.0374 13.362 90.3067C16.1867 91.774 19.2789 92.4043 22.9062 92.7055C26.4477 92.9996 30.8393 92.9996 36.3602 92.9996H48.6674C54.1882 92.9996 58.5803 92.9996 62.1217 92.7055C65.749 92.4043 68.8412 91.774 71.6659 90.3067C76.0345 88.0374 79.5965 84.4754 81.8657 80.1068C83.3331 77.2821 83.9634 74.19 84.2646 70.5626C84.5587 67.0212 84.5587 62.6295 84.5587 57.1087V42.3665C82.0523 43.3018 79.3628 43.8615 76.5587 43.9771Z"
                  fill="#EDEDED"
                />
              </svg>
            </a>

            <span className="p-1.5 text-sm text-[#707070]">Login</span>
          </div>
          {/* Hero */}
          <div className="mb-20 mt-20 space-y-8 text-primary-white">
            <div>
              <h3 className="mb-2 text-lg">Simple Todo</h3>
              <p className="leading-loose text-[#a0a0a0]">
                A simple todo app for creating todos, editing them, and of
                course deleting them. Built to be simple, minimal, and void of
                fancy features. For those, go use <u>complicated todo</u>. By
                the way, this app only comes in dark mode. If you are hard of
                seeing, press ⌘ + a few times. If you're on windows, idk what to
                tell you.
              </p>
            </div>
            <div className="mt-4 space-x-6">
              <a
                href={`/register`}
                className="cursor-pointer rounded-full border border-[#3e3e3e] bg-[#2e2e2e] p-2 px-3 text-sm text-primary-white"
              >
                Signup
              </a>
              <Link
                to="/login"
                className="cursor-pointer p-1.5 text-sm text-[#707070]"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
