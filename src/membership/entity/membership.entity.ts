import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { MembershipType } from '../type/membership.type';

@Entity()
export class Membership {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: MembershipType, unique: true })
  name: MembershipType;
}
