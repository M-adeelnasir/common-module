import { Subjects } from '../subjects';

export interface TicketUpdatedCheck {
  subject: Subjects.ticketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
