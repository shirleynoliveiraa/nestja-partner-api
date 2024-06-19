import { IsArray, IsEmail, IsEnum, IsString } from 'class-validator';
import { TicketKind } from '@prisma/client';

export class ReserveSpotRequest {
  @IsArray()
  @IsString({ each: true })
  spots: string[];

  @IsEnum(TicketKind)
  ticket_kind: TicketKind;

  @IsEmail()
  email: string;
}
