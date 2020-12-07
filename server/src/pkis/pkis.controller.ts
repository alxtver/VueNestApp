import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { from } from 'rxjs';
import { CreatePkiDto } from './dto/create-pki.dto'
import { UpdatePkiDto } from './dto/update-pki.dto'

@Controller('pkis')
export class PkisController {
  @Get()
  getAll() {
    return 'getAll'
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne ' + id
  }

  @Post()
  create(@Body() createPkiDto: CreatePkiDto): string {
    console.log(createPkiDto);
    return 'PKI create!'
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'PKI remove'
  }

  @Put(':id')
  update(@Body() updatePkiDto: UpdatePkiDto, @Param('id') id: string) {
    console.log(updatePkiDto);
    return 'Update ' + id
  }
}
