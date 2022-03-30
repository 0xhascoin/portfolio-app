import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png";
import thumbWalknote from "../public/images/works/walknote_eyecatch.png";
import thumbFourPainters from "../public/images/works/the-four-painters_eyecatch.jpg";
import thumbMenkiki from "../public/images/works/menkiki_eyecatch.png";
import thumbModeTokyo from "../public/images/works/modetokyo_eyecatch.png";
import thumbStyly from "../public/images/works/styly_eyecatch.png";
import thumbPichu2 from "../public/images/works/pichu2_eyecatch.png";
import thumbFreeDBTagger from "../public/images/works/freedbtagger_eyecatch.png";
import thumbAmembo from "../public/images/works/amembo_eyecatch.png";
import thumbCryptoverse from "../public/images/works/cryptoverse_01.png";
import thumbTravelAdvisor from "../public/images/works/traveladvisor_01.png";
import thumbRealEstate from "../public/images/works/Realestate_01.png";
import thumbSearchEngine from "../public/images/works/searchengine_01.png";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="cryptoverse"
              title="Cryptoverse"
              thumbnail={thumbCryptoverse}
            >
              Track cryptocurrency price details and news.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="traveladvisor"
              title="Travel Advisor"
              thumbnail={thumbTravelAdvisor}
            >
              An app that lets advises users on resteraunts, hotels and
              attractions in locations that you are travelling to.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="realestate"
              title="UAE Real Estate"
              thumbnail={thumbRealEstate}
            >
              A real estate website for properties in the United Arab Emirates.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="searchengine"
              title="Search engine"
              thumbnail={thumbSearchEngine}
            >
              A search engine app similar to google search.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
