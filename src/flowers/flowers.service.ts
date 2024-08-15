import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowersService {
  findAll() {
    return [
      {
        name: 'Rose',
        color: 'red',
        price: 10,
      },
      {
        name: 'Daisy',
        color: 'white',
        price: 15,
      },
    ];
  }
}
