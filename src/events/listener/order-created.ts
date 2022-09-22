import { Subjects } from '../subjects';
import { OrderStatus } from '../../orders/orders-status-Enums';

export interface OrderCreated {
  subject: Subjects;
  data: {
    id: string;
    version: number;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticketId: {
      id: string;
      price: number;
    };
  };
}
