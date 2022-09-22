import { Subjects } from '../subjects';

export interface TicketCreatedCheck {
  subject: Subjects.ticketCreated;
  data: {
    id: string;
    title: string;
    version: number;
    price: number;
    userId: string;
  };
}
