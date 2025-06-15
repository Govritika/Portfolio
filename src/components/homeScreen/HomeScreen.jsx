
import React,{useEffect, useState} from "react";
import { motion } from "framer-motion";
import "./homescreen.css";

const HomeScreen = ({ onEnter }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleKeyPress = (e) =>
      onEnter(); 
    window.addEventListener("keydown", handleKeyPress);

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      clearInterval(timer);
    };
  }, [onEnter]);

  return (
    <motion.div
      className="home-screen"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        backgroundAttachment: "fixed",
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="glass-card">
        <div className="status-bar">
          <span className="clock-time">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
          <span className="clock-date">
            {time.toLocaleDateString(undefined, {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>

        <div className="profile"></div>
        <h1>VRITIKA</h1>
        <button onClick={onEnter} className="enter">
          Enter
        </button>
      </div>
    </motion.div>
  );
};

export default HomeScreen;
