import { Module } from '@nestjs/common';
import { ClimatService } from './climat.service';
import { ClimatController } from './climat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Climat, ClimatSchema } from './entities/climat.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Climat.name, schema: ClimatSchema }])],
  controllers: [ClimatController],
  providers: [ClimatService]
})
export class ClimatModule {}
