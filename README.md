# Grillfavoriter

En enkel Next.js-sajt med grillutrustning (affiliate-länkar) och en receptbank med AI-genererade förslag.

## Funktioner

- **Produkter** (`/`) — grillutrustning sorterad på kategori, med favoritmarkering
- **Recept** (`/recept`) — curerade grillrecept (kött, vegetariskt, veganskt), filtrerbart
- **AI-receptförslag** — skriv vad du har hemma, få ett recept genererat via Gemini API
- **Mina recept** (`/recept/sparade`) — sparade recept, både från receptbanken och AI-förslag

## Kom igång

```bash
npm install
```

Skapa `.env.local` i projektroten (se `.env.example`) och lägg till en gratis API-nyckel från [aistudio.google.com/apikey](https://aistudio.google.com/apikey):

```
GEMINI_API_KEY=din-nyckel-här
```

Starta utvecklingsservern:

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) för ikoner
- [Google Gemini API](https://ai.google.dev/) för AI-receptförslag

## Projektstruktur

```
app/
  data/           produkt- och receptdata
  hooks/          useFavorites, useSavedRecipes (localStorage)
  components/     återanvändbara UI-komponenter
  lib/             delad ikon-mappning
  api/            server-route som pratar med Gemini
  recept/         receptsidor
  page.jsx        startsidan (produkter)
  layout.jsx      root-layout + toppnavigering
```

## Att tänka på

- `url`-fälten i `app/data/products.js` är just nu platshållare, inte riktiga affiliate-länkar — byt ut mot spårningslänkar när du blivit godkänd hos ett affiliate-nätverk (t.ex. Adtraction, Awin).
- Gemini API:s gratisnivå har en daglig gräns på antal anrop — se din kvot på [aistudio.google.com/rate-limit](https://aistudio.google.com/rate-limit).
