import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  content: string;
  isActive: boolean;
  onActivate: () => void;
}

export const ListTitle = ({ content, isActive, onActivate }: Props) => {
  const lineRef = useRef(null!) as any;

  useEffect(() => {
    const handleScroll = () => {
      const screenY = window.innerHeight;
      const limits = screenY > 600 ? [500, 200] : [300, 100];
      if (lineRef.current) {
        const linePos = lineRef.current.getBoundingClientRect();

        if (linePos.y < screenY - limits[0] && linePos.y > limits[1]) {
          onActivate();
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onActivate]);

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
        animate={isActive ? "expanded" : "normal"}
        variants={variants}
        ref={lineRef}
        className="h-[1px] bg-white"
      />
      <h4 className="text-xl text-white ">{content}</h4>
    </div>
  );
};
