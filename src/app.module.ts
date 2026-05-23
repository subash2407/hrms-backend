import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from 'config/db_connection';
import { CompanyModule } from './company/company.module';
import { HelpersService } from './common/helpers/helpers.service';

@Module({
  imports: [
    SequelizeModule.forRoot(databaseConfig),
    AuthModule,
    CompanyModule
  ],
  controllers: [AppController],
  providers: [AppService, HelpersService],
})
export class AppModule {}
