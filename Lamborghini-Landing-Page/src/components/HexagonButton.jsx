import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function DirectionalButton({
  direction,
  fill = "black",
  size = "20",
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const ChevronIcon = () => {
    switch (direction.toLowerCase()) {
      case "up":
        return (
          <ChevronUp
            size={size}
            color={isHovered ? "transparent" : "white"}
            strokeWidth={2.5}
          />
        );
      case "down":
        return (
          <ChevronDown
            size={size}
            color={isHovered ? "transparent" : "white"}
            strokeWidth={2.5}
          />
        );
      case "left":
        return (
          <ChevronLeft
            size={size}
            color={isHovered ? "transparent" : "white"}
            strokeWidth={2.5}
          />
        );
      case "right":
        return (
          <ChevronRight
            size={size}
            color={isHovered ? "transparent" : "white"}
            strokeWidth={2.5}
          />
        );
      default:
        return (
          <ChevronDown
            size={size}
            color={isHovered ? "transparent" : "white"}
            strokeWidth={2.5}
          />
        );
    }
  };

  return (
    <div
      className={`relative inline-block w-${size} h-${size} mt-5`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-full h-full"
      >
        <polygon
          points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
          stroke="white"
          strokeWidth="2"
          fill={isHovered ? fill : "none"}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <ChevronIcon />
      </div>
    </div>
  );
}

export default DirectionalButton;
