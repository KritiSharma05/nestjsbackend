import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { EventService } from './event.service';
import { event as EventModel, Prisma } from '@prisma/client';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async createEvent(@Body() data: Prisma.eventCreateInput): Promise<EventModel> {
    return this.eventService.createEvent(data);
  }

  @Get(':id')
  async getEventById(@Param('id') id: string): Promise<EventModel | null> {
    return this.eventService.getEventById(id);
  }

  @Patch(':id')
  async updateEvent(
    @Param('id') id: string,
    @Body() data: Prisma.eventUpdateInput,
  ): Promise<EventModel> {
    return this.eventService.updateEvent(id, data);
  }

  @Delete(':id')
  async deleteEvent(@Param('id') id: string): Promise<EventModel> {
    return this.eventService.deleteEvent(id);
  }
}
