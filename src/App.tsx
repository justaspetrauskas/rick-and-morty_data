import React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "react-query";

import "./App.css";

import Dashboard from "./components/Dashboard/Dashboard";
const queryClient = new QueryClient();
function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
