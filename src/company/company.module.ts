import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from './entities/company.entity';

@Module({
    imports:[
       SequelizeModule.forFeature([Company]),
    ],
})
export class CompanyModule {}
