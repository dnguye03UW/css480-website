import Image from 'next/image'
import catdance from '../public/cat-breakdance.gif'
import { AboutMe } from "@/components/about";
import List from "@/components/list";

export default function Home() {
  return (
    <>
      <h1>
        Welcome!
      </h1>

      <div className='flex justify-center items-center pb-8'>
        <Image
          src={catdance}
          alt="Animated GIF of a breakdancing cat."
        />
      </div>

      <AboutMe />
      <List />
    </>
  );
}
