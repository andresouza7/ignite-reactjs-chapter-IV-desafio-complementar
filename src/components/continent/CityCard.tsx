// Sample card from Airbnb

import { Box, Image, HStack, VStack, Text } from "@chakra-ui/react"

interface CityCardProps {
  cityInfo: {
    city: string;
    country: string;
    flagUrl: string;
  }
}

export function CityCard({ cityInfo }: CityCardProps) {
  const test = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    city: "Londres",
    country: "Reino Unido",
    flagUrl: ""
  }

  return (
    <Box
      maxW="sm"
      borderRadius="lg"
      border="1px solid rgba(255, 186, 8, 0.5);"
      overflow="hidden">
      <Box>
        <Image
          src={test.imageUrl}
          alt={test.imageAlt}
          width="100%"
          height="100%"
        />
      </Box>


      <HStack>
        <VStack
          flex={1}
          alignItems="flex-start"
          p="1.25rem"
        >
          <Text
            lineHeight="25px"
            fontSize="1.25rem"
            fontWeight="600"
          >
            {cityInfo.city}
          </Text>
          <Text
            lineHeight="26px"
            fontSize="1rem"
            fontWeight="500"
          >
            {cityInfo.country}
          </Text>
        </VStack>
        <Box
          justifyContent="center"
          alignItems="center"
        >
          flag
        </Box>
      </HStack>
    </Box>
  )
}