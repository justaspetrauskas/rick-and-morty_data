import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import { Legend } from "recharts";

const ChartLegend = () => {
  // Define two simple style objects, one for mobile and one for desktop
const legendStyle = useBreakpointValue<React.CSSProperties>({
  base: {
    position: "absolute" as const,
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    lineHeight: "18px",
    maxWidth: "90%",
    whiteSpace: "normal",
  },
  md: {
    position: "absolute" as const,
    bottom: "2%",
    right: 0,
    transform: "translateY(-50%)",
    lineHeight: "20px",
  },
}) || {
  position: "absolute" as const,
  bottom: "0",
  left: "50%",
  transform: "translateX(-50%)",
  lineHeight: "18px",
  maxWidth: "90%",
  whiteSpace: "normal",
};

  // Use the resolved style directly in Legend's wrapperStyle prop
  return (
    <Legend
      iconSize={10}
      layout="horizontal"
      verticalAlign="middle"
      wrapperStyle={legendStyle}
    />
  );
};

export default ChartLegend;
