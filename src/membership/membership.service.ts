import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MembershipDto } from './dto/membershop.dto';
import { Membership } from './entity/membership.entity';

@Injectable()
export class MembershipService {
    constructor(
        @InjectRepository(Membership)
        private readonly memberRepository:Repository<Membership>
    ){}
     
    async createMember(body:MembershipDto):Promise<Membership>{
        try{
        const member =  this.memberRepository.create(body);
        return await this.memberRepository.save(member);
        }
        catch(err){
            throw new Error(err.message);
        }
    }
}
