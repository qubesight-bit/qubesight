import { motion } from "framer-motion";

interface LogoCubeProps {
  className?: string;
}

const LogoCube = ({ className = "" }: LogoCubeProps) => {
  return (
    <motion.div
      className={`relative flex items-center gap-2 sm:gap-3 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Cubo isométrico 3D con glassmorphism */}
      <motion.div
        className="relative w-8 h-8 sm:w-10 sm:h-10"
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
          className="w-full h-full"
          style={{
            filter: "drop-shadow(0 0 10px hsl(187 92% 55% / 0.4)) drop-shadow(0 0 25px hsl(187 92% 55% / 0.15))",
          }}
        >
          {/* Cara frontal - glassmorphism */}
          <path
            d="M24 8L40 18V34L24 44L8 34V18L24 8Z"
            fill="url(#frontGrad)"
            stroke="hsl(187 92% 55%)"
            strokeWidth="0.8"
            strokeLinejoin="round"
            opacity="0.9"
          />
          {/* Cara superior */}
          <path
            d="M24 8L40 18L24 28L8 18L24 8Z"
            fill="url(#topGrad)"
            stroke="hsl(187 92% 55%)"
            strokeWidth="0.6"
            strokeLinejoin="round"
            opacity="0.65"
          />
          {/* Cara lateral derecha */}
          <path
            d="M40 18V34L24 44V28L40 18Z"
            fill="url(#rightGrad)"
            stroke="hsl(187 92% 55%)"
            strokeWidth="0.6"
            strokeLinejoin="round"
            opacity="0.55"
          />
          {/* Líneas internas del cubo para profundidad */}
          <path
            d="M24 28V44"
            stroke="hsl(187 92% 55% / 0.3)"
            strokeWidth="0.4"
            strokeLinecap="round"
          />
          <path
            d="M24 28L8 18"
            stroke="hsl(187 92% 55% / 0.3)"
            strokeWidth="0.4"
            strokeLinecap="round"
          />
          <path
            d="M24 28L40 18"
            stroke="hsl(187 92% 55% / 0.3)"
            strokeWidth="0.4"
            strokeLinecap="round"
          />
          {/* Resplandor interno (glow AI) - núcleo */}
          <circle cx="24" cy="26" r="3.5" fill="url(#glowGrad)">
            <animate
              attributeName="r"
              values="3;5;3"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.8;1;0.8"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Halo exterior del glow */}
          <circle cx="24" cy="26" r="7" fill="none" stroke="hsl(187 92% 55% / 0.2)" strokeWidth="0.5">
            <animate
              attributeName="r"
              values="6;9;6"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;0.6;0.3"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Definiciones de gradientes */}
          <defs>
            <linearGradient id="frontGrad" x1="8" y1="8" x2="40" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="hsl(187 92% 55% / 0.15)" />
              <stop offset="100%" stopColor="hsl(217 91% 60% / 0.1)" />
            </linearGradient>
            <linearGradient id="topGrad" x1="8" y1="8" x2="40" y2="18" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="hsl(187 92% 55% / 0.22)" />
              <stop offset="100%" stopColor="hsl(187 92% 55% / 0.06)" />
            </linearGradient>
            <linearGradient id="rightGrad" x1="40" y1="18" x2="24" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="hsl(217 91% 60% / 0.15)" />
              <stop offset="100%" stopColor="hsl(217 91% 60% / 0.04)" />
            </linearGradient>
            <radialGradient id="glowGrad" cx="24" cy="26" r="5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="hsl(187 92% 55%)" stopOpacity="1" />
              <stop offset="50%" stopColor="hsl(187 92% 55% / 0.7)" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Texto QubeSight - oculto en pantallas menores a 420px */}
      <motion.span
        className="hidden min-[420px]:inline font-display font-bold text-lg sm:text-xl tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-400"
        whileHover={{ scale: 1.02 }}
        style={{ 
          textShadow: "0 0 20px hsl(187 92% 55% / 0.15)",
          transition: "text-shadow 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.textShadow = "0 0 30px hsl(187 92% 55% / 0.4), 0 0 60px hsl(187 92% 55% / 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.textShadow = "0 0 20px hsl(187 92% 55% / 0.15)";
        }}
      >
        QubeSight
      </motion.span>
    </motion.div>
  );
};

export default LogoCube;