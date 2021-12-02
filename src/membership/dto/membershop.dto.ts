import { IsEnum, IsNotEmpty } from 'class-validator';
import { MembershipType } from '../type/membership.type';

export class MembershipDto {  
  @IsNotEmpty() 
  @IsEnum(MembershipType) 
  name: MembershipType;
}
