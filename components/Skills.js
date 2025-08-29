import React from "react";

// Data for our skills
const skillsData = [
  {
    name: "JavaScript",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    name: "React",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnTyFWwdABon6fUEZmRJr4t1NhhDF_68UVg&s",
  },
  {
    name: "HTML",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    name: "Tailwind CSS",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Bootstrap",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf-Kqyd8dSvhhufDguf9CsTZStGVsoSQ5dg&s",
  },
  {
    name: "C",
    imageUrl: "https://img.icons8.com/?size=512&id=40670&format=png",
  },
  {
    name: "C++",
    imageUrl:
      "https://play-lh.googleusercontent.com/bD4o7xUOzOzWolJ3s8auft4zPX_ZNfKPDTezuJbKGSP2B4e5buJueFdbALmgAh73lQA=w240-h480-rw",
  },
  {
    name: "Java",
    imageUrl: "https://img.icons8.com/color/512/java-coffee-cup-logo--v2.png",
  },
  {
    name: "Python",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvGShLAJbL5g1fezQUTHYX7zWX7XRXmNv8A&s",
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="h-[40vh] flex flex-col gap-4 items-center justify-center"
    >
      <div className="heading text-3xl font-medium">Skills</div>
      <div className="s-cards h-75 w-300 p-3 flex flex-wrap justify-center gap-5 overflow-y-scroll">
        {skillsData.map((card) => {
          return (
            <div
              key={card.name}
              className="s-card h-35 w-35 p-5 rounded-lg flex flex-col gap-2 justify-center items-center hover:opacity-90 hover:cursor-pointer hover:bg-gray-100"
            >
              <div className="lang-pic">
                <img
                  className="h-20 w-20"
                  src={card.imageUrl}
                  alt="https://cloudassess.com/wp-content/uploads/2024/09/Skill-Building-Strategy-in-Skills-Framework.jpg"
                />
              </div>
              <div className="lang-name text-lg text-center">{card.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
