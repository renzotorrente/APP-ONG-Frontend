import React, { useEffect, useState } from "react";
import { Box, Spinner, Stack } from "@chakra-ui/react";
import { useParams } from "react-router";

import NewLoaded from "../components/DetailNewScreen/Newloaded";
import { Loadedtype } from "../constants/constants";
import { GetDetailsNews } from "../services/newsService";
import { useQuery } from "react-query";
function DetailNewScreen(): JSX.Element {
  const { id }: { id: string } = useParams();

  const {isLoading, isError, isSuccess, data: news} = useQuery(["news", id], async () => GetDetailsNews(id));
  
  return (
    <Stack w="90%" m="20px auto" minh="700px">
      {
        isLoading &&
        <Spinner
          size="xl"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          m="20px auto"
        />
      }
      {isError &&
        <NewLoaded responsenew={Loadedtype} />
      }

      {
        isSuccess && 
        <NewLoaded responsenew={news.data} />
      }
    </Stack>
  );
}

export default DetailNewScreen;