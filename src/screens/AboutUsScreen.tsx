import { SimpleGrid, Box, Text, Heading, Stack } from '@chakra-ui/react';
import React from "react";
import { MemberList } from '../components/MembersComponent/MembersList';

const AboutUsScreen = (): JSX.Element => {
  return (
    <>
      <Heading mb={5} align="center">
        Sobre nosotros
      </Heading>
      <SimpleGrid
        columns={[1, null, 2]}
        py={3}
        maxW="1320px"
        m="auto"
        textAlign="start"
      >
        <Box p={5}>
          <Heading as="h3" size="lg">
            Text 1
          </Heading>
          <Text as="p" color="gray.500" fontSize="1.1rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            maximus ante at fringilla ultricies. Ut bibendum cursus mollis. Nam
            sit amet diam euismod, ultricies lectus vel, consectetur dui. Ut
            ligula justo, rutrum non ultrices ac, posuere id ligula. Suspendisse
            potenti. Praesent imperdiet nulla in accumsan vehicula. Fusce
            tincidunt id nisl id sollicitudin. Mauris ac fermentum tortor. Proin
            in nisi mi. Proin tincidunt est orci, eu suscipit quam placerat in.
            Maecenas nec nisi rutrum orci mattis posuere. Proin odio massa,
            congue ut semper et, fringilla eget eros. Vestibulum hendrerit
            elementum neque, sit amet molestie ante accumsan at. Integer
            consectetur fermentum arcu, quis varius augue porttitor non. Sed at
            cursus lorem. Phasellus sed libero mattis, porta nulla ut, egestas
            massa. Proin egestas urna felis, et faucibus mi rhoncus vitae.
            Aenean eget lobortis dolor. Maecenas blandit scelerisque quam, vel
            ornare turpis vestibulum a. Fusce eu magna nec lorem auctor commodo
            eu id nibh. Nullam cursus ligula et erat tempus rhoncus. Praesent
            condimentum, ex et pharetra scelerisque, elit odio auctor ipsum, a
            sagittis velit purus in metus. Cras facilisis lorem justo, ut
            facilisis velit volutpat nec. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Sed commodo at ante ut laoreet. Vestibulum
            vitae neque tempus libero blandit gravida sed a purus. Mauris et
            sapien bibendum, dapibus erat id, efficitur purus. Quisque tincidunt
            lacus et interdum convallis. Duis vitae justo gravida, posuere erat
            vel, laoreet nunc.
          </Text>
        </Box>

        <Stack p={5} flexWrap="wrap">
          <Heading as="h3" size="lg" pl="50px">
            Miembros
          </Heading>
          <MemberList/>
        </Stack>
      </SimpleGrid>
    </>
  );
};
export default AboutUsScreen;
