import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  content: string;
}
export const ListTitle = ({ content }: Props) => {
  const lineRef = useRef(null!) as any;
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const screenY = window.innerHeight;
      const limits = screenY > 600 ? [150, 200] : [200, 100];
      if (lineRef.current) {
        const linePos = lineRef.current.getBoundingClientRect();

        if (linePos.y < screenY - limits[0] && linePos.y > limits[1]) {
          setIsExpanded(true);
        } else {
          setIsExpanded(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const variants = {
    normal: {
      width: "12px",
    },
    expanded: {
      width: "48px",
    },
  };
  return (
    <div className="flex items-center gap-1 mt-4">
      <motion.div
        animate={isExpanded ? "expanded" : "normal"}
        variants={variants}
        ref={lineRef}
        className="h-[1px] bg-white"
      />
      <h4 className="text-xl text-white ">{content}</h4>
    </div>
  );
};
