import { Injectable, OnModuleInit } from '@nestjs/common';
import { Note } from 'src/note';
import { NotesStore } from 'src/notesStore';
import defaultData from './defaultData';

@Injectable()
export class NotesService implements OnModuleInit {
  private readonly notes: NotesStore = {};
  onModuleInit() {
    defaultData.forEach((note) => {
      console.log(`Initial data: ${note.id}`);
      this.create(note);
    });
  }

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
