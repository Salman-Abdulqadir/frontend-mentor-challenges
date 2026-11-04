import React from "react";
import styled from "styled-components";

//importing icons
import detailed from "../images/icon-detailed-records.svg";
import customizable from "../images/icon-fully-customizable.svg";
import recognition from "../images/icon-brand-recognition.svg";

const Card = ({ icon, title, description, className }) => {
  return (
    <StyledCard className={className}>
      <div className="image-wrapper">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledCard>
  );
};

const Statistics = () => {
  return (
    <StyledStatistics>
      <div className="stat-text">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <Cards className="flex">
        <div className="line"></div>
        <Card
          className="card"
          icon={recognition}
          title={"Brand Recognition"}
          description="Boost your brand recogntion with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
        />
        <Card
          className="card card-2"
          icon={detailed}
          title={"Detailed Records"}
          description="Boost your brand recogntion with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
        />
        <Card
          className="card card-3"
          icon={customizable}
          title={"Fully Customizable"}
          description="Boost your brand recogntion with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
        />
      </Cards>
    </StyledStatistics>
  );
};
const StyledStatistics = styled.section`
  background-color: hsla(257, 7%, 63%, 0.2);
  padding: 5rem 0rem;
  .stat-text{
    padding: 1rem;
    text-align: center;
    margin-bottom: 6rem;
  }
`;
const Cards = styled.div`
  position: relative;
  width: 80%;
  margin: 3rem auto;
  .line {
    width: 100%;
    position: absolute;
    height: 10px;
    background-color: hsl(180, 66%, 49%);
  }
  @media screen and (max-width: 770px){
    flex-direction: column;
    .line{
      width: 10px;
      height: 80%;
      transform: translateY(2rem);
    }
    .card{
      margin-top: 4rem;
      text-align: center;
    }
    .card .image-wrapper{
      margin: auto;
    }
  }
`;
const StyledCard = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
  flex: 1;
  padding: 2rem;
  border-radius: 10px;
  .image-wrapper {
    background-color: hsl(257, 27%, 26%);
    width: fit-content;
    padding: 1rem;
    border-radius: 50%;
    transform: translateY(-70px);
  }
  h3{
    margin-bottom: 1.5rem;
  }
`;

export default Statistics;
