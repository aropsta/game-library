import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

//Expandable text componenet
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  //Character limit to trigger expanding functionality of text
  const limit = 300;

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text align="start">
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        variant="link"
        marginLeft={2}
        colorScheme="blue"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
