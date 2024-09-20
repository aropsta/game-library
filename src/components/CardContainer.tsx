import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

//Container to hold Card for each game. Card from chakra UI
const CardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.05)",
        transition: "transform .15s ease-in",
      }}
      borderRadius={0}
    >
      {children}
    </Box>
  );
};

export default CardContainer;
