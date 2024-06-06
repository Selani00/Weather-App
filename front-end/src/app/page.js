"use client";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
    console.log("Get's Start");
  };

  return (
    <div>
      <button onClick={handleClick}>Get's Start</button>
    </div>
  );
}
