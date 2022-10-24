import { Box, Heading, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface BarChartProps {
  data: Record<string, any>[];
  title: string;
}
const LineDataChart = ({ data, title }: BarChartProps) => {
  return (
    <VStack justify="center" alignItems="stretch">
      <Heading as="h6" size="md" py={3}>
        {title}
      </Heading>
      <Box h="300px" w="100%">
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
    </VStack>
  );
};

export default LineDataChart;
