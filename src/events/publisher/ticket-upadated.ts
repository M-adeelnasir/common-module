import { Subjects } from '../subjects';

export interface TicketUpdatedPubCheck {
  subject: Subjects.ticketCreated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
