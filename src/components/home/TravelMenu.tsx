import { Flex, useMediaQuery, List, ListItem, Box, Text } from "@chakra-ui/react"
import { CircleIcon } from "../CircleIcon"
import { TravelMenuItem } from "./TravelMenuItem"

export function TravelMenu() {
  const [isLargeScreen] = useMediaQuery("(min-width: 1280px)")

  return (
    <Flex
      mt={["2rem", "2rem", "7.125rem"]}
      mb={["0", "0", "4rem"]}
      justify="space-between"
      px={["1rem", "1rem", "140px"]}
    >
      {isLargeScreen ? (
        <>
          <TravelMenuItem src="/images/menu_icons/cocktail.svg" title="vida noturna" />
          <TravelMenuItem src="/images/menu_icons/surf.svg" title="praia" />
          <TravelMenuItem src="/images/menu_icons/building.svg" title="moderno" />
          <TravelMenuItem src="/images/menu_icons/museum.svg" title="clássico" />
          <TravelMenuItem src="/images/menu_icons/earth.svg" title="e mais..." />
        </>
      ) : (
        <List
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          mx="2rem"
        >
          {[
            "vida noturna",
            "praia",
            "moderno",
            "clássico",
            "e mais..."
          ].map((item, index) =>
            <ListItem key={item}
              mr={index % 2 > 0 ? "0" : "2rem"}
              mb="1rem"
            >
              <CircleIcon boxSize={2.5} color="#FFBA08" />
              <Text
                display="inline-block"
                ml="0.5rem"
                lineHeight="27px"
                fontSize="1.125rem"
                fontWeight="500"
                color="#47585B"
              >
                {item}
              </Text>
            </ListItem>
          )}
        </List>
      )}
    </Flex>
  )
}