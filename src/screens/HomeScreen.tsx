import React from "react";
import MainSlider from "../components/Slider/MainSlider";
import { Text, Container, SimpleGrid, Box, Heading, Spinner, Center} from "@chakra-ui/react";
import HomeNewsComponent from "../components/HomeNews/HomeNewsComponent";
import newsExampleData from "../components/HomeNews/exampleData.json";
import { SliderData } from "../components/Slider/SliderData";
import HomeScreenHooks from "./HomeScreenHooks";
import { useQuery } from 'react-query';
import { getOrganization } from "../services/organizationService";
import { getNewsAmountService } from "../services/newsService";
import { Link } from "react-router-dom";
import { getSliders } from "../services/sliderServices";

function Home() {

  const newsQuery = useQuery('getNewsAmount', () => getNewsAmountService(4))

  const organizationQuery = useQuery('getOrganization', () => getOrganization(1))

  const sliderQuery = useQuery('getSliders', () => getSliders())

  if(newsQuery.isLoading || organizationQuery.isLoading || sliderQuery.isLoading) return <Center mb={4}><Spinner size="xl" color="green" thickness="5px" /></Center>



  return (
    <>
    <Container maxW="container.xl" mt={3}>
      <Text textAlign="center" my={4}></Text>
    </Container>
      <MainSlider SliderData={sliderQuery.data} />
    <Container maxW="container.xl" mt={3}>
      <Heading fontSize="5xl" color="grey.700" textAlign="center" mt={3}>
        {organizationQuery.data.welcomeText}
      </Heading>
      <Text fontSize="3xl" color="grey.500" textAlign="center">
        Últimas novedades
      </Text>
      <SimpleGrid columns={[1, 2, 2, 4]} spacing={4}>
        {newsQuery.data.map((elem) => (
          <Box width="100%" key={elem.id}>
            <Link to={`/novedad/${elem.id}`}>
            <HomeNewsComponent
              title={elem.name}
              text={elem.content}
              imageUrl={elem.image}
            />
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
    </>
  );
}

export default Home;
