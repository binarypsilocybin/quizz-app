import { Container, Stack, Text } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { PropTypes } from "prop-types";

import ToggleColorMode from "../components/ToggleColorMode";

import { getQuiz } from "../services/questions";
import SelectQuestions from "../components/SelectQuestions";
import { useDispatch } from "react-redux";

import { handleCategoryChange } from "../redux/actions";

export default function StartPage() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    getQuiz().then((result) => {
      setData(result);
    });
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(handleCategoryChange(category));
    navigate("/questions");
  };

  const pull_category = (category) => {
    setCategory(category);
  };

  return (
    <>
      <ToggleColorMode />
      <Stack
        direction={["column", "row"]}
        align="center"
        justify="center"
        spacing="44px"
        p="10"
      >
        <Container maxW="lg">
          <Text fontSize="5xl">Welcome to the Frontend Quiz!</Text>
          <Text fontSize="md">Pick a subject to get started</Text>
        </Container>
        <Container maxW="lg">
          <form onSubmit={handleSubmit}>
            <SelectQuestions data={data} getCategory={pull_category} />
          </form>
        </Container>
      </Stack>
    </>
  );
}

SelectQuestions.propTypes = {
  getCategory: PropTypes.func,
};
