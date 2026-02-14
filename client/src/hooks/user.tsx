import type { userData } from "@/zod-validation/user";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useUserAuth = ()=>{
    const {mutate, isPending, isError, error } = useMutation({
        mutationFn: async (data: userData)=>{
            const response = await fetch('http://localhost:3000/user/auth',{
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

export const useUserLogout = ()=>{
    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: async ()=>{
            const response = await fetch('http://localhost:5173/user/logout',{
                method: 'POST',
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

export const useGetUser = ()=>{
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["user"],
        queryFn: async ()=>{
            const response = await fetch('http://localhost:5173/user/get-user',{
                method: 'GET',
            })
            if(!response.ok) throw new Error("invalid response");
            return response.json();
        },
        staleTime: 5 * 60 * 1000, // 5 min — avoid refetch on every reload
    })

    return{
        data,
        isLoading,
        isError,
        error
    }
}