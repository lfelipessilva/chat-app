export class CreateConnectionDto {
  id: string;
  first_userId: string;
  second_userId: string;
  messages?: any;
  created_at: Date;
  updated_at: Date;
}
