import { Controller, Get } from '@nestjs/common';
import { FlowersService } from './flowers.service';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  findAll() {
    console.log('This is controller');
    return this.flowersService.findAll();
  }
}
