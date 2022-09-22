import { Subjects } from '../subjects';

export interface TicketCreatedPubCheck {
  subject: Subjects.ticketCreated;
  data: {
    id: string;
    title: string;
    version: number;
    price: number;
    userId: string;
  };
}
