// Create a type for the "Student" object

export interface Student {
  _id: string;
  id: number;
  name: string;
  status: 'Checked In' | 'Checked Out';
  location: string;
  time: string;
  imageUrl: string; // Property for student image
}
