import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export function AppRow({ children }: WrapperProps) {

  return (
    <Container
      ml="140px"
      mr="140px"
      height="100%"
    >
      {children}
    </Container>
  )
}