import { Controller, Get, Query } from '@nestjs/common';
import { ParseIntPipe } from 'src/conception/pareInt.pipe';
import { FlowersService } from './flowers.service';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log('This is controller');
    console.log(pageNumber);
    return this.flowersService.findAll();
  }
}
