import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceDto, UpdateServiceDto } from './dto/service.dto';
import { Service } from './entity/service.entity';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}
  async saveService(body: ServiceDto): Promise<Service> {
    try {
      const service = this.serviceRepository.create(body);
      return await this.serviceRepository.save(service);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
  async findAllService(): Promise<Service[]> {
    try {
      return await this.serviceRepository.find();
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
  async findOneService(id: string): Promise<Service> {
    try {
      return await this.serviceRepository.findOne(id);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
  async updateOneServices(body: UpdateServiceDto): Promise<Service> {
    try {
      const service = this.serviceRepository.findOne(body.id);
      if (!service) {
        throw new InternalServerErrorException('Error Occured');
      }
      return this.serviceRepository.save({
        ...service,
        ...body,
      });
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
  async deleteService(id: string): Promise<any> {
    try {
      return this.serviceRepository.delete(id);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
