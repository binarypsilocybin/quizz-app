import {
  Button,
  HStack,
  Stack,
  Container,
  Text,
  Card,
  Image,
  Flex,
} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RESET } from "../redux/actionsTypes";

export default function FinalScreen() {
  const score = useSelector((state) => state.score);
  const category = useSelector((state) => state.category.category);
  const icon = useSelector((state) => state.icon.icon);

  const subject = useSelector((state) => state.category.category);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReset = () => {
    dispatch({ type: RESET });
    navigate("/");
  };

  return (
    <HStack flexWrap={"wrap"}>
      <Container maxW="lg" h={"750px"}>
        <Stack mb={100} w={"100%"}>
          <Flex gap={"8"} justifyContent={"left"}>
            <Image
              src={icon}
              p="8px"
              borderRadius={14}
              backgroundColor={"white"}
            />

            <Text fontSize="4xl">{subject}</Text>
          </Flex>
        </Stack>
        <Text fontSize="6xl">Quiz completed</Text>
        <Text fontSize="6xl" as="b">
          You scored...
        </Text>
      </Container>
      <Container mt={210} maxW="lg" h={"750px"}>
        <Stack space="6">
          <Card
            minHeight={"400px"}
            textAlign={"center"}
            justifyContent={"center"}
            borderRadius={14}
          >
            <Flex gap={"8"} justifyContent={"center"}>
              <Image
                src={icon}
                p="8px"
                borderRadius={14}
                backgroundColor={"white"}
              />

              <Text fontSize="4xl">{category}</Text>
            </Flex>
            <Text fontSize="170px">{score}</Text>
            <Text fontSize="me">out of 10</Text>
          </Card>
          <Button
            w="100%"
            minH="60px"
            sx={{ backgroundColor: "var(--purple)" }}
            color={"white"}
            onClick={handleReset}
            borderRadius={14}
          >
            Play again
          </Button>
        </Stack>
      </Container>
    </HStack>
  );
}
