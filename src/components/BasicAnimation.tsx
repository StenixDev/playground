import { motion } from "framer-motion";
import { useState } from "react";

const BasicAnimations = () => {
  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);

  return (
    <div className="border">
      <button onClick={() => setMoveX((cv) => cv + 200)}>Move Right</button>
      <button onClick={() => setMoveY((cv) => cv + 200)}>Move Down</button>

      <button onClick={() => setMoveX((cv) => cv - 200)}>Move Left</button>
      <button onClick={() => setMoveY((cv) => cv - 200)}>Move Up</button>
      <motion.div className="box" animate={{ x: moveX, y: moveY }} />
      {/* <motion.div className="box" animate={{ y: 100 }} />
      <motion.div className="box" animate={{ x: 100, y: 100 }} /> */}
    </div>
  );
};

export default BasicAnimations;
