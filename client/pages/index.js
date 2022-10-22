import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Hello from the client!");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  return <div>Hellow world</div>;
}
