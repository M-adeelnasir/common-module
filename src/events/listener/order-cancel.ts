import { Subjects } from '../subjects';

export interface OrderCancelled {
  subject: Subjects;
  data: {
    id: string;
    version?: number;
    ticketId: {
      id: string;
    };
  };
}
