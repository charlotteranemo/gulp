# Gulp

## Automatiserings-processens syfte

Syftet med automatiserings-processen är främst att spara tid. Genom att automatisera med hjälp av verktyg såsom Gulp går det snabbt och enkelt att komprimera och minimera filer och detta är användbart i många situationer, som tillexempel för att minska filstorleken på de filer man laddar upp.

## De verktyg och paket jag använt

Jag har använt mig av:

- Gulp, för att det var det uppgiften gick ut på men också för att det är ett bra sätt att lära sig denna typ av automatisering på.
- Gulp-concat, för att kunna slå ihop flera JavaScript-filer till en och samma fil. Jag har dock ingen JavaScript funktionalitet i min kod än, så det fick bli två console.log och kommentarer uppdelat i två JS-filer för att se att det fungerade.
- Gulp-concat-css, av samma anledning som Gulp-concat, fast för CSS-filer istället. Jag valde denna eftersom den var lätt att använda och gjorde det den skulle, nämligen att slå ihop flera CSS-filer till en och samma.
- Gulp-clean-css, denna använde jag eftersom den gjorde det enkelt att minifiera CSS-kod.
- Gulp-uglify-es, för att det är ett bra verktyg för att minifiera JS-kod.
- Browser-sync, för att kunna köra live reloads.

## Systemet jag har skapat

Jag har skapat ett system för att minifiera och slå ihop filer, samt som flyttar CSS, JS och HTML-filer och bildfiler från mappen "pictures" till en annan mapp, "pub", istället för källkodsmappen "src". Pub-mappen är sedan den som det är tänkt att man ska publicera, då den innehåller mindre filer.

### Hur man startar upp det

Man startar upp mitt system genom att tillexempel göra en git clone på detta projekt, och sedan i terminalfönstret göra en npm install, som då installerar alla dependencies från package.json-filen. Sedan skriver man gulp i terminalen och systemet startar i och med det.

### De tasks som ingår

De tasks jag använder är en som minifierar JS, en som minifierar CSS, en som concatiserar JS, och detsamma med CSS. Sedan använder jag mig av dest (destination) genom en "pipe" för HTML, JS, CSS och pictures, för att kopiera filerna till pub-mappen. Jag använder mig av en watcher för att den automatiskt ska kolla efter ändringar i mina filer, och i min watch-task så använder jag mig av parallel för att mina olika filtypers tasks ska kunna köras samtidigt. Jag använder mig av exports.default task för att det ska gå att hitta de gulp-tasks som jag har skapat även om man inte står i den filen. Jag har även en Browser-sync task som initierar browser-sync.

## Av Charlotte Ranemo
