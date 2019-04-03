import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Media from '../../utils/media';
import Styles from '../../utils/styles';
import ButtonCTA from '../Button/Button';

const Wrapper = styled(Container)`
  color: white;
  background-color: ${Styles.themeColour};
  margin-top: 5rem;
  padding: 5rem 0;
  ${Media.laptop`padding: 5rem 20px;`}
`;

const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  max-width: 480px;
  font-size: 1.5rem;
  line-height: 1.2;
  margin: 0 auto 2rem auto;
`;

const StyledRow = styled(Row)`
  max-width: 1140px;
  margin: 0 auto;
  ${Media.tablet`justify-content: center;`}
`;

const IncentiveTitle = styled(Title)`
  text-align: left;
  font-weight: bold;

  padding-left: 15px;

  ${Media.tablet`
    padding-left: 0;
  `}
`;

const IncentiveList = styled.ul`
  text-align: left;
  padding-left: 1rem;
  margin-bottom: 5rem;
  ${Media.laptop`margin-bottom: 0;`}
  
  li {
    margin-bottom: 1rem;
  }
`;

const TicketInfo = styled.div`
  text-align: left;
  background-color: white;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  ${Styles.shadow}

  h3 {
    font-size: 1.5rem;
    color: ${Styles.textColour};
    margin-bottom: 0;
  }

  p {
    color: ${Styles.textColour};
  }
`;

const Highlight = styled.span`
  ${Styles.highlight}
`;

const ExternalDelegateIncentives = () => (
  <Wrapper fluid>
    <StyledRow style={{ margin: '0 auto 5rem auto '}}>
      <Col xs={12}>
        <Title>Not a member of AIESEC? No problem!</Title>
        <Subtitle>If you are a university student or new-grad, you are invited to our Youth to Business Forum which will take place from May 1-2.</Subtitle>
        <ButtonCTA link="https://bit.ly/Y2B2019Forum">Get Your Tickets</ButtonCTA>
      </Col>
    </StyledRow>
    <StyledRow>
      <Col xs={12} md={8} lg={6}>
        <IncentiveTitle>Why you need to be here</IncentiveTitle>
        <IncentiveList>
          <li>You’ll get an amazing opportunity to develop your professional and social network with 300+ leaders across 26 Canadian universities.</li>
          <li>An amazing opportunity to participate in a Business EXPO and Networking Spaces with Calgary and Canada’s leading organizations to secure your future career.</li> 
          <li>Participate in a series of workshops and consultancy spaces to learn the skills necessary to build strong networks and leverage your practical experiences.</li>
          <li>Not enough? This is your opportunity to engage in thoughtful discussions with the country’s top business executives in mealtime roundtable discussions, panels, and more!</li>
        </IncentiveList>
      </Col>
      <Col xs={12} md={8} lg={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <TicketInfo>
          <h3><Highlight>$70 | General Admission</Highlight></h3>
          <p>includes Dinner (May 1st), Breakfast and Lunch (May 2nd)</p>
        </TicketInfo>
        <TicketInfo>
          <h3><Highlight>$110 | General Admission & Accommodation</Highlight></h3>
          <p>includes Dinner (May 1st), Overnight Accommodation (May 1st), Breakfast and Lunch (May 2nd)</p>
        </TicketInfo>
      </Col>
    </StyledRow>
  </Wrapper>
);

export default ExternalDelegateIncentives;