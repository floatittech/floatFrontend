import { signIn, useSession, getProviders , getSession } from "next-auth/react"
import { useRouter } from "next/router";
import LoadingScreen from '../components/LoadingScreen';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

export default function Login({providers}) {

  // const {data:session , status } = useSession();
  // const router = useRouter();

  // if(status === 'authenticated') router.push("/workfloat");
  // if(status === 'loading' || session) return <LoadingScreen/>

  return (
    <div className="relative flex justify-center min-h-screen items-center w-full bg-gradient-to-r from-[#e1f4ff]/60 to-[#f9e1ff]/60 " >
      {/* <div className='absolute top-0 -left-4 h-36 w-36 rounded-full bg-yellow-200 sm:hidden md:visible'></div> */}
      {/* <div className='absolute h-screen bg-[url("/wave-login.svg")] '></div> */}
    <div className=' flex flex-col justify-center items-center w-[295px] bg-white h-80 rounded-xl shadow-inner'>
        <div className='mb-4'>
          <Image
          src={'/logo-float.svg'}
          height={43}
          width={133}
          alt="login"
          />
        </div>
        <div className='text-2xl mb-14 font-medium'>Log in to Float</div>
      {providers && Object.values(providers).map((provider:any) => (
        <div onClick={() => signIn(provider.id, { callbackUrl: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/workfloat/` }, { prompt: "login" })} key={provider.name} 
        className='flex justify-center items-center space-x-1 bg-white rounded-xl border cursor-pointer opacity-100' >
          {/* id , name , type ,signinUrl ,callbackUrl  */}
          <div className='flex justify-center p-3 bg-rose-100 rounded-xl'>
          <Image
          src={'/google-icon.svg'}
          height={24}
          width={24}
          // className='bg-transparent'
          />
          </div>
          <div className='p-2.5 text-neutral-500 font-semibold text-md'>
            Sign in with Google
          </div>

        </div>
      ))}
    </div>
    </div>
  )
}

export const getServerSideProps:GetServerSideProps = async (context:any) => {
  const {req, res} = context;
  const providers = await getProviders()
  const session = await getSession({ req });

  if(session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/workfloat/",
    });
    res.end()
    return;
  }
  return {
    props : { 
      // session : null,
      providers
    },
  };
}