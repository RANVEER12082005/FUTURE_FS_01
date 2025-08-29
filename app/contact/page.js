import React from "react";
import Icons from "@/components/Icons";
import { MdImportContacts } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[url(/images/contactBG.jpg)] flex justify-center items-center">
      <div className="box h-[85vh] w-[75vw] flex flex-col gap-10 justify-center items-center rounded-4xl shadow-2xl bg-gray-50">
        <div className="heading text-3xl flex gap-10">
          <IoMdContact className="text-4xl" />
          <h1>Communicate with Us</h1>
          <MdImportContacts className="text-4xl" />
        </div>
        <div className="line h-[1px] w-[60vw] bg-gray-300"></div>
        <div className="mail flex items-center gap-5">
          <Link
            href={
              "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQBsJXwKXTFMbchZhFtfWnMNdrJzPNGGnVvTKxpvsjFxLdBLwlZGwRPxqvmCNllZfnNV"
            }
            target="_blank"
          >
            <CiMail className="text-2xl" />
          </Link>
          <h2>singhranveer5831@gmail.com</h2>
        </div>
        <div className="line h-[1px] w-[60vw] bg-gray-300"></div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="inputs flex gap-2">
            <input className="py-1 px-1 w-80" type="text" placeholder="Name" />
            <input className="py-1 px-1 w-80" type="text" placeholder="Email" />
          </div>
          <textarea
            name="msg"
            id="msg"
            placeholder="Message"
            className="h-35 w-80 py-3 px-3 rounded-lg resize-none"
          ></textarea>
          <button className="bg-black text-lg rounded-lg px-5 py-2 text-white hover:opacity-85 hover:cursor-pointer">
            Message Me
          </button>
        </div>
        <div className="line h-[1px] w-[60vw] bg-gray-300"></div>
        <Icons />
      </div>
    </div>
  );
};

export default Contact;
