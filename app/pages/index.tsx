import { Link, BlitzPage, Routes } from "blitz"

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  VStack,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
} from "@chakra-ui/react"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const LandingPage: BlitzPage = () => {
  return (
    <div className="container">
      <CallToActionWithAnnotation />
      <GridListWithCTA />
    </div>
  )
}

const CallToActionWithAnnotation = () => {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Every issue is&nbsp;
            <Text as={"span"} color={"green.400"}>
              tracked
            </Text>
          </Heading>

          <Text color={"gray.500"}>An Exit Route project by Ryan O&apos;Shea</Text>
          <Stack
            direction={"row"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Link href={Routes.SignupPage()}>
              <Button
                as="a"
                colorScheme={"green"}
                bg={"green.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "green.500",
                }}
              >
                Sign Up
              </Button>
            </Link>
            <Link href={Routes.LoginPage()}>
              <Button
                as="a"
                colorScheme={"green"}
                bg={"green.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "green.500",
                }}
              >
                Login
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

interface FeatureProps {
  heading: string
  text: string
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  )
}

const GridListWithCTA = () => {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Medium length title
            </chakra.h2>
            <Button colorScheme="green" size="md">
              Call To Action
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              Provide your customers a story they would enjoy keeping in mind the objectives of your
              website. Pay special attention to the tone of voice.
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={"First Feature"}
          text={"Short text describing one of you features/service"}
        />
        <Feature
          heading={"Second Feature"}
          text={"Short text describing one of you features/service"}
        />
        <Feature
          heading={"Third Feature"}
          text={"Short text describing one of you features/service"}
        />
        <Feature
          heading={"Fourth Feature"}
          text={"Short text describing one of you features/service"}
        />
      </Grid>
    </Box>
  )
}

LandingPage.suppressFirstRenderFlicker = true
LandingPage.redirectAuthenticatedTo = "/home"

export default LandingPage
