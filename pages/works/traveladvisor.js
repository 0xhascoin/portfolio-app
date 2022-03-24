import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Travel Advisor">
    <Container>
      <Title>
        Travel Advisor <Badge>2020-</Badge>
      </Title>
      <P>
        An app that lets advises users on resteraunts, hotels and attractions in
        locations that you are travelling to.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://hasan-traveladvisor.netlify.app/">
            https://hasan-traveladvisor.netlify.app/{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/hasanelmi678/TravelAdvisor">
            https://github.com/hasanelmi678/TravelAdvisor{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Material UI, React, Google Maps API, RapidAPI - Travel Advisor API,
            Axios, RapidAPI - Weather Map API
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/traveladvisor_02.png" alt="Travel Advisor" />
    </Container>
  </Layout>
);

export default Work;
// export { getServerSideProps } from '../../components/chakra'
