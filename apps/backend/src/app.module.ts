import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {configValidationSchema} from './config/config.schema';

@Module({
  imports: [
    // Global configuration with validation
    ConfigModule.forRoot({
      isGlobal: true,
      validate: config => configValidationSchema.parse(config),
      envFilePath: ['.env.local', '.env'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
