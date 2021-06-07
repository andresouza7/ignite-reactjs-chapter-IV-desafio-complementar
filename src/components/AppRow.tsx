import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export function AppRow({ children }: WrapperProps) {
  return (
    <Box
      h="100%"
      w="100%"
      px={["1rem", "1rem", "140px"]}
    >
      {children}
    </Box>
  )
}