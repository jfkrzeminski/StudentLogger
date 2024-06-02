// Create a type for the "Student" object

export interface Student {
    id: number;
    name: string;
    status: 'Checked In' | 'Checked Out';
    location: string;
    time: string;
    imageUrl: string; // Property for student image
  }
  