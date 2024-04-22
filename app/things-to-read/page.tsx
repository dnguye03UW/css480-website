"use client";
import { useEffect } from "react";

export default function ThingsToRead() {
    const Links = [
        {
            id  : 0,
            name: 'Starting Granblue Fantasy',
            url : 'https://gbf.wiki/Starting_Granblue_Fantasy',
        }, 
        {
            id  : 1,
            name: 'Vane (SSR)',
            url : 'https://gbf.wiki/Vane_(SSR)',
        }, 
        {
            id  : 2,
            name: 'Black Cats (Wikipedia Article)',
            url : 'https://en.wikipedia.org/wiki/Black_cat',
        },
        {
            id  : 3,
            name: '13 Fascinating Facts About Black Cats',
            url : 'https://www.thesprucepets.com/facts-about-black-cats-554102',
        },
        {
            id  : 4,
            name: 'Guide to the ”Essential Digital Painting Tutorials” Series',
            url : 'https://tips.clip-studio.com/en-us/articles/1879',
        },
        {
            id  : 5,
            name: '3D and 2D Anatomy For Illustration',
            url : 'https://tips.clip-studio.com/en-us/articles/2237',
        },
        {
            id  : 6,
            name: 'Hand Gestures and Simplifying the Hand',
            url : 'https://tips.clip-studio.com/en-us/articles/3251',
        }, 
        {
            id  : 7,
            name: 'RPG Maker VX Ace Tutorial (YouTube Playlist)',
            url : 'https://www.youtube.com/watch?v=bzqt1PzBxxQ&list=PLbrz-mAYklQkbKT28EtfJLCAUmPggEImw',
        }, 
        {
            id  : 8,
            name: 'Dwarf Sunspot Sunflower Overview and Plant Guide',
            url : 'https://www.smartgardener.com/plants/202-sunflower-dwarf-sunspot/overview',
        },
        {
            id  : 9,
            name: 'How to Stop Panic Attacks',
            url : 'https://www.wikihow.com/Stop-Panic-Attacks',
        },
    ];
    
    const ListOfLinks = Links.map(Link => 
        <li key={Link.id}>
            <a href={Link.url} rel="noreferrer">
                {Link.name}
            </a>
        </li>
    )

    useEffect(() => {
        const keyHandler = (event:any) => {
          switch (event.key) {
            case "1":
                event.preventDefault();
                window.open('https://gbf.wiki/Starting_Granblue_Fantasy',"_self")
                break;
            case "2":
                event.preventDefault();
                window.open('https://gbf.wiki/Vane_(SSR)',"_self")
                break;
            case "3":
                event.preventDefault();
                window.open('https://en.wikipedia.org/wiki/Black_cat',"_self")
                break;
            case "4":
                event.preventDefault();
                window.open('https://www.thesprucepets.com/facts-about-black-cats-554102',"_self")
                break;
            case "5":
                event.preventDefault();
                window.open('https://tips.clip-studio.com/en-us/articles/1879',"_self")
                break;
            case "6":
                event.preventDefault();
                window.open('https://tips.clip-studio.com/en-us/articles/2237',"_self")
                break;
            case "7":
                event.preventDefault();
                window.open('https://tips.clip-studio.com/en-us/articles/3251',"_self")
                break;
            case "8":
                event.preventDefault();
                window.open('https://www.youtube.com/watch?v=bzqt1PzBxxQ&list=PLbrz-mAYklQkbKT28EtfJLCAUmPggEImw',"_self")
                break;
            case "9":
                event.preventDefault();
                window.open('https://www.smartgardener.com/plants/202-sunflower-dwarf-sunspot/overview',"_self")
                break;
            case "0":
                event.preventDefault();
                window.open('https://www.wikihow.com/Stop-Panic-Attacks',"_self")
                break;
            default:
                break;
          }
        };
    
        window.addEventListener('keydown', keyHandler);
    
        return()=> {
          window.removeEventListener('keydown', keyHandler);
        }
    });

    return (
      <>
        <h1 className="text-3xl font-bold text-center p-8">
            Links to my interests
        </h1>

        <p className="max-container padding-container flex flex-col text-center">
            (Press the associated number to access the link; link 10 is 0)
        </p>

        <ul className={`space-y-7 p-4 py-10 text-xl flex flex-col justify-center items-center list-decimal`}>
            {ListOfLinks}
        </ul>
      </>
    );
}