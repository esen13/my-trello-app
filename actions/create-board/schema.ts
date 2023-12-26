import {z} from "zod";

export const CreateBoardZod = z.object({
    title: z.string({
        required_error: 'Title is required',
        invalid_type_error: 'Title is invalid'
    }).min(3, 'Title is short.')
})
