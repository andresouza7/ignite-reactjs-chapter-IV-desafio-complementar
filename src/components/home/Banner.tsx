import { HStack, VStack, Flex, Text, Image, useMediaQuery } from "@chakra-ui/react"

export function Banner() {
  const [isLargeScreen] = useMediaQuery("(min-width: 1280px)")

  return (
    <HStack
      backgroundImage="/images/Background.png"
      backgroundSize="stretch"
      color="white"
      px={["1rem", "1rem", "140px"]}
      maxHeight="335px"
    >
      <Flex
        flex={1}
      // height="100%"
      >
        <VStack
          align="flex-start"
          spacing="2rem"
          py={["2rem", "2rem", "4rem"]}
        >
          <Text
            m="0"
            fontSize={["1.25rem", "1.25rem", "2.25rem"]}
            fontWeight={500}
            lineHeight={["30px", "30px", "54px"]}
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>

          <Text
            m="0"
            fontSize={["0.87rem", "0.87rem", "1.25rem"]}
            fontWeight="400"
            lineHeight={["21px", "21px", "30px"]}
          >
            Chegou a hora de tirar do papel a viagem que você
            sempre sonhou
          </Text>
        </VStack>
      </Flex>

      {isLargeScreen && (
        <Flex
          flex={1}
          alignSelf="flex-end"
          justify="flex-end"
        >
          <Image src="/images/Airplane.png" height="270px" minW="417px" mb="-30px" />
        </Flex>
      )}
    </HStack>
  )
}