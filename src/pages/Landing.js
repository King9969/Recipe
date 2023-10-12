import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Landing() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  window.scrollTo(0, 0);
  return (
    <section className="bg-gray-900 text-gray-100 overflow-hidden">
      <Intro />
      <Rcontent />
      <Content />
      <Step />
      <Lower />
    </section>
  );
}
const Intro = () => {
  const backgroundImageUrl =
    "url(https://www.herofincorp.com/public/admin_assets/upload/blog/64b91a06ab1c8_food%20business%20ideas.webp";

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center relative">
      <div
        className="absolute inset-1  "
        style={{
          backgroundImage: backgroundImageUrl,
          backgroundSize: "cover",
          left: -80,
          right: -80,
          borderRadius: "10px",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      ></div>

      <div className="mx-auto max-w-3xl text-center relative ">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Let's Cook
        </h1>

        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Welcome to Recipe Sharing
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/product"
            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-gray-100 hover:bg-transparent hover:text-gray-100 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          >
            Browse Recipe
          </Link>

          <a
            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-gray-100 hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="/about"
          >
            Add Recipe
          </a>
        </div>
      </div>
    </div>
  );
};

const Step = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-800 uppercase rounded-full bg-white">
            Brand new
          </p>
        </div>
        <div
          data-aos="fade"
          data-aos-offset="200"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative"></span>
            </span>{" "}
            Explore Our Recipe
          </h2>
          <p className="text-base text-gray-300 md:text-lg">
            Discover brand new rental opportunities for you and your family.
          </p>
        </div>
      </div>
      <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold">Step 1</p>
              <svg
                className="w-6 text-blue-600  transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="800"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold">Step 2</p>
              <svg
                className="w-6 text-blue-600 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold">Step 3</p>
              <svg
                className="w-6 text-blue-600 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="400"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold">Success</p>
              <svg
                className="w-8 text-blue-600"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="6,12 10,16 18,8"
                />
              </svg>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Lower = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8">
      <div data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="300">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase rounded-full bg-white">
              Get New Lisitng updates
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Find</span>
            </span>{" "}
            Your Perfect Cook
          </h2>
          <p className="text-base text-gray-300 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
          <input
            placeholder="Email"
            required=""
            type="text"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-blue-600 hover:bg-white hover:text-blue-600 focus:shadow-outline focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-in"
        data-aos-duration="600"
      ></div>
    </div>
  );
};

export const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <div className="flex py-20 flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg max-md:py-2">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Search and Cook Your food
              </h2>
              <p className="text-base text-gray-300 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-deep-purple-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            >
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://th.bing.com/th/id/OIP.HrLvAtqD6i22W4L1sS06vgHaFj?pid=ImgDet&w=800&h=600&rs=1"
                alt=""
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="600"
            >
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://th.bing.com/th/id/OIP.udGMazHDf1c8crEVKRJ-1AHaE7?pid=ImgDet&w=1280&h=853&rs=1"
                alt=""
              />
            </div>
          </div>
          <div className="px-3">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="600"
            >
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://th.bing.com/th/id/OIP.CxC2XY78-PXMjvJhqnW1dgHaE8?pid=ImgDet&w=626&h=418&rs=1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Rcontent = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-duration="600"
          >
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 opacity-30 "
              src="https://s4.scoopwhoop.com/anj/sw/07fab6e3-0946-46a4-90f4-cf007f3edcf1.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-end px-3">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            >
              <img
                className="object-cover relative lg:-inset-x-28 mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48  xl:w-56"
                src="https://th.bing.com/th/id/OIP.I1BFYRX8c0_E7ZR--DJMiwAAAA?pid=ImgDet&w=427&h=640&rs=1"
                alt=""
              />
            </div>
          </div>
          <div className="px-3"></div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <div className="flex py-20 flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg max-md:py-2">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Welcome to Recipe Sharing
              </h2>
              <p className="text-base text-gray-300 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
