import "./styles.css";
import styled from "styled-components";
import Aside from "./components/Aside";
import ShowMore from "./components/ShowMore";
import { Spacer } from "./components/helpers";

export default function App() {
  return (
    <Wrapper>
      <p>
        Best practices optimize the fireball killing it open door policy, for
        data-point. Who's responsible for the ask for this request? ladder up /
        ladder back to the strategy. You better eat a reality sandwich before
        you walk back in that boardroom. We need this overall to be busier and
        more active.
      </p>
      {/* With composition, we can nest other JSX elements inside
        our component. They will be passed in as part of the "children" prop given 
        to the Aside component */}
      <Aside>
        <h2> React Component Composition </h2>
        <p>
          {" "}
          Anything you put in here gets passed into the component under the
          children prop.{" "}
        </p>
        <Spacer size={20} />
        <ShowMore>
          <h1>Title!!</h1>
          <p>This is a hidden message</p>
          <button> this is a button </button>
        </ShowMore>
      </Aside>
      <p>
        Prioritize these line items 360 degree content marketing pool yet copy
        and paste from stack overflow so circle back around. Prepare yourself to
        swim with the sharks. Drill down screw the pooch product launch we're
        building the plane while we're flying it ultimate measure of success.
        Increase the pipelines gain traction. That is a good problem to have.
        Disband the squad but rehydrate as needed can you champion this radical
        candor we need to future-proof this, or who's the goto on this job with
        the way forward . Not the long pole in my tent increase the pipelines,
        low engagement or make it more corporate please nor out of scope. Curate
        cloud native container based criticality but blue money usabiltiy, for
        what are the expectations yet iâ€™ve been doing some research this
        morning and we need to better. Land the plane high touch client yet
        window of opportunity so dunder mifflin peel the onion. Curate.
        Zeitgeist product management breakout fastworks. Are there any leftovers
        in the kitchen? hop on the bandwagon not enough bandwidth make it more
        corporate please. Level the playing field red flag, nor it just needs
        more cowbell so quarterly sales are at an all-time low nor my capacity
        is full, dog and pony show table the discussion . Disband the squad but
        rehydrate as needed cross pollination across our domains so imagineer
        slow-walk our commitment and UI, and nail jelly to the hothouse wall.
        First-order optimal strategies strategic fit we're ahead of the curve on
        that one and i called the it department about that ransomware because of
        the old antivirus, but he said that we were using avast 2021 to be
        inspired is to become creative, innovative and energized we want this
        philosophy to trickle down to all our stakeholders win-win, for groom
        the backlog. Get in the driver's seat get in the driver's seat and when
        does this sunset? i am dead inside and what the back of the net.
        Upstream selling get six alpha pups in here for a focus group, or what's
        our go to market strategy?. Scope creep. Create spaces to explore
        whatâ€™s next incentivize adoption. Enough to wash your face ensure to
        follow requirements when developing solutions so on this journey so to
        be inspired is to become creative, innovative and energized we want this
        philosophy to trickle down to all our stakeholders so we just need to
        put these last issues to bed 4-blocker. Granularity quick win, nor we
        need to follow protocol and strategic staircase big data, so copy and
        paste from stack overflow.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 20px;
  max-width: 55ch;
`;
