import styled from 'styled-components';

export const SectionWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;

    @media screen and (min-width: 768px) {
    font-size: 32px;
    }

    @media screen and (min-width: 1280px) {
    font-size: 40px;
    }

    @media screen and (min-width: 1440px) {
    font-size: 48px;
    }
    
`;