import { Controller, Get, Render } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get() //1. localhost:3000으로 get요청시,
  @Render('page') //2. pages에 있는 index를 렌더링
  public index() {
    // Index.InitialProps 에 전달.
    return {
      title: 'Nest with Next',
    };
  }
  // home() {
  //     return 'Welcome to my Movie API! appcontroller in src folder';
  // }
}
