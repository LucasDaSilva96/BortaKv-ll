# Overview of the assignment

## Hygienkrav

Nedan hygienkrav ska vara uppfyllda oavsett betygsnivå.

- Layout ska vara responsiv (mobile first, minst 3 olika breakpoints)
- HTML ska vara semantiskt korrekt
- Användning av TypeScript enligt Best Practises
- Kommunikation med API:et ska ske via en separat service (egen modul) som utför de faktiska förfrågningarna och returnerar resultatet
- eslint, tsc och type-coverage ska gå igenom utan några errors

## Kravspecifikation

Du ska som sagt göra en enkel webbshop som går mot ett API som jag satt upp, där du ska hämta ut produkter som man kan lägga i en varukorg och därefter placera en order (via en POST till en API-endpoint jag också satt upp).

När besökaren kommer till sidan ska samtliga produkter visas med bild (tumnagel), namn, pris och en “Lägg till i varukorgen”-knapp.

Besökaren ska kunna lägga till flera exemplar av en produkt i varukorgen, dock går det bra för G-nivå att varje exemplar av en produkt visas som en separata rader i varukorgen.

Man ska även kunna klicka in på en produkt (förslagsvis genom en “Läs mer”-länk) och där se mer information om produkten (stor bild, namn, pris, beskrivning), utan att varukorgen förloras.

Varukorgen ska visas med en sammanställning på sidan som går att fälla ut, där man också ska kunna ta bort en produkt från varukorgen. Man ska kunna se summan för alla produkter i varukorgen.

I varukorgen ska en “Gå till kassan”-knapp finnas som visar en ny vy där man får fylla i namn, adress, postnr, ort, telefon (ska ej vara required) och e-post.

När man lägger beställningen ska eventuella fel visas, och om beställningen lyckas så ska **ordernummer för beställningen visas** samt ett tack-meddelande.

**Vid omladdning av sajten ska den återgå till samma vy som före omladdningen!**

## Kravspecifikation Väl Godkänt

- Användning av TypeScript Generics för API-responser.
- Användning av sammansatta typer för att undvika upprepning i typer, t.ex. vid hämtning av alla produkter och vid hämtning av en enskild produkt
- Felhantering av såväl request som response.
- eslint, tsc och type-coverage ska gå igenom utan varningar

Man ska kunna klicka “Lägg till i varukorgen” flera gånger på en produkt men bara 1 visas i varukorgen tillsammans med antalet.

Man ska kunna visa alla produkter som har en specifik tagg (till exempel om man är inne på Banana Bubs så ska man se vilka etiketter produkten har och när man klickar på en etikett så ska man se alla produkter som har den etiketten).

På varje produkt i varukorgen ska det finnas +/- knappar för att öka/minska antalet. Självklart ska produkten tas bort från varukorgen när antalet blir 0.

Man ska inte kunna lägga till fler antal av en produkt än vad som finns i lager av produkten.

Efter att en beställning gått igenom ska varukorgen tömmas på produkter.

Varukorgen och kundinformation (om det finns sedan tidigare beställningar) ska även sparas i Local Storage så det överlever omladdning av sidan.

## API

[https://www.bortakvall.se/api/v2](https://www.bortakvall.se/api/v2)

Du registrerar ett konto på [https://www.bortakvall.se/register](https://www.bortakvall.se/register) för att få ett userId som ni sen använder i URL:en när ni skickar in en order.

Med kontot kan du även logga in på [https://www.bortakvall.se/login](https://www.bortakvall.se/login) och se alla era inskickade ordrar.

### Endpoints

**GET /products**
Listar alla produkter, dock utan beskrivning.

```
"images": {
  "thumbnail": "/storage/products/thumbnails/156622-300x300.png",
  "large": "/storage/products/156622.png"
}

```

Här hade den kompletta URL:en för thumbnail blivit:

[https://www.bortakvall.se/storage/products/thumbnails/156622-300x300.png](https://www.bortakvall.se/storage/products/thumbnails/156622-300x300.png)

**GET /products/:productId**
Listar en enskild produkt.

**GET /tags**
Listar alla taggar.

**GET /tags/:tagId**
Listar alla produkter som har taggen tagId. Samma struktur som när man hämtar alla produkter.

**POST /users/:userId/orders**

**Validering**

- customer_first_name (sträng, max 255 tecken)
- customer_last_name (sträng, max 255 tecken)
- customer_address (sträng, max 255 tecken)
- customer_postcode (sträng, max 6 tecken)
- customer_city (sträng, max 255 tecken)
- customer_email (sträng, måste vara en e-postadress, max 255 tecken)
- customer_phone (ej obligatorisk, måste vara en sträng, max 255 tecken)
- order_total måste vara summan av alla item_total
  - order_items
  - product_id måste existera
  - qty måste vara ett positivt heltal
  - item_price måste stämma för product_id
  - item_total måste vara qty multiplicerat med item_price

### Inlämning

**Senast söndag 10 november kl. 23:59 under Inlämningsuppgift 2 för kursen i Itslearning.**

### Skicka in

- Länk till ditt GitHub Classroom-repo
- Om du gjort G eller VG-nivå
- Ev. kända buggar eller kommentarer du tror jag skulle ha nytta av när jag granskar din inlämnin

### Godkänt

- Följer kravspecifikationen ovan.

### Väl godkänt

- Följer kravspecifikationen ovan, inkl. kravspecifikationen för Väl Godkänt.
