import { useRouter } from "next/router"
import { HStack, Grid, GridItem, Text, Flex, Heading, Box, Stack } from "@chakra-ui/react"
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
            h={["200px", "300px", "500px"]}
            pb={["0", "0", "4rem"]}
          >
            <AppRow>
              <Flex
                h="100%"
                align={["center", "flex-end"]}
                justify={["center", "flex-start"]}
              >
                <Text
                  lineHeight="72px"
                  fontSize={["1.75rem", "2rem", "3rem"]}
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
            mb={["2rem", "2rem", "3rem"]}
          >
            <AppRow>
              <Stack
                spacing={["1rem", "1rem", "4rem"]}
                direction={["column", "column", "column", "column", "row"]}
                mt={["1.5rem", "1.5rem", "4rem"]}
              >
                <Text
                  flex={1}
                  lineHeight={["25px", "25px", "36px"]}
                  fontWeight="400"
                  fontSize={["1rem", "1rem", "1.5rem"]}
                >
                  {content.description}
                </Text>

                <Flex
                  flex={1}
                  justify={["space-between", "space-evenly", "space-evenly", "space-evenly", "space-between"]}
                >
                  <InfoCard title="países" value={content.info?.countries} />
                  <InfoCard title="línguas" value={content.info?.languages} />
                  <InfoCard title="cidades +100" value={content.info?.citiesInWorldTop100} />
                </Flex>
              </Stack>
            </AppRow>
          </Box>

          <AppRow>
            <Heading
              fontSize={["1.5rem", "1.5rem", "2.25rem"]}
              fontWeight="500"
              mb="1.25rem"
            >
              Cidades +100
          </Heading>

            <Grid
              gridTemplateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
              gridGap="2rem"
            >
              {content?.citiesInWorldTop100?.map(cityInfo =>
                <GridItem key={cityInfo.city} m="auto">
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

