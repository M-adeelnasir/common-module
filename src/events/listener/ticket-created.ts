import { Subjects } from '../subjects';

export interface TicketCreatedCheck {
  subject: Subjects.ticketCreated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
