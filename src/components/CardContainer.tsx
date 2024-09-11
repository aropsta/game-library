import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const CardContainer = ({ children }: Props) => {
  return <Box borderRadius={6}>{children}</Box>;
};

export default CardContainer;
