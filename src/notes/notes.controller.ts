import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Notes } from 'src/notes';
import { Note } from 'src/note';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async index(): Promise<Notes> {
    return this.notesService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Note> {
    return this.notesService.find(id);
  }

  @Post()
  create(@Body() note: Note) {
    this.notesService.create(note);
  }

  @Put()
  update(@Body() note: Note) {
    this.notesService.update(note);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.notesService.delete(id);
  }
}
