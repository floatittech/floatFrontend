import Head from "next/head";
import TopNavBar from '../NavBar/NavBarWorkFlow/TopNavBar';

export default function LayoutWorkFlow({children}) {

        return (
            <div>
                <div>
                  <Head><title>Dashboard - Trelo</title></Head>
                  <TopNavBar/>
                  <div className=''>{children}</div>
                </div> 
             </div>
        )
    }