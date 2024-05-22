import { Injectable } from '@nestjs/common';
import { event, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async createEvent(data: Prisma.eventCreateInput): Promise<event> {
    return this.prisma.event.create({
      data,
    });
  }

  async getEventById(id: string): Promise<event | null> {
    return this.prisma.event.findUnique({
      where: { id },
    });
  }

  async updateEvent(id: string, data: Prisma.eventUpdateInput): Promise<event> {
    return this.prisma.event.update({
      where: { id },
      data,
    });
  }

  async deleteEvent(id: string): Promise<event> {
    return this.prisma.event.delete({
      where: { id },
    });
  }
}
