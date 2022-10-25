import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Hewo from the client!");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  return <div>Hellow world</div>;
}
