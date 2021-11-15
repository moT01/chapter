import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateTagInputs {
  @Field(() => String)
  name: string;
}
