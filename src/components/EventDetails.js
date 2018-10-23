import React from 'react';
import styled from 'styled-components';
import Styles from '../utils/styles';
import AddToCalendar from './Calendar/AddToCalendar';
import Media from '../utils/media';

const EventDetailsSection = styled.section`
  padding: 0 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${Media.tablet`
    padding: 10px 35px;
    ${Styles.shadow}
  `}
  ${Media.laptop`width: 80%;`}
  ${Media.desktop`width: 1200px;`}
`;

const Column = styled.div`
  box-sizing: border-box;
  padding-left: 0;

  ${Media.tablet`
    flex: 0 50%;
  `}
`;

const ColumnRight = styled(Column)`
  width: 100%;

  ${Media.tablet`
    padding-left: 8%;
    padding-top: 10px;
  `}
`;

const EventTitle = styled.h2`
  background: #7F7FD5;
  background: -webkit-linear-gradient(to right, ${Styles.themeColour}, #7F7FD5);
  background: linear-gradient(to right, ${Styles.themeColour}, #7F7FD5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  ${Media.laptop`font-size: 2.3rem;`}
  text-align: left;
  margin: 10px auto;
`;

const EventDescription = styled.p`
  text-align: left;
`;

const DescriptionWrapper = styled.span`
  font-size: 0.875rem;
  ${Media.laptop`font-size: 1rem;`}
`;

const AddressLink = styled.a`
  text-align: left;
  display: block;
`;

const EventInfoTitle = styled(EventTitle)`
  background: none;
  -webkit-text-fill-color: ${Styles.textColour};
  font-size: 2rem;
  ${Media.tablet`font-size: 1.5rem;`}
  ${Media.laptop`font-size: 1.75rem;`}
`;

const EventDetails = () => (
  <EventDetailsSection>
    <Wrapper>
      <Column>
        <EventTitle>
            Disrupting the Now.
        </EventTitle>
        <EventDescription>
          { // eslint-disable-next-line
            } AIESEC Canada’s National Leadership Development Conference is an annual 5-day event that brings together 300 business leaders from 30+ universities across Canada to network and develop their skills in teamwork, sales, finance, and marketing. In 2019, we are introducing the Innovation Series to connect our delegates with the leading businesses in technology and disruption.
        </EventDescription>
      </Column>
      <ColumnRight>
        <EventInfoTitle>
            Where
        </EventInfoTitle>
        <EventDescription>
          <DescriptionWrapper>
            SAIT (Southern Alberta Institute of Technology)
            <AddressLink href="https://www.google.com/maps/place/SAIT/@51.0640269,-114.0907061,17z/data=!3m1!4b1!4m5!3m4!1s0x53716f9268a69e81:0xb1db5e68bd61e28!8m2!3d51.065755!4d-114.0897771" target="_blank" rel="noopener noreferrer">
                1301-16 Avenue NW Calgary AB, T2M OL4
            </AddressLink>
          </DescriptionWrapper>
        </EventDescription>
        <EventInfoTitle>
            When
        </EventInfoTitle>
        <EventDescription>
          <AddToCalendar />
        </EventDescription>
      </ColumnRight>
    </Wrapper>
  </EventDetailsSection>
);

export default EventDetails;
