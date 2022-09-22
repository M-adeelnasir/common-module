import { Subjects } from '../subjects';

export interface TicketUpdatedCheck {
  subject: Subjects.ticketUpdated;
  data: {
    id: string;
    title: string;
    version: number;
    price: number;
    userId: string;
    orderId?: string;
  };
}
