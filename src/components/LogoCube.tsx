interface LogoCubeProps {
  className?: string;
}

// Editorial wordmark — no more 3D cube. Serif italic ampersand-feel.
const LogoCube = ({ className = "" }: LogoCubeProps) => {
  return (
    <div className={`flex items-center leading-none ${className}`} aria-label="QubeSight">
      <span className="font-display text-2xl sm:text-[1.65rem] tracking-tight text-foreground">
        Qube<span className="italic text-primary">sight</span>
      </span>
    </div>
  );
};

export default LogoCube;
