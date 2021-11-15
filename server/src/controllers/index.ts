import { ChapterResolver } from './Chapter/resolver';
import { EventResolver } from './Events/resolver';
import { EmailResolver } from './Messages/resolver';
import { SponsorResolver } from './Sponsors/resolver';
import { TagResolver } from './Tags/resolver';
import { UserChapterRoleResolver } from './UserChapterRole/resolver';
import { VenueResolver } from './Venue/resolver';
import { AuthResolver } from 'src/controllers/Auth/resolver';
import { UserResolver } from 'src/models';

const resolvers = [
  ChapterResolver,
  VenueResolver,
  EventResolver,
  EmailResolver,
  AuthResolver,
  SponsorResolver,
  TagResolver,
  UserChapterRoleResolver,
  UserResolver, // Somehow extract this somewhere else
] as const;

export { resolvers };
