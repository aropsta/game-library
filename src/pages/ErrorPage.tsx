import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

//Error page for react router
import Navbar from "../components/NavBar";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Invalid Page!"
            : "An unexpected error has occured."}
        </Text>
      </Heading>
    </>
  );
};

export default ErrorPage;
