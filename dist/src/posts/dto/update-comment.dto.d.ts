import { CommentDto } from './comment.dto';
import * as Mongoose from 'mongoose';
declare const UpdateCommentDto_base: import("@nestjs/common").Type<Pick<CommentDto, "_id" | "comment">>;
export declare class UpdateCommentDto extends UpdateCommentDto_base {
    readonly commenterId: Mongoose.Types.ObjectId;
}
export {};
