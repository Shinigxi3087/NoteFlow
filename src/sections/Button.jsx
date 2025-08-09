import { motion } from "framer-motion";

export default function Button({ className = "", children, ...rest }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: "0 10px 40px rgba(79,70,229,.35)" }}
      whileTap={{ scale: 0.98 }}
      className={`btn ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
