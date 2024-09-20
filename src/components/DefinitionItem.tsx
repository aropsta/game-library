import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import "../main.css";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Flex direction="column" marginY={5} gap={2} alignItems="start">
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Flex>
  );
};

export default DefinitionItem;
