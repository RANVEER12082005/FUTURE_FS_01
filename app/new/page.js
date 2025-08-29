"use client";
import React from "react";
import { useRef } from "react";
import { GoProjectSymlink } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";
import { LuEraser } from "react-icons/lu";

const New = () => {
  const formRef = useRef(null); // Reference to the form

  const handleClear = () => {
    formRef.current.reset(); // Reset form inputs
  };

  const handleChange = (e) => {
    e.target.setCustomValidity(""); // Clear message on input change
  };

  return (
    <div className="min-h-screen bg-[url(/images/contactBG.jpg)] flex justify-center items-center">
      <div className="form-box box h-[85vh] w-[75vw] flex flex-col gap-10 justify-center items-center rounded-4xl shadow-2xl bg-gray-50">
        <div className="h-div flex gap-5 ">
          <div className="heading text-3xl">Add a new project</div>
          <GoProjectSymlink className="text-3xl" />
        </div>
        <form
          ref={formRef}
          action="/"
          className="flex flex-col gap-10 items-center"
        >
          <div className="input-div flex flex-col gap-10 items-start">
            <div className="title-div flex gap-5 justify-center items-center">
              <label className="text-xl" htmlFor="title">
                Title for your project:
              </label>
              <input
                className="w-150 px-2 py-1 rounded-lg"
                id="title"
                type="text"
                placeholder="Add your title here.."
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Please enter a suitable title for this project!"
                  )
                }
                onChange={handleChange}
              />
            </div>
            <div className="img-div flex gap-5 justify-center items-center">
              <label className="text-xl" htmlFor="imageUrl">
                Image Link for your project:
              </label>
              <input
                className="w-150 px-2 py-1  rounded-lg"
                id="imageUrl"
                type="text"
                placeholder="Add your image link here.."
                onChange={handleChange}
              />
            </div>
            <div className="desc-div flex gap-5 justify-center items-center">
              <label className="text-xl" htmlFor="imageUrl">
                Description for your project:
              </label>
              <textarea
                className="h-25 w-150 px-2 py-1 rounded-lg"
                id="description"
                type="text"
                placeholder="Add your project's description here.."
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Please enter a suitable and detailed description for this project!"
                  )
                }
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="btns-div flex gap-5">
            <button
              className="flex gap-1 items-center bg-emerald-500 text-white px-3 py-1 rounded-lg cursor-pointer hover:opacity-90"
              type="submit"
            >
              <div className="text-lg">Add</div>
              <IoIosAdd className="text-2xl" />
            </button>
            <button
              className="flex gap-1 items-center border-2 border-teal-500 text-teal-500 px-3 py-1 rounded-lg cursor-pointer hover:opacity-90"
              type="button"
              onClick={handleClear}
            >
              <div className="text-lg">Clear</div>
              <LuEraser className="text-lg" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default New;
