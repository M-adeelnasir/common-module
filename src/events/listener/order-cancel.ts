import { Subjects } from '../subjects';

export interface OrderCancelled {
  subject: Subjects;
  data: {
    id: string;
    ticketId: {
      id: string;
    };
  };
}
