import { Image, Flex, Text } from "@chakra-ui/react";

interface TravelMenuItemProps {
  src: string;
  title: string;
}

export function TravelMenuItem({ src, title }: TravelMenuItemProps) {

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
    >
      <Image src={src} width="85px" height="85px" />
      <Text
        fontWeight="600"
        fontSize="1.5rem"
      >{title}</Text>
    </Flex>
  )
}