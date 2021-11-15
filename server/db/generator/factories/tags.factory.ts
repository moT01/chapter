import { lorem } from 'faker';
import { Tag } from 'src/models';

const createTags = async (): Promise<Tag[]> => {
  const tags: Tag[] = [];

  for (let i = 0; i < 6; i++) {
    const name = lorem.word();

    const tag = new Tag({
      name,
    });

    tags.push(tag);
  }

  try {
    await Promise.all(tags.map((tag) => tag.save()));
  } catch (e) {
    console.error(e);
    throw new Error('Error seeding locations');
  }

  return tags;
};

export default createTags;
