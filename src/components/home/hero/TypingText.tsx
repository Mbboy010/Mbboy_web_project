import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface props{
  texts: string[];
  speed: number;
}

const TypingText = ({ texts, speed = 100 }:props) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < texts.length) {
      if (index < texts[textIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + texts[textIndex][index]);
          setIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setIndex(0);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }
  }, [index, textIndex, texts, speed]);

  return (
    <div className="">
    <motion.div
    
    initial={{ opacity: 0, y: 20 }}  // Start hidden & moved down
    animate={{ opacity: 1, y: 0 }}  // Animate to visible & normal position
     transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
    
    className="text-4xl my-3 font-bold w-full bg-gradient-to-r from-red-600 via-[#F86E01] to-[#F86E01]  text-transparent bg-clip-text rounded-lg">{displayText}
      <span className="animate-blink">|</span>
    </motion.div>
    </div>
  );
};



export default TypingText