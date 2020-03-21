const services = [
  {
    id: '',
    langs: {
      fi: {
        title: 'Alepa',
        desc: 'Alepan ruokakassit kotiovelle. Toimitus alkaen 4,90 euroa. Toimitus- ja noutoaikoja on tällä hetkellä saatavilla rajallisesti. Myös nouto onnistuu. Prismalla on myös omat verkkokaupat.'
      },
      gb: {
        title: 'Alepa',
        desc: 'Alepa\'s food delivery service allows you to order products straight to yout front door. Delivery fees start from 4,9€, pick up is also possible. Delivery- and pick up -times are currently limited. Prisma also has a similar service '
      },
      se: {
        title: 'Alepa',
        desc: 'Alepas matkassar till din dörr. Leverans från 4,90 euro. För tillfället begränsad tillgång till leverans- och hämtningstider. Hämtning är också möjlig. Prisma har också egna webbutiker.'
      }
    },
    link: 'https://www.foodie.fi/',
    img_src: '../img/alepa.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Feelia',
        desc: 'Suuria määriä kotiruokaa kotiovelle. Toimitus 8,90 euroa. Yli 150 euron tilaukset ilmaisella toimituksella. Toimituksissa saattaa ilmetä pieniä viiveitä.'
      },
      gb: {
        title: 'Feelia',
        desc: 'Large amounts of homecooked meals straight to your front door. Delivery fee is 8,9€. Deliveries over 150€ have free delivery.'
      },
      se: {
        title: 'Feelia',
        desc: 'Stora mängder hemlagad mat till din dörr. Leverans 8,90 euro. Fri leverans av beställningar på över 150 euro. Leveranserna kan försenas något.'
      }
    },
    link: 'https://www.feeliaruokakauppa.fi/',
    img_src: '../img/feelia.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kesko',
        desc: 'Keskon kotiinkuljetus. Kuljetus alkaen 9,90 euroa. Tuotteita on voinut loppua, ja osalla kaupoista on vaikeuksia toimituksissa. Myös nouto onnistuu. Suurempia tilauksia osoitteesta k-ruokapro.fi, jossa yli 50 euron tilauksissa ilmainen kuljetus.'
      },
      gb: {
        title: 'Kesko',
        desc: 'Kesko\'s home delivery. Shipping start from 9,9€. Some products might have sold out and some stores might have difficulties with delivery. Pick up is also possible.'
      },
      se: {
        title: 'Kesko',
        desc: 'Keskos hemleverans. Transport från 9,90 euro. Produkter kan ha tagit slut och vissa butiker har leveranssvårigheter. Hämtning är också möjlig. Större beställningar från adressen k-ruokapro.fi, med fri leverans av beställningar på över 50 euro.'
      }
    },
    link: 'https://www.k-ruoka.fi/kauppa',
    img_src: '../img/kesko.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Wolt',
        desc: 'Ravintolat ja pikaruokalat. Tilauksen yhteydessä voi valita, että lähetit jättävät kuljetuksen oven taakse. Saatavilla myös Clas Ohlsonin tärkeimmät elektroniikkatuotteet.'
      },
      gb: {
        title: 'Wolt',
        desc: 'Wolt\'s food-delivery platform allows you to order food from restaurants nearby. Now you can also choose no-contact delivery.'
      },
      se: {
        title: 'Wolt',
        desc: 'Restauranger och snabbmatsrestauranger. I samband med beställningen kan du välja att budet lämnar leveransen utanför dörren. Här kan du även beställa Clas Ohlsons viktigaste elektronikprodukter.'
      }
    },
    link: 'https://wolt.com/fi/discovery',
    img_src: '../img/wolt.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Pieni Ruokakauppa',
        desc: 'Ruoan verkkokauppa ja kotiinkuljetuspalvelu Pieni Ruokakauppa, joka toimii pääkaupunkiseudulla, Turussa ja Tampereella.'
      },
      gb: {
        title: 'Pieni Ruokakauppa',
        desc: 'Online store for food and home delivery service. Pieni Ruokakauppa operates in Helsinki metropolitan area, Tampere and Turku. '
      },
      se: {
        title: 'Pieni Ruokakauppa',
        desc: 'Shoppa livsmedel online med hemleverans till huvudstadsregionen, Åbo och Tammerfors.'
      }
    },
    link: 'https://pieniruokakauppa.fi/',
    img_src: '../img/pieniruokakauppa.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Ruokaboksi',
        desc: 'Reseptit ja arkiruokaan valikoidut ainekset kotiovelle.'
      },
      gb: {
        title: 'Ruokaboksi',
        desc: 'Recepies and ingridients for weekday meals delivered to your home.'
      },
      se: {
        title: 'Ruokaboksi',
        desc: 'Ingredienser till vardagsmat inklusive recept till din dörr.'
      }
    },
    link: 'https://ruokaboksi.fi/tuotteet/',
    img_src: '../img/ruokaboksi.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Foodora',
        desc: 'Ravintolat ja pikaruokalat. Lähetit voivat jättää kuljetuksen oven taakse, jos pyyntö kirjoitetaan osoitetietojen yhteyteen pyyntönä.'
      },
      gb: {
        title: 'Foodora',
        desc: 'Foodora\'s food-delivery platform allows you to order food from restaurants nearby.'
      },
      se: {
        title: 'Foodora',
        desc: 'Restauranger och snabbmatsrestauranger. Budet kan lämna leveransen utanför dörren om du skriftligen i samband med att du anger dina adressuppgifter ber hen göra det.'
      }
    },
    link: 'https://www.foodora.fi/',
    img_src: '../img/foodora.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Fiksuruoka',
        desc: 'Hävikkiruokaa tarjoushinnoin. Kotiinkuljetus alkaen 7,90 euroa. Yli 70 euron tilauksissa ilmainen kotiinkuljetus.'
      },
      gb: {
        title: 'Fiksuruoka',
        desc: 'Save food from ending in the trash bin on discount. Home delivery start from 7,9€ and free for orders over 70€.'
      },
      se: {
        title: 'Fiksuruoka',
        desc: 'Svinnmat till förmånspriser. Hemleverans från 7,90 euro. Fri leverans av beställningar på över 70 euro.'
      }
    },
    link: 'https://www.fiksuruoka.fi/',
    img_src: '../img/fiksuruoka.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Sannanruokakassi',
        desc: 'Reseptit ja arkiruokaan valikoidut ainekset kotiovelle. Osassa ruokakasseista ilmainen toimitus.'
      },
      gb: {
        title: 'Sannanruokakassi',
        desc: 'Recepies and ingridients for weekday meals delivered to your home. Some packages have free shippig to your home.'
      },
      se: {
        title: 'Sannas Matkasse',
        desc: 'Ingredienser till vardagsmat inklusive recept till din dörr. Fri leverans av utvalda matkassar.'
      }
    },
    link: 'https://www.sannanruokakassi.fi/collections/ruokakassit',
    img_src: '../img/sannanruokakassi.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'La Torrefazione',
        desc: 'La Torrefazione aloitti lounaiden kuljetuksen. Lounaan voi maksaa esimerkiksi MobilePaylla, Smartumilla, Edenredillä, ja pankkikorteilla.'
      },
      gb: {
        title: 'La Torrefazione',
        desc: 'La Torrefazione started to deliver luch to home. You can pay for lunch with for example MobilePay, Smartum, Edenred and bank cards.'
      },
      se: {
        title: 'La Torrefazione',
        desc: 'La Torrefazione har börjat leverera luncher. Du kan betala din lunch med bland annat MobilePay, Smartum, Edenred och bankkort.'
      }
    },
    link: 'http://www.latorre.fi/',
    img_src: '../img/latorre.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Fruitbox',
        desc: 'Työpaikalle tulevan hedelmäboksin tilaus voidaan ohjata etätyöläisten kotiovelle.'
      },
      gb: {
        title: 'Fruitbox',
        desc: 'Fruitboxes coming to workplace can now be redirected to remote workers homes.'
      },
      se: {
        title: 'Fruitbox',
        desc: 'Nu kan du vidarebefordra arbetsplatsens fruktlåda till distansarbetarens hemdörr.'
      }
    },
    link: 'https://fruitboxoffice.fi/',
    img_src: '../img/fruitbox.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Matsmart',
        desc: 'Hävikkiruokaa tarjoushinnoin. Toimituksissa viivettä.'
      },
      gb: {
        title: 'Matsmart',
        desc: 'Save food from ending in the trash bin on discount. There might be some delays with deliveries.'
      },
      se: {
        title: 'Matsmart',
        desc: 'Svinnmat till förmånspriser. Leveransförseningar.'
      }
    },
    link: 'https://www.matsmart.fi/',
    img_src: '../img/matsmart.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Luomukassi',
        desc: 'Luomukassi toimittaa luomuruokaa ja lähitilojen tuotteita suoraan kotiin. Reseptit ja ainesosat tulevat samassa paketissa PK-seudulle.'
      },
      gb: {
        title: 'Luomukassi',
        desc: ''
      },
      se: {
        title: 'Luomukassi',
        desc: 'Luomukassi levererar närproducerad ekologisk mat till ditt hem. Hemleverans av paket med recept och ingredienser inom huvudstadsregionen.'
      }
    },
    link: 'https://luomukassi.fi/',
    img_src: '../img/luomukassi.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kotikaappi',
        desc: 'Kotikaappi24 varmistaa 100 tärkeimmän kuivaelintarvikkeen saannin ympäri Suomen. Voit tilata paketin kotiovelle asti kannettuna itselle, ystävällesi tai riskiryhmään kuuluvalle läheisellesi. Valikoima päivittyy matkan varrella.'
      },
      gb: {
        title: 'Kotikaappi',
        desc: ''
      },
      se: {
        title: 'Kotikaappi',
        desc: 'Kotikaappi24 garanterar leverans av 100 vanliga torrfoderprodukter runt om i Finland. Du kan beställa paket till din dörr, åt en vän eller en närstående som hör till en riskgrupp. Sortimentet uppdateras med tiden.'
      }
    },
    link: 'https://www.kotikaappi24.fi/',
    img_src: '../img/kotikaappi.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Forsman',
        desc: 'Forsman tee on Suomalainen teetalo, jolta saat tilattua laajan valikoiman erilaisia kuumia juomia vihreästä teestä kofeinittomiin vaihtoehtoihin.'
      },
      gb: {
        title: 'Forsman',
        desc: ''
      },
      se: {
        title: 'Forsman',
        desc: 'Forsman Tea är ett finskt tehus med ett brett sortiment av varma drycker från grönt te till koffeinfria alternativ.'
      }
    },
    link: 'http://www.forsman-tea.com/fi/',
    img_src: '../img/forsman.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Laidun Hereford',
        desc: 'Laidun Hereford on lähiruuan kasvattaja ja jalostaja, joka toimittaa verkkokauppansa kautta myös muiden pientuottajien valmistamaa ruokaa suoraan kotiovelle.'
      },
      gb: {
        title: 'Laidun Hereford',
        desc: ''
      },
      se: {
        title: 'Laidun Hereford',
        desc: 'Laidun Hereford odlar närmat, föder upp boskap och levererar livsmedel från egen gård och av andra småproducenter till din dörr.'
      }
    },
    link: 'https://www.laidunhereford.fi/',
    img_src: '../img/laidun-hereford.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Lucy In The Sky',
        desc: 'Lucy In the Sky toimittaa veloituksetta ravintola-annoksia suoraan kotiisi Espoon seudulla.'
      },
      gb: {
        title: 'Lucy In The Sky',
        desc: ''
      },
      se: {
        title: 'Lucy In The Sky',
        desc: 'Lucy In the Sky levererar gratis restaurangrätter direkt till ditt hem inom Esbo.'
      }
    },
    link: 'https://www.lucyinthesky.fi/kotiinkuljetus',
    img_src: '../img/lucyinthesky.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Anton&Anton',
        desc: 'Anton&Anton ruokakassi-palvelu toimittaa kassin täynnä tuoreita ja laadukkaita raaka-aineita suoraan kotiovellesi.'
      },
      gb: {
        title: 'Anton&Anton',
        desc: ''
      },
      se: {
        title: 'Anton&Anton',
        desc: 'Anton & Antons Matkasse levererar en kasse fylld av färska, högklassiga råvaror till din dörr.'
      }
    },
    link: 'https://www.antonanton.fi/pages/ruokakassi',
    img_src: '../img/antonanton.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Madison Gastro & Wine',
        desc: 'Madison Gastro & Wine toimittaa ruokaa kotiin Espoon Tapiolan alueella.'
      },
      gb: {
        title: 'Madison Gastro & Wine',
        desc: ''
      },
      se: {
        title: 'Madison Gastro & Wine',
        desc: 'Hemleverans från Madison Gastro & Wine inom Hagalund i Esbo.'
      }
    },
    link: 'https://www.toptaste.fi/artikkeli/madison-gastro-wine-aloittaa-lounaan-kotiinkuljetuksen/',
    img_src: '../img/madison.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Uudenmaan ruoka / Ekompi.net',
        desc: 'Verkkokauppa mistä tehdään ennakkotilauksia lähialueen pientuottajilta, ja nouto miehittämättömästä noutopisteestä. Auttaa lähialueen tuottajia.'
      },
      gb: {
        title: 'Uudenmaan ruoka / Ekompi.net',
        desc: ''
      },
      se: {
        title: 'Nylands mat / Ekompi.net',
        desc: 'Elektronisk förhandsbeställning av lokala småproducenters varor med hämtning från obemannad upphämtningsplats. Stödjer närproducenter.'
      }
    },
    link: 'https://www.ekompi.net/',
    img_src: '../img/ekompi.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'kauppahalli24',
        desc: 'Kauppahalli24 on verkkoruokakauppa, joka toimittaa kaikenlaisia elintarvikkeita sekä kodintuotteita Uudenmaan alueella. Kuljetuksen hinta on 3,99€-9,99€ ostosten loppusummasta riippuen.'
      },
      gb: {
        title: 'kauppahalli24',
        desc: ''
      },
      se: {
        title: 'kauppahalli24',
        desc: 'Shoppa alla slags livsmedel online med levererans inom Nyland. Leveranskostnad 3,99–9,99 euro beroende på totalt inköpsbelopp.'
      }
    },
    link: 'https://www.kauppahalli24.fi/tuotteet/#/cat/759',
    img_src: '../img/kauppahalli24.png',
    locations: [
      ''
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Tokmanni',
        desc: 'Tokmannilta on toistaiseksi ainakin WC-paperi sekä käsidesi loppu. Muut tuotteet ovat saatavilla verkkokaupasta.'
      },
      gb: {
        title: 'Tokmanni',
        desc: ''
      },
      se: {
        title: 'Tokmanni',
        desc: 'För närvarande har Tokmanni slut åtminstone på toalettpapper och handdesi. Övriga produkter finns tillgängliga i webbutiken.'
      }
    },
    link: 'https://www.tokmanni.fi/',
    img_src: '../img/tokmanni.png',
    locations: [
      ''
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Clas Ohlson',
        desc: 'Ilmainen toimitus pienelektroniikalle ja muille tuotteille. Saa tilattua myös Woltilla. Käsidesi loppu, mutta kertakäyttökäsineitä ja vessapaperia myynnissä.'
      },
      gb: {
        title: 'Clas Ohlson',
        desc: ''
      },
      se: {
        title: 'Clas Ohlson',
        desc: 'Fri leverans av småelektronik och övriga produkter. Går även att beställa via Wolt. Slut på handdesi, men engångshandskar och toalettpapper finns till försäljning.'
      }
    },
    link: 'https://www.clasohlson.com/fi/',
    img_src: '../img/clasohlson.png',
    locations: [
      ''
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kärkkäinen',
        desc: 'Kärkkäiseltä saa tekemistä karanteeniin, sekä muita tuotteita verkkokaupasta. Esimerkiksi WC-paperia ja käsidesiä löytyi varastosta. Kotiinkuljetus 7,90 ja pakettitoimitukset 3,90 euroa.'
      },
      gb: {
        title: 'Kärkkäinen',
        desc: ''
      },
      se: {
        title: 'Kärkkäinen',
        desc: 'Kärkkäinens webbutik säljer tillbehör för olika sysslor att göra under din tid i karantän och andra produkter. På lager finns till exempel toalettpapper och handdesi. Hemleverans 7,90 och paketleverans 3,90 euro.'
      }
    },
    link: 'https://www.karkkainen.com/verkkokauppa/ajankohtaista/kampanjat-29061501/karanteenitekemista?orderBy=5&fromPage=catalogEntryList&beginIndex=0',
    img_src: '../img/karkkainencom.png',
    locations: [
      ''
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Verkkokauppa',
        desc: 'Toimistotarvikkeita, elektroniikkaa, lautapelejä ja oheistuotteita. Lupaavat toimitusta jopa samalle päivälle.'
      },
      gb: {
        title: 'Verkkokauppa',
        desc: ''
      },
      se: {
        title: 'Verkkokauppa',
        desc: 'Kontorsmaterial, elektronik, brädspel och tillbehör. Utlovar leverans rentav samma dag.'
      }
    },
    link: 'https://www.verkkokauppa.com/',
    img_src: '../img/verkkokauppa.png',
    locations: [
      ''
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Power',
        desc: 'Elektroniikkaa. Jättävät paketit oven taakse, eikä ojenna käteen.'
      },
      gb: {
        title: 'Power',
        desc: ''
      },
      se: {
        title: 'Power',
        desc: 'Elektronik. Överräcker inte paket utan lämnar dem utanför dörren.'
      }
    },
    link: 'https://www.power.fi/',
    img_src: '../img/power.png',
    locations: [
      ''
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'BottegaVerde',
        desc: 'Tarjolla pienyrittäjältä kohtuuhintaisia hygieniatuotteita, shampoot, hoitavat saippuat, käsivoiteet ja muu kosmetiikka.'
      },
      gb: {
        title: 'BottegaVerde',
        desc: ''
      },
      se: {
        title: 'BottegaVerde',
        desc: 'Prisvärda hygienprodukter, schampon, behandlande tvålar, handkrämer och annan kosmetika av en småföretagare.'
      }
    },
    link: 'https://www.bottegaverde.fi/',
    img_src: '../img/bottegaverde.png',
    locations: [
      ''
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Goldenstore',
        desc: 'Yritykseltä saa laajan valikoiman hyvinvointiin ja puhtauteen sekä henkilökohtaiseen hygieniaan ja ihonhoitoon tuotteita. Tuotteita voi tilata kätevästi netistä 24/7.'
      },
      gb: {
        title: 'Goldenstore',
        desc: ''
      },
      se: {
        title: 'Golden Store Neolifes webbshop',
        desc: 'Brett sortiment av wellness- och rengöringsprodukter för personlig hygien och hudvård. På webben kan produkterna bekvämt beställas dygnet runt.'
      }
    },
    link: 'https://goldenstore.mycashflow.fi/',
    img_src: '../img/goldenstore.png',
    locations: [
      ''
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Biltema',
        desc: 'Biltemalla on käytössään Osta & Nouda Drive In -palvelu. Voit etsiä tuotteet verkkosivuilta ja tehdä tilauksen Osta & Nouda -palvelun kautta, minkä jälkeen tavaratalon henkilökunta kerää tilauksesi. Kun saavut noutamaan tilausta, henkilökunta toimittaa sen suoraan autoosi.'
      },
      gb: {
        title: 'Biltema',
        desc: ''
      },
      se: {
        title: 'Biltema',
        desc: ''
      }
    },
    link: 'https://www.biltema.fi/osta---nouda-drive-in/miten-osta---nouda-drive-in-palvelu-toimii/',
    img_src: '../img/biltema.png',
    locations: [
      ''
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Yliopistonapteekki',
        desc: 'Yliopiston apteekki toimittaa reseptilääkkeet kotiovelle. Asiakaspalvelu ruuhkautunut ja tilausten toimitusaika normaalia pidempi. Myös monet muut apteekit toimittavat lääkkeitä.'
      },
      gb: {
        title: 'Yliopistonapteekki',
        desc: ''
      },
      se: {
        title: 'Universitetets Apotek',
        desc: 'Universitetets Apotek levererar receptbelagda läkemedel till din dörr. Kundtjänsten är överbelastad och leveranserna tar längre än normalt. Många andra apotek levererar också läkemedel.'
      }
    },
    link: 'https://www.yliopistonapteekki.fi/nain_ostat_reseptilaakkeita_verkosta',
    img_src: '../img/ya.png',
    locations: [
      ''
    ],
    category: 'care'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Gubbe',
        desc: 'Gubbelta voi tilata apua ruokakassien viennissä ja muihin ikäihmisiin liittyvissä tehtävissä. Gubben puhelinnumero on 044 491 0039.'
      },
      gb: {
        title: 'Gubbe',
        desc: ''
      },
      se: {
        title: 'Gubbe',
        desc: 'Från Gubbe kan du beställa hjälp med att föra matkassar och andra uppdrag till stöd för de äldre. Gubbes telefonnummer är 044 491 00 39.'
      }
    },
    link: 'https://www.gubbe.io/',
    img_src: '../img/gubbe.png',
    locations: [
      ''
    ],
    category: 'care'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Bring',
        desc: 'Bring kuljettaa melkein kaikkea PK-seudulla saman päivän aikana.'
      },
      gb: {
        title: 'Bring',
        desc: ''
      },
      se: {
        title: 'Bring',
        desc: 'Bring transporterar nästan allt på samma dag i huvudstadsregionen.'
      }
    },
    link: 'https://www.bring.fi/',
    img_src: '../img/bring.png',
    locations: [
      ''
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'EWS',
        desc: 'Helsinkiläinen pesula tarjoaa kotinoutoa verhoille ja muille kodin suurille tekstiileille.'
      },
      gb: {
        title: 'EWS',
        desc: ''
      },
      se: {
        title: 'EWS Tvättservice',
        desc: 'Tvätteri som hämtar hemmets gardiner och andra stora textilier inom Helsingfors.'
      }
    },
    link: 'https://www.ewshelsinki.fi/',
    img_src: '../img/ews.png',
    locations: [
      ''
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Karkkikoulu',
        desc: 'Korttivarasto on Lahdessa ja nähtävänä verkkosivuilla. Sähköpostitse voi sopia korttien hausta tai toimituksesta jonnekin.'
      },
      gb: {
        title: 'Karkkikoulu',
        desc: ''
      },
      se: {
        title: 'Gratis vykort till släktingar',
        desc: 'Skicka handgjorda vykort till släktingar. Kortlagret finns i Lahtis och kan ses på webbplatsen. Kom överens om hämtning eller leverans av korten via e-post.'
      }
    },
    link: 'https://karkkikoulu.com/',
    img_src: '../img/karkkikoulu.png',
    locations: [
      ''
    ],
    category: 'care'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Ilostu',
        desc: 'Ilostu tuottaa palveluita ikäihmisille. 17.3. tiedotteen mukaisesti he palvelevat senioreita normaalisti.'
      },
      gb: {
        title: 'Ilostu',
        desc: ''
      },
      se: {
        title: 'Ilostu',
        desc: 'Ilostu erbjuder tjänster för de äldre. Enligt sitt meddelande 17.3 betjänar de seniorer normalt.'
      }
    },
    link: 'https://ilostu.fi/',
    img_src: '../img/ilostu.png',
    locations: [
      ''
    ],
    category: 'care'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Fiksit',
        desc: 'Fiksit huoltaa älylaitteita. He pystyvät noutamaan ja tuomaan korjattuna 24 tunnin sisällä.'
      },
      gb: {
        title: 'Fiksit',
        desc: ''
      },
      se: {
        title: 'Fiksit',
        desc: 'Fixar utför service av smarta enheter. Hämtar, reparerar och returnerar vid behov din enhet inom 24 timmar.'
      }
    },
    link: 'https://www.fiksit.fi/',
    img_src: '../img/fiksit.png',
    locations: [
      ''
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Swappie',
        desc: 'Swappielta voi hankkia uudenveroisia käytettyjä puhelimia kotiinkuljetettuna.'
      },
      gb: {
        title: 'Swappie',
        desc: ''
      },
      se: {
        title: 'Swappie',
        desc: 'Från Swappie kan köpa begagnade telefoner i nyskick med hemleverans.'
      }
    },
    link: 'https://www.swappie.com/fi/',
    img_src: '../img/swappie.png',
    locations: [
      ''
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Helsingin Biopankki',
        desc: 'Helsingin Biopankin sivuilla voit antaa sähköisen biopankkisuostumuksen. Biopankkinäytteet ovat tärkeitä tutkittaessa aikanaan koronainfektioon liittyviä erilaisia liitännäissairauksia.'
      },
      gb: {
        title: 'Helsingin Biopankki',
        desc: ''
      },
      se: {
        title: 'Helsingfors Biobank',
        desc: 'På Helsingfors Biobanks webbplats kan du ge ett elektroniskt biobanksamtycke. Biobankprover är viktiga för senare forskning av olika associerade sjukdomar med anknytning till coronainfektion.'
      }
    },
    link: 'https://www.helsinginbiopankki.fi/fi/etusivu',
    img_src: '../img/helsinginbiopankki.png',
    locations: [
      ''
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Omaolo',
        desc: 'Omaolon verkkosivuilla voit tehdä virtuaalisen koronatestin. jos epäilet koronavirusta. Testin ottamalla säästät terveyskeskusten rajallisia resursseja.'
      },
      gb: {
        title: 'Omaolo',
        desc: ''
      },
      se: {
        title: 'Omaolo',
        desc: 'På Omaolos webbplats kan du göra ett virtuellt coronatest om du misstänker att du smittats av coronaviruset. Genom att göra testet sparar du på hälsocentralernas begränsade resurser.'
      }
    },
    link: 'https://www.omaolo.fi/',
    img_src: '../img/omaolo.png',
    locations: [
      ''
    ],
    category: 'care'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Onerva',
        desc: 'Onerva on kotihoidon ja palveluasumisen vieraskirja, joka on luettavissa aina ja kaikkialla. Onervan avulla hoitohenkilöstö saa sinuun yhteyden ja sinä heihin.'
      },
      gb: {
        title: 'Onerva',
        desc: ''
      },
      se: {
        title: 'Onerva omsorgskommunikation',
        desc: 'Onerva är en gästbok för hemtjänsten och serviceboenden som kan läsas när som helst, överallt. Via Onerva kan vårdpersonal kontakta dig och du kontakta dem.'
      }
    },
    link: 'https://onervahoiva.fi/',
    img_src: '../img/onerva.png',
    locations: [
      ''
    ],
    category: 'care'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Cityvarasto',
        desc: 'Varastot helposti netistä ilman tapaamista.'
      },
      gb: {
        title: 'Cityvarasto',
        desc: ''
      },
      se: {
        title: 'Cityvarasto',
        desc: 'Förråd enkelt online utan möten.'
      }
    },
    link: 'https://cityvarasto.fi/',
    img_src: '../img/cityvarasto.png',
    locations: [
      ''
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Rakkaudella, Riikka',
        desc: 'Stressinhallintaa, mielen hyvinvoinnin tukemista, työnohjausta voimavarakeskeisellä työotteella. Mahdollisuus etäyhteyteen ja maksuton 45 min tutustumisaika.'
      },
      gb: {
        title: 'Rakkaudella, Riikka',
        desc: ''
      },
      se: {
        title: 'Med kärlek, Riikka',
        desc: 'Stresshantering, stöd för psykiskt välbefinnande och arbetsvägledning med resursorienterat arbetssätt. Möjlighet till fjärråtkomst och gratis 45 minuters introduktion på webben.'
      }
    },
    link: 'https://rakkaudellariikka.fi/',
    img_src: '../img/rakkaudellariikka.png',
    locations: [
      ''
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Hellie Hoivapalvelut',
        desc: 'HelliE on turvallinen, paikallinen yritys, jonka palveluja ovat mm. kaupassakäynti, jutteluapu, kodinhoito.'
      },
      gb: {
        title: 'Hellie Hoivapalvelut',
        desc: ''
      },
      se: {
        title: 'Hellie Omsorgstjänster',
        desc: 'Hellie är ett tryggt, lokalt företag vars tjänster omfattar bland annat butiksbesök, samtalshjälp och chatt och hemhjälp.'
      }
    },
    link: 'https://www.hellie.fi/',
    img_src: '../img/hellie.png',
    locations: [
      ''
    ],
    category: 'care'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Cleanmarin',
        desc: 'Siivous- ja puhdistuspalvelut.'
      },
      gb: {
        title: 'Cleanmarin',
        desc: ''
      },
      se: {
        title: 'Cleanmarin',
        desc: 'Städ- och rengöringsservice.'
      }
    },
    link: 'http://cleanmarin.fi/',
    img_src: '../img/cleanmarin.png',
    locations: [
      ''
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kampaajakotiin',
        desc: 'Hiuspalvelut vietynä asiakkaan kotiin.'
      },
      gb: {
        title: 'Kampaajakotiin',
        desc: ''
      },
      se: {
        title: 'Frisör hem',
        desc: 'Hårsalong hemma.'
      }
    },
    link: 'https://fiuge.com/fi/fiuge-kuljetus-avuksi-koronakaranteeniin/',
    img_src: '../img/kampaajakotiin.png',
    locations: [
      ''
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Fiuge',
        desc: 'Fiuge tarjoa kuljetusapua korona-eristyksissä oleville. Kuukauden kuljetukset 50 eurolla.'
      },
      gb: {
        title: 'Fiuge',
        desc: ''
      },
      se: {
        title: 'Fiuge',
        desc: 'Fiuge erbjuder transporthjälp till människor i coronaisolering. En månads transporter för 50 euro.'
      }
    },
    link: 'https://www.freska.fi/',
    img_src: '../img/fiuge.png',
    locations: [
      ''
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Freska',
        desc: 'Freska pitää asiakkaidensa kotien hygieniasta huolta pääkaupunkiseudella, sekä Turun ja Tampereen seudulla. Siivouksessa käytetään viranomaisten suosittelemia puhdistusaineita. Nämä puhdistusaineet ovat käytössä jokaisessa siivouksessa, vaikka asiakas ei olisi niitä tilannut. Näin varmistetaan tutkitusti tehokas puhdistus viranomaisten ohjeita noudattaen.'
      },
      gb: {
        title: 'Freska',
        desc: ''
      },
      se: {
        title: 'Freska',
        desc: 'Freska tar hand om hygienen hos dig som bor i huvudstads-, Åbo- eller Tammerforsregionen. Vid städningen används myndighetsrekommenderade rengöringsmedel. Rengöringsmedlen i fråga används vid varje städning, även om du inte beställt dem. Garanterat effektiv rengöring enligt myndighetsdirektiv.'
      }
    },
    link: 'https://www.stichme.com/',
    img_src: '../img/freska.png',
    locations: [
      ''
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'StichMe',
        desc: 'StichMe on Suomen ensimmäinen verkossa toimiva korjausompelun tarjoaja. Kaikki korjaukset ja muokkaukset etänä, valitse verkkosovelluksesta korjaustarpeet ja jätä korjattavat vaatteet pakettiautomaattin. Nouda korjatut vaatteet pakettiautomaatista jo viikossa. Korjaukset alkaen 9.90 €'
      },
      gb: {
        title: 'StichMe',
        desc: ''
      },
      se: {
        title: 'StichMe',
        desc: ''
      }
    },
    link: 'https://www.stichme.com/',
    img_src: '../img/stichme.png',
    locations: [
      ''
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Lukukaveri',
        desc: 'Lukukaveri palvelulla tarkoitetaan koululaisen ja seniorin välillä tapahtuvaa puhelua tai videopuhelua, jossa koululainen lukee seniorille vanhemman valvonnan alaisena valitsemaansa kirjallista tuotosta. Palvelun käyttö tapahtuu siten, että koululaisen vanhempi, seniori tai hänen läheisensä ilmoittaa lukijan tai kuuntelijan mukaan hankkeeseen täällä. Kun olet ilmoittautunut mukaan lukukaveri.com:n vapaaehtoinen ottaa sinuun yhteyttä ja muodostaa sopivat lukija-kuulijaparit.'
      },
      gb: {
        title: 'Lukukaveri',
        desc: ''
      },
      se: {
        title: 'Lukukaveri',
        desc: ''
      }
    },
    link: 'https://www.mehilainen.fi/mobiilisovellus/digiklinikka',
    img_src: '../img/lukukaveri.png',
    locations: [
      ''
    ],
    category: 'care'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Mehiläisen Digiklinikka',
        desc: 'Mehiläisen digiklinikka tuo lääkärin luoksesi. Palvelu on auki 24/7 ja pääset hoitoon nopeasti ilman ajanvarausta edulliseen hintaan. Lääkärin etävastaanotolla hoidetaan oireita ja sairauksia, jotka eivät vaadi fyysistä tutkimusta.'
      },
      gb: {
        title: 'Mehiläisen Digiklinikka',
        desc: ''
      },
      se: {
        title: 'Mehiläisen Digiklinikka',
        desc: ''
      }
    },
    link: 'https://www.forenom.com/fi/uutiset/palvelumme-koronapandemian-aikana/',
    img_src: '../img/mehilainen.png',
    locations: [
      ''
    ],
    category: 'care'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Forenom',
        desc: 'Forenom tarjoaa kalustettuja asuntoja ja huoneita nyt edullisesti esim. karanteenin ajaksi tai etätyöpaikaksi. Kohteissa koodilukot, joten ei kontaktia muihin ihmisiin. Forenom palvelee ympäri Suomen, myös pitkäaikaiseen asumiseen.'
      },
      gb: {
        title: 'Forenom',
        desc: ''
      },
      se: {
        title: 'Forenom',
        desc: 'Forenom erbjuder nu förmånligt möblerade lägenheter och rum till exempel för karantän eller som distansarbetsplats. Objekten har kodlås; utan kontakt med andra människor. Forenom betjänar i hela Finland, även inom långtidsboende.'
      }
    },
    link: 'https://www.wehostfinland.com/contact',
    img_src: '../img/forenom.jpg',
    locations: [
      ''
    ],
    category: 'homes'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'WeHost',
        desc: 'WeHost tarjoaa asuntojaan sekä lyhyt- että pitkäaikaiseen vuokraukseen. Kohteet ovat PK-seudulla.'
      },
      gb: {
        title: 'WeHost',
        desc: ''
      },
      se: {
        title: 'WeHost',
        desc: 'WeHost erbjuder sina lägenheter både för kort- och långvarig uthyrning. Objekten finns i huvudstadsregionen.'
      }
    },
    link: 'https://www.hiisihomes.fi/en/',
    img_src: '../img/wehost.png',
    locations: [
      ''
    ],
    category: 'homes'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Hiisi Homes',
        desc: 'Perheyritys Hiisi Homes tarjoaa koteja tilapäistarpeisiin aina parista yöstä useampaan kuukauteen ympäri Etelä-Suomea, ja toivottaa asukkaat leikkisästi tervetulleeksi painumaan Hiiteen. Tilapäiskodit soveltuvat myös etätyöskentelyyn. Hiisi Homesilla asuessa on helppo välttyä ihmiskontaktilta, koska vastaanottoa, ravintolaa tai yleisiä oleskelutiloja ei ole.'
      },
      gb: {
        title: 'Hiisi Homes',
        desc: 'Hiisi Homes provides temporary homes from a single night to months.'
      },
      se: {
        title: 'Hiisi Homes',
        desc: 'Familjeföretaget Hiisi Homes erbjuder bostäder för tillfälliga behov från ett par nätters till flera månaders inkvartering runtom i Södra Finland. Hiisis tillfälliga lägenheter lämpar sig även för distansarbete. När du bor bo Hiisi Homes är det lätt att undvika mänsklig kontakt: det finns ingen reception, restaurang eller allmänna lobbyer.'
      }
    },
    link: 'https://www.sokoshotels.fi/',
    img_src: '../img/hiisi.png',
    locations: [
      ''
    ],
    category: 'homes'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Sokos',
        desc: 'Hotellit, kuten Sokos, näyttävät jatkavan toimintaansa suurilta osin samalla tavalla, kuin ennen. Kysyntä on tippunut huomattavasti, joten hyviä tarjouksia on saatavilla.'
      },
      gb: {
        title: 'Sokos',
        desc: 'Due to significant decline in demand, Sokos Hotels has adjusted their hotel operations. Sokos Hotels provides safe accommodation in hotels that remain open.'
      },
      se: {
        title: 'Sokos',
        desc: 'Hotell, såsom Sokos, verkar fortsätta sin verksamhet i stort sett som förr. Efterfrågan har minskat avsevärt, så goda erbjudanden finns till buds.'
      }
    },
    link: 'https://spotapartments.fi/',
    img_src: '../img/sokos.png',
    locations: [
      ''
    ],
    category: 'homes'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Spot Apartments',
        desc: 'Spot Apartments tarjoaa asuntoja tilapäiseen ja vakituisempaan asumisen tarpeeseen. Mukaan tarvitset vain henkilökohtaiset tavarasi; ei erillistä avaimen noutoa, näppäilet vain avainkoodisi ja asut kuin kotonasi.'
      },
      gb: {
        title: 'Spot Apartments',
        desc: ''
      },
      se: {
        title: 'Spot Apartments',
        desc: ''
      }
    },
    link: 'https://areena.yle.fi/audio/1-1288197',
    img_src: '../img/spotapartments.png',
    locations: [
      ''
    ],
    category: 'homes'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Pikku Kakkosen ladattavat sadut',
        desc: 'Kuuntele tai lataa Pikku Kakkosen satuja.'
      },
      gb: {
        title: 'Sadut',
        desc: ''
      },
      se: {
        title: 'Lilla Tvåans nedladdningsbara sagor',
        desc: 'Lyssna på eller ladda ner Lilla Tvåans sagor.'
      }
    },
    link: 'https://open.spotify.com/playlist/55V6HUzPnISl7ADpE3yfUD?si=Ixx9gRvBSA2wc2DpuWp7qg',
    img_src: '../img/yle.png',
    locations: [
      ''
    ],
    category: 'entertainment'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Spotify',
        desc: 'Maailmalla levinnyt Spotify-soittolista tuo karanteeni-elämään oman mausteensa.'
      },
      gb: {
        title: 'Spotify',
        desc: 'Spotify is a digital music service that gives you access to millions of songs.'
      },
      se: {
        title: 'Spotify Karantänspellista',
        desc: 'Spotify-spellistan som fått global spridning sätter sin egen krydda på livet i karantän.'
      }
    },
    link: 'https://www.helsinginteatterikoulu.fi/lasten-oma-satutuokio/',
    img_src: '../img/spotify.png',
    locations: [
      ''
    ],
    category: 'entertainment'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Teatterikoulu',
        desc: 'Helsingin teatterikoulu tarjoaa kaikille avoimia lasten iltasatuhetkiä maksutta.'
      },
      gb: {
        title: 'Teatterikoulu',
        desc: ''
      },
      se: {
        title: 'Teatterikoulu',
        desc: 'Helsingin teatterikoulu erbjuder gratis godnattsagostunder till alla.'
      }
    },
    link: 'https://elisaviihde.fi/',
    img_src: '../img/helsingin-teatterikoulu.png',
    locations: [
      ''
    ],
    category: 'entertainment'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Elisa Viihde',
        desc: 'Elisa Viihteestä löytyy katsottavaa mielin määrin.'
      },
      gb: {
        title: 'Elisa Viihde',
        desc: ''
      },
      se: {
        title: 'Elisa Viihde',
        desc: 'Elisa Viihde har massor av program att titta på.'
      }
    },
    link: 'https://www.iltoppiminen.fi/palvelumme/lukulumo/',
    img_src: '../img/elisa-viihde.png',
    locations: [
      ''
    ],
    category: 'entertainment'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Lukulumo',
        desc: 'Lukulumo on varhaiskasvatukseen suunnattu digitaalinen työkalu, joka tarjoaa laajan valikoiman kuvakirjoja suomeksi ääneen luettuina. Palvelu ilmaiseksi käytössä 30pv. Käyttäjätunnus: lukulumokoti. Salasana: 987654321.'
      },
      gb: {
        title: 'Lukulumo',
        desc: ''
      },
      se: {
        title: 'Lukulumo',
        desc: 'Lukulumo är ett digitalt verktyg för småbarnspedagogiken med ett brett utbud bilderböcker i ljudboksformat på finska. Tjänsten är gratis att använda i 30 dagar. Användarnamn: lukulumokoti. Lösenord: 987654321.'
      }
    },
    link: 'https://www.storytel.com/fi/fi/',
    img_src: '../img/lukulumo.png',
    locations: [
      ''
    ],
    category: 'entertainment'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Storytel',
        desc: 'Storytel on digitaalinen kirjapalvelu, jonka kautta voit kuunnella ja lukea tuhansia ääni- ja e-kirjoja.'
      },
      gb: {
        title: 'Storytel',
        desc: ''
      },
      se: {
        title: 'Storytel',
        desc: 'Storytel är en digital boktjänst där du kan lyssna på och läsa tusentals ljud- och e-böcker.'
      }
    },
    link: 'https://www.bookbeat.fi/',
    img_src: '../img/storytel.png',
    locations: [
      ''
    ],
    category: 'entertainment'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Bookbeat',
        desc: 'BookBeatilla saat pääsyn laajaan valikoimaan äänikirjoja ja e-kirjoja kännykälläsi ja tabletillasi.'
      },
      gb: {
        title: 'Bookbeat',
        desc: ''
      },
      se: {
        title: 'Bookbeat',
        desc: 'BookBeat ger dig tillgång till ett brett utbud tal- och e-böcker på din mobiltelefon eller pekplatta.'
      }
    },
    link: 'https://viaplay.fi/',
    img_src: '../img/bookbeat.png',
    locations: [
      ''
    ],
    category: 'entertainment'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Viaplay',
        desc: 'Striimaa tai katso offline-tilassa leffoja, sarjoja ja urheilua.'
      },
      gb: {
        title: 'Viaplay',
        desc: ''
      },
      se: {
        title: 'Viaplay',
        desc: 'Streama filmer, serier och idrott, eller titta i offlineläge.'
      }
    },
    link: 'https://www.netflix.com/fi/',
    img_src: '../img/viaplay.png',
    locations: [
      ''
    ],
    category: 'entertainment'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Netflix',
        desc: 'Rajattomasti elokuvia ja sarjoja jokaiseen makuun.'
      },
      gb: {
        title: 'Netflix',
        desc: ''
      },
      se: {
        title: 'Netflix',
        desc: 'Obegränsat med filmer och serier för alla smaker.'
      }
    },
    link: 'https://kirja.elisa.fi/',
    img_src: '../img/netflix.png',
    locations: [
      ''
    ],
    category: 'entertainment'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Elisa Kirja',
        desc: 'Elisan äänikirjat ja e-kirjat. Yli 10 000 kirjaa moneen makuun.'
      },
      gb: {
        title: 'Elisa Kirja',
        desc: ''
      },
      se: {
        title: 'Elisa Kirja',
        desc: 'Elisas ljudböcker och e-böcker. Över 10 000 böcker för alla smaker.'
      }
    },
    link: 'https://neverthink.tv/',
    img_src: '../img/elisa-kirja.png',
    locations: [
      ''
    ],
    category: 'entertainment'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Neverthinktv',
        desc: 'Neverthink.tv tarjoaa käsinvalittuja videoita niin viihde- kuin oppimistarkoitukseen. Sivuilla voit valita itsellesi ja tilanteesi sopivan kategorian, josta löydät valmiiksi valitun videon.'
      },
      gb: {
        title: 'Neverthinktv',
        desc: 'Neverthink.tv provides you with a hand-picked selection of on demand-videos.'
      },
      se: {
        title: 'Neverthinktv',
        desc: ''
      }
    },
    link: 'https://www.elixia.fi/',
    img_src: '../img/neverthink.png',
    locations: [
      ''
    ],
    category: 'entertainment'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Elixia',
        desc: 'Elixialta löytyy kattava kirjasto kotitreenejä ja online-tunteja, jotka ovat kaikille avoimia.'
      },
      gb: {
        title: 'Elixia',
        desc: ''
      },
      se: {
        title: 'Elixia',
        desc: 'Elixia har ett omfattande bibliotek av hemmaträningspass och onlinetimmar som är öppna för alla.'
      }
    },
    link: 'https://watch.lesmillsondemand.com/at-home-workouts',
    img_src: '../img/elixia.png',
    locations: [
      ''
    ],
    category: 'sports'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Les Mills',
        desc: 'Les Mills avasi palvelustaan 100+ treeniä kaikille kahdeksi kuukaudeksi ilmaiseksi.'
      },
      gb: {
        title: 'Les Mills',
        desc: ''
      },
      se: {
        title: 'Les Mills',
        desc: 'Les Mills gjorde över 100 träningspass fritt tillgängliga för alla i två månaders tid.'
      }
    },
    link: 'https://www.edventures.fi/',
    img_src: '../img/lesmills.png',
    locations: [
      ''
    ],
    category: 'sports'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Edventures',
        desc: 'Sähkömaastopyörien vuokrausta Porvoossa ja Espoossa.'
      },
      gb: {
        title: 'Edventures',
        desc: ''
      },
      se: {
        title: 'Edventures',
        desc: 'Uthyrning av eldrivna mountainbikes i Borgå och Esbo.'
      }
    },
    link: 'https://www.fressi.fi/',
    img_src: '../img/edventures.png',
    locations: [
      ''
    ],
    category: 'sports'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Fressi',
        desc: 'Fressi tarjoaa ilmaisia live-ryhmäliikuntatunteja, joiden avulla voit treenata Fressin ammattilaisten ohjauksessa missä vain.'
      },
      gb: {
        title: 'Fressi',
        desc: ''
      },
      se: {
        title: 'Fressi',
        desc: 'Fressi livesänder gratis gruppgymnastiktimmar som hjälper dig träna med Fressis proffs var som helst.'
      }
    },
    link: 'https://store.sanoste.fi/fi/',
    img_src: '../img/fressi.png',
    locations: [
      ''
    ],
    category: 'sports'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Sanoste',
        desc: 'Sanoste tarjoaa digitaalisen palvelualustansa kautta erilaisia liikunta- ja yhteislaulukursseja ikäihmisille etäyhteydellä. Palvelut ovat maksullisia.'
      },
      gb: {
        title: 'Sanoste',
        desc: ''
      },
      se: {
        title: 'Sanoste',
        desc: 'Sanostes digitala serviceplattform erbjuder olika tränings- och allsångskurser för de äldre på distans. Tjänsterna är avgiftsbelagda.'
      }
    },
    link: 'https://www.downdogapp.com/',
    img_src: '../img/sanoste.png',
    locations: [
      ''
    ],
    category: 'sports'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Down Dog',
        desc: 'Down Dog tarjoaa kaikki sovelluksensa ilmaseksi käyttöön 1.4.2020 asti, jotta jokainen voi treenata kotona halutessaan. Palveluita on mm. Yoga, yoga for beginners, HIIT, barre ja 7-minute -treeni. Koulujen sulkemisen vuoksi opettajat ja kaikki oppilaat esikoulusta yliopistoon saavat käyttää palveluita ilmaiseksi heinäkuun alkuun asti.'
      },
      gb: {
        title: 'Down Dog',
        desc: ''
      },
      se: {
        title: 'Down Dog',
        desc: ''
      }
    },
    link: 'https://www.facebook.com/groups/karanteenissa/',
    img_src: '../img/downdog.png',
    locations: [
      ''
    ],
    category: 'sports'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Juurikorven kauppa, kokous ja catéring',
        desc: 'Ruan valmistus ja kuljetus lähiauleen koteihin Kotkan alueella. Kaupasta myös elintarvikkeita mukaan tai toimitettuna.'
      },
      gb: {
        title: 'Juurikorven kauppa',
        desc: ''
      },
      se: {
        title: 'Juurikorven kauppa',
        desc: ''
      }
    },
    link: 'https://www.facebook.com/Juurikorven-kauppa-kokous-ja-cat%C3%A9ring-724147044697069/',
    img_src: '../img/juurikorvenkauppa.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kahvila Donner',
        desc: 'Kahvila Donner tarjoaa kotiruoka-annoksia lounasaikaan noudettuna ja kuljetettuna Hyvinkään alueena. Maksutapoina käy pankki- ja luottokortit, Edenred lounassetelit ja -kortti, Eazybreak-mobiilisovellus sekä käteinen.'
      },
      gb: {
        title: 'Kahvila Donner',
        desc: ''
      },
      se: {
        title: 'Kahvila Donner',
        desc: ''
      }
    },
    link: 'https://www.kahviladonner.com',
    img_src: '../img/kahviladonner.png',
    locations: [
      ''
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Lähitaksi',
        desc: 'LÄHIAPU kauppa- ja asioitipalvelun kautta Lähitaksi hoitaa asiakkaidensa pävittäisasiat niin kauan, kun he eivät siihen itse pysty. Asiakas tekee kauppalistan valmiiksi, ja tilaa tämän jälkeen Lähitaksin auton numerosta 0100 7300.'
      },
      gb: {
        title: 'Lähitaksi',
        desc: ''
      },
      se: {
        title: 'Lähitaksi',
        desc: ''
      }
    },
    link: 'https://www.lahitaksi.fi/fi/ajankohtaista/lahitaksilta-uusi-kauppa-ja-asiointipalvelu',
    img_src: '../img/lahitaksi.png',
    locations: [
      ''
    ],
    category: 'services'
  }
]

module.exports = services