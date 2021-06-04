import { Flex } from "@chakra-ui/react"
import { TravelMenuItem } from "./TravelMenuItem"

export function TravelMenu() {
  return (
    <Flex
      mt="7.125rem"
      justify="space-between"
      pr="140px"
      pl="140px"
    >
      <TravelMenuItem src="/images/menu_icons/cocktail.svg" title="vida noturna" />
      <TravelMenuItem src="/images/menu_icons/surf.svg" title="praia" />
      <TravelMenuItem src="/images/menu_icons/building.svg" title="moderno" />
      <TravelMenuItem src="/images/menu_icons/museum.svg" title="clássico" />
      <TravelMenuItem src="/images/menu_icons/earth.svg" title="e mais..." />
    </Flex>
  )
}