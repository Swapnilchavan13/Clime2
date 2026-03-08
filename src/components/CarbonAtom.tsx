import { motion } from "framer-motion";

interface CarbonAtomProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

const CarbonAtom = ({ size = 32, className = "", animate = true }: CarbonAtomProps) => {
  const r = size * 0.375;
  const center = size / 2;
  const electronSize = size * 0.06;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      fill="none"
    >
      {/* Orbits */}
      <ellipse cx={center} cy={center} rx={r} ry={r * 0.35} stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
      <ellipse cx={center} cy={center} rx={r * 0.35} ry={r} stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
      <ellipse cx={center} cy={center} rx={r} ry={r * 0.55} stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" transform={`rotate(45 ${center} ${center})`} />

      {/* Nucleus */}
      <circle cx={center} cy={center} r={size * 0.09} fill="hsl(var(--primary))" />

      {/* Electrons */}
      {animate ? (
        <>
          <motion.circle
            cx={center + r}
            cy={center}
            r={electronSize}
            fill="hsl(var(--primary))"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ originX: `${center}px`, originY: `${center}px` }}
          />
          <motion.circle
            cx={center}
            cy={center - r}
            r={electronSize}
            fill="hsl(var(--primary))"
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ originX: `${center}px`, originY: `${center}px` }}
          />
          <motion.circle
            cx={center + r * 0.7}
            cy={center - r * 0.4}
            r={electronSize}
            fill="hsl(var(--primary))"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ originX: `${center}px`, originY: `${center}px` }}
          />
        </>
      ) : (
        <>
          <circle cx={center + r} cy={center} r={electronSize} fill="hsl(var(--primary))" />
          <circle cx={center} cy={center - r} r={electronSize} fill="hsl(var(--primary))" />
          <circle cx={center + r * 0.7} cy={center - r * 0.4} r={electronSize} fill="hsl(var(--primary))" />
        </>
      )}
    </svg>
  );
};

export default CarbonAtom;
