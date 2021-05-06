import Head from 'next/head'
import BlogPreviewCard from '../components/blog/BlogPreviewCard/BlogPreviewCard';
import MtgCardCard from '../components/mtg/MtgCardCard/MtgCardCard';
import ExternalLink from '../components/warlock/ExternalLink/WExternalLink';

export async function getStaticProps() {
  const res = await fetch('https://api.scryfall.com/cards/named?exact=shadowstorm+vizier');
  const card = await res.json();

  return {
    props: {
      card,
    },
  }
}

export default function Home({ card }) {
  return (
    <div>
      <Head>
        <title>bhgeorge</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;600&display=swap" rel="stylesheet"/>
      </Head>
      <main className="bg-white dark:bg-black dark:text-white">
        <div className="max-w-prose p-8">
          <h1 className="font-extralight text-5xl md:text-6xl mb-8">
            I came here to party and I'm all out of juice
          </h1>
          <p className="md:text-lg">Saddle up, we're re-writing the 'ol personal site again. This time it's React, Next, and Tailwind on the menu (If you can't beat 'em, see what they're all about I guess). For content I'll be using a combination of <ExternalLink href="https://scryfall.com/">Scryfall</ExternalLink> and my thoughts about working with the stack for content. Will there be any cohesion between the two? Absolutely not, don't be silly.</p>
        </div>
        <section className="p-8 md:py-16 mt-4 bg-gray-white dark:bg-purple-black">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <MtgCardCard card={card}/>
            <BlogPreviewCard
              date={123151512}
              description="The jury still doesn't look to favorable toward JSX but boy having about three bazillion people that use your ecosystem does make it so there are many more useful Googles out there..."
              slug="day-one-review"
              title="Day one review"
            />
            <MtgCardCard card={card}/>
          </div>
        </section>
      </main>
    </div>
  )
}
