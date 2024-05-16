import CatGallery from '@/components/cat-gallery';
import Image from 'next/image'
import catcry from '../../public/real-cry.jpg'
import sniff from '../../public/sniff-sniff.jpg'
import nyan from '../../public/Nyan_cat.png'

export default function Home() {
  return (
    <>
      <CatGallery />

      <h1>
        All about cats and internet culture!
      </h1>

      <div className='max-container grid lg:grid-cols-3 py-20 gap-10 bg-yellow-50'>
        
        <div className='max-container grid lg:grid-cols-2 gap-10'>
          <div className='flex flex-col text-right'>
            <p className='font-bold text-2xl p-2 text-yellow-900 text-right'>
              Did you know?
            </p>
            This is the original image of <br />
            the crying cat face you may <br />
            see edited onto other photos!
          </div>

          <Image
            src={catcry}
            width={200}
            height={200}
            alt="Kitten with watery eyes most often seen edited onto other cat photos."
          />
        </div>
        
        <div className='max-container grid lg:grid-cols-2 gap-10'>
          <div className='flex flex-col text-right'>
            <p className='font-bold text-2xl p-2 text-yellow-900 text-right'>
              Did you know?
            </p>
            The song commonly associated with <br />
            Nyan Cat is a song named <br />
            "Nyanyanyanyanyanyanya!" by daniwellP featuring Hatsune Miku!<br />
            The version most known uses UTAU <br />
            Momone Momo's voicebank instead <br />
            of Hatsune Miku.
          </div>

          <Image
            src={nyan}
            width={200}
            height={200}
            alt="Image of the meme Nyan Cat popular in the early 2010's of the Internet."
          />
        </div>
        
        <div className='max-container grid lg:grid-cols-2 gap-10'>
          <div className='flex flex-col text-right'>
            <p className='font-bold text-2xl p-2 text-yellow-900 text-right'>
              Did you know?
            </p>
            you stink <br />
            (ew)
          </div>

          <Image
            src={sniff}
            width={200}
            height={200}
            alt="Cat with its nose close to the camera and wincing because you are stinky."
          />
        </div>

      </div>
    </>
  );
}
