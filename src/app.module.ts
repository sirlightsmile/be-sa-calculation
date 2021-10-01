import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import SampleServices from './services/samples'
import Services from './services'

// TODO: remove sample services & sample service folder when no need
@Module({
  controllers: [...SampleServices, ...Services],
  providers: [AppService],
})
export class AppModule {}
