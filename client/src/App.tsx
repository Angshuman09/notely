
import './App.css'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { useState, type HtmlHTMLAttributes } from 'react';
type NewUser = {
    name: string;
    email: string
}

function App() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const queryClient = new QueryClient();

  const {data, isLoading} = useQuery({
    queryKey: ['users'],
    queryFn: async ()=>{
      const response = await fetch('http://localhost:3000/users',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return response.json();
    }
  })

  const mutation = useMutation({
    mutationFn: async (newUser: NewUser) => {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
      return response;
    },
  
    onSuccess: ()=>{
      queryClient.invalidateQueries({queryKey:['users']})
    }
  })

  const handleSubmit = ()=>{
     const response = mutation.mutate({ name: Name, email: Email });
    console.log(response);
  }

  if(isLoading){
    return <div>loading...</div>
  }

  console.log(data)
  
  return (
    <div>
      <form className='' onSubmit={handleSubmit}>
      <input onChange={(e)=> setName(e.target.value)} type="text" />
      <input onChange={e => setEmail(e.target.value)} type="email" />
      <button>submit</button>
      </form>

      <ul>
        {data&&data.map((user:any, index:number)=>(
          <li key={index}><div>
            {user.name}
            {user.email}
            </div></li>
        ))}

      </ul>
    </div>
  )
}

export default App
