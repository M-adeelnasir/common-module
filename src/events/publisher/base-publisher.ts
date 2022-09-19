import { Subjects } from './../subjects';
import { Stan } from 'node-nats-streaming';

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Publisher<T extends Event> {
  abstract subject: T['subject'];
  abstract data: T['data'];
  private client: Stan;
  constructor(client: Stan) {
    this.client = client;
  }

  publish() {
    return new Promise((reject, resolve) => {
      this.client.publish(this.subject, JSON.stringify(this.data), (err) => {
        if (err) {
          return reject(err);
        }
        console.log(`Event is published from ${this.subject}`);
        resolve();
      });
    });
  }
}
