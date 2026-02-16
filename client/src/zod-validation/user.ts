import {z} from 'zod'

export const userSchema = z.object({
    username: z.string().min(5),
    password: z.string().min(6,"password must be 6 characters")
})

export type userData = z.infer<typeof userSchema>