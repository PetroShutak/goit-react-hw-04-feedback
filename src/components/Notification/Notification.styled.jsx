import styled from 'styled-components';
import { getRandomColor } from '../../utils/getRandom';

export const NotificationWrapper = styled.div`
  background-color: ${getRandomColor()};
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`;

export const NotificationMessage = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: center;
  padding: 10px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;