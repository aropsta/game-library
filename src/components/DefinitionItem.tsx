import { Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
import "../main.css";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

//Component to render different html definition titles and details elements for different data like genres, platforms and publishers
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
