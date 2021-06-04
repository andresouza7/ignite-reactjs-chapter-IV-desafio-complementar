import Head from 'next/head'
import { Banner } from '../components/home/Banner'
import { TravelMenu } from '../components/home/TravelMenu'

import { Text } from "@chakra-ui/react"
import { Carousel } from '../components/home/Carousel'
import { AppContainer } from '../components/AppContainer'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <AppContainer>
      <Head>
        <title>Worldtrip | Home</title>
      </Head>
      <Header />
      <Banner />
      <TravelMenu />
      <Text
        fontWeight="500"
        fontSize="2.25rem"
        lineHeight="54px"
        textAlign="center"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <Carousel />
    </AppContainer>
  )
}
