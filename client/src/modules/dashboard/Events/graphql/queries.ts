import { gql } from '@apollo/client';

export const EVENTS = gql`
  query events {
    events(showAll: true) {
      id
      name
      canceled
      description
      url
      invite_only
      streaming_url
      start_at
      capacity
      venue {
        id
        name
      }
    }
  }
`;

export const EVENT = gql`
  query event($id: Int!) {
    event(id: $id) {
      id
      name
      description
      url
      invite_only
      streaming_url
      canceled
      capacity
      start_at
      ends_at
      image_url
      chapter {
        id
        name
      }
      sponsors {
        sponsor {
          name
          website
          logo_path
          type
          id
        }
      }
      venue {
        id
        name
        street_address
        city
        postal_code
        region
        country
      }
      rsvps {
        id
        on_waitlist
        user {
          id
          name
        }
      }
    }
  }
`;

export const EVENT_WITH_VENU = gql`
  query eventVenues($id: Int!) {
    event(id: $id) {
      id
      name
      description
      url
      streaming_url
      capacity
      start_at
      ends_at
      venue {
        id
      }
    }
    venues {
      id
      name
    }
  }
`;

export const createEvent = gql`
  mutation createEvent($data: CreateEventInputs!) {
    createEvent(data: $data) {
      id
      name
      canceled
      description
      url
      streaming_url
      capacity
    }
  }
`;

export const updateEvent = gql`
  mutation updateEvent($id: Int!, $data: UpdateEventInputs!) {
    updateEvent(id: $id, data: $data) {
      id
      name
      canceled
      description
      url
      streaming_url
      capacity
    }
  }
`;

export const cancelEvent = gql`
  mutation cancelEvent($id: Int!) {
    cancelEvent(id: $id) {
      id
      canceled
    }
  }
`;

export const deleteEvent = gql`
  mutation deleteEvent($id: Int!) {
    deleteEvent(id: $id)
  }
`;

export const confirmRSVP = gql`
  mutation confirmRsvp($id: Int!) {
    confirmRsvp(id: $id) {
      id
      confirmed_at
      on_waitlist
    }
  }
`;

export const deleteRSVP = gql`
  mutation deleteRsvp($id: Int!) {
    deleteRsvp(id: $id)
  }
`;

export const sendEventInvite = gql`
  mutation sendEventInvite($id: Int!, $emailGroups: [String!]) {
    sendEventInvite(id: $id, emailGroups: $emailGroups)
  }
`;

export const initUserInterestForChapter = gql`
  mutation initUserInterestForChapter($event_id: Int!) {
    initUserInterestForChapter(event_id: $event_id)
  }
`;

export const Sponsors = gql`
  query sponsors {
    sponsors {
      id
      created_at
      updated_at
      name
      website
      logo_path
      type
    }
  }
`;
