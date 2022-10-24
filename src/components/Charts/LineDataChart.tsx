import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { IBarChartData } from "../../utils/types";

interface BarChartProps {
  data: Record<string, any>[];
}
const LineDataChart = ({ data }: BarChartProps) => {
  return (
    <Box w="100%" h="300px">
      <ResponsiveContainer>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"name"} />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="characters"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default LineDataChart;
