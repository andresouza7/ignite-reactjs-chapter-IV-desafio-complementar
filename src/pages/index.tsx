import Head from 'next/head'
import { Banner } from '../components/home/Banner'
import { TravelMenu } from '../components/home/TravelMenu'

import { Text } from "@chakra-ui/react"
import { Carousel } from '../components/home/Carousel'
import { AppContainer } from '../components/AppContainer'
import { Header } from '../components/Header'

import { Divider } from "../components/Divider"

export default function Home() {
  return (
    <AppContainer>
      <Head>
        <title>Worldtrip | Home</title>
      </Head>
      <Header />
      <Banner />
      <TravelMenu />

      <Divider />
      <Text
        fontWeight="500"
        fontSize={["1.25rem", "1.25rem", "2.25rem"]}
        lineHeight={["30px", "30px", "54px"]}
        textAlign="center"
        mb={["1.25rem", "1.25rem", "3.25rem"]}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <Carousel />
    </AppContainer>
  )
}
