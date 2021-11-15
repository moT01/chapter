import { ObjectType, Field, Int } from 'type-graphql';
import { Entity, ManyToOne, JoinColumn, PrimaryColumn, Unique } from 'typeorm';
import { BaseModel } from './BaseModel';
import { Event } from './Event';
import { Tag } from './Tag';

@ObjectType()
@Entity({ name: 'event_tags' })
@Unique(['tag_id', 'event_id'])
export class EventTag extends BaseModel {
  @Field(() => Int)
  @PrimaryColumn()
  tag_id!: number;

  @Field(() => Int)
  @PrimaryColumn()
  event_id!: number;

  @Field(() => Tag)
  @ManyToOne((_type) => Tag, (tag) => tag.events)
  @JoinColumn({ name: 'tag_id' })
  tag!: Tag;

  @Field(() => Event)
  @ManyToOne((_type) => Event, (event) => event.tags)
  @JoinColumn({ name: 'event_id' })
  event!: Event;

  constructor(params: { tagId: number; eventId: number }) {
    super();
    if (params) {
      this.tag_id = params.tagId;
      this.event_id = params.eventId;
    }
  }
}
