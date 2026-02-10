import {z} from 'zod'

export const userSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(8,"password must be 8 characters")
})

export type userData = z.infer<typeof userSchema>