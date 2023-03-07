import React from "react";
import { Link } from "react-router-dom";
import cooking from "../../assets/icon/cooking.png";
import fruits from "../../assets/icon/fruits.png";
import fish from "../../assets/icon/fish (1).png";
import stationary from "../../assets/icon/stationary.png";
import spinach from "../../assets/icon/spinach.png";
import pharmacy from "../../assets/icon/pharmacy.png";
import kitchen from "../../assets/icon/kitchen.png";
import lipstick from "../../assets/icon/lipstick.png";
import salad from "../../assets/icon/salad.png";
import mop from "../../assets/icon/mop.png";
import broccoli from "../../assets/icon/broccoli.png";
import chicken from "../../assets/icon/chicken.png";

const ProductCategory = () => {
  const lists = [
    {
      id: 1,
      title: "Fruits",
      img: fruits,
      to: "fruit",
    },
    {
      id: 2,
      title: "Meet & Fish",
      img: fish,
      to: "",
    },
    {
      id: 3,
      title: "Cooking",
      img: cooking,
      to: "",
    },
    {
      id: 4,
      title: "Beverages",
      img: salad,
      to: "",
    },
    {
      id: 5,
      title: "Home & Cleaning",
      img: mop,
      to: "",
    },
    {
      id: 6,
      title: "Stationary & Office ",
      img: stationary,
      to: "",
    },
    {
      id: 7,
      title: "Beauty Products",
      img: lipstick,
      to: "",
    },
    {
      id: 8,
      title: "Health Products",
      img: pharmacy,
      to: "",
    },

    {
      id: 9,
      title: "Vegitables",
      img: spinach,
      to: "",
    },

    {
      id: 10,
      title: "Kitchen Appliances",
      img: kitchen,
      to: "",
    },

    {
      id: 11,
      title: "Health Products",
      img: broccoli,
      to: "",
    },

    {
      id: 12,
      title: "Chicken",
      img: chicken,
      to: "",
    },
  ];

  return (
    <>
      <div
        name="category"
        className="bg-gradient-to-tr from-orange-400 to-orange-600 w-full h-full "
      >
        <div className="max-w-screen-lg mx-auto p-4 w-full h-full text-white flex flex-col items-center justify-center">
          <div className="mt-5 mb-20">
            <p className=" text-lg md:text-4xl border-b-4 border-slate-100 p-2 inline">
              Our Product Categories
            </p>
          </div>
          <div>
            <div className=" w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 py-10 sm:px-0">
              {lists.map(({ id, title, img, to }) => (
                <div
                  key={id}
                  className="shadow-md shadow-orange-200 hover:scale-105 duration-500 cursor-pointer "
                >
                  <Link
                    to={to}
                    className="flex justify-evenly items-center p-2 "
                  >
                    <p className="text-md ">{title}</p>
                    <img
                      src={img}
                      alt={title}
                      className="w-10 h-10 object-contain mx-auto"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* products */}
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
