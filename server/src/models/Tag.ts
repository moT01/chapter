import { ObjectType, Field } from 'type-graphql';
import { Entity, Column, OneToMany } from 'typeorm';
import { BaseModel } from './BaseModel';
import { EventTag } from './EventTag';

@ObjectType()
@Entity({ name: 'tags' })
export class Tag extends BaseModel {
  @Field(() => String)
  @Column({ nullable: false, unique: true })
  name!: string;

  @Field(() => [EventTag])
  @OneToMany((_type) => EventTag, (eventTag) => eventTag.event)
  events!: EventTag[];

  constructor(params: { name: string }) {
    // ; events: Event[] }) {
    super();
    if (params) {
      const { name } = params;
      this.name = name;
    }
  }
}
