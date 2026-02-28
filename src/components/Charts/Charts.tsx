import { Box, Fade, HStack, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import DoughnutChart from "./DoughnutChart";
import { motion, AnimatePresence } from 'framer-motion';

interface ChartsProps {
  groupedData: Record<string, any>;
}

const MotionBox = motion(Box);
const Charts = ({ groupedData }: ChartsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 800;
  const slides = [
    { data: groupedData.gender, title: "Characters by gender" },
    { data: groupedData.species, title: "Characters by species" },
    { data: groupedData.status, title: "Characters by status" }

  ]

    const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <Box>
      <Box pos="relative" w={"100vw"} h="100%" overflow="hidden">
        <MotionBox
          display="flex"
          animate={{ x: -currentIndex * slideWidth }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {slides.map((slide, index) => (
            <Box key={index} minWidth={`${slideWidth}px`} px={12}>
              <DoughnutChart data={slide.data} title={slide.title} />
            </Box>
          ))}
        </MotionBox>
        <button onClick={nextSlide} style={{ marginTop: 10 }}>Next</button>
      </Box>
    </Box>

  );
};

export default Charts;
