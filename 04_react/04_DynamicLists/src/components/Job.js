import styled from "styled-components";
export default function Job({ title, company, salary }) {
  return (
    <Wrapper>
      <div className="info">
        <h1 className="job-title">{title}</h1>
        <h2 className="company">{company}</h2>
      </div>
      <p className="salary">${salary / 1000}k</p>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  width: 100%;
  border: 3px solid slategrey;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Avenir, "Avenir Next LT Pro", Montserrat, Corbel, "URW Gothic",
    source-sans-pro, sans-serif;
  .job-title {
    font-size: 1.5rem;
    margin: 0;
  }
  .company {
    font-size: 1rem;
    margin: 0;
    font-weight: normal;
  }
  .salary {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
