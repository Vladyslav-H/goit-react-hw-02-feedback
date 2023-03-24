import styled from 'styled-components';

export const FeedbackWrapp = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  padding: 40px;
  width: 400px;
  height: 200px;
  text-align: center;
  background-color: #00B0EA;
  box-shadow: -1px -1px 31px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px 5px 0 0;
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
  box-sizing: border-box;
  width: 400px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  text-align: center;
  background-color: aqua;
  box-shadow: -1px 5px 31px 0px rgba(0, 0, 0, 0.75);
  border-radius: 0 0 5px 5px;
`;
export const StatisticsTitle = styled.h2`
  margin: 0;
`;
export const StatisticsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 20px;
  column-gap: 10px;
  list-style: none;
  padding: 0;
`;
export const StatisticsItem = styled.li``;
export const StatisticsSpan = styled.span`
  font-size: 22px;
  font-weight: 500;
`;
