import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class ServiceDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  loyaltyPoint: number;
}
export class UpdateServiceDto {
  @IsNotEmpty()  
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;
  
  @IsNotEmpty()
  @IsNumber()
  loyaltyPoint: number;
}
