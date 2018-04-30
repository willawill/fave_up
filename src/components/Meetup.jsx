import moment from "moment";
import React from "react";
import PropTypes from 'prop-types';

import "./Meetups.css";

import InlineBlockList from "meetup-web-components/lib/layout/InlineBlockList";
import AvatarMember from "meetup-web-components/lib/media/AvatarMember";
import FavoriteButton from './FavoriteButton';

const Meetup = props => {
  const date = moment(new Date(props.time)).format("h:mmA, dddd");
  const rsvpers =
    props.rsvpers.length >= 5 ? props.rsvpers.slice(0, 5) : props.rsvpers;

  return (
    <li className="list-item">
      <div className="text--secondary margin--bottom">{date} </div>
      <h3 className="text--bold">
        <a href={props.url} target="_blank">
          {props.name}
        </a>
      </h3>
      <p className="text--caption margin--bottom">{props.group}</p>
      <div className="margin--bottom">
        <InlineBlockList
          items={rsvpers.map(rsvp => {
            const thumb = rsvp.member_photo
              ? rsvp.member_photo.thumb_link
              : "https://placebear.com/50/50";

            return (
              <AvatarMember
                member={Object.assign(rsvp.member, {
                  photo: Object.assign({}, (rsvp || {}).member_photo, {
                    thumb_link: thumb
                  })
                })}
                alt={rsvp.member.name}
                key={rsvp.member.member_id}
              />
            );
          })}
        />
        <strong>{props.rsvpCount} Going</strong>
        <FavoriteButton
          isFavorited={props.isFavorited}
          toggleFavorite={() => props.toggleFavorite(props.id, props.isFavorited)}/>
      </div>
    </li>
  );
};

Meetup.propTypes = {
  group: PropTypes.string,
  name: PropTypes.string,
  rsvpCount: PropTypes.number,
  rsvpers: PropTypes.array,
  time: PropTypes.number,
  url: PropTypes.string,
  isFavorited: PropTypes.bool,
  toggleFavorite: PropTypes.func
}
export default Meetup;
