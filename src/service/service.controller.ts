import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Put,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/roles.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { ServiceDto, UpdateServiceDto } from './dto/service.dto';
import { ServiceService } from './service.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.SUPER_ADMIN)
@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}
  @Post()
  async createServices(@Body() body: ServiceDto): Promise<any> {
    return await this.serviceService.saveService(body);
  }
  @Get()
  async queryAllServices(): Promise<any> {
    return await this.serviceService.findAllService();
  }
  @Get(':id')
  async queryOneServices(@Param() { id }: { id: string }): Promise<any> {
    return await this.serviceService.findOneService(id);
  }

  @Put()
  async updateServices(@Body() body: UpdateServiceDto): Promise<any> {
    return await this.serviceService.updateOneServices(body);
  }
  @Delete(':id')
  async deleteService(@Param() { id }: { id: string }): Promise<any> {
    return await this.serviceService.deleteService(id);
  }
}
