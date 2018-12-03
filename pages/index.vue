<template>
  <main>
    <h1>
      MARITIM &
      <span class="claim" :class="phase">{{claim}}</span>
    </h1>
  </main>
</template>

<script>
let claims = [
  "asozial",
  "liebevoll",
  "ungekämmt",
  "scheppern lassen",
  "biss'n druff",
  "Antifa",
  "Antifa Ahoi!",
  "laut",
  "dreckig bleiben",
  "Strafbestand",
  "kaltgestellt",
  "der Andere",
  "Superdope",
  "MacBook Pro",
  "8000 Mark",
  "Noch Was?",
  "Böhmermann",
  "Komplett im Arsch",
  "Blah Blah Blah",
  "Mehr Knutschen",
  "Völlig Losgelöst",
  "[undefined]",
  "schon okay",
  "Pharisäer",
  "Pur Hitmix",
  "Ihre Werbung",
  "Rausschmeißer",
  "Was dagegen?",
  "Anker werfen",
  "Klinkenkabel",
  "Einen Schippern",
  "Die drei ???",
  "Thore hat Geburtstag",
  "Stark vermindert",
  "Mutig",
  "Durchgefeiert",
  "Leicht fertig",
  "Ausgestiegen",
  "Ausgeschlafen",
  "Verschlafen",
  "Heiss & schnell",
  "Appelkorn",
  "Norddeutsch",
  "Nah an Dänemark",
  "Leicht verpeilt",
  "Kulturbanause",
  "Synchronisiert",
  "Renoviert",
  "Schraubär",
  "Relativ",
  "Dümmer",
  "Mopfrisur",
  "Funsportaffin",
  "Hochmodern",
  "Blockchain",
  "Begeistert",
  "Betrunken",
  "Angenehm",
  "Versicherungsbetrug",
  "Angebumst",
  "Nachholbedarf",
  "Renovierungsstau",
  "Studienabbrecher",
  "Langzeitstudentin",
  "Dies das Ananas",
  "Schwiegermuttertraum",
  "Allradantrieb",
  "Pirat",
  "Militant",
  "Zauberhaft",
  "Linksextrem",
  "Links-Grün-Versifft",
  "gut gelaunt",
  "Märchenprinz",
  "Grundsolide",
  "Suchtpotential",
  "Königlich",
  "Karussellbremser",
  "Bürgermeister",
  "Freibeuter",
  "Hanseheld",
  "Küstenkind",
  "Feuerspucker",
  "Funkenflug",
  "Vollbart",
  "Vollbehaart",
  "Abserviert",
  "Unerhört",
  "Ungestimmt",
  "Massentauglich",
  "Propaganda",
  "Helium",
  "Luftballon",
  "Macarena",
  "Gutscheincode",
  "Spätzünder",
  "Warmduscher",
  "Angela Merkel",
  "Respektvoll",
  "Schwarzer Block",
  "Möwenschiss",
  "Bier am Hafen",
  "unser Haus",
  "Sammy gibt ein' aus!",
  "Bass Bass Bass",
  "viel Liebe",
  "Hand in Hand",
  "in schwarz",
  "Nachtbaden",
  "Buttermilch",
  "Fischfilet",
  "leicht verliebt",
  "Alles Anders",
  "DJ Shuffle",
  "übersteuert",
  "Alles Allen",
  "NZS BXN",
  "Wegbassen",
  "Parolen Gröhlen",
  "Moin sagen",
  "nich' lang schnacken",
  "Sterni-Fanta",
  "Cola-Korn",
  "Keine Panik",
  "Alles geht vorbei.",
  "Vieles kommt wieder.",
  "Wasted in Flensburg",
  "Bock drauf",
  "schlecht tanzen"
];
let specialClaims = ["weihnachtlich", "noch ein Punsch"];

export default {
  data() {
    return {
      claim: "asozial",
      phase: undefined
    };
  },
  methods: {
    changeClaim() {
      this.phase = "out";
      setTimeout(() => {
        this.claim = claims[Math.floor(Math.random() * claims.length)];
        this.phase = "in";
        setTimeout(() => {
          this.phase = undefined;
        }, 100);
      }, 500);
    }
  },
  mounted() {
    setInterval(() => {
      this.changeClaim();
    }, 468.75 * 8);
  },
  beforeDestroy() {}
};
</script>

<style>
html,
body {
  background-color: black;
}

body {
  overflow: hidden;
}

main {
  position: relative;
}

h1 {
  position: relative;
  top: 35vh;
  left: 7.5vw;

  color: white;
  font-family: "Pier Sans", "Montserrat", sans-serif;
  font-size: 64px;
  font-weight: 700;
  text-transform: uppercase;

  transform: rotate(-2deg);
}

.claim {
  display: inline-block;
  transition: all 0.25s ease-in-out;
}

.in {
  transform: translateY(70vh);
  transition: none;
  opacity: 0;
}

.out {
  transform: translateY(-70vh);
  opacity: 0;
}
</style>
