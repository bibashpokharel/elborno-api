import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { Membership } from './entity/membership.entity';
import { MembershipController } from './membership.controller';
import { MembershipService } from './membership.service';

@Module({
  imports:[TypeOrmModule.forFeature([Membership]),UserModule],
  controllers: [MembershipController],
  providers: [MembershipService]
})
export class MembershipModule {}
