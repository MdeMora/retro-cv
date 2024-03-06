import LangButton from "@/components/LangButton";
import ThemeButton from "@/components/ThemeButton";
import ArrowIcon from "@/icons/ArrowIcon";
import Link from "next/link";
const HomePage = ({ dict }: any) => {
  const date = new Date().getFullYear();
  return (
    <main className="p-4 min-h-screen flex justify-center items-center text-center  dark:from-gray-950  dark:to-gray-900 text-gray-90 dark:text-gray-300 bg-gradient-to-tl  from-purple-100 to-stone-50">
      <div className="max-w-lg  m-auto">
        <section className="mt-8 mb-8 dark:text-gray-100 ">
          <h1 className="font-semibold text-3xl">
            Miguel
            <span className="text-purple-700 "> de Mora García</span>
          </h1>
          <h2 className="text-lg">Front-end developer</h2>
        </section>
        <section className="mb-8">
          <p className="mb-2 text-balance">
            {dict.ima} {date - 2000} {dict.section1}{" "}
            <span className="font-bold">{dict.design}</span> {dict.and}{" "}
            <span className="font-bold ">{dict.performance}</span>.
          </p>
          <p className=" text-balance">
            {dict.section2}{" "}
            <span className="font-bold text-boomwriter ">
              <Link href="https://boomwriter.com/">BoomWriter</Link>
            </span>
            ,{" "}
            <span className="font-bold text-torii ">
              <Link href="https://torii.studio/">Torii Studio</Link>
            </span>{" "}
            {dict.and}{" "}
            <span className="font-bold text-rtve ">
              <Link href="https://www.rtve.es/lab/">RTVE lab</Link>
            </span>
          </p>
          <p className="mt-8 text-balance">
            {dict.rightNow}{" "}
            <span className="font-bold text-geeksquare">
              <Link href="https://geeksquare.live/">Geeksquare</Link>
            </span>{" "}
            {dict.as_a}{" "}
            <span className="font-bold text-purple-700">{dict.lead}</span>.
          </p>
        </section>
        <section className="mb-8">
          <p className="mb-4 font-bold">{dict.project}</p>
          <ol>
            <li className="mb-1  text-boomwriter">
              <a href="https://boomwriter.com">Boomwriter </a>
            </li>
            <li className="mb-1  italic text-torii">
              <a href="https://torii.studio/work/lume">Lume Health </a>
            </li>
            <li className="mb-1 italic  text-torii">
              <a href="https://torii.studio/work/welldone">WellDone </a>
            </li>
            <li className="mb-1 italic  text-torii relative">
              <a href="https://torii.studio/work/fastaf">FastAf </a>
              <ArrowIcon
                size={100}
                color="currentColor"
                className=" hidden lg:block absolute top-0 left-16 transfotm rotate-180"
              />
              <p className=" hidden lg:block absolute -bottom-32 -left-40 max-w-56 text-pretty">
                {dict.google_learn}
              </p>
            </li>
            <li className="mb-1 italic  text-torii">
              <a href="https://torii.studio/work/kaiyo">Kaiyo </a>
            </li>
            <li className="mb-1 italic text-torii">
              <a href="https://torii.studio/work/truesource">TrueSource </a>
            </li>
            <li className="mb-1 italic text-rtve relative">
              <div>Lucia en la telaraña </div>
              <ArrowIcon
                size={100}
                color="currentColor"
                className=" hidden lg:block absolute bottom-0 right-16 "
              />
              <p className=" hidden lg:block  absolute -top-28 -right-48 ">
                {dict.lucia}
              </p>
            </li>
            <li className="mb-1  italic text-geeksquare">
              <a href="https://geeksquare.live/">Geeksquare </a>
            </li>
          </ol>
        </section>

        <section>
          <nav className="flex gap-4 justify-center mb-4 underline">
            <Link href="mailto:miguel.work.demora@gmail.com">email</Link>
            <Link href="https://www.linkedin.com/in/mdemora/">linkedin</Link>
            <Link href="https://github.com/MdeMora">github</Link>
          </nav>
          <div className="flex max-w-100px m-auto">
            <ThemeButton />
            <LangButton />
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
