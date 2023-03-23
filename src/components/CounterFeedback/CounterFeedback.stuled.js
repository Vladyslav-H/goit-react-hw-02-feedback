import styled from 'styled-components';

export const FeedbackWrapp = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  padding: 40px;
  width: 300px;
  height: 200px;
  text-align: center;
  background-color: blue;
  box-shadow: -1px -1px 31px 0px rgba(0, 0, 0, 0.75);
`;

export const FeedbackTitle = styled.h1`
  text-align: center;
  margin: 0;
`;

export const Button = styled.button`
  min-width: 50px;
  margin-top: 50px;
  box-shadow: -1px -1px 11px 4px rgba(0, 0, 0, 0.75);

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const StatisticsWrapp = styled.div`
  width: 300px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  text-align: center;
  background-color: aqua;
`;
export const StatisticsTitle = styled.h2`
margin: 0;
`;
export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
`;
export const StatisticsItem = styled.li``;
export const StatisticsSpan = styled.span``;
