import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GymsModule } from './gyms/gyms.module';
import { AreaModule } from './area/area.module';

import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from "./user/models/user.entity";
import { Area } from "./area/models/area.entity";
import { Category } from "./category/models/category.entity";
import { Gym } from './gyms/models/gyms.entity';

import { CategoryModule } from "./category/category.module";
import { PermissionGuard } from './guards/permission.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    AuthModule,
    UserModule,
    GymsModule,
    AreaModule,
    CategoryModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Andi1990+',
      database: 'gym',
      entities: [User, Area, Gym, Category],
      synchronize: true,
      autoLoadEntities: true,
    })
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: PermissionGuard
    }
  ],
})
export class AppModule { }