import { Flex, Image } from "@chakra-ui/react"
import { AppRow } from "./AppRow"
import Link from "next/link"

interface HeaderProps {
  backButtonActive?: boolean;
}

export function Header({ backButtonActive = false }: HeaderProps) {

  return (
    <AppRow>
      <Flex
        position="relative"
        justify="center"
        align="center"
        pt="27px"
        pb="27px"
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
        <Image src="/images/Logo.png" width="184px" height="46px" />
      </Flex>
    </AppRow>
  )
}