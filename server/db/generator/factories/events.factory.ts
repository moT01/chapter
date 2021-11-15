import { addHours, add } from 'date-fns';
import { company, internet, lorem, image } from 'faker';
import { random, randomEnum, randomItem, randomItems } from '../lib/random';
import {
  Chapter,
  Event,
  EventSponsor,
  EventTag,
  Sponsor,
  Tag,
  Venue,
  VenueType,
} from 'src/models';

const createEvents = async (
  chapters: Chapter[],
  venues: Venue[],
  sponsors: Sponsor[],
  tags: Tag[],
): Promise<Event[]> => {
  const events: Event[] = [];

  for (let i = 0; i < 4; i++) {
    const date = new Date();
    date.setMilliseconds(0);
    date.setSeconds(0);
    date.setMinutes(0);

    const start_at = add(date, {
      days: random(10),
      hours: random(5),
      minutes: random(4) * 15,
    });

    console.log(start_at);

    const event = new Event({
      name: company.companyName(),
      chapter: randomItem(chapters),
      description: lorem.words(),
      url: internet.url(),
      streaming_url: internet.url(),
      venue_type: randomEnum(VenueType),
      capacity: random(1000),
      venue: randomItem(venues),
      canceled: Math.random() > 0.5,
      start_at,
      ends_at: addHours(start_at, random(5)),
      user_roles: [],
      image_url: image.imageUrl(640, 480, 'nature', true),
      sponsors: [],
      tags: [],
    });

    await event.save();

    await Promise.all(
      randomItems(sponsors, 2)
        .map((sponsor) => {
          return new EventSponsor({ eventId: event.id, sponsorId: sponsor.id });
        })
        .map((es) => es.save()),
    );

    await Promise.all(
      randomItems(tags, 2)
        .map((tag) => {
          return new EventTag({ eventId: event.id, tagId: tag.id });
        })
        .map((et) => et.save()),
    );

    /*await Promise.all(
      Array.from(new Array(1 + random(3)), () => {
        const tag = new Tag({ event_id: event.id, name: lorem.words(1) });
        return tag.save();
      }),
    );*/

    events.push(event);
  }
  return events;
};

export default createEvents;
