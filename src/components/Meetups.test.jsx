import React from "react";
import { shallow } from 'enzyme';
import Meetups from "./Meetups.jsx";
import Meetup from "./Meetup.jsx";

const MEETUPS = [
  {
    url: "http://www.meetup.com/ny-tech/",
    group: {
      name: "Some Meetup"
    },
    id: 1,
    created: 1506008725,
    time: 1506008726,
    rsvpCount: 55,
    rsvp_sample: []
  },
  {
    url: "http://www.meetup.com/xxxxxx/",
    group: {
      name: "Some Other Meetup"
    },
    id: 2,
    created: 1506008727,
    time: 1506008728,
    rsvpCount: 2,
    rsvp_sample: []
  }
];

const PEOPLE = [
  {
    member: {
      name: "Person One",
      member_id: 1,
      member_photo: {
        thumb_link: "http://placebear.com/100/100"
      }
    }
  },
  {
    member: {
      name: "Person Two",
      member_id: 2,
      member_photo: {
        thumb_link: "http://placebear.com/100/100"
      }
    }
  }
];

it("renders no meetups", () => {
  const component = shallow(
    <Meetups meetups={[]} errors={false} />
  );
  const meetupsEl = component.find(".text--error");
  expect(meetupsEl.length).toEqual(1);
});

it("renders meetups", () => {
  const component = shallow(
    <Meetups meetups={MEETUPS} errors={false} favorites={[]} query="whatev" />
  );
  const meetupsEl = component.find("Meetup");
  expect(meetupsEl.length).toEqual(MEETUPS.length);
});