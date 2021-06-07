import { Flex, Image, useMediaQuery } from "@chakra-ui/react"
import { AppRow } from "./AppRow"
import Link from "next/link"

interface HeaderProps {
  backButtonActive?: boolean;
}

export function Header({ backButtonActive = false }: HeaderProps) {
  const [isLargeScreen] = useMediaQuery("(min-width: 1280px)")

  return (
    <AppRow>
      <Flex
        position="relative"
        w="100%"
        justify="center"
        align="center"
        py={["15px", "15px", "27px"]}
      >
        {backButtonActive && (
          <Link href="/">
            <Image
              position="absolute"
              left="0"
              top="center"
              src="/images/BackButton.svg"
              cursor="pointer"
            />
          </Link>
        )}
        <Image
          src="/images/Logo.png"
          minW={["92px", "92px", "184px"]}
          height={["24px", "24px", "46px"]}
        />
      </Flex>
    </AppRow>
  )
}