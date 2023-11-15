import { Injectable } from '@nestjs/common';
import { Note } from 'src/note';
import { Notes } from 'src/notes';
import defaultData from './defaultData';

@Injectable()
export class NotesService {
  private readonly notes: Notes = defaultData;

  findAll(): Note[] {
    return Object.values(this.notes);
  }

  create(newNote: Note) {
    const id = Date.now();
    this.notes[id] = { ...newNote, id };
  }

  find(id: number): Note {
    const note: Note = this.notes[id];
    if (!note) throw new Error('Note not found.');

    return note;
  }

  update(note: Note) {
    if (!this.notes[note.id]) throw new Error('Note not found.');

    this.notes[note.id] = note;
  }

  delete(id: number) {
    const note: Note = this.notes[id];
    if (!this.notes[note.id]) throw new Error('Note not found.');

    delete this.notes[id];
  }
}
