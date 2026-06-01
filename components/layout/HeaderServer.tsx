import { getDict, getLocale } from "@/lib/i18n";
import { Header } from "./Header";

export async function HeaderServer() {
  const locale = await getLocale();
  const dict = getDict(locale);
  return <Header dict={dict} locale={locale} />;
}
