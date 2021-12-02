import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/roles.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { MembershipDto } from './dto/membershop.dto';
import { Membership } from './entity/membership.entity';
import { MembershipService } from './membership.service';

@UseGuards(JwtAuthGuard,RolesGuard)
@Roles(Role.SUPER_ADMIN)
@Controller('membership')
export class MembershipController {
    constructor(
        private readonly memberService:MembershipService
    ){}
    @Post()
    async createMember(@Body()body:MembershipDto):Promise<Membership>{
        return await this.memberService.createMember(body);
    }
}
