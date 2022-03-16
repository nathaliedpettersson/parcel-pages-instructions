# parcel-pages-instructions

Git
Skapa ett nytt repo på github.com
Klona repot lokalt
VS code
Öppna den tomma foldern i VSCode
Skapa package.json-filen
npm init -y
Installera Parcel som en dev dependency 
npm install parcel -D   
Installera del-cli som en dev dependency för att kunna ta bort filer genom npm script
npm install -D del-cli  
I rotmappen -> lägg till en ny mapp som heter src
I src -> lägg till en ny fil som heter index.html - Lägg till något i filen så att vi senare kan se om github pages sidan fungerar.

Öppna package.json
ta bort följande rad 
  "main": "index.js",

lägg till följande rad för att tala om vilka browsers projektet ska fungera i
"browserslist": ["Firefox>95", "Chrome>95"]

Lägg till följande scripts
  "scripts": {
    "dev": "parcel ./src/index.html",
    "build": "parcel build ./src/index.html --dist-dir docs --public-url ./",
    "clean": "del-cli ./.parcel-cache ./docs ./dist"
  },

dev - för att starta parcels server. Detta kommer även göra så att parcel “bundlar” filer för development. Alltså översätter TS till JS osv så att vi kan kolla på det i browsern. Alla filer läggs i mappen dist.
build - för att “bundla” alla filer redo för publicering.  I vanliga fall skapas filerna och läggs till i mappen dist men med --dist-dir docs läggs de istället till i en mapp som heter docs. 
clean - för att ta bort filer som parcel skapar så att vi kan försäkra oss om att endast de filer vi behöver finns i docs och dist.

Testa alla npm script i terminalen och se så att de fungerar.
npm run dev
npm run clean
npm run build
Git
I rotmappen -> lägg till en fil som heter .gitignore. Här ska vi skriva ner alla filer som vi behöver lokalt men som ska ignoreras av git och därför aldrig ligga på GitHubs repo. Lägg till följande
.parcel-cache
node_modules
dist
package-lock.json

Committa och pusha allt till repot.
Gå till repot på github.com 
Gå till inställningar-> pages
Välj följande source i dropdown-menyerna
Branch: main
Folder: /docs
 Spara och testa pages-sidan. Obs att det kan ta flera minuter innan det har uppdaterats.
