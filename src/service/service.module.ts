import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './entity/service.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Service]), UserModule],
  providers: [ServiceService],
  controllers: [ServiceController],
})
export class ServiceModule {}
