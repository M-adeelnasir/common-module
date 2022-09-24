import { Subjects } from '../subjects';

export interface OrderExpirationEvent {
  subject: Subjects.orderExpired;
  data: {
    orderId: string;
  };
}
