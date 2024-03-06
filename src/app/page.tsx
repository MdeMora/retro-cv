import dict from "@/lang/en.json";
import HomePage from "@/containers/HomePage";

export const metadata = {
  title: "Miguel de Mora",
  description: "Miguel de Mora's personal website",
};

export default function Home() {
  return <HomePage dict={dict} />;
}
