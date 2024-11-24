import { type Project } from "@/types/types";
import { motion } from "framer-motion";
import { useState } from "react";
import { VscArrowSmallDown } from "react-icons/vsc";
interface Props {
  slide: Project;
}

export const PortfolioSliderCard = ({ slide }: Props) => {
  const [isHover, setIsHover] = useState(false);
  const { websiteTitle, position, description, technologies } = slide;
  return (
    <motion.div
      key={slide.id}
      animate="show"
      initial="hide"
      variants={{
        show: {
          opacity: 1,
          transition: {
            ease: "easeOut",
            duration: 0.3,
          },
        },
        hide: {
          opacity: 0,
        },
      }}
      className="pointer-events-auto bg-slate-700 bg-opacity-100 md:bg-opacity-70 p-4 rounded min-h-[250px] h-[300px] flex flex-col justify-between"
    >
      <div>
        <h1 className="text-white text-lg font-semibold">{websiteTitle}</h1>
        <h2 className="text-base font-[400] text-slate-200 md:text-slate-400">
          {position}
        </h2>
        <div className="grow  text-white font-[400] text-[0.90rem]">
          {description}
        </div>
        <div>
          <a href={slide.websiteUrl} target="_blank">
            <button
              className="text-sm text-white rounded mt-2 flex py-2"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <span>View project</span>
              <div
                className={`${
                  isHover ? "bottom-1 left-1" : "bottom-0 left-0"
                } relative transition-all rotate-[-135deg]`}
              >
                <VscArrowSmallDown size={20} />
              </div>
            </button>
          </a>
        </div>
      </div>
      <ul className="flex flex-wrap gap-2 pt-3">
        {technologies.map((technology, index) => (
          <li
            key={index}
            className="flex items-center rounded-full bg-teal-400/10 px-2 py-1 text-[0.8rem] font-medium leading-5 text-teal-300 "
          >
            {technology}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
