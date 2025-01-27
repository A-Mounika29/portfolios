import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0 4px 24px rgb(221, 167, 206);
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px;
    width: 300px;
  }

  &:hover {
    box-shadow: 0 0 20px rgba(210, 59, 150, 0.2);
    transform: translateY(-5px);
  }

  &:hover img {
    display: flex;
  }

  &:hover span {
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  border: 0.1px solid rgb(147, 87, 250);
`;

const Top = styled.div`
  display: flex;
  gap: 12px;
`;

const Img = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const EducationCard = ({ education }) => (
  <Container>
    <Top>
      <Img src={education.img} />
      <Body>
        <Name>{education.school}</Name>
        <Degree>{education.degree}</Degree>
        <Date>{education.date}</Date>
      </Body>
    </Top>
    <Grade><b>Grade: </b>{education.grade}</Grade>
    <Description><Span>{education.desc}</Span></Description>
  </Container>
);

export default EducationCard;