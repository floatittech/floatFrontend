import NavLeft from '../NavBar/NavBarHomePage/NavLeft';
import NavTop from '../NavBar/NavBarHomePage/NavTop'
import Head from "next/head";

export default function Layout({children}) {

      return (
          <div>
              <div>
                <Head><title>Dashboard - Trelo</title></Head>
                <NavLeft/>
                <NavTop/>
                <div className='md:ml-64'>
                  <div className='mx-2.5 md:mx-3 m-auto min-h-screen'>{children}</div>
                </div>
              </div> 
            </div>  
      )
  }