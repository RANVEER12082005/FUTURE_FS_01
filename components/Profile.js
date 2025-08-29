import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className="profile h-[50vh] flex gap-5 items-center justify-evenly">
      <div className="flex gap-10">
        <div className="pic">
          <img
            className="h-75 rounded-4xl"
            src="/images/profile.jpeg"
            alt="https://static.vecteezy.com/system/resources/previews/032/176/197/non_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg"
          />
        </div>
        <div className="info h-50 flex flex-col gap-7 justify-center">
          <div className="name text-5xl">Ranveer Singh</div>
          <div className="post text-3xl">Web Developer & A.I. Expert</div>
        </div>
      </div>
      <div className="p-btns h-75 flex items-end gap-5">
        <Link
          className="border rounded-sm px-4 py-2  hover:bg-black hover:text-white hover:border-black hover:transition-all"
          href={"/new"}
        >
          New Project
        </Link>
        <Link
          className="rounded-sm px-4 py-2 bg-amber-500 hover:opacity-90 mb-0.5"
          href={
            "https://www.linkedin.com/in/ranveer-singh-22812028b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          target="_blank"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;
