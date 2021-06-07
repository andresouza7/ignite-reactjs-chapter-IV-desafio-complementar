import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
}

export function AppContainer({ children }: AppContainerProps) {

  return (
    <Container maxW="1440px" bg="white" px="0"
      pb={["20px", "30px", "60px"]}
    >
      {children}
    </Container>
  )
}