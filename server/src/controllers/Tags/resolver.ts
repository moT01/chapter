import { Resolver, Query, Arg, Int, Mutation } from 'type-graphql';
import { Tag } from '../../models';
import { CreateTagInputs } from './inputs';

@Resolver()
export class TagResolver {
  @Query(() => [Tag])
  tags() {
    return Tag.find();
  }

  @Query(() => Tag, { nullable: true })
  tag(@Arg('id', () => Int) id: number) {
    return Tag.findOne(id);
  }

  @Mutation(() => Tag)
  async createTag(@Arg('data') data: CreateTagInputs) {
    const tag = new Tag({ ...data });
    return tag.save();
  }
}
