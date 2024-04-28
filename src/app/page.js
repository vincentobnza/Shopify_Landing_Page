"use client";

import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoIosVideocam } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";

export default function page() {
  return (
    <>
      <header className="w-full h-screen">
        <Navbar />
        <Hero />
      </header>

      <section className="w-full p-10">
        <Hero2 />
      </section>

      <section className="w-full bg-slate-50 p-3">
        <Hero3 />
      </section>

      <section className="w-full p-3">
        <Hero4 />
      </section>
      <section className="w-full p-3">
        <Hero5 />
      </section>
      <section className="w-full p-3 bg-neutral-900">
        <Hero6 />
      </section>
      <section className="w-full p-3 bg-emerald-400 border border-b-2 border-neutral-500">
        <Banner />
      </section>

      <Footer />
    </>
  );
}

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY < 150) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    return window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        scroll
          ? "w-full p-2 grid place-items-center fixed top-0 left-0 mb-5 ease-linear duration-300 z-[1000px]"
          : "w-full p-2 grid place-items-center fixed top-0 left-0 mb-5 bg-neutral-800 text-white ease-linear duration-300 z-[1000px]"
      }
    >
      <div className="w-full max-w-screen-lg mx-auto flex justify-between items-center p-2">
        <Link href="/">
          <div className="flex items-center">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-shopify-226579.png?f=webp"
              className="w-10"
            />
            <h1 className="ml-4 italic text-xl font-black">Shopify</h1>
          </div>
        </Link>
        <ul className="hidden md:flex justify-center items-center gap-3 tracking-wide font-semibold text-sm">
          <li>
            <a href="/" className="py-2 px-3">
              Solutions
            </a>
          </li>
          <li>
            <a href="/" className="py-2 px-3">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="py-2 px-3">
              Resources
            </a>
          </li>
          <li>
            <a href="/" className="font-semibold text-sm">
              What's New
            </a>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-6 text-sm font-semibold">
          <button>Login</button>
          <button
            className={
              scroll
                ? "py-2 md:py-3 px-3 md:px-4 border border-neutral-700 rounded"
                : "py-2 md:py-3 px-3 md:px-4 bg-white text-black rounded"
            }
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-col mt-20">
      <div className="w-full max-w-screen-lg mx-auto mt-20 flex justify-between items-center">
        <div className="p-4 md:p-0 flex flex-col gap-2 basis-full md:basis-3/4 ">
          <h1 className="text-5xl md:text-6xl font-extrabold text-neutral-900 mb-4">
            Making Commerce Better for Everyone
          </h1>
          <p className="text-xs md:text-sm font-semibold">
            Shopify is supporting the next generation of entrepreneurs, the
            world’s biggest brands, and everyone in between
          </p>
          <div className="flex mt-10 gap-2 font-semibold">
            <button className="py-3 px-4 border border-neutral-700 rounded mr-6">
              Start Free Trial
            </button>
            <button className="flex justify-center items-center gap-2">
              Watch our Story
              <FaPlayCircle />
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-end basis-1/2">
          <img
            src="https://freelogopng.com/images/all_img/1655836788shopify-icon-png.png"
            className="w-80"
          />
        </div>
      </div>

      <div className="w-full max-w-screen-lg mx-auto mt-16 p-5 grid place-items-center">
        <div className="py-3 px-6 rounded-full border">
          <p className="text-sm font-black">
            Get 3 days free then 1 month for $1 💸
          </p>
        </div>
      </div>
    </div>
  );
};

