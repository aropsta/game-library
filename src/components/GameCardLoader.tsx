import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

//Skeleton for Game card while data is being fetched
const GameCardLoader = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardLoader;
