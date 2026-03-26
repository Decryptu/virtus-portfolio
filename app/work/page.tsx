import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À propos de moi',
  description:
    'Découvrez mon parcours professionnel et mes contributions significatives dans le domaine de la cryptomonnaie.',
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Mon parcours professionnel
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Depuis novembre 2025, je suis Analyste chez OAK Research. Auparavant,
          j'ai été Rédacteur en Chef chez Cryptoast de janvier 2024 à novembre 2025,
          où j'avais commencé en tant que rédacteur en décembre 2021. Découvrez
          ici un résumé de mon parcours et mes initiatives.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">OAK Research</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Analyste — depuis novembre 2025
        </p>
        <p>
          Je produis des analyses approfondies sur les cryptomonnaies, la finance
          décentralisée et les innovations du secteur blockchain. Mes publications
          couvrent des sujets tels que les stablecoins, les protocoles DeFi et
          les tendances macroéconomiques impactant le marché crypto.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Cryptoast</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Rédacteur en Chef — janvier 2024 à novembre 2025
        </p>
        <p>
          Responsable de la stratégie éditoriale et du développement de nouveaux
          formats, j'ai introduit un format d'article spécifique pour le suivi
          d'événements en direct, permettant de couvrir des événements sur
          plusieurs jours dans un même article.
        </p>
        <p>
          J'ai également pris en charge la gestion et l'animation des réseaux
          sociaux, en les rendant plus vivants et interactifs. Ceci inclut le
          partage régulier d'infographies pour mieux engager notre audience.
        </p>
        <ul>
          <li>
            Acteur clé dans l'optimisation du SEO, j'ai écrit plus de 1500 articles
            qui ont été lus par plusieurs centaines de milliers de lecteurs,
            contribuant significativement à l'accroissement de la visibilité
            en ligne.
          </li>
          <li>
            J'ai supervisé et formé une équipe de rédacteurs, les guidant dans
            la rédaction d'articles pertinents et dans l'utilisation efficace
            des outils SEO et de gestion des réseaux sociaux.
          </li>
        </ul>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Rédacteur — décembre 2021 à janvier 2024
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      </div>
    </section>
  );
}
