import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router';
import { UserButton } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react';

const Home = () => {
    const navigate = useNavigate();
    const {user} = useUser();
    console.log(user?.id)
  return (
     <div className='flex justify-center items-center h-screen'>
        <Button className='bg-black text-white' onClick={()=>navigate('/sign-up')}>get started</Button>
        <UserButton/>
     </div>
  )
}

export default Home