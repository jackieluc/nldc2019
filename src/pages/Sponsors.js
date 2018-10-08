import React from 'react';
import styled from 'styled-components';
import {
  Container, Row, Col, CardDeck,
} from 'reactstrap';
import Div from '../images/divider-right.svg';

import SponsorPackage from '../components/SponsorPackage/SponsorPackage';

const Divider = styled.div`
  background-image: url('${Div}');
  width: 280px;
  height: 34px;
  margin: 1rem auto;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  background: #7F7FD5;
  background: -webkit-linear-gradient(to right, #9BCDFF, #7F7FD5);
  background: linear-gradient(to right, #9BCDFF, #7F7FD5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  margin-bottom: 15px;
`;

const TitleSection = styled.section`
  margin-top: 4rem;
  margin-bottom: 1rem;
`;

const Description = styled(Col)`
  text-align: center;
  margin: 0 auto;
`;

const benefits1 = ['Keynote Presentations', 'Corporate Videos', 'Email Blast to Delegates', 'Plenary Recognition', ['Logo Exposure', 'Conference Website', 'Merchandise', 'Delegate Package'], 'Snapchat Filters', 'Social Media Promotion', 'Promotional Products'];

const benefits2 = ['Conference Boothing Table', 'Complimentary Banquet Tickets', 'External Speaking Opportunities', 'Innovation Series Workshops', 'Recruitment Materials'];

const benefits3 = ['International Recruitment Program Discount'];

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
              Interested in becoming a sponsor?
            </a>
          </Col>
        </Row>
      </TitleSection>
      <Divider />
      <section>
        <Title>
          Benefits
        </Title>
        <Row>
          <CardDeck style={{ width: '100%' }}>
            <SponsorPackage title="Branding & Recognition" benefits={benefits1} />
            <SponsorPackage title="Networking & Recruitment" benefits={benefits2} />
            <SponsorPackage title="Corporate & Social Responsibility" benefits={benefits3} />
          </CardDeck>
        </Row>
      </section>
    </Container>
  </Wrapper>
);

export default Sponsors;
