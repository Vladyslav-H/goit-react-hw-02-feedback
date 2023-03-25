import styled from 'styled-components';

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
