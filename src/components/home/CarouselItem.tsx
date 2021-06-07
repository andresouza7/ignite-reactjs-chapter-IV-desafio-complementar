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
      backgroundSize="100% 100%"
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
            fontSize={["1.5rem", "1.5rem", "3rem"]}
            lineHeight={["36px", "36px", "72px"]}
          >
            {title}
          </Text>

          <Text
            fontWeight="700"
            fontSize={["0.875rem", "0.875rem", "1.5rem"]}
            lineHeight={["21px", "21px", "24px"]}
          >
            {description}
          </Text>
        </VStack>
      </Link>
    </Flex>
  )
}