import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Cryptoverse">
    <Container>
      <Title>
        Cryptoverse <Badge>2021-</Badge>
      </Title>
      <P>
        An app that lets users track cryptocurrency price details and news
        articles from 50+ different sources.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://hasan-cryptoverse.netlify.app/">
          https://hasan-cryptoverse.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/hasanelmi678/Cryptoverse">
          https://github.com/hasanelmi678/Cryptoverse <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>RapidAPI - Crypto API, RapidAPI - Bing News Search API, React, Axios, AntDesign, Redux, React Router</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/cryptoverse_02.png" alt="Cryptoverse" />
      <WorkImage src="/images/works/cryptoverse_03.png" alt="Cryptoverse" />
      <WorkImage src="/images/works/cryptoverse_04.png" alt="Cryptoverse" />
    </Container>
  </Layout>
);

export default Work;
// export { getServerSideProps } from '../../components/chakra'
