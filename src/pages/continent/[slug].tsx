import { useRouter } from "next/router"
import { HStack, Grid, GridItem, Text, Flex, Heading, Box, VStack } from "@chakra-ui/react"
import { AppContainer } from "../../components/AppContainer"
import { InfoCard } from "../../components/continent/InfoCard"
import { CityCard } from "../../components/continent/CityCard"
import { AppRow } from "../../components/AppRow"
import { Header } from "../../components/Header"
import { useEffect, useState } from "react"

import fake_database from "../../fake_database.json"

interface Content {
  continent: string;
  description: string;
  info: {
    countries: number;
    languages: number;
    citiesInWorldTop100: number;
  },
  citiesInWorldTop100: {
    city: string;
    country: string;
    flagUrl: string;
  }[]
}

export default function Continent() {
  const [content, setContent] = useState<Content>({} as Content)

  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    let data = fake_database.find(c => c.slug === slug) as Content
    setContent(data)
  }, [slug])

  return (
    <AppContainer>
      <Header backButtonActive />
      {content && (
        <>
          <Box
            backgroundImage="/images/continent_page_background/europe.jpg"
            backgroundSize="cover"
            height="500px"
            pb="4rem"
            mb="5rem"
          >
            <AppRow>
              <Flex
                h="100%"
                alignItems="flex-end"
              >
                <Text
                  lineHeight="72px"
                  fontSize="3rem"
                  fontWeight="600"
                  color="white"
                  m="0"
                >
                  {content.continent}
                </Text>
              </Flex>
            </AppRow>
          </Box>

          <Box
            mb="3rem"
          >
            <AppRow>
              <HStack
                spacing="4rem"
              >
                <Text
                  flex={1}
                  lineHeight="36px"
                  fontWeight="400"
                  fontSize="1.5rem"
                >
                  {content.description}
                </Text>

                <Flex
                  flex={1}
                  justify="space-between"
                >
                  <InfoCard title="países" value={content.info?.countries} />
                  <InfoCard title="línguas" value={content.info?.languages} />
                  <InfoCard title="cidades +100" value={content.info?.citiesInWorldTop100} />
                </Flex>
              </HStack>
            </AppRow>
          </Box>

          <AppRow>
            <Heading
              fontSize="2.25rem"
              fontWeight="500"
            >
              Cidades +100
          </Heading>

            <Grid
              gridTemplateColumns="repeat(4, 1fr)"
              gridGap="2rem"
            >
              {content?.citiesInWorldTop100?.map(cityInfo =>
                <GridItem key={cityInfo.city}>
                  <CityCard cityInfo={cityInfo} />
                </GridItem>
              )}

            </Grid>
          </AppRow>
        </>
      )}
    </AppContainer>
  )
}

