import { IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateJobDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUrl()
  imageUrl: string;

  @IsInt()
  price: number;

  @IsString()
  @IsNotEmpty()
  categorieId: string;
}
