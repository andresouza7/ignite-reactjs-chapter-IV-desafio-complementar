import { VStack, Text, Flex } from "@chakra-ui/react"
import Link from "next/link"

interface CarouselItemProps {
  imageSrc: string;
  title: string;
  description: string;
  linkTo: string;
}

export function CarouselItem({ imageSrc, title, description, linkTo }: CarouselItemProps) {

  return (
    <Flex
      backgroundImage={imageSrc}
      backgroundSize="100%"
      backgroundPosition="center"
      width="100%"
      height="100%"
      justify="center"
      align="center"
      color="white"
    >
      <Link href={linkTo}>
        <VStack
          cursor="pointer"
        >
          <Text
            fontWeight="700"
            fontSize="3rem"
            lineHeight="72px"
          >
            {title}
          </Text>

          <Text
            fontWeight="700"
            fontSize="1.5rem"
            lineHeight="24px"
          >
            {description}
          </Text>
        </VStack>
      </Link>
    </Flex>
  )
}