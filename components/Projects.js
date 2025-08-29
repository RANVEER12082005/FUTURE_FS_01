import React from "react";

const projectsData = [
  {
    title: "E-Commerce Website",
    imageUrl:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240409180455/ecommerce-Website-Project.webp",
  },
  {
    title: "IBM Watson Assistant",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:798/1*KUoyIchEeKdLNh2R0WTzUQ.jpeg",
  },
  {
    title: "VTOP Wesite Clone",
    imageUrl:
      "https://lh3.googleusercontent.com/v4Xo6NtnH4NQdOwn4ApsazX3NZUZk2T3Yd7wl6aiB38TmVRsf4sXRkpDJqBiuLB26g0FIqmGWU0tea-J4gxmYGAJoA=s1280-w1280-h800",
  },
  {
    title: "Spam Mail Detection",
    imageUrl:
      "https://storage.googleapis.com/gweb-cloudblog-publish/images/image4_v2LFcq0.max-1200x1200.png",
  },
  {
    title: "Intelligent Chat Bot",
    imageUrl:
      "https://www.devoteam.com/wp-content/uploads/2024/11/chatbot-4071274_1920.jpg",
  },
  {
    title: "Spotify Clone",
    imageUrl: "https://i.ytimg.com/vi/KdGfhSpT6pc/maxresdefault.jpg",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="h-[80vh] flex flex-col gap-4 items-center justify-center"
    >
      <div className="heading text-3xl font-medium">Projects</div>
      <div className="p-cards h-125 w-300 p-3 flex flex-wrap justify-center gap-5 overflow-y-scroll">
        {projectsData.map((card) => {
          return (
            <div
              key={card.title}
              className="p-card h-60 w-90 p-2 rounded-xl flex flex-col gap-1 justify-center items-center hover:opacity-90 hover:cursor-pointer hover:bg-gray-100"
            >
              <div className="project-pic">
                <img
                  className="h-45 w-80 rounded-lg"
                  src={
                    card.imageUrl
                      ? card.imageUrl
                      : "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
                  }
                  alt="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
                />
              </div>
              <div className="project-name text-lg text-center overflow-y-scroll">
                {card.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
