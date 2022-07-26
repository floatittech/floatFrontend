import { useRouter } from "next/router";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  const router = useRouter();
  router.push("/workfloat");

  return <LoadingScreen/>
}

Home.auth = true;