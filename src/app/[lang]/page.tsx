import HomePage from "@/containers/HomePage";
import { getDictionary } from "./dictionaries";

export async function generateStaticParams() {
  const langs = [{ lang: "es" }, { lang: "en" }];

  return langs.map(({ lang }) => ({
    lang,
  }));
}

async function LangPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as string);
  return <HomePage dict={dict} />;
}

export default LangPage;
