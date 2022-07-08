// import axios from "axios";
// import { useSession } from "next-auth/react"

// const Apiclient = () => {
//     const instance = axios.create({baseURL : process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL});
//     instance.interceptors.request.use(async (request) => {
//         const { data: session, status } = await useSession()
//         if(session){
//             request.headers.common = {
//                 Authorization : `Bearer ${session?.accessToken}`
//             }
//         }
//         return request
//     })
    
//     instance.interceptors.response.use( (response) => {
//             return response
//         },
//         (error) => {
//             console.log(error, "error");
//         }
//     )
//     return instance
// }

// export default Apiclient();