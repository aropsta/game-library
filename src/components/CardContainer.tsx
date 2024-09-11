import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const CardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={6} overflow="hidden">
      {children}
    </Box>
  );
};

export default CardContainer;
