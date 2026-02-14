import {z} from 'zod'

export const userSchema = z.object({
    username: z.string().min(5),
    password: z.string().min(8,"password must be 8 characters")
})

export type userData = z.infer<typeof userSchema>