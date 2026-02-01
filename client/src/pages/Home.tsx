import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();
  return (
     <div className='flex justify-center items-center h-screen'>
        <Button className='bg-black text-white' onClick={()=>navigate('/sign-up')}>get started</Button>
     </div>
  )
}

export default Home