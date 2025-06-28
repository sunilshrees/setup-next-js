// components/LoadingScreen.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeaving(true);
    }, 1500); // fake loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isLeaving && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -200 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
            className="text-6xl"
          >
            🚀
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
