import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="UAE Real Estate">
    <Container>
      <Title>
        UAE Real Estate <Badge>2019-</Badge>
      </Title>
      <P>A real estate website for properties in the United Arab Emirates.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://realestateapp-alpha.vercel.app/">
            https://realestateapp-alpha.vercel.app/{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/hasanelmi678/Realestateapp">
            https://github.com/hasanelmi678/Realestateapp{" "}
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
            RapidAPI - UAE Real Estate API, Next js, Chakra UI, Axios, Vercel
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/realestate_02.png" alt="Realestate" />
      <WorkImage src="/images/works/realestate_03.png" alt="Realestate" />
      <WorkImage src="/images/works/realestate_04.png" alt="Realestate" />
      <WorkImage src="/images/works/realestate_05.png" alt="Realestate" />
    </Container>
  </Layout>
);

export default Work;
// export { getServerSideProps } from '../../components/chakra'
