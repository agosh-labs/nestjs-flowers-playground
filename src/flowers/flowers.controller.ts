import {
  Controller,
  Get,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from 'src/conception/auth.guard';
import { LoggingInterceptor } from 'src/conception/logging.interceptor';
import { ParseIntPipe } from 'src/conception/pareInt.pipe';
import { FlowersService } from './flowers.service';

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log('This is controller');
    console.log(pageNumber);
    return this.flowersService.findAll();
  }
}
