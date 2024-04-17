import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';
import face from 'public/images/home/face.png';
import back from 'public/images/home/back.png';
import night from 'public/images/home/night.png';
import gas from 'public/images/home/gas.png';
import birthday from 'public/images/home/birthday.png';
import town from 'public/images/home/town.png';
import cryptoast from 'public/images/home/cryptoast.jpg';
import avatar from 'app/avatar.jpg';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelLink({ img, link, name }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
              priority
            />
            <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
              <Image
                src="/x.svg"
                alt="X logo"
                width={15}
                height={11}
                unoptimized
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <Suspense fallback={<p className="h-6" />}>
              <Subs name={name} />
            </Suspense>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Subs({ name }: { name: string }) {
  noStore();
  let subscribers;
  if (name === '@MaximilienP51') {
    subscribers = '250';
  } else {
    subscribers = '250 000';
  }

  return (
    <p className="text-neutral-600 dark:text-neutral-400">
      {subscribers} followers
    </p>
  );
}

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <Suspense fallback={<p className="h-6" />}></Suspense>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Bonjour, je suis Maximilien 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`Je suis rédacteur et community manager freelance. Actuellement, je `}
        <Link href="/work">travail</Link>
        {` en tant que rédacteur en chef chez `}
        <span className="not-prose">
          <Badge href="https://cryptoast.fr/">
            <img
              src="/cryptoast.svg"
              alt="Cryptoast logo"
              width="16"
              height="16"
              className="inline-flex"
            />
            <span className="ml-1">Cryptoast</span>
          </Badge>
        </span>
        {`, où j'ai écrit plus de `}
        <Link href="https://cryptoast.fr/author/maximilien/" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            1200 articles
          </a>
        </Link>
        <br></br>
        <br></br>
        {`Passionné par `}
        <span className="not-prose">
          <Badge href="https://bitcoin.org/">
            <img
              src="/bitcoin.svg"
              alt="Bitcoin logo"
              width="16"
              height="16"
              className="inline-flex"
            />
            <span className="ml-1">Bitcoin</span>
          </Badge>
        </span>
        {` et `}
        <span className="not-prose">
          <Badge href="https://ethereum.org/">
            <img
              src="/ethereum.svg"
              alt="Ethereum logo"
              width="16"
              height="16"
              className="inline-flex"
            />
            <span className="ml-1">Ethereum</span>
          </Badge>
        </span>
        {`, je suis également écrivain et community manager. Chez Cryptoast
        , je contribue à sensibiliser et à développer notre communauté de lecteurs engagés.`}
      </p>
      <div className="my-8 columns-2 gap-4 sm:columns-3">
        <div className="relative mb-4 h-40">
          <Image
            alt="Me"
            src={back}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-80 sm:mb-0">
          <Image
            alt="Painting"
            src={birthday}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:mb-4 sm:h-80">
          <Image
            alt="Painting"
            src={night}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative mb-4 h-40 sm:mb-0">
          <Image
            alt="Me"
            src={face}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-40">
          <Image
            alt="Painting"
            src={gas}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="Painting"
            src={town}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          J'ai pris l'initiative de plusieurs améliorations au sein de la
          rédaction de Cryptoast, de l'optimisation du SEO, à la mise en place
          d'un format d'article spécifique pour couvrir l'actualité en direct.
          Ce format permet de suivre un événement sur plusieurs jours au sein
          d'un même article, offrant ainsi à nos lecteurs une expérience
          immersive et continue.
        </p>
      </div>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img={avatar}
          name="@MaximilienP51"
          link="https://x.com/MaximilienP51"
        />
        <ChannelLink
          img={cryptoast}
          name="@CryptoastMedia"
          link="https://x.com/CryptoastMedia"
        />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          En parallèle, j'ai contribué à dynamiser les réseaux sociaux de
          Cryptoast, rendant l'interaction avec notre communauté plus vivante et
          engageante. Grâce à l'introduction d'infographies attractives, nous
          avons significativement augmenté l'engagement de nos abonnés, avec une
          moyenne de plus de 150 likes et retweets par post de ce type.
        </p>
      </div>
      <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="Les Argentins se tournent vers le Bitcoin pour contrer l'inflation"
          slug="argentins-bitcoin"
        />
        <BlogLink
          name="Bitcoin de retour au-dessus des 47 000 dollars : bientot le trillion de capitalisation boursière ?"
          slug="bitcoin-47000"
        />
        <BlogLink
          name="MicroStrategy acquiert 3 000 Bitcoins : l'entreprise détient désormais plus de 10 milliards de dollars de BTC"
          slug="microstrategy-3000"
        />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          J'ai traité une vaste gamme de sujets et d'événements liés aux
          cryptomonnaies. J'ai également établi et entretenu des relations avec
          des acteurs majeurs du secteur, renforçant ainsi notre réseau et notre
          influence dans l'industrie.
        </p>
      </div>
      <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://alyra.fr">
            <img src="/alyra.svg" width="78" height="20" alt="Alyra logo" />
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://ledger.com">
            <img src="/ledger.svg" width="70" height="19" alt="Ledger logo" />
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://www.adan.eu/">
            <img src="/adan.svg" width="74" height="19" alt="Adan logo" />
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://binance.com">
            <img
              src="/binance.svg"
              width="110"
              height="17"
              alt="Binance logo"
            />
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://aave.com/">
            <img src="/aave.svg" width="27" height="27" alt="Aave logo" />
          </a>
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          J'ai couvert{' '}
          <Link href="https://cryptoast.fr/direct-suivre-proces-sam-bankman-fried-ftx-temps-reel/">
            le procès de Sam Bankman-Fried
          </Link>
          ,{' ainsi que '}
          <Link href="https://cryptoast.fr/direct-suivre-affaire-ftx-temps-reel/">
            la chute de FTX
          </Link>
          , en temps réel sur plusieurs jours.
        </p>
      </div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/MaximilienP51"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Me suivre</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:mprue@gmail.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Me contacter</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
