import { ObjectType, Field } from 'type-graphql';
import { Entity, Column } from 'typeorm';
import { BaseModel } from './BaseModel';
// import { Event } from './Event';

@ObjectType()
@Entity({ name: 'tags' })
export class Tag extends BaseModel {
  @Field(() => String)
  @Column({ nullable: false, unique: true })
  name!: string;

  constructor(params: { name: string }) {
    // ; events: Event[] }) {
    super();
    if (params) {
      const { name } = params;
      this.name = name;
    }
  }
}
