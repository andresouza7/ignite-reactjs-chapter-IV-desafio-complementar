import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
}

export function AppContainer({ children }: AppContainerProps) {

  return (
    <Container maxW="1440px" margin="auto" bg="white" pb="40px">
      {children}
    </Container>
  )
}