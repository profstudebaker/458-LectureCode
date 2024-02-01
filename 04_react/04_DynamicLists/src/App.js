import "./styles.css";
import { useState } from "react";
import styled from "styled-components";
import Job from "./components/Job";

const JOBS = [
  {
    title: "Associate Data Scientist",
    company: "Meta",
    salary: 105000
  },
  {
    title: "Associate Software Engineer",
    company: "Spotify",
    salary: 95000
  },
  {
    title: "Software Engineer I",
    company: "Google",
    salary: 110000
  },
  {
    title: "Product Manager",
    company: "Airbnb",
    salary: 96000
  },
  {
    title: "Product Manager",
    company: "Airbnb",
    salary: 96000
  },
  {
    title: "Product Manager",
    company: "Airbnb",
    salary: 96000
  }
];

export default function App() {
  // set up a state variable for our checkbox
  // this value will determine if we filter our list or not
  const [checked, setChecked] = useState(false);

  return (
    <Wrapper>
      <input
        type="checkbox"
        id="filter-jobs"
        name="filter-jobs"
        value="filter"
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <label for="filter-jobs"> 100k and up</label>
      <JobList>
        {
          /* Use the map function to return a component
            for every entry in a list

            every time you use map(), you need to provide
            the key attribute
            - best to use a primary key associated with the data
            - but if you do not have one, you can use the index

            filter() gives you access to each element in the list
            evaluates each element against a condition 
            returns a new list with every element that passes the condition
          */
          checked
            ? JOBS.filter((job) => job.salary >= 100000).map((job, idx) => (
                <Job
                  key={idx}
                  title={job.title}
                  company={job.company}
                  salary={job.salary}
                />
              ))
            : JOBS.map((job, idx) => (
                <Job
                  key={idx}
                  title={job.title}
                  company={job.company}
                  salary={job.salary}
                />
              ))
        }
      </JobList>
    </Wrapper>
  );
}
const Wrapper = styled.main`
  padding: 20px;
  label {
    font-family: inherit;
  }
`;

const JobList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 0;
`;
