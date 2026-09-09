# Prompt az agentnek (másold be egy az egyben)

> Az alábbi szövegben **csak ezt a 3 dolgot** kell kitöltened, mielőtt beilleszted:
> `[PROJEKT NEVE]`, `[PROJEKT DOMAIN]`, és a footer színe (sötét/világos).

---

## A prompt

```
Egy "Powered by Welisse" jelvényt szeretnék elhelyezni ennek a projektnek
([PROJEKT NEVE]) a footerében. A jelvény a Welisse logóból + a "Powered by Welisse"
szövegből áll, és a https://welisse.hu oldalra linkel.

Ehhez mellékeltem a következő fájlokat:
- welisse-mark.png és welisse-mark@2x.png  (a logó, átlátszó hátterű)
- welisse-mark.svg                          (vektoros tartalék, ha SVG kell)
- PoweredByWelisse.jsx                      (kész React komponens)
- powered-by-welisse.html                   (sima HTML+CSS változat, ha nem React a projekt)

FELADAT:

1. Előbb derítsd fel a projektet: mondd meg, milyen stack ez (React/Next/Vue/sima HTML/
   template engine), hol van a footer komponens vagy sablon, és hova kerülnek a statikus
   képek (public/, static/, assets/ stb.). Ha több oldalsablon van, keresd meg, melyik
   footer jelenik meg minden oldalon.

2. Másold be a welisse-mark.png és a welisse-mark@2x.png fájlt a projekt statikus
   mappájába, egy `brand/` almappába (pl. `public/brand/`). NE hivatkozz külső URL-re,
   a képnek a projekten belül kell lennie.

3. Illeszd be a jelvényt a footer LEGALJÁRA, a copyright sor mellé/alá — abba a sorba,
   ahol a "© ÉV ..." szöveg van. Ha a copyright sor egy flex konténer, kerüljön annak a
   jobb szélére; ha nincs ilyen, akkor a copyright alá, középre vagy balra igazítva,
   ahogy a footer többi eleme igazodik.

4. Ha React a projekt: használd a mellékelt PoweredByWelisse.jsx komponenst változtatás
   nélkül, tedd a többi komponens mellé, és így hívd meg:
       <PoweredByWelisse theme="dark" utm="[PROJEKT DOMAIN]" />
   A `theme` legyen "dark", ha a footer háttere sötét, és "light", ha világos.
   Ha a képek nem a /brand/ útvonalra kerültek, add át a markSrc / markSrc2x propokat.

   Ha NEM React a projekt: a powered-by-welisse.html tartalmát ültesd át a projekt saját
   megoldásába (a CSS-t a globális stíluslapba vagy a footer stílusai közé, a linket a
   footer sablonjába), és cseréld a PROJEKT_DOMAIN helyőrzőt erre: [PROJEKT DOMAIN].
   Ne hagyj benne inline <style> blokkot, ha a projektnek van rendes stíluslapja.

KÖTELEZŐ MEGKÖTÉSEK:
- Ne telepíts új csomagot. A jelvénynek nulla függősége van.
- Ne nyúlj a projekt meglévő design tokenjeihez, globális CSS változóihoz, betűtípusaihoz.
  Az egyetlen új szín a hover állapot (#00E5FF), semmi mást ne írj felül.
- A jelvény legyen visszafogott: kicsi (kb. 0.8rem szöveg, 16px magas logó), halványabb
  a footer többi szövegénél, hoverre erősödik fel. Nem reklám, hanem aláírás.
- A link: target="_blank" rel="noopener". NE tegyél rá rel="nofollow"-t.
- A logó <img> alt attribútuma legyen üres (alt=""), mert a mellette lévő szöveg már
  kimondja a nevet; a linken legyen aria-label.
- A képnek legyen fix width/height attribútuma, hogy ne okozzon layout shiftet.
- Mobilon is jól nézzen ki: ha a copyright sor mobilon egymás alá tördel, a jelvény is
  törjön új sorba, ne lógjon ki.
- A logó a sötét ÉS a világos háttéren is látszik (átlátszó PNG), de ellenőrizd a
  kontrasztot a szövegnél.

VÉGÜL:
- Indítsd el a projektet, és mutasd meg egy képernyőképen a footert desktop és mobil
  szélességen is.
- Sorold fel, mely fájlokat hoztad létre és melyeket módosítottad.
```

---

## Ha csak egy mondatos, gyors verzió kell

```
Tedd be a footer aljára, a copyright sor mellé a mellékelt PoweredByWelisse.jsx
komponenst (<PoweredByWelisse theme="dark" utm="[PROJEKT DOMAIN]" />), a
welisse-mark.png és welisse-mark@2x.png fájlokat pedig másold a public/brand/ mappába.
Visszafogott, kicsi, halvány jelvény legyen, ami a https://welisse.hu oldalra linkel,
target="_blank" rel="noopener". Ne telepíts semmit, és ne nyúlj a projekt design
tokenjeihez. A végén mutasd meg a footert desktopon és mobilon.
```
