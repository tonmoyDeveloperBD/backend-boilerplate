import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FooEntity {
  constructor(name: string) {
    this.name = name;
  }

  @Field(() => String)
  name: string;
}
