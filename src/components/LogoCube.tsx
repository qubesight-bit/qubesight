import { motion } from "framer-motion";

interface LogoCubeProps {
  className?: string;
}

const LogoCube = ({ className = "" }: LogoCubeProps) => {
  return (
    <motion.div
      className={`relative flex items-center gap-3 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Cubo isométrico 3D */}
      <motion.div
        className="relative w-10 h-10"
        animate={{
          y: [0, -4, 0],
          rotateY: [0, 5, 0],
          rotateX: [0, -3, 0],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ perspective: 200, transformStyle: "preserve-3d" }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]"
        >
          {/* Cara frontal */}
          <path
            d="M24 8L40 18V34L24 44L8 34V18L24 8Z"
            fill="url(#frontGrad)"
            stroke="hsl(187 92% 55%)"
            strokeWidth="0.8"
            strokeLinejoin="round"
            opacity="0.85"
          />
          {/* Cara superior */}
          <path
            d="M24 8L40 18L24 28L8 18L24 8Z"
            fill="url(#topGrad)"
            stroke="hsl(187 92% 55%)"
            strokeWidth="0.6"
            strokeLinejoin="round"
            opacity="0.6"
          />
          {/* Cara lateral derecha */}
          <path
            d="M40 18V34L24 44V28L40 18Z"
            fill="url(#rightGrad)"
            stroke="hsl(187 92% 55%)"
            strokeWidth="0.6"
            strokeLinejoin="round"
            opacity="0.5"
          />
          {/* Resplandor interno (glow AI) */}
          <circle cx="24" cy="26" r="5" fill="url(#glowGrad)">
            <animate
              attributeName="r"
              values="4;6;4"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.7;1;0.7"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Definiciones de gradientes */}
          <defs>
            <linearGradient id="frontGrad" x1="8" y1="8" x2="40" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="hsl(187 92% 55% / 0.12)" />
              <stop offset="100%" stopColor="hsl(217 91% 60% / 0.08)" />
            </linearGradient>
            <linearGradient id="topGrad" x1="8" y1="8" x2="40" y2="18" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="hsl(187 92% 55% / 0.18)" />
              <stop offset="100%" stopColor="hsl(187 92% 55% / 0.05)" />
            </linearGradient>
            <linearGradient id="rightGrad" x1="40" y1="18" x2="24" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="hsl(217 91% 60% / 0.12)" />
              <stop offset="100%" stopColor="hsl(217 91% 60% / 0.03)" />
            </linearGradient>
            <radialGradient id="glowGrad" cx="24" cy="26" r="5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="hsl(187 92% 55%)" stopOpacity="1" />
              <stop offset="50%" stopColor="hsl(187 92% 55% / 0.6)" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Texto QubeSight */}
      <motion.span
        className="font-display font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300"
        whileHover={{ scale: 1.02 }}
        style={{ textShadow: "0 0 20px hsl(187 92% 55% / 0.15)" }}
      >
        QubeSight
      </motion.span>
    </motion.div>
  );
};

export default LogoCube;
