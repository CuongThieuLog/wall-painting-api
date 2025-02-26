import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TargetDocument = HydratedDocument<Target>;

@Schema({ timestamps: true })
export class Target {
  @Prop()
  urls: string[];

  @Prop()
  keywords: string[];

  @Prop()
  hashtags: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' })
  profile: string;

  @Prop({ default: 1 })
  status: number;

  @Prop()
  lastCrawl: Date;
}

export const TargetSchema = SchemaFactory.createForClass(Target);
