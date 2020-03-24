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
        desc: 'Alepa\'s food delivery service allows you to order products straight to your front door. Delivery fees start from 4,9€, pick up is also possible. Delivery- and pick up -times are currently limited. Prisma also has a similar service. '
      },
      se: {
        title: 'Alepa',
        desc: 'Alepas matkassar till din dörr. Leverans från 4,90 euro. För tillfället begränsad tillgång till leverans- och hämtningstider. Hämtning är också möjlig. Prisma har också egna webbutiker.'
      }
    },
    link: 'https://www.foodie.fi/',
    img_src: 'img/alepa.png',
    locations: [
      'National'
    ],
    category: 'Ruoka'
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
        desc: 'Large amounts of homecooked meals straight to your front door. Delivery fee is 8,9€, orders over 150€ have free delivery.'
      },
      se: {
        title: 'Feelia',
        desc: 'Stora mängder hemlagad mat till din dörr. Leverans 8,90 euro. Fri leverans av beställningar på över 150 euro. Leveranserna kan försenas något.'
      }
    },
    link: 'https://www.feeliaruokakauppa.fi/',
    img_src: 'img/feelia.png',
    locations: [
      'National'
    ],
    category: 'Ruoka'
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
        desc: 'Kesko\'s home delivery. Shipping starts from 9,9€. Some products might have sold out and some stores might have difficulties with delivery. Pick up is also possible.'
      },
      se: {
        title: 'Kesko',
        desc: 'Keskos hemleverans. Transport från 9,90 euro. Produkter kan ha tagit slut och vissa butiker har leveranssvårigheter. Hämtning är också möjlig. Större beställningar från adressen k-ruokapro.fi, med fri leverans av beställningar på över 50 euro.'
      }
    },
    link: 'https://www.k-ruoka.fi/kauppa',
    img_src: 'img/kesko.png',
    locations: [
      'National'
    ],
    category: 'Ruoka'
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
        desc: 'Wolt\'s food delivery platform allows you to order food from restaurants nearby. Now you can also choose the no-contact delivery.'
      },
      se: {
        title: 'Wolt',
        desc: 'Restauranger och snabbmatsrestauranger. I samband med beställningen kan du välja att budet lämnar leveransen utanför dörren. Här kan du även beställa Clas Ohlsons viktigaste elektronikprodukter.'
      }
    },
    link: 'https://wolt.com/fi/discovery',
    img_src: 'img/wolt.png',
    locations: [
      'National'
    ],
    category: 'Ruoka'
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
    img_src: 'img/pieniruokakauppa.png',
    locations: [
      'Helsinki','Tampere','Turku'
    ],
    category: 'Ruoka'
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
    img_src: 'img/ruokaboksi.png',
    locations: [
      'National'
    ],
    category: 'Ruoka'
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
        desc: 'Foodora\'s food delivery platform allows you to order food from restaurants nearby.'
      },
      se: {
        title: 'Foodora',
        desc: 'Restauranger och snabbmatsrestauranger. Budet kan lämna leveransen utanför dörren om du skriftligen i samband med att du anger dina adressuppgifter ber hen göra det.'
      }
    },
    link: 'https://www.foodora.fi/',
    img_src: 'img/foodora.png',
    locations: [
      'National'
    ],
    category: 'Ruoka'
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
        desc: 'Save food from ending in the trash bin on discount. Home delivery starts from 7,9€ and is free for orders over 70€.'
      },
      se: {
        title: 'Fiksuruoka',
        desc: 'Svinnmat till förmånspriser. Hemleverans från 7,90 euro. Fri leverans av beställningar på över 70 euro.'
      }
    },
    link: 'https://www.fiksuruoka.fi/',
    img_src: 'img/fiksuruoka.png',
    locations: [
      'National'
    ],
    category: 'Ruoka'
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
        desc: 'Recepies and ingridients for weekday meals delivered to your home. Some packages have free shippig.'
      },
      se: {
        title: 'Sannas Matkasse',
        desc: 'Ingredienser till vardagsmat inklusive recept till din dörr. Fri leverans av utvalda matkassar.'
      }
    },
    link: 'https://www.sannanruokakassi.fi/collections/ruokakassit',
    img_src: 'img/sannanruokakassi.png',
    locations: [
      'National'
    ],
    category: 'Ruoka'
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
    img_src: 'img/latorre.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
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
        desc: 'Fruitboxes coming to workplace can now be redirected to remote workers\' homes.'
      },
      se: {
        title: 'Fruitbox',
        desc: 'Nu kan du vidarebefordra arbetsplatsens fruktlåda till distansarbetarens hemdörr.'
      }
    },
    link: 'https://fruitboxoffice.fi/',
    img_src: 'img/fruitbox.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
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
    img_src: 'img/matsmart.png',
    locations: [
      'National'
    ],
    category: 'Ruoka'
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
        desc: 'Luomukassi delivers organic food and local products straight to your home. Recepies and ingridients come in the same package in the Helsinki metropolitan area.'
      },
      se: {
        title: 'Luomukassi',
        desc: 'Luomukassi levererar närproducerad ekologisk mat till ditt hem. Hemleverans av paket med recept och ingredienser inom huvudstadsregionen.'
      }
    },
    link: 'https://luomukassi.fi/',
    img_src: 'img/luomukassi.png',
    locations: [
      'Helsinki','Espoo','Vantaa'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kotikaappi24',
        desc: 'Kotikaappi24 varmistaa 100 tärkeimmän kuivaelintarvikkeen saannin ympäri Suomen. Voit tilata paketin kotiovelle asti kannettuna itselle, ystävällesi tai riskiryhmään kuuluvalle läheisellesi. Valikoima päivittyy matkan varrella.'
      },
      gb: {
        title: 'Kotikaappi24',
        desc: 'Kotikaappi24 makes sure that the 100 most important dry groceries are available. You can order the package to your front door, for you closeone or someone in the risk groups.'
      },
      se: {
        title: 'Kotikaappi24',
        desc: 'Kotikaappi24 garanterar leverans av 100 vanliga torrfoderprodukter runt om i Finland. Du kan beställa paket till din dörr, åt en vän eller en närstående som hör till en riskgrupp. Sortimentet uppdateras med tiden.'
      }
    },
    link: 'https://www.kotikaappi24.fi/',
    img_src: 'img/kotikaappi.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Ruoka'
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
        desc: 'Forsman tea is a Finnish teahouse from which you can order a large variety of hot drinks. '
      },
      se: {
        title: 'Forsman',
        desc: 'Forsman Tea är ett finskt tehus med ett brett sortiment av varma drycker från grönt te till koffeinfria alternativ.'
      }
    },
    link: 'http://www.forsman-tea.com/fi/',
    img_src: 'img/forsman.png',
    locations: [
      'National'
    ],
    category: 'Ruoka'
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
        desc: 'Laidun Hereford is a local food poducer which delivers also other smaller producer\'s products trough it\'s online store.'
      },
      se: {
        title: 'Laidun Hereford',
        desc: 'Laidun Hereford odlar närmat, föder upp boskap och levererar livsmedel från egen gård och av andra småproducenter till din dörr.'
      }
    },
    link: 'https://www.laidunhereford.fi/',
    img_src: 'img/laidun-hereford.png',
    locations: [
      'Seinäjoki'
    ],
    category: 'Ruoka'
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
        desc: 'Lucy in the sky delivers restaurant meals without additional free in Espoo region.'
      },
      se: {
        title: 'Lucy In The Sky',
        desc: 'Lucy In the Sky levererar gratis restaurangrätter direkt till ditt hem inom Esbo.'
      }
    },
    link: 'https://www.lucyinthesky.fi/kotiinkuljetus',
    img_src: 'img/lucyinthesky.png',
    locations: [
      'Espoo'
    ],
    category: 'Ruoka'
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
        desc: 'Anton&Anton food package service delivers a package full of fresh and quality ingridients straight to your door.'
      },
      se: {
        title: 'Anton&Anton',
        desc: 'Anton & Antons Matkasse levererar en kasse fylld av färska, högklassiga råvaror till din dörr.'
      }
    },
    link: 'https://www.antonanton.fi/pages/ruokakassi',
    img_src: 'img/antonanton.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa', 'Kirkkonummi', 'Sipoo', 'Porvoo'
    ],
    category: 'Ruoka'
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
        desc: 'Madison Gastro & Wine delivers food to your home in Espoo Tapiola region.'
      },
      se: {
        title: 'Madison Gastro & Wine',
        desc: 'Hemleverans från Madison Gastro & Wine inom Hagalund i Esbo.'
      }
    },
    link: 'https://www.toptaste.fi/artikkeli/madison-gastro-wine-aloittaa-lounaan-kotiinkuljetuksen/',
    img_src: 'img/madison.png',
    locations: [
      'Espoo'
    ],
    category: 'Ruoka'
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
        desc: 'Online store where you can make pre-orders from local producers and pick them up from a unmanned location. '
      },
      se: {
        title: 'Nylands mat / Ekompi.net',
        desc: 'Elektronisk förhandsbeställning av lokala småproducenters varor med hämtning från obemannad upphämtningsplats. Stödjer närproducenter.'
      }
    },
    link: 'https://www.ekompi.net/',
    img_src: 'img/ekompi.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Ruoka'
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
        desc: 'Kauppahalli24 is a online food shop which delivers all kinds of groceries and home products in the Uusimaa region. Delivery price is 3,99€-9,99€. '
      },
      se: {
        title: 'kauppahalli24',
        desc: 'Shoppa alla slags livsmedel online med levererans inom Nyland. Leveranskostnad 3,99–9,99 euro beroende på totalt inköpsbelopp.'
      }
    },
    link: 'https://www.kauppahalli24.fi/tuotteet/#/cat/759',
    img_src: 'img/kauppahalli24.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Verkkokauppa'
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
        desc: 'Currently Tokmanni is out of hand sanitizer. Other products, for example groceries, are available in the online store.'
      },
      se: {
        title: 'Tokmanni',
        desc: 'För närvarande har Tokmanni slut åtminstone på toalettpapper och handdesi. Övriga produkter finns tillgängliga i webbutiken.'
      }
    },
    link: 'https://www.tokmanni.fi/',
    img_src: 'img/tokmanni.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
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
        desc: 'Free shipping for all products. You can also order trough Wolt. '
      },
      se: {
        title: 'Clas Ohlson',
        desc: 'Fri leverans av småelektronik och övriga produkter. Går även att beställa via Wolt. Slut på handdesi, men engångshandskar och toalettpapper finns till försäljning.'
      }
    },
    link: 'https://www.clasohlson.com/fi/',
    img_src: 'img/clasohlson.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
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
        desc: 'Kärkkäinen has all kinds of product for quarantine. Home delivery 7,9€ and package shipping 3,9€.'
      },
      se: {
        title: 'Kärkkäinen',
        desc: 'Kärkkäinens webbutik säljer tillbehör för olika sysslor att göra under din tid i karantän och andra produkter. På lager finns till exempel toalettpapper och handdesi. Hemleverans 7,90 och paketleverans 3,90 euro.'
      }
    },
    link: 'https://www.karkkainen.com/verkkokauppa/ajankohtaista/kampanjat-29061501/karanteenitekemista?orderBy=5&fromPage=catalogEntryList&beginIndex=0',
    img_src: 'img/karkkainencom.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
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
        desc: 'Office supplies, electronics, board games and other products. Shipping even in the same day.'
      },
      se: {
        title: 'Verkkokauppa',
        desc: 'Kontorsmaterial, elektronik, brädspel och tillbehör. Utlovar leverans rentav samma dag.'
      }
    },
    link: 'https://www.verkkokauppa.com/',
    img_src: 'img/verkkokauppa.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
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
        desc: 'Electronics. Leaves the package behind your door so there is no human contact.'
      },
      se: {
        title: 'Power',
        desc: 'Elektronik. Överräcker inte paket utan lämnar dem utanför dörren.'
      }
    },
    link: 'https://www.power.fi/',
    img_src: 'img/power.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
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
        desc: 'Reasonably-priced hygiene products from small producers. Shampoos, soaps, hand creams and other cosmetics.'
      },
      se: {
        title: 'BottegaVerde',
        desc: 'Prisvärda hygienprodukter, schampon, behandlande tvålar, handkrämer och annan kosmetika av en småföretagare.'
      }
    },
    link: 'https://www.bottegaverde.fi/',
    img_src: 'img/bottegaverde.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
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
        desc: 'A large variety of products for well-being and personal hygiene. You can order products easily from online 24/7.'
      },
      se: {
        title: 'Golden Store Neolifes webbshop',
        desc: 'Brett sortiment av wellness- och rengöringsprodukter för personlig hygien och hudvård. På webben kan produkterna bekvämt beställas dygnet runt.'
      }
    },
    link: 'https://goldenstore.mycashflow.fi/',
    img_src: 'img/goldenstore.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
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
        desc: 'Biltema has a Buy & Drive In -service. You can search for products online and make the order using Buy & Pick Up -service. The stores personnel collects your order and brings it to your car.'
      },
      se: {
        title: 'Biltema',
        desc: ''
      }
    },
    link: 'https://www.biltema.fi/osta---nouda-drive-in/miten-osta---nouda-drive-in-palvelu-toimii/',
    img_src: 'img/biltema.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
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
        desc: 'Yliopiston apteekki delivers prescription medicine straight to your front door. Customer service is congested and delivery time is longer than normal. Many other pharmacies also deliver medicine. '
      },
      se: {
        title: 'Universitetets Apotek',
        desc: 'Universitetets Apotek levererar receptbelagda läkemedel till din dörr. Kundtjänsten är överbelastad och leveranserna tar längre än normalt. Många andra apotek levererar också läkemedel.'
      }
    },
    link: 'https://www.yliopistonapteekki.fi/nain_ostat_reseptilaakkeita_verkosta',
    img_src: 'img/ya.png',
    locations: [
      'National'
    ],
    category: 'Hoiva'
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
        desc: 'You can order help with groceries and other matters related to the elderly. Gubbe\'s phone number is 044 491 0039.'
      },
      se: {
        title: 'Gubbe',
        desc: 'Från Gubbe kan du beställa hjälp med att föra matkassar och andra uppdrag till stöd för de äldre. Gubbes telefonnummer är 044 491 00 39.'
      }
    },
    link: 'https://www.gubbe.io/',
    img_src: 'img/gubbe.png',
    locations: [
      'National'
    ],
    category: 'Hoiva'
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
        desc: 'Bring delivers almost everythiny in the Helsinki mertopolitan area during the same day.'
      },
      se: {
        title: 'Bring',
        desc: 'Bring transporterar nästan allt på samma dag i huvudstadsregionen.'
      }
    },
    link: 'https://www.bring.fi/',
    img_src: 'img/bring.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Palvelut'
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
        desc: 'Laundry service offers home pick up for curtains and other large home textiles.'
      },
      se: {
        title: 'EWS Tvättservice',
        desc: 'Tvätteri som hämtar hemmets gardiner och andra stora textilier inom Helsingfors.'
      }
    },
    link: 'https://www.ewshelsinki.fi/',
    img_src: 'img/ews.png',
    locations: [
      'Helsinki'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Karkkikoulu',
        desc: 'Karkkikoulu lähettää omatekoisia kortteja ilmaiseksi vanhusten iloksi hoivakoteihin. Korttivarasto on Lahdessa ja nähtävänä verkkosivuilla. Sähköpostitse voi sopia korttien hausta tai toimituksesta jonnekin.'
      },
      gb: {
        title: 'Karkkikoulu',
        desc: 'Karkkikoulu sends free home-made cards to nursing homes. Card supply is on show in Lahti and can be seen on their website. You can talk about picking up or shipping the cards trough email.'
      },
      se: {
        title: 'Gratis vykort till släktingar',
        desc: 'Skicka handgjorda vykort till släktingar. Kortlagret finns i Lahtis och kan ses på webbplatsen. Kom överens om hämtning eller leverans av korten via e-post.'
      }
    },
    link: 'https://karkkikoulu.com/',
    img_src: 'img/karkkikoulu.png',
    locations: [
      'National'
    ],
    category: 'Hoiva'
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
        desc: 'Ilostu offers services for the elderly. '
      },
      se: {
        title: 'Ilostu',
        desc: 'Ilostu erbjuder tjänster för de äldre. Enligt sitt meddelande 17.3 betjänar de seniorer normalt.'
      }
    },
    link: 'https://ilostu.fi/',
    img_src: 'img/ilostu.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Hoiva'
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
        desc: 'Fiksit maintains smart devices. They can pick up and bring devices within 24 hours.'
      },
      se: {
        title: 'Fiksit',
        desc: 'Fixar utför service av smarta enheter. Hämtar, reparerar och returnerar vid behov din enhet inom 24 timmar.'
      }
    },
    link: 'https://www.fiksit.fi/',
    img_src: 'img/fiksit.png',
    locations: [
      'Helsinki', 'Espoo'
    ],
    category: 'Palvelut'
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
        desc: 'You can get used phones which are good as new from Swappie shipped to your home.'
      },
      se: {
        title: 'Swappie',
        desc: 'Från Swappie kan köpa begagnade telefoner i nyskick med hemleverans.'
      }
    },
    link: 'https://www.swappie.com/fi/',
    img_src: 'img/swappie.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
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
        desc: 'In Helsinki biobank\'s website you can fill up an biobank consent. Samples and data can be stored in biobank if the donor has given a written consent.'
      },
      se: {
        title: 'Helsingfors Biobank',
        desc: 'På Helsingfors Biobanks webbplats kan du ge ett elektroniskt biobanksamtycke. Biobankprover är viktiga för senare forskning av olika associerade sjukdomar med anknytning till coronainfektion.'
      }
    },
    link: 'https://www.helsinginbiopankki.fi/fi/etusivu',
    img_src: 'img/helsinginbiopankki.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
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
        desc: 'On Omaolo\'s website you can make a test if you suspect corona virus. By taking the test you save the healthcare system\'s resources.'
      },
      se: {
        title: 'Omaolo',
        desc: 'På Omaolos webbplats kan du göra ett virtuellt coronatest om du misstänker att du smittats av coronaviruset. Genom att göra testet sparar du på hälsocentralernas begränsade resurser.'
      }
    },
    link: 'https://www.omaolo.fi/',
    img_src: 'img/omaolo.png',
    locations: [
      'National'
    ],
    category: 'Hoiva'
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
        desc: 'Onerva is a guest book for home care and sheltered accommodation which can be read always and anywhere. With the help of Onerva healthcare personnel can reach you and you them. '
      },
      se: {
        title: 'Onerva omsorgskommunikation',
        desc: 'Onerva är en gästbok för hemtjänsten och serviceboenden som kan läsas när som helst, överallt. Via Onerva kan vårdpersonal kontakta dig och du kontakta dem.'
      }
    },
    link: 'https://onervahoiva.fi/',
    img_src: 'img/onerva.png',
    locations: [
      'National'
    ],
    category: 'Hoiva'
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
        desc: 'Storage easily from online without meeting.'
      },
      se: {
        title: 'Cityvarasto',
        desc: 'Förråd enkelt online utan möten.'
      }
    },
    link: 'https://cityvarasto.fi/',
    img_src: 'img/cityvarasto.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Palvelut'
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
        desc: 'Stress relief, support for mental well-being and professional guidance. Possibility for remote meetings and a free 45 minute tryout. '
      },
      se: {
        title: 'Med kärlek, Riikka',
        desc: 'Stresshantering, stöd för psykiskt välbefinnande och arbetsvägledning med resursorienterat arbetssätt. Möjlighet till fjärråtkomst och gratis 45 minuters introduktion på webben.'
      }
    },
    link: 'https://rakkaudellariikka.fi/',
    img_src: 'img/rakkaudellariikka.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
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
        desc: 'Hellie is a safe, local company which offers shop services, talking company and home services.'
      },
      se: {
        title: 'Hellie Omsorgstjänster',
        desc: 'Hellie är ett tryggt, lokalt företag vars tjänster omfattar bland annat butiksbesök, samtalshjälp och chatt och hemhjälp.'
      }
    },
    link: 'https://www.hellie.fi/',
    img_src: 'img/hellie.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Hoiva'
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
        desc: 'Cleaning services.'
      },
      se: {
        title: 'Cleanmarin',
        desc: 'Städ- och rengöringsservice.'
      }
    },
    link: 'http://cleanmarin.fi/',
    img_src: 'img/cleanmarin.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Palvelut'
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
        desc: 'Hair services to your home.'
      },
      se: {
        title: 'Frisör hem',
        desc: 'Hårsalong hemma.'
      }
    },
    link: 'https://www.kampaajakotiin.com/',
    img_src: 'img/kampaajakotiin.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Palvelut'
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
        desc: 'Fiuge offers transport services for those who have been quarantined for corona. A month\'s transports for 50€.'
      },
      se: {
        title: 'Fiuge',
        desc: 'Fiuge erbjuder transporthjälp till människor i coronaisolering. En månads transporter för 50 euro.'
      }
    },
    link: 'https://fiuge.com/fi/fiuge-kuljetus-avuksi-koronakaranteeniin/',
    img_src: 'img/fiuge.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Palvelut'
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
        desc: 'Cleaning services in the Helsinki metropolitan area, Turku and Tampere.'
      },
      se: {
        title: 'Freska',
        desc: 'Freska tar hand om hygienen hos dig som bor i huvudstads-, Åbo- eller Tammerforsregionen. Vid städningen används myndighetsrekommenderade rengöringsmedel. Rengöringsmedlen i fråga används vid varje städning, även om du inte beställt dem. Garanterat effektiv rengöring enligt myndighetsdirektiv.'
      }
    },
    link: 'https://www.freska.fi/',
    img_src: 'img/freska.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
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
        desc: 'StichMe is Finland\'s first online repair service for clothes. All repairs and alternations remote acces; leave your clotehs to a package automat. Pick them up in a week. '
      },
      se: {
        title: 'StichMe',
        desc: ''
      }
    },
    link: 'https://www.stichme.com/',
    img_src: 'img/stichme.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Palvelut'
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
        desc: 'Lukukaveri brings together schoolkid and a senior togehter. There is a call/video call and the schoolkid reads something under parent\'s watch.'
      },
      se: {
        title: 'Lukukaveri',
        desc: ''
      }
    },
    link: 'https://lukukaveri.com/',
    img_src: 'img/lukukaveri.png',
    locations: [
      'National'
    ],
    category: 'Hoiva'
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
        desc: 'Mehiläinen Digiklinikka brings a doctor to you. The service is open 24/7 and you can get to treatment without reserving time for a reasonable price. '
      },
      se: {
        title: 'Mehiläisen Digiklinikka',
        desc: ''
      }
    },
    link: 'https://www.mehilainen.fi/mobiilisovellus/digiklinikka',
    img_src: 'img/mehilainen.png',
    locations: [
      'National'
    ],
    category: 'Hoiva'
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
        desc: 'Forenom offers apartments and rooms with furniture for a reasonable price for example for during quarantine or remote work place. There is a code lock in the locations so there is no human contact.'
      },
      se: {
        title: 'Forenom',
        desc: 'Forenom erbjuder nu förmånligt möblerade lägenheter och rum till exempel för karantän eller som distansarbetsplats. Objekten har kodlås; utan kontakt med andra människor. Forenom betjänar i hela Finland, även inom långtidsboende.'
      }
    },
    link: 'https://www.forenom.com/fi/uutiset/palvelumme-koronapandemian-aikana/',
    img_src: 'img/forenom.jpg',
    locations: [
      'National'
    ],
    category: 'Kodit'
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
        desc: 'WeHost offers apartments for both short- and long-time rental. Locations are on Helsinki meropolitan area.'
      },
      se: {
        title: 'WeHost',
        desc: 'WeHost erbjuder sina lägenheter både för kort- och långvarig uthyrning. Objekten finns i huvudstadsregionen.'
      }
    },
    link: 'https://www.wehostfinland.com/contact',
    img_src: 'img/wehost.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Kodit'
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
    link: 'https://www.hiisihomes.fi/en/',
    img_src: 'img/hiisi.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Kodit'
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
    link: 'https://www.sokoshotels.fi/',
    img_src: 'img/sokos.png',
    locations: [
      'National'
    ],
    category: 'Kodit'
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
        desc: 'Spot Apartments offers apartments for temporal of more permanent living. You\'ll get a pincode and can start living like you were at home.'
      },
      se: {
        title: 'Spot Apartments',
        desc: ''
      }
    },
    link: 'https://spotapartments.fi/',
    img_src: 'img/spotapartments.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Kodit'
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
        desc: 'Listen to or download fairytales of Pikku Kakkonen.'
      },
      se: {
        title: 'Lilla Tvåans nedladdningsbara sagor',
        desc: 'Lyssna på eller ladda ner Lilla Tvåans sagor.'
      }
    },
    link: 'https://areena.yle.fi/audio/1-1288197',
    img_src: 'img/yle.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
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
    link: 'https://open.spotify.com/playlist/55V6HUzPnISl7ADpE3yfUD?si=Ixx9gRvBSA2wc2DpuWp7qg',
    img_src: 'img/spotify.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
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
        desc: 'Helsingin Teatterikoulu offers children\'s evening storytimes that are open for all.'
      },
      se: {
        title: 'Teatterikoulu',
        desc: 'Helsingin teatterikoulu erbjuder gratis godnattsagostunder till alla.'
      }
    },
    link: 'https://www.helsinginteatterikoulu.fi/lasten-oma-satutuokio/',
    img_src: 'img/helsingin-teatterikoulu.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
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
        desc: 'A big amout of shows, movies etc. to watch.'
      },
      se: {
        title: 'Elisa Viihde',
        desc: 'Elisa Viihde har massor av program att titta på.'
      }
    },
    link: 'https://elisaviihde.fi/',
    img_src: 'img/elisa-viihde.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
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
        desc: 'Lukulumo is digital tool directed to early childhood education which offers a large variety of picture books read out loud.  '
      },
      se: {
        title: 'Lukulumo',
        desc: 'Lukulumo är ett digitalt verktyg för småbarnspedagogiken med ett brett utbud bilderböcker i ljudboksformat på finska. Tjänsten är gratis att använda i 30 dagar. Användarnamn: lukulumokoti. Lösenord: 987654321.'
      }
    },
    link: 'https://www.iltoppiminen.fi/palvelumme/lukulumo/',
    img_src: 'img/lukulumo.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
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
        desc: 'Storytel is a digital book service trough which you can listen to and read thousands of audio- and e-books.'
      },
      se: {
        title: 'Storytel',
        desc: 'Storytel är en digital boktjänst där du kan lyssna på och läsa tusentals ljud- och e-böcker.'
      }
    },
    link: 'https://www.storytel.com/fi/fi/',
    img_src: 'img/storytel.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
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
        desc: 'BookBeat offers acces to a large variety of audio books and e-books with your phone or tablet.'
      },
      se: {
        title: 'Bookbeat',
        desc: 'BookBeat ger dig tillgång till ett brett utbud tal- och e-böcker på din mobiltelefon eller pekplatta.'
      }
    },
    link: 'https://www.bookbeat.fi/',
    img_src: 'img/bookbeat.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
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
        desc: 'Stream or watch movies, series and sports offline.'
      },
      se: {
        title: 'Viaplay',
        desc: 'Streama filmer, serier och idrott, eller titta i offlineläge.'
      }
    },
    link: 'https://viaplay.fi/',
    img_src: 'img/viaplay.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
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
        desc: 'Unlimited amout of movies and series for every taste.'
      },
      se: {
        title: 'Netflix',
        desc: 'Obegränsat med filmer och serier för alla smaker.'
      }
    },
    link: 'https://www.netflix.com/fi/',
    img_src: 'img/netflix.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
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
        desc: 'Elisa\'s audio- and e-books. Over 10 000 books to suit every taste.'
      },
      se: {
        title: 'Elisa Kirja',
        desc: 'Elisas ljudböcker och e-böcker. Över 10 000 böcker för alla smaker.'
      }
    },
    link: 'https://kirja.elisa.fi/',
    img_src: 'img/elisa-kirja.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
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
    link: 'https://neverthink.tv/',
    img_src: 'img/neverthink.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
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
        desc: 'Elixia has a large library of home workouts and online classes which are open to everyone.'
      },
      se: {
        title: 'Elixia',
        desc: 'Elixia har ett omfattande bibliotek av hemmaträningspass och onlinetimmar som är öppna för alla.'
      }
    },
    link: 'https://www.elixia.fi/',
    img_src: 'img/elixia.png',
    locations: [
      'National'
    ],
    category: 'Urheilu'
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
        desc: 'Les Mills opened 100+ workouts form it\'s service for two months.'
      },
      se: {
        title: 'Les Mills',
        desc: 'Les Mills gjorde över 100 träningspass fritt tillgängliga för alla i två månaders tid.'
      }
    },
    link: 'https://watch.lesmillsondemand.com/at-home-workouts',
    img_src: 'img/lesmills.png',
    locations: [
      'National'
    ],
    category: 'Urheilu'
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
        desc: 'Elecric mountain bike rental in Porvoo and Espoo.'
      },
      se: {
        title: 'Edventures',
        desc: 'Uthyrning av eldrivna mountainbikes i Borgå och Esbo.'
      }
    },
    link: 'https://www.edventures.fi/',
    img_src: 'img/edventures.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Urheilu'
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
        desc: 'Fressi offers free live-workout classes.'
      },
      se: {
        title: 'Fressi',
        desc: 'Fressi livesänder gratis gruppgymnastiktimmar som hjälper dig träna med Fressis proffs var som helst.'
      }
    },
    link: 'https://www.fressi.fi/',
    img_src: 'img/fressi.png',
    locations: [
      'National'
    ],
    category: 'Urheilu'
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
        desc: 'Sanoste offers digital exercise and singig courses for the elederly. The services are paid. '
      },
      se: {
        title: 'Sanoste',
        desc: 'Sanostes digitala serviceplattform erbjuder olika tränings- och allsångskurser för de äldre på distans. Tjänsterna är avgiftsbelagda.'
      }
    },
    link: 'https://store.sanoste.fi/fi/',
    img_src: 'img/sanoste.png',
    locations: [
      'National'
    ],
    category: 'Urheilu'
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
        desc: 'Down Dog offers all of their services for free of charge till 1.4.2020; Yoga, Yoga for beginners, HIIT, Barre and 7-minute training. \nIn response to the many school closures taking place, there are also free access until July 1st for all students and teachers (K-12 and college).'
      },
      se: {
        title: 'Down Dog',
        desc: ''
      }
    },
    link: 'https://www.downdogapp.com/',
    img_src: 'img/downdog.png',
    locations: [
      'National'
    ],
    category: 'Urheilu'
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
        desc: 'Food cooking and delivery to local homes in the Kotka area. Also groceries to go or delivered from the shop.'
      },
      se: {
        title: 'Juurikorven kauppa',
        desc: ''
      }
    },
    link: 'https://www.facebook.com/Juurikorven-kauppa-kokous-ja-cat%C3%A9ring-724147044697069/',
    img_src: 'img/juurikorvenkauppa.png',
    locations: [
      'Kotka'
    ],
    category: 'Ruoka'
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
        desc: 'Cafe Donner offers home cooked meals during lunch time either picked up or delivered in the Hyvinkää area. You can pay with card, Edenred, Eazybreak or cash.'
      },
      se: {
        title: 'Kahvila Donner',
        desc: ''
      }
    },
    link: 'https://www.kahviladonner.com',
    img_src: 'img/kahviladonner.png',
    locations: [
      'Hyvinkää'
    ],
    category: 'Ruoka'
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
        desc: 'LÄHIAPU is a store- and errand service which is run by Lähitaksi. The customer makes a list of things needed and calls 0100 7300.'
      },
      se: {
        title: 'Lähitaksi',
        desc: ''
      }
    },
    link: 'https://www.lahitaksi.fi/fi/ajankohtaista/lahitaksilta-uusi-kauppa-ja-asiointipalvelu',
    img_src: 'img/lahitaksi.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Turvataan tulevaisuus',
        desc: 'Turvataan tulevaisuus on viiden aktiivisen kansalaisen perustama sivusto, jonka tarkoituksena on yhdistää pulassa olevat pien- ja mikroyrittäjien tarjoamat palvelut, tuotteet ja työkalut.'
      },
      gb: {
        title: 'Turvataan tulevaisuus',
        desc: 'Website that combines small business and their services.'
      },
      se: {
        title: 'Turvataan tulevaisuus',
        desc: ''
      }
    },
    link: 'https://www.turvataantulevaisuus.fi/',
    img_src: 'img/turvataantulevaisuus.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Koirahoitola Vohveli ',
        desc: 'Koirahoitola Vohveli tarjoaa kodinomaista hoitoa koirallesi Tuusulassa.'
      },
      gb: {
        title: 'Koirahoitola Vohveli ',
        desc: 'Home-like care for your dog in Tuusula.'
      },
      se: {
        title: 'Koirahoitola Vohveli ',
        desc: ''
      }
    },
    link: 'https://www.vohveli.net/',
    img_src: 'img/--.png..img/koirahoitolavohveli.png',
    locations: [
      'Tuusula '
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Venner',
        desc: 'Venner tarjoaa täysin uudenlaisen ja yksinkertaisen tavan tukea suomalaisia vähävaraisia lapsiperheitä ravitsevan ruan avulla, suoraan kotiovelle toimitettuna.'
      },
      gb: {
        title: 'Venner',
        desc: 'Venner offers a complitely and easy way to support small-income families with healthy food.'
      },
      se: {
        title: 'Venner',
        desc: ''
      }
    },
    link: 'https://venner.fi/',
    img_src: 'img/venner.png',
    locations: [
      'Helsinki','Turku'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'E-kukka',
        desc: 'E-kukka -palvelusta voi tilata kukkia kotiisi ilman ihmiskontaktia.'
      },
      gb: {
        title: 'E-kukka',
        desc: 'From E-kukka service you can order flowers straight to your home.'
      },
      se: {
        title: 'E-kukka',
        desc: ''
      }
    },
    link: 'https://ekukka.fi/',
    img_src: 'img/ekukka.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'LahjaShop',
        desc: 'Lahjat netistä - iloa tuovia tuotteita kaikkina aikoina. Kotimainen verkkokauppa ja lahjakauppa netissä monipuolisilla maksutavoilla. Löydät valikoimasta lahjaideoita, lifestyle-tuotteita, sisustustavaraa, koruja ja paljon muuta. Ostaminen on turvallista ja samalla tuet kotimaista pienyritystä. Myös kotiinkuljetus!'
      },
      gb: {
        title: 'LahjaShop',
        desc: 'Gifts online - products that bring joy at all times. Gift ideas, lifestyle products, decorations and much more. By buying you also support small and local businesses. Home delivery available.'
      },
      se: {
        title: 'LahjaShop',
        desc: ''
      }
    },
    link: 'https://www.lahjashop.com/',
    img_src: 'img/lahjashop.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Karanteeniteatteri',
        desc: 'Ammattiteatteriesityksiä striimattuna kotiisi erittäin matalankynnyksen hinnoilla.'
      },
      gb: {
        title: 'Karanteeniteatteri',
        desc: 'Professional thearter performances live-streamed to your home with low prices.'
      },
      se: {
        title: 'Karanteeniteatteri',
        desc: ''
      }
    },
    link: 'http://www.karanteeniteatteri.fi/',
    img_src: 'img/karanteeniteatteri.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kuntokauppa.fi',
        desc: 'Kuntokaupan valikoimasta löytyy 1500 tuotetta urheiluun ja kuntoiluun. Valikoimasta löytyvät mm. juoksumatot, kuntopyörät, crosstrainerit, levytangot, painonnostopenkit & telineet, hulavanteet ja jumppavälineet. Nopea toimitus Tampereen varastolta suoraan kotiovelle.'
      },
      gb: {
        title: 'Kuntokauppa.fi',
        desc: 'Over 1500 products for sports. Fast delovery from Tampere.'
      },
      se: {
        title: 'Kuntokauppa.fi',
        desc: ''
      }
    },
    link: 'https://www.kuntokauppa.fi/',
    img_src: 'img/kuntokauppa.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Tampereen paahtimo',
        desc: 'Tampereen paahtimo on yhden naisen pienyritys. Kahveissa kohtaavat hyvä laatu, mainio maku ja huolellisesti tehty käsityö. Koko Pirkanmaan alueella jokaiseen tilaukseen ilmainen kuljetus. Koko Suomeen postitus mahdollinen.'
      },
      gb: {
        title: 'Tampereen paahtimo',
        desc: 'A small business ran by a single woman. Great quality, delicious taste and delicate work combine in the coffees. Free home delivery in Pirkanmaa, post delivery possible to all around Finland.'
      },
      se: {
        title: 'Tampereen paahtimo',
        desc: ''
      }
    },
    link: 'https://tampereenpaahtimo.com/',
    img_src: 'img/tampereenpaahtimo.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kukkakauppa Puntti',
        desc: 'Kukkia, mullanvaihtotarvikkeita ym. kotiovelle kannettuna, nopea toimitus.'
      },
      gb: {
        title: 'Kukkakauppa Puntti',
        desc: 'Flowers etc. to your home. Fast delivery.'
      },
      se: {
        title: 'Kukkakauppa Puntti',
        desc: ''
      }
    },
    link: 'https://www.kukkakauppapuntti.fi/',
    img_src: 'img/kukkakauppapuntti.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Suomen Seniorihoiva',
        desc: 'Kotipalvelut, hoivapalvelut, kauppa- ja asiointiapu, koronasiivoukset alvittomasti ikäihmisille ja riskiryhmille.'
      },
      gb: {
        title: 'Suomen Seniorihoiva',
        desc: 'Home services, healthcare, grocery help and cleaning services to seniors and risk groups.'
      },
      se: {
        title: 'Suomen Seniorihoiva',
        desc: ''
      }
    },
    link: 'https://suomenseniorihoiva.fi/',
    img_src: 'img/suomenseniorihoiva.png',
    locations: [
      'National'
    ],
    category: 'Hoiva'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Livetaajuus',
        desc: 'Palvelusta löytyy kaikki kotimaiset radiokanavat, sekä paikalliset että valtakunnalliset. Radiosta kuuluu myös viranomaisten tiedotukset koronatilanteeseen liittyen. Valmiuslain mukaan radiot ovat velvollisia julkaisemaan viranomaisen tiedotukset.'
      },
      gb: {
        title: 'Livetaajuus',
        desc: 'All Finnish radio channels - both local and national.'
      },
      se: {
        title: 'Livetaajuus',
        desc: ''
      }
    },
    link: 'https://livetaajuus.fi/',
    img_src: 'img/livetaajuus.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Tutor Trio',
        desc: 'Kun opiskelu tapahtuu kotona ilman opettajan apua, niin meiltä saa apua mihin tahansa oppiaineeseen etänäkin. Samalla palkkaamme myös ansioituneita opiskelijoita etätyöhön.'
      },
      gb: {
        title: 'Tutor Trio',
        desc: 'When you must study remotely without a teacher\'s help then Tutor Trio is there to help. At the same time, Tutor Trio employs commendable students remotely.'
      },
      se: {
        title: 'Tutor Trio',
        desc: ''
      }
    },
    link: 'http://www.tutortrio.fi/',
    img_src: 'img/tutortrio.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Mili\'s',
        desc: 'Toimittaa Espoossa kotiin lounasannoksia.'
      },
      gb: {
        title: 'Mili\'s',
        desc: 'Lunch deliverys in Espoo.'
      },
      se: {
        title: 'Mili\'s',
        desc: ''
      }
    },
    link: 'https://www.milisfood.fi/',
    img_src: 'img/milis.png',
    locations: [
      'Espoo'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Business Meeting Park',
        desc: 'Etätapaamiset, -kokoukset, webinaarit ja muut tapahtumat "avaimet käteen" periaattella, tarvittaessa jopa täysin etänä.'
      },
      gb: {
        title: 'Business Meeting Park',
        desc: 'Remote meetings, webinars and other events.'
      },
      se: {
        title: 'Business Meeting Park',
        desc: ''
      }
    },
    link: 'https://www.meetingpark.fi/fi/',
    img_src: 'img/meetingpark.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'ShipIt',
        desc: 'Suomen kattavin kuljetusvalikoima, todella helppo käyttöliittymä ja edulliset hinnat. Kotiinkuljetukset yksityisille ja yrityksille.'
      },
      gb: {
        title: 'ShipIt',
        desc: 'Comprehensive selection of transport possibilities - for private persons as well as companies.'
      },
      se: {
        title: 'ShipIt',
        desc: ''
      }
    },
    link: 'https://www.shipit.fi/',
    img_src: 'img/shipit.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'LVI-tarvikkeet',
        desc: 'Kodin remontointitarvikkeet edullisesti kotiinkuljetettuna.'
      },
      gb: {
        title: 'LVI-tarvikkeet',
        desc: 'Renoval supplies delivered to your home.'
      },
      se: {
        title: 'LVI-tarvikkeet',
        desc: ''
      }
    },
    link: 'https://www.lvitarvikkeet.fi/',
    img_src: 'img/lvitarvikkeet.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Centrum services',
        desc: 'Pääkaupunkiseudulla toimiva IT yritys, joka palvelee ensisijaisesti kuluttaja asiakkaita. Palveluun on aina kuulunut ilmainen noutopalvelu suoraan kotiovelta noudettuna pääkaupunkiseudulta. Huollon jälkeen laite toimitetaan takaisin kotiovelle veloituksetta.'
      },
      gb: {
        title: 'Centrum services',
        desc: 'IT-company that works in the Helsinki metropolitan area. Free pick up and return for maitance.'
      },
      se: {
        title: 'Centrum services',
        desc: ''
      }
    },
    link: 'https://www.centrumservices.fi/',
    img_src: 'img/centrumservices.png',
    locations: [
      'Helsinki'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Pinnijalkapojat',
        desc: 'Etätyöläisten arkea helpottamaan. Pinnijaloilla saa edullisesti rakennettua itselleen tyylikkään etätyöpisteen.'
      },
      gb: {
        title: 'Pinnijalkapojat',
        desc: 'To make remote workes life easier. You can build customised work station.'
      },
      se: {
        title: 'Pinnijalkapojat',
        desc: ''
      }
    },
    link: 'https://www.pinnijalkapojat.fi/',
    img_src: 'img/pinnijalkapojat.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Onlineope',
        desc: 'Etäopetuspalvelut videoyhteydellä: Vaivaton ja joustava opiskelu missä tahansa'
      },
      gb: {
        title: 'Onlineope',
        desc: 'Remote teaching with video. Effortless and flexible service for individual students.'
      },
      se: {
        title: 'Onlineope',
        desc: ''
      }
    },
    link: 'https://www.onlineope.fi/',
    img_src: 'img/onlineope.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Nokturno',
        desc: 'Ilmaiseksi saatavilla olevaa nykyrunoutta'
      },
      gb: {
        title: 'Nokturno',
        desc: 'Modern poetry for free.'
      },
      se: {
        title: 'Nokturno',
        desc: ''
      }
    },
    link: 'https://nokturno.fi/',
    img_src: 'img/nokturno.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Osuma Streetwear',
        desc: 'Osuma Streetwear on vuonna 2005 perustettu suomalainen katuvaatemerkki, joka inspiroituu katutaiteesta ja eri alakulttuureista. Osuma tuo Helsingin ja muun Suomen katukuvaan kestävää, laadukasta ja ehdottoman katu-uskottavaa muotia.'
      },
      gb: {
        title: 'Osuma Streetwear',
        desc: 'Finnish streetwear brand which is inspired of streetart and subcultures. Sustainable and quality streetwear.'
      },
      se: {
        title: 'Osuma Streetwear',
        desc: ''
      }
    },
    link: 'https://osw.fi/',
    img_src: 'img/osuma.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kotitila',
        desc: 'Lähiruokaa kotiintoimitettuna pääkaupunkiseudulla.'
      },
      gb: {
        title: 'Kotitila',
        desc: 'Local food delivered in the Helsinki metropolitan area.'
      },
      se: {
        title: 'Kotitila',
        desc: ''
      }
    },
    link: 'https://www.kotitila.fi/',
    img_src: 'img/suomenkotitila.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kauneusmaailma',
        desc: 'Kauneuden- ja terveydenhuoltotarvikkeet koko Suomeen toimitettuna. Laaja valikoima ihonhoitotuotteita.'
      },
      gb: {
        title: 'Kauneusmaailma',
        desc: 'Beuty and healthcare supplies delivered to all around Finland. A large variety of skin care products.'
      },
      se: {
        title: 'Kauneusmaailma',
        desc: ''
      }
    },
    link: 'https://www.kauneusmaailma.fi/',
    img_src: 'img/kauneusmaailma.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'ReettaBrows',
        desc: 'Kattava valikoima erilaisia kauneudenhoidonpalveluita, joista jokainen voi valita itselleen sopivan.  Voit ostaa esimerkiksi lahjakortin tulevia hoitoja varten tukeaksi pienyrittäjää. "Rentoutumista ja omaa aikaa stressin keskellä."'
      },
      gb: {
        title: 'ReettaBrows',
        desc: 'A large variety of beauty treatments. You can buy a giftcard for future use and support the business.'
      },
      se: {
        title: 'ReettaBrows',
        desc: ''
      }
    },
    link: 'https://www.reettabrows.fi/',
    img_src: 'img/reettabrows.png',
    locations: [
      'Kuusamo'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Naturpolis',
        desc: 'Koillis-Suomen kehittämisyhtiö Naturpolis Oy tukee yrityksiä monipuolisesti myös kriisitilanteissa.'
      },
      gb: {
        title: 'Naturpolis',
        desc: 'Northeast Finland development company supports businesses in crisis.'
      },
      se: {
        title: 'Naturpolis',
        desc: ''
      }
    },
    link: 'https://www.naturpolis.fi/fi/',
    img_src: 'img/naturpolis.png',
    locations: [
      'Kuusamo'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Pikkusen pitopalvelu ja leipomo',
        desc: 'Pikkusen pitopalvelun ja leipomon kaikki palvelut ovat käytössä kotiintoimituksella ilman lisäkuluja Rukan alueella. Mahdollisuus toimittaa kotiovelle ruoka-annoksia ja tarvittaessa kauppaostoksia.'
      },
      gb: {
        title: 'Pikkusen pitopalvelu ja leipomo',
        desc: 'Catering and restaurant services have a free home delivery in the Ruka region. Possibility to deliver groceries and food portions to home.'
      },
      se: {
        title: 'Pikkusen pitopalvelu ja leipomo',
        desc: ''
      }
    },
    link: 'https://www.pikkusen.fi/en/',
    img_src: 'img/pikkusen.png',
    locations: [
      'Kuusamo'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Ravintola Talonpöytä',
        desc: 'Kotiinkuljetuksella tai noudolla kotiruokaa. Kysy lisää 0503048239 tai mika@talonpoyta.fi.'
      },
      gb: {
        title: 'Ravintola Talonpöytä',
        desc: 'Home cooked meals with home delivery or takeaway.'
      },
      se: {
        title: 'Ravintola Talonpöytä',
        desc: ''
      }
    },
    link: 'https://www.talonpoyta.fi/',
    img_src: 'img/talonpoyta.png',
    locations: [
      'Kuusamo'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Sanitar Kuusamo',
        desc: 'Kauppa-ja apteekkiasiointi ym. välttämätön asiointi, siivouspalvelu.'
      },
      gb: {
        title: 'Sanitar Kuusamo',
        desc: 'Groceries and pharmacy etc. necessary errands. Cleaning services also available.'
      },
      se: {
        title: 'Sanitar Kuusamo',
        desc: ''
      }
    },
    link: 'https://www.sanitar.fi/',
    img_src: 'img/sanitar.png',
    locations: [
      'Kuusamo'
    ],
    category: 'Hoiva'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Pave Helsinki fillarilähetit',
        desc: 'Kuriiripalvelut Helsingin alueella - tavaroiden kuljetus ja asiointipalvelut.'
      },
      gb: {
        title: 'Pave Helsinki fillarilähetit',
        desc: 'Courier services in Helsinki.'
      },
      se: {
        title: 'Pave Helsinki ',
        desc: ''
      }
    },
    link: 'https://www.pavehelsinki.com/',
    img_src: 'img/pave.png',
    locations: [
      'Helsinki'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Audible',
        desc: 'Audible tarjoaa valikoiman englanninkielisiä äänikirjoja kuunneltavaksi ilman kirjautumista. Kirjat painottuvat lasten ja nuorten kirjallisuuteen, mutta saatavilla on myös kirjallisuusklassikoita.'
      },
      gb: {
        title: 'Audible',
        desc: 'A variety of audio books in English.'
      },
      se: {
        title: 'Audible',
        desc: ''
      }
    },
    link: 'https://stories.audible.com/start-listen?ref=adbl_ent_anon_ds_hm_hb',
    img_src: 'img/audible.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'NBA League Pass',
        desc: 'NBA kauden ollessa keskeytettynä, NBA tarjoaa ilmaisen 30 päivän kokeilujakson NBA League Pass -suoratoistopalveluun. Palvelussa on nähtävissä kaikki NBA-pelit kausilta 18-19 ja 19-20.'
      },
      gb: {
        title: 'NBA League Pass',
        desc: 'While the NBA season is suspended, the NBA is offering a free 30-day trial period to its NBA League Pass streaming service. The service let\'s users watch all games from the 2018-2019 and 2019-2020 seasons.'
      },
      se: {
        title: 'NBA League Pass',
        desc: ''
      }
    },
    link: 'https://watch.nba.com/packages?ls=leaguepass:nbacom:packages:rd',
    img_src: 'img/nba.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Paulo Coelho',
        desc: 'Paulo Coelho on julkaissut joitakin kirjoistaan luettavaksi ilmaiseksi.'
      },
      gb: {
        title: 'Paulo Coelho',
        desc: 'Paulo Coelho has published some of his works to be read online for free.'
      },
      se: {
        title: 'Paulo Coelho',
        desc: ''
      }
    },
    link: 'https://paulocoelhoblog.com/books-online/',
    img_src: 'img/paulacoelho.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'E-kirjastot',
        desc: 'eKirjasto on sivusto yleisten kirjastojen e-aineistoihin. Aineistoa voit etsiä aihepiireittäin, asiasanoilla tai vapaasanahaulla. Osa eKirjaston aineistosta on vapaata verkkoaineistoa ja osa sellaista, että lukemiseen tarvitset kirjastokortin ja siihen liittyvän PIN-koodin'
      },
      gb: {
        title: 'E-kirjastot',
        desc: 'The eLibrary is a website of electronic resources in public libraries. You can search for material by theme, subject heading or by using free-text search. Some of the material in eLibrary are freely available online contents while others require a library card and a PIN number.'
      },
      se: {
        title: 'E-kirjastot',
        desc: ''
      }
    },
    link: 'http://ekirjasto.kirjastot.fi/',
    img_src: 'img/ekirjasto.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Koira- ja kissakoulu Heiluva Häntä',
        desc: 'Webinaareja koiran ja kissan hoidosta ja harrastuksista, verkko-opintomateriaalia'
      },
      gb: {
        title: 'Koira- ja kissakoulu Heiluva Häntä',
        desc: 'Webinars of care of dogs and cats and also about hobby possibilities. Materials for online studying.'
      },
      se: {
        title: 'Koira- ja kissakoulu Heiluva Häntä',
        desc: ''
      }
    },
    link: 'http://www.heiluvahanta.fi/',
    img_src: 'img/heiluvahanta.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Tassumafia Oy',
        desc: 'Tassumafiassa ulkoilutetaan koirasi ja / tai tarvittaessa noudetaan leikkimään koirien päiväkotiin, missä touhutaan ja ulkoillaan laumassa kavereiden kanssa, sekä päivän päätteeksi palautetaan takaisin kotiin. Myös verkkokauppa tavikkeille ja ruuille.'
      },
      gb: {
        title: 'Tassumafia Oy',
        desc: 'At Tassumafia, your dog will be outwitted and / or taken, if necessary, to play in a dog daycare center where he or she will be out in the herd with friends, and will be returned home at the end of the day. There is also an online shop.'
      },
      se: {
        title: 'Tassumafia Oy',
        desc: ''
      }
    },
    link: 'https://www.tassumafia.fi/',
    img_src: 'img/sanitar.png',
    locations: [
      'Helsinki'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Linja',
        desc: 'Täältä yrittäjät saavat apua muilta eri alojen yrittäjiltä ja osaajilta ilmaiseksi.'
      },
      gb: {
        title: 'Linja',
        desc: 'Here, entrepreneurs can get help from other entrepreneurs and experts in different fields for free.'
      },
      se: {
        title: 'Linja',
        desc: ''
      }
    },
    link: 'https://linja.sharetribe.com/',
    img_src: 'img/tassumafia.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Handmade by Kraftory',
        desc: 'Pieni kampaamoyritys Tampereella, jossa yli 10 henkilön rajoitus ei ylity.'
      },
      gb: {
        title: 'Handmade by Kraftory',
        desc: 'A small hairdressing company in Tampere, where the limit of more than 10 people is not exceeded.'
      },
      se: {
        title: 'Handmade by Kraftory',
        desc: ''
      }
    },
    link: 'http://www.kraftory.fi/',
    img_src: 'img/kraftory.png',
    locations: [
      'Tampere'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kaihdintori',
        desc: 'Liikkuva kaihdinliike Helsingissä, Espoossa ja Vantaalla. Kaihtimien asennus kotonasi.'
      },
      gb: {
        title: 'Kaihdintori',
        desc: 'Delivering blinds in Helsinki, Espoo and Vantaa. Installation is also available.'
      },
      se: {
        title: 'Kaihdintori',
        desc: ''
      }
    },
    link: 'https://kaihdintohtori.com/',
    img_src: 'img/kaihdintohtori.png',
    locations: [
      'Helsinki','Espoo','Vantaa'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Funraise',
        desc: 'Laaja valikoima tuotteita turvalliseen kuntoiluun sisätiloissa ja yksin ulkoiluun ja liikuntaan ulkona, kaiken ikäisille.'
      },
      gb: {
        title: 'Funraise',
        desc: 'A wide range of products for indoor and outdoor fitness and outdoor activities for all ages.'
      },
      se: {
        title: 'Funraise',
        desc: ''
      }
    },
    link: 'https://funraise.fi/fi',
    img_src: 'img/funraise.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Taksi Helsinki',
        desc: 'Lähikauppapalvelun avulla kuljettaja käy puolestasi kaupassa. Palvelun hinta 20€ ja tilaaminen tapahtuu joko puhelimitse tai verkkosivujen lomakkeella.'
      },
      gb: {
        title: 'Taksi Helsinki',
        desc: 'The convenience store service allows the driver to shop for you. The price of the service is 20 € and the order is made either by phone or on the website form.'
      },
      se: {
        title: 'Taksi Helsinki',
        desc: ''
      }
    },
    link: 'https://www.taksihelsinki.fi/palvelumme/lahikauppapalvelu/',
    img_src: 'img/taksihelsinki.png',
    locations: [
      'Helsinki'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Terveyskylän koronabotti',
        desc: 'Koronabotti on kysely, joka ohjaa ja antaa neuvoa COVID-19 koronavirusaltistukseen ja -oireisiin liittyvissä kysymyksissä. Lisäksi HUS Psykiatrian asiantuntijat ovat valmistaneet henkisen tuen ohjelman koronavirustilanteen aiheuttamien huolien ja ahdistuksen käsittelemiseksi.'
      },
      gb: {
        title: 'Terveyskylän koronabotti',
        desc: 'Coronabot is a survey that guides and advises on COVID-19 coronavirus exposure and symptoms. In addition, HUS Psychiatry experts have developed a mental support program to address the concerns and anxiety caused by the coronavirus.'
      },
      se: {
        title: 'Terveyskylän koronabotti',
        desc: ''
      }
    },
    link: 'https://www.terveyskyla.fi/koronabotti/',
    img_src: 'img/terveyskyla.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Hailer - Covid19-apurinki',
        desc: 'Yhdistää auttajat ja apua tarvitsevat.'
      },
      gb: {
        title: 'Hailer - Covid19-apurinki',
        desc: 'Connects helpers and those in need.'
      },
      se: {
        title: 'Hailer - Covid19-apurinki',
        desc: ''
      }
    },
    link: 'https://www.hailer.com/fi/apurinki',
    img_src: 'img/apurinki.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Fora Security Services Oy',
        desc: 'Arvotavaroiden/tonttien vartiointia nopealla aikataululla.'
      },
      gb: {
        title: 'Fora Security Services Oy',
        desc: 'Security of valuables / plots with fast schedule.'
      },
      se: {
        title: 'Fora Security Services Oy',
        desc: ''
      }
    },
    link: 'https://forasec.fi/',
    img_src: 'img/fora.png',
    locations: [
      'Helsinki','Espoo','Vantaa'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Nordic Swan Cruises',
        desc: 'Turvallista siirtymistä meriteitse pienille 1-9 henkilön ryhmille Suomenlahden alueella.'
      },
      gb: {
        title: 'Nordic Swan Cruises',
        desc: 'Safe passage by sea for small groups of 1-9 people in the Gulf of Finland.'
      },
      se: {
        title: 'Nordic Swan Cruises',
        desc: ''
      }
    },
    link: 'https://www.nordicswancruises.fi/',
    img_src: 'img/nordicswancruises.png',
    locations: [
      'Helsinki'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Adagio',
        desc: 'Asiointipalvelu, hoivapalvelu, kotipalvelu, siivous sekä henkilökohtainen apu Pirkanmaan alueella.'
      },
      gb: {
        title: 'Adagio',
        desc: 'Care service, home service, cleaning and personal assistance in the Pirkanmaa area.\n'
      },
      se: {
        title: 'Adagio',
        desc: ''
      }
    },
    link: 'http://www.adagio.fi/',
    img_src: 'img/adagio.png',
    locations: [
      'Pirkanmaa'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kauppa-apu',
        desc: 'Kauppa-apu on alusta, jonka avulla suomalaiset voivat tarjota ja vastaanottaa kaupassakäyntiapua toisiltaan. Sivulla näet kartalta lähialueesi kauppa-avun pyynnöt ja ihmiset, jotka ovat valmiita tarjoamaan apua. Voit vastata jo olemassaolevaan ilmoitukseen tai jättää oman ilmoituksesi. Tarkoitus on suojella riskiryhmässä olevia ja helpottaa heidän arkeaa, jotka eivät nyt kauppaan pääse.'
      },
      gb: {
        title: 'Kauppa-apu',
        desc: 'Aid for Trade is a platform for Finns to offer and receive help from one another in trade. On the map, you can see on the map a list of trade assistance requests in your area and people ready to help. You can reply to an existing alert or submit your own. The aim is to protect those at risk and to make it easier for those who are now unable to trade.\n'
      },
      se: {
        title: 'Kauppa-apu',
        desc: ''
      }
    },
    link: 'https://kauppa-apu.sharetribe.com/',
    img_src: 'img/kauppaapu.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'FamilyBoost',
        desc: 'Kun kaipaat psykologista tukea vanhemmuuteen ja perhe-elämään, esimerkiksi lapsen kasvatukseen, tunnetaitoihin tai omaan jaksamiseen.'
      },
      gb: {
        title: 'FamilyBoost',
        desc: 'When you need psychological support for parenting and family life, such as parenting, emotional skills, or your own coping.'
      },
      se: {
        title: 'FamilyBoost',
        desc: ''
      }
    },
    link: 'https://www.familyboost.fi/',
    img_src: 'img/familyboost.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'King\'s Crown',
        desc: 'Koko perheen laatikkoruokia kolmeen K-markettiin korona-pandemian aikana.'
      },
      gb: {
        title: 'King\'s Crown',
        desc: 'Family-friendly box meals at three K-markets during the Korona pandemic.\n'
      },
      se: {
        title: 'King\'s Crown',
        desc: ''
      }
    },
    link: 'https://www.kingscrown.fi/',
    img_src: 'img/kingscrown.png',
    locations: [
      'Kuopio'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Nordic Swan Living',
        desc: 'Tee olosi mukavaksi kotona Syli-lounge kalusteilla. Upeaan sarjaan kuuluu säkkituoli, rahi ja lattiatyyny. Saatavilla sisä ja ulkokankaalla. Tutustu myös kodin tekstiilituotteisiin.'
      },
      gb: {
        title: 'Nordic Swan Living',
        desc: 'Make yourself comfortable at home with Syli lounge furniture. The stunning series includes a sack chair, footstool and floor cushion. Available in indoor and outdoor fabric. Also check out the home textiles.'
      },
      se: {
        title: 'Nordic Swan Living',
        desc: ''
      }
    },
    link: 'https://www.nordicswanliving.com/',
    img_src: 'img/nordicswanliving.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Fit4you',
        desc: 'Suomalainen urheiluvaatteiden nettikauppa.'
      },
      gb: {
        title: 'Fit4you',
        desc: 'Finnish online store for sports clothes.'
      },
      se: {
        title: 'Fit4you',
        desc: ''
      }
    },
    link: 'https://fit4you.fi/',
    img_src: 'img/fit4you.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Koulutus ja työnohjaus Rantonen',
        desc: 'Työvoimavarojen ylläpitoa ja jaksamisen tukea työntekijälle, esimiehelle, työyhteisölle ja yrittäjälle. Keskustelua ja konsultointia etäyhteyksin koulutetun ammattilaisen kanssa.'
      },
      gb: {
        title: 'Koulutus ja työnohjaus Rantonen',
        desc: 'Workforce maintenance and well-being support for the employee, supervisor, work community and entrepreneur. Remote discussion and consultation with a trained professional.'
      },
      se: {
        title: 'Koulutus ja työnohjaus Rantonen',
        desc: ''
      }
    },
    link: 'https://pirjorantonen.fi/',
    img_src: 'img/rantonen.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Tampereen aluetaksi',
        desc: 'Taksi Tampere auttaa erilaisissa kuljetustehttävissä. Lisäksi Taksi Tampere voi hoitaa kaupassa ja apteekissa asioinnin ilman asiakkaan mukana oloa tai noutaa ruoka-annoksesi ravintolasta kotiin, silloin kun asiakkaan on tärkeintä pysyä kotona.'
      },
      gb: {
        title: 'Tampereen aluetaksi',
        desc: 'A taxi in Tampere helps you with different transport tasks. In addition, Taxi Tampere can handle shopping and pharmacy service without the customer being present or picking up your meal from the restaurant to your home when it is most important for the customer to stay home.'
      },
      se: {
        title: 'Tampereen aluetaksi',
        desc: ''
      }
    },
    link: 'https://www.taksitampere.fi/asiointipalvelu/',
    img_src: 'img/tampereenaluetaksi.png',
    locations: [
      'Tampere'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Specsavers ',
        desc: 'Tilaa piilolinssit kätevästi verkkokaupasta.'
      },
      gb: {
        title: 'Specsavers ',
        desc: 'Easily order contact lenses online.'
      },
      se: {
        title: 'Specsavers ',
        desc: ''
      }
    },
    link: 'https://www.specsavers.fi/piilolinssit',
    img_src: 'img/specsavers.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Lasten Taidelaboratorio®',
        desc: 'Taidepajoissa on tärkeintä on lapsen kokemus, elämyksellisyys ja kokeilemalla oppiminen. Osta taidepaja-lahjakortti ja mahdollistat korkealaatuisen taide- ja kulttuuritoiminnan jatkumisen!'
      },
      gb: {
        title: 'Lasten Taidelaboratorio®',
        desc: 'The most important thing in art workshops is the experience of the child, the experience and learning by experimenting. Purchase an Art Workshop Gift Card and Enable High Quality Art & Culture!'
      },
      se: {
        title: 'Lasten Taidelaboratorio®',
        desc: ''
      }
    },
    link: 'https://www.lastentaidelaboratorio.fi/',
    img_src: 'img/lastentaidelaboratorio.png',
    locations: [
      'Espoo'
    ],
    category: 'Palvelut'
  }
]  


const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
var i;
for (i = 0; i < services.length; i++) {
    services[i].id = i
    services[i].locations = services[i].locations.filter(Boolean)
    services[i].category = capitalize(services[i].category)
    services[i].current = services[i].langs.fi
}

module.exports = services
