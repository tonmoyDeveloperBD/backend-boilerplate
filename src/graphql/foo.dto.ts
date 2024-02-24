import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class FooDto {
  @IsNotEmpty()
  @Field(() => String)
  test: string;
}
