import { IsNumber, IsOptional, IsString } from 'class-validator';

export class Note {
  @IsNumber() @IsOptional() readonly id: number;
  @IsString() readonly title: string;
  @IsString() readonly description: string;
}
