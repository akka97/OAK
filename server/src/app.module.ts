import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from "./user/models/user.entity";
import { GymsModule } from './gyms/gyms.module';
import { AreaModule } from './area/area.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    GymsModule,
    AreaModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'akil12',
      database: 'gym',
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }