(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{132:function(e,n,t){var a=t(134);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t(52).default)("d4be674c",a,!0,{})},133:function(e,n,t){"use strict";var a=t(132);t.n(a).a},134:function(e,n,t){(e.exports=t(51)(!1)).push([e.i,"\nbody,html{background-color:#000\n}\nh1,main{position:relative\n}\nh1{top:35vh;left:7.5vw;color:#fff;font-family:Pier Sans,Montserrat,sans-serif;font-size:64px;font-weight:700;text-transform:uppercase;-webkit-transform:rotate(-2deg);transform:rotate(-2deg)\n}\n.claim{display:inline-block;transition:all .25s ease-in-out\n}\n.in{-webkit-transform:translateY(70vh);transform:translateY(70vh);transition:none\n}\n.in,.out{opacity:0\n}\n.out{-webkit-transform:translateY(-70vh);transform:translateY(-70vh)\n}",""])},135:function(e,n,t){"use strict";t.r(n);var a=["asozial","liebevoll","ungekämmt","scheppern lassen","biss'n druff","Antifa","Antifa Ahoi!","laut","dreckig bleiben","Strafbestand","kaltgestellt","der Andere","Superdope","MacBook Pro","8000 Mark","Noch Was?","Böhmermann","Komplett im Arsch","Blah Blah Blah","Mehr Knutschen","Völlig Losgelöst","[undefined]","schon okay","Pharisäer","Pur Hitmix","Ihre Werbung","Rausschmeißer","Was dagegen?","Anker werfen","Klinkenkabel","Einen Schippern","Die drei ???","Thore hat Geburtstag","Stark vermindert","Mutig","Durchgefeiert","Leicht fertig","Ausgestiegen","Ausgeschlafen","Verschlafen","Heiss & schnell","Appelkorn","Norddeutsch","Nah an Dänemark","Leicht verpeilt","Kulturbanause","Synchronisiert","Renoviert","Schraubär","Relativ","Dümmer","Mopfrisur","Funsportaffin","Hochmodern","Blockchain","Begeistert","Betrunken","Angenehm","Versicherungsbetrug","Angebumst","Nachholbedarf","Renovierungsstau","Studienabbrecher","Langzeitstudentin","Dies das Ananas","Schwiegermuttertraum","Allradantrieb","Pirat","Militant","Zauberhaft","Linksextrem","Links-Grün-Versifft","gut gelaunt","Märchenprinz","Grundsolide","Suchtpotential","Königlich","Karussellbremser","Bürgermeister","Freibeuter","Hanseheld","Küstenkind","Feuerspucker","Funkenflug","Vollbart","Vollbehaart","Abserviert","Unerhört","Ungestimmt","Massentauglich","Propaganda","Helium","Luftballon","Macarena","Gutscheincode"],r={data:function(){return{claim:"asozial",phase:void 0}},methods:{changeClaim:function(){var e=this;this.phase="out",setTimeout(function(){e.claim=a[Math.floor(Math.random()*a.length)],e.phase="in",setTimeout(function(){e.phase=void 0},100)},500)}},mounted:function(){var e=this;setInterval(function(){e.changeClaim()},3750)},beforeDestroy:function(){}},i=(t(133),t(19)),s=Object(i.a)(r,function(){var e=this.$createElement,n=this._self._c||e;return n("main",[n("h1",[this._v("\n    MARITIM &\n    "),n("span",{staticClass:"claim",class:this.phase},[this._v(this._s(this.claim))])])])},[],!1,null,null,null);s.options.__file="index.vue";n.default=s.exports}}]);