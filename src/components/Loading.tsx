import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Loading = () => {
  const ballTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 2,
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={ballTransition}
        className="w-20 h-20 mb-8 rounded-full relative"
        style={{
          background:
            "conic-gradient(from 0deg, #fc8f00, #00bfff, #7cfc00, #ff00ff, #fc8f00)",
          boxShadow:
            "0 6px 8px rgba(0, 0, 0, 0.15), 0 3px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0) 60%)",
          }}
        />
      </motion.div>
      <p
        className={`${inter.className} text-5xl text-sm-3xl font-bold text-black`}
      >
        Wait a second, you'll like it
      </p>
    </div>
  );
};
