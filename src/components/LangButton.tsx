"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

const LangButton = () => {
  const { lang } = useParams();

  return (
    <Link
      className=" text-gray-700 dark:text-white p-2 rounded-md m-auto"
      href={`/${lang === "es" ? "en" : "es"}`}
    >
      {lang === "es" ? "ES" : "EN"}
    </Link>
  );
};

export default LangButton;
