import React, { useEffect } from "react";
import Sectiontitle from "../../components/Sectiontitle";
import lottie from "lottie-web";
import { useSelector } from "react-redux";

function About() {
  const { portfolioData } = useSelector((state) => state.root);

  const { skills, lottieURL, description1, description2 } = portfolioData.about;

  const lottieRef = React.useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: lottieURL || "",
    });

    return () => animation.destroy();
  }, [lottieURL]);

  return (
    <div>
      <Sectiontitle title="About" />
      <div className="-mt-10 sm:-mt-16 flex w-full items-center justify-center sm:flex-col">
        <div
          className="h-[70vh] w-1/2 sm:w-full sm:h-[50vh] sm:-mb-8"
          ref={lottieRef}
        ></div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">{description1 || ""}</p>
          <p className="text-white">{description2 || ""}</p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-10 mt-5">
            {skills.map((skill) => (
              <div className="border border-tertiary py-3 px-10">
                <h1 className="text-tertiary ">{skill}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
