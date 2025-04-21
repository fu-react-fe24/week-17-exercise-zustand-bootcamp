# Vecka 17: Zustand Bootcamp

## Counter

Försök att själv återskapa counter-koden från föreläsningen. 

**Steg 1**

Skapa en applikation som läser in två olika komponenter: en vy där värdet för din counter visas, samt en kontroll där du kan öka, minska, samt nollställa din counter.

**Steg 2**

Skapa din store, den skall innehålla din counter, en funktion som ökar din counter, en funktion som minskar din counter, samt en funktion som nollställer din counter.

**Steg 3**

Importera din tillståndsvariabel/dina funktioner till korrekt komponent och använd dem för att få din counter att fungera.

**Levelup**

I din store: gör så att man inte kan minska countern till mindre än 0.

## Shakespearean Insult Generator

I den här uppgiften skall du skapa en applikation som har 3 pages. På en av sidorna kan du se alla förolämpningar som finns registrerade, på en annan kan du lägga till nya förolämpningar, och på den tredje och sista sidan kan du generera fram en slumpmässig förolämpning.

**Steg 1**

Börja med att skapa din applikation, dina 3 pages (InsultsPage, AddInsultPage och RandomInsultPage), sätt upp din routing, samt skapa en enklare navigation mellan dina olika sidor.

**Steg 2**

Skapa din store för insults, i den kommer du att lagra alla insults i en array. Din store skall även bestå av funktionerna *setInsults(insults)*, *addNewInsult(insult)*, *removeInsult(id)*.

**Steg 3**

Bygg dina respektive pages. Skapa gärna komponenter för att göra applikationen så korrekt som möjligt, men det är också okej att lägga all logik i respektive *page* utan att bryta ner sin applikation i en massa komponenter. Importera variabeln/funktionerna från din store till de sidor/komponenter där du behöver dem. I *App.jsx* gör du ett API-anrop mot ```https://santosnr6.github.io/Data/insults.json```, när datan hämtats använder du korrekt funktion i din store för att populera den med dina inledande insults. För hjälp med att generera fram nya insults att klistra in i din applikation som testdata kan du skicka följande prompt till ChatGPT: ```Ge mig 5 st Shakespearean insults (ex insult: "Thou art as fat as butter", play:  "Henry IV, Part 1")```.

## Book Store

Nu har det blivit dags att bygga om din Book Store för sista gången, och nu är tanken att vi skall slippa alla props som skickas kors och tvärs genom dina sidor. 

**Steg 1**

Börja med att skapa en cart som lagrar din cart som en array innehållandes dina cart-objekt. Din store bör bestå av funktionerna *addToCart(item)*, samt *removeFromCart(id)*. Tänk på att om hur du hanterar en ny artikel i varukorgn, kontra en artikel där antalet skall ökas på. Använd din tore i din applikation.

**Steg 2**

Skapa ytterligare en store som håller koll på user. Skapa funktionerna *loginUser(user)*, samt *logoutUser()*. Använd din store i din applikation.
