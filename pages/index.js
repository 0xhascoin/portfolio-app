import NextLink from "next/link";
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import { GridItem } from "../components/grid-item";
import { IoLogoTwitter, IoLogoGithub, IoLogoDiscord } from "react-icons/io5";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact, DiNodejsSmall } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import thumbYouTube from "../public/images/links/youtube.png";
import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a front-end developer based in the UK 🇬🇧
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Hasan Elmi Hasan
            </Heading>
            <p>Digital Entrepreneur (Entrepreneur / Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              src="/images/emblem.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I am a highly competent and dedicated frontend developer with two
            years experience developing a wide range of tools on the web, for a
            range of clients. I have proven expertise in building e-commerce
            stores and blogging apps. I am very capable at all aspects of
            development from project planning through to writing, testing code
            and support. Proficient in HTML, CSS, Javascript React & Redux,
            jQuery and more. Skilled in bridging the gap between creative
            concepts from UX designers and practical front-end implementation. I
            am currently seeking long-term positions which will allow me to grow
            my skills inside a fast paced environment. 
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Leicester, United Kingdom.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed Bachelors in Computer Science at DeMontfort University.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Built an algorithmic trading bot using Machine Learning.
          </BioSection>
          <BioSection>
            <BioYear>2020 to 2021</BioYear>
            Working as a freelancer on Upwork & Fiverr.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked as a Front-End Developer at XScan.
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Worked as a Web Developer at SportRetina.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Interests ❤️
          </Heading>
          <Paragraph>
            Entrepreneurship, Anime, <Link href="/works">Coding</Link>, Web 3.0,{" "}
             Machine Learning{" "}
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Paragraph>
            <Icon as={AiFillHtml5} /> HTML, <Icon as={DiCss3} /> CSS,{" "}
            <Icon as={DiJavascript1} /> Javascript, <Icon as={DiReact} /> React,{" "}
            <Icon as={SiNextdotjs} /> Nextjs, <Icon as={DiNodejsSmall} />
            Nodejs, Redux, SCSS, Bootstrap, Tailwind CSS, NPM, Node JS, Mongo DB, Sanity CMS
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/hasanelmi678" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @hasanelmi678
                </Button>
              </Link>
            </ListItem>
            {/* <ListItem>
              <Link href="https://twitter.com/0xhascoin" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @0xHascoin
                </Button>
              </Link>
            </ListItem> */}
            <ListItem>
              <Link href="https://discord.gg/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  Discord
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
}
