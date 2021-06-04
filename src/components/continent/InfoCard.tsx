import { Text, VStack } from "@chakra-ui/react";

interface InfoCardProps {
  title: string;
  value: number;
}

export function InfoCard({ title, value }: InfoCardProps) {
  return (
    <VStack>
      <Text
        m="0"
        fontWeight="600"
        fontSize="3rem"
        color="#FFBA08"
      >
        {value}
      </Text>
      <Text
        m="0 !important"
        lineHeight="36px"
        fontWeight="600"
        fontSize="1.5rem"
        color="#47585B"
      >
        {title}
      </Text>
    </VStack>
  )
}