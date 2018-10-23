import React from 'react';
import styled from 'styled-components';
import {
  Container, Row, Col, CardDeck,
} from 'reactstrap';
import Wave from '../components/Dividers/Wave';
import Styles from '../utils/styles';
import SponsorPackage from '../components/SponsorPackage/SponsorPackage';
import SponsorList from '../components/SponsorPackage/SponsorList';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  background: #7F7FD5;
  background: -webkit-linear-gradient(to right, ${Styles.themeColour}, #7F7FD5);
  background: linear-gradient(to right, ${Styles.themeColour}, #7F7FD5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const TitleSection = styled.section`
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

const Description = styled(Col)`
  text-align: center;
  margin: 0 auto;
`;

const Benefits = styled.section`
  background-color: ${Styles.themeColour};
  width: 100%;
  padding: 2rem 0 6rem 0;
  margin-bottom: 0;
`;

const BenefitsTitle = styled.h1`
  color: #FFFFFF;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const benefits1 = ['Keynote presentations', 'Corporate videos', 'Plenary recognition', ['Logo exposure', 'Conference website', 'Merchandise', 'Delegate package'], 'Snapchat filters', 'Social media promotion', 'Promotional products'];

const benefits2 = ['Conference boothing table', 'Complimentary banquet tickets', 'External speaking opportunities', 'Innovation Series workshops', 'Recruitment materials', 'Email blast to delegates', 'Lunch with Leaders invintation', 'Delegate resumes'];

const benefits3 = ['International recruitment program discount - Hire global talent'];

const Sponsors = () => (
  <Wrapper>
    <Container>
      <TitleSection>
        <Title>
          Sponsors
        </Title>
        <Row>
          <Description xs="12" lg="8">
            <p>
              { // eslint-disable-next-line
              } In order to have a successful NLDC, we require funding for venues, events, speakers, and much more. We are looking to form valuable partnerships with organizations that value leadership, diversity, innovation, technology, and entrepreneurial thinking.
            </p>
            <p>
              { // eslint-disable-next-line
              } NLDC is the perfect occasion for your organization to promote the rich opportunities that your organization has to offer to some of Canada's next generation of business leaders.
            </p>
          </Description>
          <Col xs="12">
            <a href="mailto:jacoby.holder@aiesec.net?subject=Sponsorship Inquiry">
              Become our partner today!
            </a>
          </Col>
        </Row>
      </TitleSection>
    </Container>
    <Benefits>
      <BenefitsTitle>
        Benefits
      </BenefitsTitle>
      <CardDeck>
        <SponsorPackage title="Branding & Recognition" benefits={benefits1} />
        <SponsorPackage title="Networking & Recruitment" benefits={benefits2} />
        <SponsorPackage title="CSR" benefits={benefits3} />
      </CardDeck>
    </Benefits>
    <Wave />
    <SponsorList paddingTop="4rem" />
  </Wrapper>
);

export default Sponsors;
