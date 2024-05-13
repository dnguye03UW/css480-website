import Image from 'next/image'
import cat1 from '../public/cat-1.jpg'
import cat2 from '../public/cat-2.jpg'
import cat3 from '../public/cat-3.jpg'
import cat4 from '../public/cat-4.jpg'
import catdance from '../public/cat-stupidly-dancing.gif'

const CatGallery = () => {

    return (
        <>
            <div className='flex gap-10 justify-center overflow-x-auto pt-8'>
                <Image
                    src={catdance}
                    width={200}
                    height={150}
                    sizes="(max-width: 200px), (max-height: 150px)"
                    alt="Animated GIF of a dancing cat with its arms in the air."
                />
                <Image
                    src={cat1}
                    width={300}
                    height={300}
                    alt="Funny image of a white cat looking peeved and angry."
                />
                <Image
                    src={cat2}
                    width={300}
                    height={300}
                    alt="Funny image of a white cat looking directly into the camera with a menancing aura."
                />
                <Image
                    src={cat3}
                    width={300}
                    height={300}
                    alt="Funny image of a calico cat waking up and looking disheveled after waking up."
                />
                <Image
                    src={cat4}
                    width={300}
                    height={300}
                    alt="Funny image of an orange cat looking displeased and angry."
                />
                <Image
                    src={catdance}
                    width={200}
                    height={150}
                    sizes="(max-width: 200px), (max-height: 150px)"
                    alt="Animated GIF of a dancing cat with its arms in the air."
                />
            </div>
        </>
    )
}

export default CatGallery