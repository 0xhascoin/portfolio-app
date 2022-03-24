import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Search Engine">
    <Container>
      <Title>
        Search Engine <Badge>2020-</Badge>
      </Title>
      <P>A search engine app similar to google search.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://hasan-google-search.netlify.app/search">
          https://hasan-google-search.netlify.app/search{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/hasanelmi678/Google">
          https://github.com/hasanelmi678/Google{" "}
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
            React, Tailwind css, Rapid API - Google search API, React context, Axios
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/searchengine_02.png" alt="Realestate" />
      <WorkImage src="/images/works/searchengine_03.png" alt="Realestate" />
      <WorkImage src="/images/works/searchengine_04.png" alt="Realestate" />
      <WorkImage src="/images/works/searchengine_05.png" alt="Realestate" />
    </Container>
  </Layout>
);

export default Work;
// export { getServerSideProps } from '../../components/chakra'
