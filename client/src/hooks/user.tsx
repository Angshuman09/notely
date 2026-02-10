import type { userData } from "@/zod-validation/user";
import { useMutation } from "@tanstack/react-query";

export const useUserRegister = ()=>{
    const {mutate, isPending, isError, error } = useMutation({
        mutationFn: async (data: userData)=>{
            const response = await fetch('http://localhost:3000/user/register/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if(!response.ok) throw new Error("invalid response");
            return response;
        }
    })

    return{
        mutate,
        isPending,
        isError,
        error
    }
}