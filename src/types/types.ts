// types.ts
export interface Race {
  image: string;
  name: string;
  organizer: string;
  city: string;
  date: string;
  type: string;
  participants: number;
  participantsList: string[]; 
}


export interface User {
  fullName: string;
  city: string;
  phoneNumber: string;
  birthDate: string;
  age: number;
  nationality: string;
  avatar?: string;
}
