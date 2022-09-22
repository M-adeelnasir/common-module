import { Subjects } from '../subjects';
import { OrderStatus } from '../../orders/orders-status-Enums';

export interface OrderCreated {
  subject: Subjects;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    version?: number;
    ticketId: {
      id: string;
      price: number;
    };
  };
}
