import React from "react";
import { H2 } from "../ui/heading";
import Link from "next/link";
import { P } from "../ui/paragraph";
import { Button } from "../ui/button";

type Props = {};

function Hero({}: Props) {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center  w-full ">
        <div className="space-y-4">
          <div className="mb-8">
            <H2 className="text-center">BOB AI PEP</H2>
            <P className="text-center">
              A cute peppito for the #pepe lovers Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Eligendi, culpa.
            </P>
          </div>
          <div className="grid md:grid-cols-2  gap-4">
            <Button variant="outline" className="w-full">
              Buy on Pancake
            </Button>
            <Button className="w-full">Buy on Pinksale</Button>
          </div>
        </div>
      </section>
      <About />
    </>
  );
}

export default Hero;

function About() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center flex-col space-y-6">
      <div className="max-w-prose mb-6">
        <H2 className="text-center">About</H2>
        <P className="text-center">
          We are building a #meme for the love we have on #pepe Having BAIPepe 
          as part of the #Pepe family we have thrilled to give back opportunity
          to those that didn&apos;t catch up on time during Pepe pump
        </P>
      </div>
      <div className="grid lg:grid-cols-3 w-full max-w-5xl gap-4 my-6">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

function Card() {
  return (
    <>
      <div className=" border border-white/5 p-4 min-h-[12rem] items-center space-y-4 justify-center flex flex-col">
        <div className="h-[5rem] w-[5rem] rounded-full bg-blue-500"></div>
        <P className="text-2xl">0 Buy Tax</P>
        <P className="text-center">
          With 0 tax of buying, more people would buy our token since
          there&lsquo;s no tax.
        </P>
      </div>
    </>
  );
}