const Hero2 = () => {
  return (
    <div className="flex flex-col mb-10">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center gap-8">
        <div className="flex justify-start basis-1/2">
          <img
            src="https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png?width=636&height=636,%20https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png%20x2"
            className="w-[500px]"
          />
        </div>
        <div className="flex flex-col gap-2 basis-3/4">
          <h1 className="text-4xl font-bold mb-4 leading-normal text-neutral-800">
            Discover why millions of entrepreneurs choose Shopify to build their
            business — from{" "}
            <b className="p-2 bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
              hello world to IPO.
            </b>
          </h1>

          <div className="grid md:grid-cols-2 gap-6 mt-5 text-neutral-600">
            <div className="flex flex-col gap-1 p-5 border-l-4 border-blue-200">
              <h1 className="text-neutral-800 text-4xl mb-3 font-black">
                Millions
              </h1>
              <p className="text-sm font-black">of merchants worldwide</p>
            </div>
            <div className="flex flex-col gap-1 p-5 border-l-4 border-blue-200">
              <h1 className="text-neutral-800 text-4xl mb-3 font-black">
                170 +
              </h1>
              <p className="text-sm font-black">countries represented</p>
            </div>
            <div className="flex flex-col gap-1 p-5 border-l-4 border-blue-200">
              <h1 className="text-neutral-800 text-4xl mb-3 font-black">10%</h1>
              <p className="text-sm font-black">of total US commerce</p>
            </div>
            <div className="flex flex-col gap-1 p-5 border-l-4 border-blue-200">
              <h1 className="text-neutral-800 text-4xl mb-3 font-black">
                $444B
              </h1>
              <p className="text-sm font-black">global economic activity</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-lg mx-auto mt-14 flex flex-col gap-2">
        <h1 className="text-lg font-extrabold">
          EXPLORE THE WORLD'S LARGEST COMMERCE COMMUNITY
        </h1>

        <div className="grid md:grid-cols-4 gap-2 mt-5">
          <div className="flex justify-start items-start flex-col gap-2 p-6 rounded  border bg-white shadow-xl shadow-neutral-100">
            <div className="grid place-items-center p-2 rounded-full bg-red-100 mb-5">
              <FaInfinity size={25} className="text-red-500" />
            </div>
            <h1 className="text-lg font-black">Plus</h1>
            <p className="text-sm text-neutral-600">
              A commerce solution for growing digital products
            </p>
          </div>
          <div className="flex justify-start items-start flex-col gap-2 p-6 rounded  border bg-white shadow-xl shadow-neutral-100">
            <div className="grid place-items-center p-2 rounded-full bg-indigo-100 mb-5">
              <FaUsers size={25} className="text-indigo-500" />
            </div>
            <h1 className="text-lg font-black">Partners</h1>
            <p className="text-sm text-neutral-600">
              Offer your expertise to Shopify merchants all over the world
            </p>
          </div>
          <div className="flex justify-start items-start flex-col gap-2 p-6 rounded  border bg-white shadow-xl shadow-neutral-100">
            <div className="grid place-items-center p-2 rounded-full bg-green-100 mb-5">
              <FaCode size={25} className="text-green-500" />
            </div>
            <h1 className="text-lg font-black">Developers</h1>
            <p className="text-sm text-neutral-600">
              Build the future of commerce with Shopify's powerful API
            </p>
          </div>
          <div className="flex justify-start items-start flex-col gap-2 p-6 rounded  border bg-white shadow-xl shadow-neutral-100">
            <div className="grid place-items-center p-2 rounded-full bg-blue-100 mb-5">
              <IoIosVideocam size={25} className="text-blue-500" />
            </div>
            <h1 className="text-lg font-black">Creators</h1>
            <p className="text-sm text-neutral-600">
              Turn followers into customers with commerce tools for creators
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero3 = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto mt-20 flex flex-col gap-2 pb-10">
      <div className="flex flex-col">
        <h1 className="text-lg font-extrabold mb-5">
          BUILD AN ONLINE STORE 🏪
        </h1>
        <h1 className="text-5xl font-extrabold mb-5">Your store, your way</h1>
      </div>

      <img
        src="https://assets-global.website-files.com/62d0341d687fc5fc25e03d0f/650af20bdc334f57f02fd354_Start-and-grow-your-e-commerce-business-3-Day-Free-Trial-Shopify-Ireland.png"
        className="mb-5"
      />
      <div className="grid md:grid-cols-3 gap-6 mt-5 text-neutral-600">
        <div className="flex flex-col gap-1 p-5 border-t-4 border-blue-200">
          <h1 className="text-neutral-800 text-2xl mb-3 font-black">
            Build an online storefront
          </h1>
          <p className="text-sm font-black">
            Bring your vision to life with our drag and drop store creator. No
            coding expertise required - just your next big idea.
          </p>
          <div className="flex mt-5">
            <button className="p-3 border-b-2 border-neutral-800 text-sm font-black">
              Online store builder
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-5 border-t-4 border-neutral-200">
          <h1 className="text-neutral-800 text-2xl mb-3 font-black">
            Create the brand that you want
          </h1>
          <p className="text-sm font-black">
            Select from customizable templates created by a community of
            world-class designers.
          </p>
          <div className="flex mt-5">
            <button className="p-3 border-b-2 border-neutral-800 text-sm font-black">
              Theme store
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-5 border-t-4 border-neutral-200">
          <h1 className="text-neutral-800 text-2xl mb-3 font-black">
            Level up with applications
          </h1>
          <p className="text-sm font-black">
            Add more features and functionality to your online store with apps
            built by trusted Shopify developers.
          </p>
          <div className="flex mt-5">
            <button className="p-3 border-b-2 border-neutral-800 text-sm font-black">
              Shopify app store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Hero4 = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto mt-20 flex flex-col gap-2">
      <div className="flex flex-col">
        <h1 className="text-lg font-extrabold mb-5">
          CENTRALIZED BUSINESS OPERATIONS
        </h1>
        <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-extrabold mb-5">
            Streamline your back office
          </h1>

          <button className="flex justify-around items-center gap-3 py-3 px-4 border-b-2 border-neutral-700 font-black group">
            Manage your business
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center gap-8 mt-10">
        <div className="flex justify-start basis-1/2">
          <img
            src="https://cdn.shopify.com/b/shopify-brochure2-assets/97ac98396226b6ac09ae8a671bf21d17.png"
            className="w-[500px]"
          />
        </div>
        <div className="flex flex-col gap-2 basis-1/2">
          <div className="grid grid-rows-3 p-3 gap-3">
            <div className="flex flex-col gap-2 p-5 border border-neutral-100 rounded-lg">
              <IoAnalyticsOutline size={30} className="text-red-400 mb-3" />
              <h1 className="text-2xl font-black">Oversee your operation</h1>
              <p className="text-sm text-neutral-500">
                Manage inventory, track payments and view real-time business
                insights - all in one place, so you can focus on building your
                business.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-5 border border-neutral-100 rounded-lg">
              <FaCartShopping size={30} className="text-indigo-400 mb-3" />
              <h1 className="text-2xl font-black">Manage every order</h1>
              <p className="text-sm text-neutral-500">
                Get your products to their destination with smooth inventory
                management and hassle free returns.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-5 border border-neutral-100 rounded-lg">
              <FaMoneyBillWave size={30} className="text-slate-400 mb-3" />
              <h1 className="text-2xl font-black">
                Manage your money where you make it
              </h1>
              <p className="text-sm text-neutral-500">
                Manage your business finances all from one place with money
                management and flexible funding designed with enterpreneurs in
                mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Hero5 = () => {
  return (
    <div className="flex flex-col mt-5 pb-24">
      <div className="w-full max-w-screen-lg mx-auto mt-20 flex justify-between items-center">
        <div className="flex flex-col gap-2 basis-3/4">
          <h1 className="text-5xl font-extrabold text-neutral-900 mb-4">
            "We went from burning beans in our garage to needing a 10,000 sq. ft
            facility to meet customer demand."
          </h1>
          <h3 className="text-lg font-black">BLK & Bold</h3>
          <h3 className="text-sm font-semibold">
            Rod Johnson <b className="text-neutral-400"> - Owner</b>
          </h3>

          <div className="mt-5 flex gap-2">
            <div className="p-3 rounded-full border border-neutral-800 grid place-items-center">
              <FaArrowLeft size={20} />
            </div>
            <div className="p-3 rounded-full border border-neutral-800 grid place-items-center">
              <FaArrowRight size={20} />
            </div>
          </div>
        </div>
        <div className="flex justify-end basis-1/2">
          <img
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/testimonial1-small-8618ff26e0df67c99d48787c9c7aaf53ad23fddccb5ae0a5bac2132cebeb6ac1.png"
            className="w-80"
          />
        </div>
      </div>
    </div>
  );
};
const Hero6 = () => {
  return (
    <div className="flex flex-col mt-5 pb-16 text-neutral-100 p-10">
      <div className="max-w-xl mx-auto flex justify-center items-center text-center flex-col gap-3">
        <h3>SHOPIFY SUPPORT</h3>
        <h1 className="text-3xl font-black text-white">
          The help you need, when you need it
        </h1>
      </div>

      <div className="mt-10 w-full max-w-screen-lg mx-auto gap-3 grid place-items-center grid-cols-2 text-neutral-400">
        <div className="w-full flex justify-start items-start flex-col gap-2 p-10 rounded-xl bg-neutral-800">
          <FaBlog size={30} className="mb-4 text-blue-400" />
          <h1 className="text-4xl font-black mb-3 text-neutral-50">Blog</h1>
          <p>
            Get all the marketing and business startegy tips you need to help
            you run an online business.
          </p>
        </div>
        <div className="w-full flex justify-start items-start flex-col gap-2 p-10 rounded-xl bg-neutral-800">
          <FaGraduationCap size={30} className="mb-4 text-orange-400" />
          <h1 className="text-4xl font-black mb-3 text-neutral-50">
            Online Courses
          </h1>
          <p>
            Learn tried-and-tested business tips with instant access to lessons
            from successful entrepreneurs.
          </p>
        </div>
        <div className="w-full flex justify-start items-start flex-col gap-2 p-10 rounded-xl bg-neutral-800">
          <FaUsers size={30} className="mb-4 text-green-400" />
          <h1 className="text-4xl font-black mb-3 text-neutral-50">
            Community
          </h1>
          <p>
            Connect with a community of brands, partners, and fellow merchants
            who understand shopify.
          </p>
        </div>
        <div className="w-full flex justify-start items-start flex-col gap-2 p-10 rounded-xl bg-neutral-800">
          <FaHandsHelping size={30} className="mb-4 text-violet-400" />
          <h1 className="text-4xl font-black mb-3 text-neutral-50">
            Help Center
          </h1>
          <p>
            Find answers with dedicated helpdesk resource full of articles and
            videos from our Support Team.
          </p>
        </div>
      </div>
    </div>
  );
};
const Banner = () => {
  return (
    <div className="flex flex-col mt-5 pb-16 text-center justify-center items-center text-black p-10">
      <div className="max-w-md mx-auto p-2 text-center">
        <h1 className="text-5xl font-black mb-5">Grow your business here</h1>
        <p className="text-sm font-black">
          Whether you want to sell products down the street or around the world,
          we have all the tools you need.
        </p>
      </div>
      <button className="py-4 px-8 rounded-full bg-neutral-800 text-white font-black text-lg mt-8">
        Start Free Trial
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="w-full p-10 bg-white grid place-items-center">
      <div className="w-full max-w-screen-lg mx-auto flex justify-between items-start border-b-[1px] pb-10">
        <div className="flex">
          <img
            src="https://seeklogo.com/images/S/shopify-logo-826A5C40EC-seeklogo.com.png"
            className="w-10"
          />
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-3">
            <a href="/" className="mb-4 font-black">
              Shopify
            </a>
            <a href="/" className="text-sm hover:underline">
              About
            </a>
            <a href="/" className="text-sm hover:underline">
              Careers
            </a>
            <a href="/" className="text-sm hover:underline">
              Investors
            </a>
            <a href="/" className="text-sm hover:underline">
              Press and Media
            </a>
            <a href="/" className="text-sm hover:underline">
              Partners
            </a>
            <a href="/" className="text-sm hover:underline">
              Affiliates
            </a>
            <a href="/" className="text-sm hover:underline">
              Legal
            </a>
            <a href="/" className="text-sm hover:underline">
              Service Status
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="/" className="mb-4 font-black">
              Support
            </a>
            <a href="/" className="text-sm hover:underline">
              Merchant Support
            </a>
            <a href="/" className="text-sm hover:underline">
              Help Center
            </a>
            <a href="/" className="text-sm hover:underline">
              Hire a partner
            </a>
            <a href="/" className="text-sm hover:underline">
              Shopify Community
            </a>
            <a href="/" className="text-sm hover:underline">
              Shopify Events
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="/" className="mb-4 font-black">
              Developers
            </a>
            <a href="/" className="text-sm hover:underline">
              Shopify.dev
            </a>
            <a href="/" className="text-sm hover:underline">
              API Documentation
            </a>
            <a href="/" className="text-sm hover:underline">
              Dev Degree
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="/" className="mb-4 font-black">
              Products
            </a>
            <a href="/" className="text-sm hover:underline">
              Shop
            </a>
            <a href="/" className="text-sm hover:underline">
              Shopify Plus
            </a>
            <a href="/" className="text-sm hover:underline">
              Link Pop
            </a>
            <a href="/" className="text-sm hover:underline">
              Shopify for Enterprise
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="/" className="mb-4 font-black">
              Solutions
            </a>
            <a href="/" className="text-sm hover:underline">
              Online Store Builder
            </a>
            <a href="/" className="text-sm hover:underline">
              Website Builder
            </a>
            <a href="/" className="text-sm hover:underline">
              Ecommerce Builder
            </a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-lg mx-auto flex text-left ">
        <p className="mt-5 text-sm text-neutral-500 font-black">
          @Copyright 2024
        </p>
      </div>
    </div>
  );
};
