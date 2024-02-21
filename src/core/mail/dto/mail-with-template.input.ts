import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PugTemplateEnum } from '@/core/mail/enum/pug-template.enum';
import { registerEnumType } from '@nestjs/graphql';

registerEnumType(PugTemplateEnum, {
  name: 'PugTemplateEnum',
});
export class SendMailWithTemplate {
  @IsEmail()
  to: string;

  @IsNotEmpty()
  @IsString()
  subject: string;

  @IsNotEmpty()
  @IsEnum(PugTemplateEnum)
  template: string;

  @IsOptional()
  context: Record<string, any>;
  ////attachment , template , important

  constructor(to: string, subject: string, template: string, context: Record<string, any>) {
    this.to = to;
    this.subject = subject;
    this.template = template;
    this.context = context;
  }
}
