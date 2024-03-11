"use client";

import {
  Title,
  Center,
  Text,
  Box,
  Group,
  Divider,
  Container,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return (
      <Box p={"20px 0 20px 0"}>
        <Container fluid>
          <Center>
            <Title size={"30px"} c={"RGB( 61 , 0 , 0 )"}>
              卒業要件チェッカー
            </Title>
          </Center>
          <Center>
            <Title size={"30px"} c={"RGB( 61 , 0 , 0 )"}>
              （生物学類）
            </Title>
          </Center>
        </Container>
      </Box>
    );
  }
  return (
    <Box p={"20px 0 20px 0"}>
      <Center>
        <Title c={"RGB( 61 , 0 , 0 )"}>卒業要件チェッカー（生物学類）</Title>
      </Center>
    </Box>
  );
}
