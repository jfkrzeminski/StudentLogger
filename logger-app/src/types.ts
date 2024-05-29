// Create a type for the "Student" object

export interface Student {
    id: number;
    name: string;
    status: 'Checked In' | 'Checked Out';
    time?: string;
  }
  