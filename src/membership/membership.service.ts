import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MembershipDto } from './dto/membershop.dto';
import { Membership } from './entity/membership.entity';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(Membership)
    private readonly membershipRepository: Repository<Membership>,
  ) {}

  async createMember(body: MembershipDto): Promise<Membership> {
    try {
      const member = this.membershipRepository.create(body);
      return await this.membershipRepository.save(member);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
