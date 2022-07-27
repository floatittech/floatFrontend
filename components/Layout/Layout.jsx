import NavLeft from '../NavBar/NavBarHomePage/NavLeft';
import NavTop from '../NavBar/NavBarHomePage/NavTop'
import Head from "next/head";

export default function Layout({children}) {

      return (
          <div>
              <div>
                <Head><title>Dashboard - Trelo</title></Head>
                <NavLeft/>
                <div className='pt-2 md:ml-64 m-auto'>
                <NavTop/>
                  <div className=''>{children}</div>
                </div>
              </div> 
            </div>  
      )
  }