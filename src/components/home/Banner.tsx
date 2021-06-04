import { HStack, VStack, Flex, Text, Image, Container } from "@chakra-ui/react"

export function Banner() {

  return (
    <HStack
      backgroundImage="/images/Background.png"
      backgroundSize="stretch"
      color="white"
      pr="140px"
      pl="140px"
      maxHeight="335px"
    >
      <Flex
        flex={1}
      // height="100%"
      >
        <VStack
          align="flex-start"
          spacing="2rem"
          pt="5rem"
          pb="4rem"
        >
          <Text
            m="0"
            fontSize="2.25rem"
            fontWeight="500"
            lineHeight="54px"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>

          <Text
            m="0"
            fontSize="1.25rem"
            fontWeight="400"
            lineHeight="30px"
          >
            Chegou a hora de tirar do papel a viagem que você
            sempre sonhou
          </Text>
        </VStack>
      </Flex>

      <Flex
        flex={1}
        alignSelf="flex-end"
        justify="flex-end"
      >
        <Image src="/images/Airplane.png" height="270px" width="417px" mb="-30px" />
      </Flex>
    </HStack>
  )
}