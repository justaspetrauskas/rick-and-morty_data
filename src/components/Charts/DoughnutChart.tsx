import { Box, Heading, keyframes } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip
} from "recharts";
// import ChartLegend from "./ChartLegend";


interface ChartData {
  name: string;
  value: number;
}

interface DoughnutChartProps {
  data: Record<string, any>;
  title: string;
}

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Characters: ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Of total: ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#42FF5B",
  "#42CDFF",
  "#153E0B",
  "#FF8042",
];



const DoughnutChart = ({ data, title }: DoughnutChartProps) => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isAnimationActive, seIsAnimationActive] = useState(true);


  const onPieEnter = useCallback(
    (_: any, index: number | null) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  useEffect(() => {
    const transformedData = Object.entries(data).map((entry) => {
      return { name: entry[0], value: entry[1].length };
    });
    setChartData(transformedData);
  }, [data]);


const hoverAnimation = keyframes`
  0% {
    box-shadow: 0 0 20px rgba(255, 0, 150, 0.7);
  }
  50% {
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.8); /* Lime green shadow */
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 0, 150, 0.7);
  }
`;

  return (
    <Box
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      border="3px solid #000000"
      borderRadius={"25px"}
      w="100%"
      h="500px"
      overflow="hidden"
      p={3}
            _hover={{
        animation: `${hoverAnimation} 1.5s ease-in-out infinite`,
      }}
    >
      <Heading as="h4" size="md">
        {title}
      </Heading>
      <ResponsiveContainer width="100%" height="100%" >
        <PieChart width={400} height={350}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            isAnimationActive={isAnimationActive}
            innerRadius={90}
            outerRadius={120}
            cornerRadius={5}
            paddingAngle={5}
            fill="#8884d8"
            dataKey="value"
            onMouseLeave={(e) => {setActiveIndex(null)}}
          >
            {chartData.map((entry: Record<string, any>, index: number) => (
          <Cell
            key={`cell-${index}`}
            fill={entry.name === "unknown" ? "#7F7F7F" : COLORS[index % COLORS.length]}
            
            onMouseEnter={(e) => {seIsAnimationActive(false); onPieEnter(e, index)}}
            style={{ transition: "opacity 0.5s ease", opacity :activeIndex === null ? 1 : activeIndex === index ? 1 : 0.4 }}
          />
        ))}
          </Pie>
          <Legend       
          iconSize={10}
          content={    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {chartData.map((entry, index) => (
        <li
          key={`item-${index}`}
          onMouseEnter={() => {seIsAnimationActive(false); setActiveIndex(index)}}
          onMouseLeave={() => {setActiveIndex(null)}}
          style={{
            cursor: "pointer",
            marginBottom: 8,
            opacity: activeIndex === null || activeIndex === index ? 1 : 0.4,
            transition: "opacity 0.3s ease",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor:  COLORS[index % COLORS.length],
              marginRight: 8,
            }}
          />
          {entry.name}
        </li>
      ))}
    </ul>}
          layout="vertical"
          verticalAlign="middle"
          align="right"
          iconType="circle"
          />
      {/* <ChartLegend /> */}
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default DoughnutChart;
