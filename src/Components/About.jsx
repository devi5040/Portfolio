import React from "react";

function About() {
  return (
    <div
      id="about"
      className="md:h-[480px] w-full bg-secondary  p-10  text-justify"
    >
      <div className="md:px-44 flex flex-col items-center justify-center h-full space-y-8">
        <h3 className="font-bold text-4xl uppercase font-poppins text-[#353839]">
          About Me
        </h3>
        <p className="text-2xl text-center">
          I'm a passionate and detail-oriented full-stack web developer with a
          knack for creating robust and scalable web applications. My journey in
          the world of coding began with a love for problem-solving and a
          fascination with the endless possibilities of the web.
        </p>
        <p className="text-2xl text-center">
          I thrive in both front-end and back-end development, with proficiency
          in languages such as JavaScript, HTML, CSS, and frameworks like
          React.js and Node.js. My database skills include working with SQL
          databases, ensuring data integrity and efficient retrieval.
        </p>
      </div>
    </div>
  );
}

export default About;
