import Head from "next/head";
import { Footer } from "./footer";
import { CustomHead } from "./head";
import { Header } from "./header";

interface Props {
  children: string | JSX.Element | JSX.Element[] | undefined;
}
export const Template = ({ children }: Props) => {
  return (
    <div>
      <CustomHead />

      <main className="relative overflow-x-hidden">
        <div className="flex flex-col w-full h-full">
          <Header />
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};
