# Welisse "Powered by" jelvény — kit

Ezt az 5 fájlt add oda az agentnek minden projektben, ahova ki akarod tenni a jelvényt.
Nem kell hozzá semmi a welisse.hu repóból — a kit önmagában teljes.

| Fájl | Mire kell |
|---|---|
| `welisse-mark.png` | A logó, átlátszó háttérrel, 96px magas (177×96). Ez kerül a projekt `public/brand/` mappájába. |
| `welisse-mark@2x.png` | Retina változat (353×192). Ugyanoda. |
| `welisse-mark.svg` | Vektoros tartalék, ha valahol SVG kell (pl. inline beágyazás). A gradiens ID-k `welisse` előtaggal vannak, hogy ne ütközzenek a fogadó oldal SVG-ivel. |
| `PoweredByWelisse.jsx` | Kész React komponens, nulla függőséggel. React projektekben ezt kell bemásolni. |
| `powered-by-welisse.html` | Ugyanaz sima HTML+CSS-ben, nem React projektekhez. |
| `PROMPT.md` | A prompt, amit az agentnek adsz. |

## Miért így?

- **Nem külső URL-ről töltjük a logót.** Ha `https://welisse.hu/logo.png`-re hivatkoznál,
  akkor minden ügyfél oldala függene a te szerveredtől (leáll → törött kép mindenhol),
  plusz egy külső kérés és referrer-szivárgás. A képet bemásoljuk a projektbe.
- **Nulla függőség.** A komponens nem használ lucide-react-et, framer-motion-t vagy
  tailwindet, így bármelyik projektbe beesik.
- **UTM paraméter.** A link `?utm_source=<projekt>&utm_medium=footer&utm_campaign=powered_by`
  formában megy ki, így az analytics-edben látni fogod, melyik ügyféloldalról jönnek a
  látogatók.
- **Nincs `nofollow`.** Ezek valódi, releváns backlinkek a welisse.hu-ra — SEO szempontból
  ez a kit egyik fő haszna, ne rontsd el nofollow-val.

## Amit még érdemes megcsinálni

1. **Tedd fel a logót a welisse.hu-ra is stabil útvonalon** (`public/brand/welisse-mark.png`),
   hogy legyen egy hivatalos, hivatkozható helye — még akkor is, ha az ügyféloldalak a
   saját másolatukat használják.
2. **Bónusz, amit a saját repódban találtam:** a `src/components/References.jsx`-ben és az
   `index.html`-ben a képek `/src/images/...` útvonallal vannak hivatkozva sima stringként.
   Ez `npm run dev`-ben működik, de a production buildben nem — a `dist/` mappában nincs
   `src/images/` könyvtár, szóval a referencia-képernyőképek (utazasparizsba.png,
   zsuzsiutazofotos.png, paos.png) és az OG/JSON-LD logó URL éles oldalon törött.
   Javítás: told át a képeket a `public/images/` mappába, és hivatkozz rájuk
   `/images/utazasparizsba.png` formában (a `public/` tartalma 1:1 kerül a `dist/`-be).
