import { Subjects } from '../subjects';

export interface TicketCreatedPubCheck {
  subject: Subjects.ticketCreated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
