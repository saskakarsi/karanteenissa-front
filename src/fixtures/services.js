const services = [
  {
    id: '',
    langs: {
      fi: {
        title: 'Alepa',
        desc: 'Alepan ruokakassit kotiovelle. Toimitus alkaen 4,90 euroa. Toimitus- ja noutoaikoja on tällä hetkellä saatavilla rajallisesti. Myös nouto onnistuu. Prismalla on myös omat verkkokaupat.'
      },
      en: {
        title: 'Alepa',
        desc: 'Alepa\'s food delivery service allows you to order products straight to your front door. Delivery fees start from 4,9€, pick up is also possible. Delivery- and pick up -times are currently limited. Prisma also has a similar service. '
      },
      sv: {
        title: 'Alepa',
        desc: 'Alepas matkassar till din dörr. Leverans från 4,90 euro. För tillfället begränsad tillgång till leverans- och hämtningstider. Hämtning är också möjlig. Prisma har också egna webbutiker.'
      }
    },
    link: 'https://www.foodie.fi/',
    img_src: '/img/alepa.png',
    locations: [
      'National'
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
      en: {
        title: 'Feelia',
        desc: 'Large amounts of homecooked meals straight to your front door. Delivery fee is 8,9€, orders over 150€ have free delivery.'
      },
      sv: {
        title: 'Feelia',
        desc: 'Stora mängder hemlagad mat till din dörr. Leverans 8,90 euro. Fri leverans av beställningar på över 150 euro. Leveranserna kan försenas något.'
      }
    },
    link: 'https://www.feeliaruokakauppa.fi/',
    img_src: '/img/feelia.png',
    locations: [
      'National'
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
      en: {
        title: 'Kesko',
        desc: 'Kesko\'s home delivery. Shipping starts from 9,9€. Some products might have sold out and some stores might have difficulties with delivery. Pick up is also possible.'
      },
      sv: {
        title: 'Kesko',
        desc: 'Keskos hemleverans. Transport från 9,90 euro. Produkter kan ha tagit slut och vissa butiker har leveranssvårigheter. Hämtning är också möjlig. Större beställningar från adressen k-ruokapro.fi, med fri leverans av beställningar på över 50 euro.'
      }
    },
    link: 'https://www.k-ruoka.fi/kauppa',
    img_src: '/img/kesko.png',
    locations: [
      'National'
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
      en: {
        title: 'Wolt',
        desc: 'Wolt\'s food delivery platform allows you to order food from restaurants nearby. Now you can also choose the no-contact delivery.'
      },
      sv: {
        title: 'Wolt',
        desc: 'Restauranger och snabbmatsrestauranger. I samband med beställningen kan du välja att budet lämnar leveransen utanför dörren. Här kan du även beställa Clas Ohlsons viktigaste elektronikprodukter.'
      }
    },
    link: 'https://wolt.com/fi/discovery',
    img_src: '/img/wolt.png',
    locations: [
      'National'
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
      en: {
        title: 'Pieni Ruokakauppa',
        desc: 'Online store for food and home delivery service. Pieni Ruokakauppa operates in Helsinki metropolitan area, Tampere and Turku. '
      },
      sv: {
        title: 'Pieni Ruokakauppa',
        desc: 'Shoppa livsmedel online med hemleverans till huvudstadsregionen, Åbo och Tammerfors.'
      }
    },
    link: 'https://pieniruokakauppa.fi/',
    img_src: '/img/pieniruokakauppa.png',
    locations: [
      'Helsinki','Tampere','Turku'
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
      en: {
        title: 'Ruokaboksi',
        desc: 'Recepies and ingridients for weekday meals delivered to your home.'
      },
      sv: {
        title: 'Ruokaboksi',
        desc: 'Ingredienser till vardagsmat inklusive recept till din dörr.'
      }
    },
    link: 'https://ruokaboksi.fi/tuotteet/',
    img_src: '/img/ruokaboksi.png',
    locations: [
      'National'
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
      en: {
        title: 'Foodora',
        desc: 'Foodora\'s food delivery platform allows you to order food from restaurants nearby.'
      },
      sv: {
        title: 'Foodora',
        desc: 'Restauranger och snabbmatsrestauranger. Budet kan lämna leveransen utanför dörren om du skriftligen i samband med att du anger dina adressuppgifter ber hen göra det.'
      }
    },
    link: 'https://www.foodora.fi/',
    img_src: '/img/foodora.png',
    locations: [
      'National'
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
      en: {
        title: 'Fiksuruoka',
        desc: 'Save food from ending in the trash bin on discount. Home delivery starts from 7,9€ and is free for orders over 70€.'
      },
      sv: {
        title: 'Fiksuruoka',
        desc: 'Svinnmat till förmånspriser. Hemleverans från 7,90 euro. Fri leverans av beställningar på över 70 euro.'
      }
    },
    link: 'https://www.fiksuruoka.fi/',
    img_src: '/img/fiksuruoka.png',
    locations: [
      'National'
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
      en: {
        title: 'Sannanruokakassi',
        desc: 'Recepies and ingridients for weekday meals delivered to your home. Some packages have free shippig.'
      },
      sv: {
        title: 'Sannas Matkasse',
        desc: 'Ingredienser till vardagsmat inklusive recept till din dörr. Fri leverans av utvalda matkassar.'
      }
    },
    link: 'https://www.sannanruokakassi.fi/collections/ruokakassit',
    img_src: '/img/sannanruokakassi.png',
    locations: [
      'National'
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
      en: {
        title: 'La Torrefazione',
        desc: 'La Torrefazione started to deliver luch to home. You can pay for lunch with for example MobilePay, Smartum, Edenred and bank cards.'
      },
      sv: {
        title: 'La Torrefazione',
        desc: 'La Torrefazione har börjat leverera luncher. Du kan betala din lunch med bland annat MobilePay, Smartum, Edenred och bankkort.'
      }
    },
    link: 'http://www.latorre.fi/',
    img_src: '/img/latorre.png',
    locations: [
      'Helsinki'
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
      en: {
        title: 'Fruitbox',
        desc: 'Fruitboxes coming to workplace can now be redirected to remote workers\' homes.'
      },
      sv: {
        title: 'Fruitbox',
        desc: 'Nu kan du vidarebefordra arbetsplatsens fruktlåda till distansarbetarens hemdörr.'
      }
    },
    link: 'https://fruitboxoffice.fi/',
    img_src: '/img/fruitbox.png',
    locations: [
      'Helsinki'
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
      en: {
        title: 'Matsmart',
        desc: 'Save food from ending in the trash bin on discount. There might be some delays with deliveries.'
      },
      sv: {
        title: 'Matsmart',
        desc: 'Svinnmat till förmånspriser. Leveransförseningar.'
      }
    },
    link: 'https://www.matsmart.fi/',
    img_src: '/img/matsmart.png',
    locations: [
      'National'
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
      en: {
        title: 'Luomukassi',
        desc: 'Luomukassi delivers organic food and local products straight to your home. Recepies and ingridients come in the same package in the Helsinki metropolitan area.'
      },
      sv: {
        title: 'Luomukassi',
        desc: 'Luomukassi levererar närproducerad ekologisk mat till ditt hem. Hemleverans av paket med recept och ingredienser inom huvudstadsregionen.'
      }
    },
    link: 'https://luomukassi.fi/',
    img_src: '/img/luomukassi.png',
    locations: [
      'Helsinki','Espoo','Vantaa'
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
      en: {
        title: 'Kotikaappi',
        desc: 'Kotikaappi24 makes sure that the 100 most important dry groceries are available. You can order the package to your front door, for you closeone or someone in the risk groups.'
      },
      sv: {
        title: 'Kotikaappi',
        desc: 'Kotikaappi24 garanterar leverans av 100 vanliga torrfoderprodukter runt om i Finland. Du kan beställa paket till din dörr, åt en vän eller en närstående som hör till en riskgrupp. Sortimentet uppdateras med tiden.'
      }
    },
    link: 'https://www.kotikaappi24.fi/',
    img_src: '/img/kotikaappi.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
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
      en: {
        title: 'Forsman',
        desc: 'Forsman tea is a Finnish teahouse from which you can order a large variety of hot drinks. '
      },
      sv: {
        title: 'Forsman',
        desc: 'Forsman Tea är ett finskt tehus med ett brett sortiment av varma drycker från grönt te till koffeinfria alternativ.'
      }
    },
    link: 'http://www.forsman-tea.com/fi/',
    img_src: '/img/forsman.png',
    locations: [
      'National'
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
      en: {
        title: 'Laidun Hereford',
        desc: 'Laidun Hereford is a local food poducer which delivers also other smaller producer\'s products trough it\'s online store.'
      },
      sv: {
        title: 'Laidun Hereford',
        desc: 'Laidun Hereford odlar närmat, föder upp boskap och levererar livsmedel från egen gård och av andra småproducenter till din dörr.'
      }
    },
    link: 'https://www.laidunhereford.fi/',
    img_src: '/img/laidun-hereford.png',
    locations: [
      'Seinäjoki'
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
      en: {
        title: 'Lucy In The Sky',
        desc: 'Lucy in the sky delivers restaurant meals without additional free in Espoo region.'
      },
      sv: {
        title: 'Lucy In The Sky',
        desc: 'Lucy In the Sky levererar gratis restaurangrätter direkt till ditt hem inom Esbo.'
      }
    },
    link: 'https://www.lucyinthesky.fi/kotiinkuljetus',
    img_src: '/img/lucyinthesky.png',
    locations: [
      'Espoo'
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
      en: {
        title: 'Anton&Anton',
        desc: 'Anton&Anton food package service delivers a package full of fresh and quality ingridients straight to your door.'
      },
      sv: {
        title: 'Anton&Anton',
        desc: 'Anton & Antons Matkasse levererar en kasse fylld av färska, högklassiga råvaror till din dörr.'
      }
    },
    link: 'https://www.antonanton.fi/pages/ruokakassi',
    img_src: '/img/antonanton.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa', 'Kirkkonummi', 'Sipoo', 'Porvoo'
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
      en: {
        title: 'Madison Gastro & Wine',
        desc: 'Madison Gastro & Wine delivers food to your home in Espoo Tapiola region.'
      },
      sv: {
        title: 'Madison Gastro & Wine',
        desc: 'Hemleverans från Madison Gastro & Wine inom Hagalund i Esbo.'
      }
    },
    link: 'https://www.toptaste.fi/artikkeli/madison-gastro-wine-aloittaa-lounaan-kotiinkuljetuksen/',
    img_src: '/img/madison.png',
    locations: [
      'Espoo'
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
      en: {
        title: 'Uudenmaan ruoka / Ekompi.net',
        desc: 'Online store where you can make pre-orders from local producers and pick them up from a unmanned location. '
      },
      sv: {
        title: 'Nylands mat / Ekompi.net',
        desc: 'Elektronisk förhandsbeställning av lokala småproducenters varor med hämtning från obemannad upphämtningsplats. Stödjer närproducenter.'
      }
    },
    link: 'https://www.ekompi.net/',
    img_src: '/img/ekompi.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
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
      en: {
        title: 'kauppahalli24',
        desc: 'Kauppahalli24 is a online food shop which delivers all kinds of groceries and home products in the Uusimaa region. Delivery price is 3,99€-9,99€. '
      },
      sv: {
        title: 'kauppahalli24',
        desc: 'Shoppa alla slags livsmedel online med levererans inom Nyland. Leveranskostnad 3,99–9,99 euro beroende på totalt inköpsbelopp.'
      }
    },
    link: 'https://www.kauppahalli24.fi/tuotteet/#/cat/759',
    img_src: '/img/kauppahalli24.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
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
      en: {
        title: 'Tokmanni',
        desc: 'Currently Tokmanni is out of hand sanitizer. Other products, for example groceries, are available in the online store.'
      },
      sv: {
        title: 'Tokmanni',
        desc: 'För närvarande har Tokmanni slut åtminstone på toalettpapper och handdesi. Övriga produkter finns tillgängliga i webbutiken.'
      }
    },
    link: 'https://www.tokmanni.fi/',
    img_src: '/img/tokmanni.png',
    locations: [
      'National'
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
      en: {
        title: 'Clas Ohlson',
        desc: 'Free shipping for all products. You can also order trough Wolt. '
      },
      sv: {
        title: 'Clas Ohlson',
        desc: 'Fri leverans av småelektronik och övriga produkter. Går även att beställa via Wolt. Slut på handdesi, men engångshandskar och toalettpapper finns till försäljning.'
      }
    },
    link: 'https://www.clasohlson.com/fi/',
    img_src: '/img/clasohlson.png',
    locations: [
      'National'
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
      en: {
        title: 'Kärkkäinen',
        desc: 'Kärkkäinen has all kinds of product for quarantine. Home delivery 7,9€ and package shipping 3,9€.'
      },
      sv: {
        title: 'Kärkkäinen',
        desc: 'Kärkkäinens webbutik säljer tillbehör för olika sysslor att göra under din tid i karantän och andra produkter. På lager finns till exempel toalettpapper och handdesi. Hemleverans 7,90 och paketleverans 3,90 euro.'
      }
    },
    link: 'https://www.karkkainen.com/verkkokauppa/ajankohtaista/kampanjat-29061501/karanteenitekemista?orderBy=5&fromPage=catalogEntryList&beginIndex=0',
    img_src: '/img/karkkainencom.png',
    locations: [
      'National'
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
      en: {
        title: 'Verkkokauppa',
        desc: 'Office supplies, electronics, board games and other products. Shipping even in the same day.'
      },
      sv: {
        title: 'Verkkokauppa',
        desc: 'Kontorsmaterial, elektronik, brädspel och tillbehör. Utlovar leverans rentav samma dag.'
      }
    },
    link: 'https://www.verkkokauppa.com/',
    img_src: '/img/verkkokauppa.png',
    locations: [
      'National'
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
      en: {
        title: 'Power',
        desc: 'Electronics. Leaves the package behind your door so there is no human contact.'
      },
      sv: {
        title: 'Power',
        desc: 'Elektronik. Överräcker inte paket utan lämnar dem utanför dörren.'
      }
    },
    link: 'https://www.power.fi/',
    img_src: '/img/power.png',
    locations: [
      'National'
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
      en: {
        title: 'BottegaVerde',
        desc: 'Reasonably-priced hygiene products from small producers. Shampoos, soaps, hand creams and other cosmetics.'
      },
      sv: {
        title: 'BottegaVerde',
        desc: 'Prisvärda hygienprodukter, schampon, behandlande tvålar, handkrämer och annan kosmetika av en småföretagare.'
      }
    },
    link: 'https://www.bottegaverde.fi/',
    img_src: '/img/bottegaverde.png',
    locations: [
      'National'
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
      en: {
        title: 'Goldenstore',
        desc: 'A large variety of products for well-being and personal hygiene. You can order products easily from online 24/7.'
      },
      sv: {
        title: 'Golden Store Neolifes webbshop',
        desc: 'Brett sortiment av wellness- och rengöringsprodukter för personlig hygien och hudvård. På webben kan produkterna bekvämt beställas dygnet runt.'
      }
    },
    link: 'https://goldenstore.mycashflow.fi/',
    img_src: '/img/goldenstore.png',
    locations: [
      'National'
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
      en: {
        title: 'Biltema',
        desc: 'Biltema has a Buy & Drive In -service. You can search for products online and make the order using Buy & Pick Up -service. The stores personnel collects your order and brings it to your car.'
      },
      sv: {
        title: 'Biltema',
        desc: ''
      }
    },
    link: 'https://www.biltema.fi/osta---nouda-drive-in/miten-osta---nouda-drive-in-palvelu-toimii/',
    img_src: '/img/biltema.png',
    locations: [
      'National'
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
      en: {
        title: 'Yliopistonapteekki',
        desc: 'Yliopiston apteekki delivers prescription medicine straight to your front door. Customer service is congested and delivery time is longer than normal. Many other pharmacies also deliver medicine. '
      },
      sv: {
        title: 'Universitetets Apotek',
        desc: 'Universitetets Apotek levererar receptbelagda läkemedel till din dörr. Kundtjänsten är överbelastad och leveranserna tar längre än normalt. Många andra apotek levererar också läkemedel.'
      }
    },
    link: 'https://www.yliopistonapteekki.fi/nain_ostat_reseptilaakkeita_verkosta',
    img_src: '/img/ya.png',
    locations: [
      'National'
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
      en: {
        title: 'Gubbe',
        desc: 'You can order help with groceries and other matters related to the elderly. Gubbe\'s phone number is 044 491 0039.'
      },
      sv: {
        title: 'Gubbe',
        desc: 'Från Gubbe kan du beställa hjälp med att föra matkassar och andra uppdrag till stöd för de äldre. Gubbes telefonnummer är 044 491 00 39.'
      }
    },
    link: 'https://www.gubbe.io/',
    img_src: '/img/gubbe.png',
    locations: [
      'National'
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
      en: {
        title: 'Bring',
        desc: 'Bring delivers almost everythiny in the Helsinki mertopolitan area during the same day.'
      },
      sv: {
        title: 'Bring',
        desc: 'Bring transporterar nästan allt på samma dag i huvudstadsregionen.'
      }
    },
    link: 'https://www.bring.fi/',
    img_src: '/img/bring.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
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
      en: {
        title: 'EWS',
        desc: 'Laundry service offers home pick up for curtains and other large home textiles.'
      },
      sv: {
        title: 'EWS Tvättservice',
        desc: 'Tvätteri som hämtar hemmets gardiner och andra stora textilier inom Helsingfors.'
      }
    },
    link: 'https://www.ewshelsinki.fi/',
    img_src: '/img/ews.png',
    locations: [
      'Helsinki'
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
      en: {
        title: 'Karkkikoulu',
        desc: 'Card supply is on show in Lahti and can be seen on their website. You can talk about picking up or shipping the cards trough email.'
      },
      sv: {
        title: 'Gratis vykort till släktingar',
        desc: 'Skicka handgjorda vykort till släktingar. Kortlagret finns i Lahtis och kan ses på webbplatsen. Kom överens om hämtning eller leverans av korten via e-post.'
      }
    },
    link: 'https://karkkikoulu.com/',
    img_src: '/img/karkkikoulu.png',
    locations: [
      'National'
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
      en: {
        title: 'Ilostu',
        desc: 'Ilostu offers services for the elderly. '
      },
      sv: {
        title: 'Ilostu',
        desc: 'Ilostu erbjuder tjänster för de äldre. Enligt sitt meddelande 17.3 betjänar de seniorer normalt.'
      }
    },
    link: 'https://ilostu.fi/',
    img_src: '/img/ilostu.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
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
      en: {
        title: 'Fiksit',
        desc: 'Fiksit maintains smart devices. They can pick up and bring devices within 24 hours.'
      },
      sv: {
        title: 'Fiksit',
        desc: 'Fixar utför service av smarta enheter. Hämtar, reparerar och returnerar vid behov din enhet inom 24 timmar.'
      }
    },
    link: 'https://www.fiksit.fi/',
    img_src: '/img/fiksit.png',
    locations: [
      'Helsinki', 'Espoo'
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
      en: {
        title: 'Swappie',
        desc: 'You can get used phones which are good as new from Swappie shipped to your home.'
      },
      sv: {
        title: 'Swappie',
        desc: 'Från Swappie kan köpa begagnade telefoner i nyskick med hemleverans.'
      }
    },
    link: 'https://www.swappie.com/fi/',
    img_src: '/img/swappie.png',
    locations: [
      'National'
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
      en: {
        title: 'Helsingin Biopankki',
        desc: 'In Helsinki biobank\'s website you can fill up an biobank consent. Samples and data can be stored in biobank if the donor has given a written consent.'
      },
      sv: {
        title: 'Helsingfors Biobank',
        desc: 'På Helsingfors Biobanks webbplats kan du ge ett elektroniskt biobanksamtycke. Biobankprover är viktiga för senare forskning av olika associerade sjukdomar med anknytning till coronainfektion.'
      }
    },
    link: 'https://www.helsinginbiopankki.fi/fi/etusivu',
    img_src: '/img/helsinginbiopankki.png',
    locations: [
      'National'
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
      en: {
        title: 'Omaolo',
        desc: 'On Omaolo\'s website you can make a test if you suspect corona virus. By taking the test you save the healthcare system\'s resources.'
      },
      sv: {
        title: 'Omaolo',
        desc: 'På Omaolos webbplats kan du göra ett virtuellt coronatest om du misstänker att du smittats av coronaviruset. Genom att göra testet sparar du på hälsocentralernas begränsade resurser.'
      }
    },
    link: 'https://www.omaolo.fi/',
    img_src: '/img/omaolo.png',
    locations: [
      'National'
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
      en: {
        title: 'Onerva',
        desc: 'Onerva is a guest book for home care and sheltered accommodation which can be read always and anywhere. With the help of Onerva healthcare personnel can reach you and you them. '
      },
      sv: {
        title: 'Onerva omsorgskommunikation',
        desc: 'Onerva är en gästbok för hemtjänsten och serviceboenden som kan läsas när som helst, överallt. Via Onerva kan vårdpersonal kontakta dig och du kontakta dem.'
      }
    },
    link: 'https://onervahoiva.fi/',
    img_src: '/img/onerva.png',
    locations: [
      'National'
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
      en: {
        title: 'Cityvarasto',
        desc: 'Storage easily from online without meeting.'
      },
      sv: {
        title: 'Cityvarasto',
        desc: 'Förråd enkelt online utan möten.'
      }
    },
    link: 'https://cityvarasto.fi/',
    img_src: '/img/cityvarasto.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
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
      en: {
        title: 'Rakkaudella, Riikka',
        desc: 'Stress relief, support for mental well-being and professional guidance. Possibility for remote meetings and a free 45 minute tryout. '
      },
      sv: {
        title: 'Med kärlek, Riikka',
        desc: 'Stresshantering, stöd för psykiskt välbefinnande och arbetsvägledning med resursorienterat arbetssätt. Möjlighet till fjärråtkomst och gratis 45 minuters introduktion på webben.'
      }
    },
    link: 'https://rakkaudellariikka.fi/',
    img_src: '/img/rakkaudellariikka.png',
    locations: [
      'National'
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
      en: {
        title: 'Hellie Hoivapalvelut',
        desc: 'Hellie is a safe, local company which offers shop services, talking company and home services.'
      },
      sv: {
        title: 'Hellie Omsorgstjänster',
        desc: 'Hellie är ett tryggt, lokalt företag vars tjänster omfattar bland annat butiksbesök, samtalshjälp och chatt och hemhjälp.'
      }
    },
    link: 'https://www.hellie.fi/',
    img_src: '/img/hellie.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
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
      en: {
        title: 'Cleanmarin',
        desc: 'Cleaning services.'
      },
      sv: {
        title: 'Cleanmarin',
        desc: 'Städ- och rengöringsservice.'
      }
    },
    link: 'http://cleanmarin.fi/',
    img_src: '/img/cleanmarin.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
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
      en: {
        title: 'Kampaajakotiin',
        desc: 'Hair services to your home.'
      },
      sv: {
        title: 'Frisör hem',
        desc: 'Hårsalong hemma.'
      }
    },
    link: 'https://www.kampaajakotiin.com/',
    img_src: '/img/kampaajakotiin.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
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
      en: {
        title: 'Fiuge',
        desc: 'Fiuge offers transport services for those who have been quarantined for corona. A month\'s transports for 50€.'
      },
      sv: {
        title: 'Fiuge',
        desc: 'Fiuge erbjuder transporthjälp till människor i coronaisolering. En månads transporter för 50 euro.'
      }
    },
    link: 'https://fiuge.com/fi/fiuge-kuljetus-avuksi-koronakaranteeniin/',
    img_src: '/img/fiuge.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
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
      en: {
        title: 'Freska',
        desc: 'Cleaning services in the Helsinki metropolitan area, Turku and Tampere.'
      },
      sv: {
        title: 'Freska',
        desc: 'Freska tar hand om hygienen hos dig som bor i huvudstads-, Åbo- eller Tammerforsregionen. Vid städningen används myndighetsrekommenderade rengöringsmedel. Rengöringsmedlen i fråga används vid varje städning, även om du inte beställt dem. Garanterat effektiv rengöring enligt myndighetsdirektiv.'
      }
    },
    link: 'https://www.freska.fi/',
    img_src: '/img/freska.png',
    locations: [
      'National'
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
      en: {
        title: 'StichMe',
        desc: 'StichMe is Finland\'s first online repair service for clothes. All repairs and alternations remote acces; leave your clotehs to a package automat. Pick them up in a week. '
      },
      sv: {
        title: 'StichMe',
        desc: ''
      }
    },
    link: 'https://www.stichme.com/',
    img_src: '/img/stichme.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
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
      en: {
        title: 'Lukukaveri',
        desc: 'Lukukaveri brings together schoolkid and a senior togehter. There is a call/video call and the schoolkid reads something under parent\'s watch.'
      },
      sv: {
        title: 'Lukukaveri',
        desc: ''
      }
    },
    link: 'https://lukukaveri.com/',
    img_src: '/img/lukukaveri.png',
    locations: [
      'National'
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
      en: {
        title: 'Mehiläisen Digiklinikka',
        desc: 'Mehiläinen Digiklinikka brings a doctor to you. The service is open 24/7 and you can get to treatment without reserving time for a reasonable price. '
      },
      sv: {
        title: 'Mehiläisen Digiklinikka',
        desc: ''
      }
    },
    link: 'https://www.mehilainen.fi/mobiilisovellus/digiklinikka',
    img_src: '/img/mehilainen.png',
    locations: [
      'National'
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
      en: {
        title: 'Forenom',
        desc: 'Forenom offers apartments and rooms with furniture for a reasonable price for example for during quarantine or remote work place. There is a code lock in the locations so there is no human contact.'
      },
      sv: {
        title: 'Forenom',
        desc: 'Forenom erbjuder nu förmånligt möblerade lägenheter och rum till exempel för karantän eller som distansarbetsplats. Objekten har kodlås; utan kontakt med andra människor. Forenom betjänar i hela Finland, även inom långtidsboende.'
      }
    },
    link: 'https://www.forenom.com/fi/uutiset/palvelumme-koronapandemian-aikana/',
    img_src: '/img/forenom.jpg',
    locations: [
      'National'
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
      en: {
        title: 'WeHost',
        desc: 'WeHost offers apartments for both short- and long-time rental. Locations are on Helsinki meropolitan area.'
      },
      sv: {
        title: 'WeHost',
        desc: 'WeHost erbjuder sina lägenheter både för kort- och långvarig uthyrning. Objekten finns i huvudstadsregionen.'
      }
    },
    link: 'https://www.wehostfinland.com/contact',
    img_src: '/img/wehost.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
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
      en: {
        title: 'Hiisi Homes',
        desc: 'Hiisi Homes provides temporary homes from a single night to months.'
      },
      sv: {
        title: 'Hiisi Homes',
        desc: 'Familjeföretaget Hiisi Homes erbjuder bostäder för tillfälliga behov från ett par nätters till flera månaders inkvartering runtom i Södra Finland. Hiisis tillfälliga lägenheter lämpar sig även för distansarbete. När du bor bo Hiisi Homes är det lätt att undvika mänsklig kontakt: det finns ingen reception, restaurang eller allmänna lobbyer.'
      }
    },
    link: 'https://www.hiisihomes.fi/en/',
    img_src: '/img/hiisi.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
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
      en: {
        title: 'Sokos',
        desc: 'Due to significant decline in demand, Sokos Hotels has adjusted their hotel operations. Sokos Hotels provides safe accommodation in hotels that remain open.'
      },
      sv: {
        title: 'Sokos',
        desc: 'Hotell, såsom Sokos, verkar fortsätta sin verksamhet i stort sett som förr. Efterfrågan har minskat avsevärt, så goda erbjudanden finns till buds.'
      }
    },
    link: 'https://www.sokoshotels.fi/',
    img_src: '/img/sokos.png',
    locations: [
      'National'
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
      en: {
        title: 'Spot Apartments',
        desc: 'Spot Apartments offers apartments for temporal of more permanent living. You\'ll get a pincode and can start living like you were at home.'
      },
      sv: {
        title: 'Spot Apartments',
        desc: ''
      }
    },
    link: 'https://spotapartments.fi/',
    img_src: '/img/spotapartments.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
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
      en: {
        title: 'Sadut',
        desc: 'Listen to or download fairytales of Pikku Kakkonen.'
      },
      sv: {
        title: 'Lilla Tvåans nedladdningsbara sagor',
        desc: 'Lyssna på eller ladda ner Lilla Tvåans sagor.'
      }
    },
    link: 'https://areena.yle.fi/audio/1-1288197',
    img_src: '/img/yle.png',
    locations: [
      'National'
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
      en: {
        title: 'Spotify',
        desc: 'Spotify is a digital music service that gives you access to millions of songs.'
      },
      sv: {
        title: 'Spotify Karantänspellista',
        desc: 'Spotify-spellistan som fått global spridning sätter sin egen krydda på livet i karantän.'
      }
    },
    link: 'https://open.spotify.com/playlist/55V6HUzPnISl7ADpE3yfUD?si=Ixx9gRvBSA2wc2DpuWp7qg',
    img_src: '/img/spotify.png',
    locations: [
      'National'
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
      en: {
        title: 'Teatterikoulu',
        desc: 'Helsingin Teatterikoulu offers children\'s evening storytimes that are open for all.'
      },
      sv: {
        title: 'Teatterikoulu',
        desc: 'Helsingin teatterikoulu erbjuder gratis godnattsagostunder till alla.'
      }
    },
    link: 'https://www.helsinginteatterikoulu.fi/lasten-oma-satutuokio/',
    img_src: '/img/helsingin-teatterikoulu.png',
    locations: [
      'National'
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
      en: {
        title: 'Elisa Viihde',
        desc: 'A big amout of shows, movies etc. to watch.'
      },
      sv: {
        title: 'Elisa Viihde',
        desc: 'Elisa Viihde har massor av program att titta på.'
      }
    },
    link: 'https://elisaviihde.fi/',
    img_src: '/img/elisa-viihde.png',
    locations: [
      'National'
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
      en: {
        title: 'Lukulumo',
        desc: 'Lukulumo is digital tool directed to early childhood education which offers a large variety of picture books read out loud.  '
      },
      sv: {
        title: 'Lukulumo',
        desc: 'Lukulumo är ett digitalt verktyg för småbarnspedagogiken med ett brett utbud bilderböcker i ljudboksformat på finska. Tjänsten är gratis att använda i 30 dagar. Användarnamn: lukulumokoti. Lösenord: 987654321.'
      }
    },
    link: 'https://www.iltoppiminen.fi/palvelumme/lukulumo/',
    img_src: '/img/lukulumo.png',
    locations: [
      'National'
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
      en: {
        title: 'Storytel',
        desc: 'Storytel is a digital book service trough which you can listen to and read thousands of audio- and e-books.'
      },
      sv: {
        title: 'Storytel',
        desc: 'Storytel är en digital boktjänst där du kan lyssna på och läsa tusentals ljud- och e-böcker.'
      }
    },
    link: 'https://www.storytel.com/fi/fi/',
    img_src: '/img/storytel.png',
    locations: [
      'National'
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
      en: {
        title: 'Bookbeat',
        desc: 'BookBeat offers acces to a large variety of audio books and e-books with your phone or tablet.'
      },
      sv: {
        title: 'Bookbeat',
        desc: 'BookBeat ger dig tillgång till ett brett utbud tal- och e-böcker på din mobiltelefon eller pekplatta.'
      }
    },
    link: 'https://www.bookbeat.fi/',
    img_src: '/img/bookbeat.png',
    locations: [
      'National'
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
      en: {
        title: 'Viaplay',
        desc: 'Stream or watch movies, series and sports offline.'
      },
      sv: {
        title: 'Viaplay',
        desc: 'Streama filmer, serier och idrott, eller titta i offlineläge.'
      }
    },
    link: 'https://viaplay.fi/',
    img_src: '/img/viaplay.png',
    locations: [
      'National'
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
      en: {
        title: 'Netflix',
        desc: 'Unlimited amout of movies and series for every taste.'
      },
      sv: {
        title: 'Netflix',
        desc: 'Obegränsat med filmer och serier för alla smaker.'
      }
    },
    link: 'https://www.netflix.com/fi/',
    img_src: '/img/netflix.png',
    locations: [
      'National'
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
      en: {
        title: 'Elisa Kirja',
        desc: 'Elisa\'s audio- and e-books. Over 10 000 books to suit every taste.'
      },
      sv: {
        title: 'Elisa Kirja',
        desc: 'Elisas ljudböcker och e-böcker. Över 10 000 böcker för alla smaker.'
      }
    },
    link: 'https://kirja.elisa.fi/',
    img_src: '/img/elisa-kirja.png',
    locations: [
      'National'
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
      en: {
        title: 'Neverthinktv',
        desc: 'Neverthink.tv provides you with a hand-picked selection of on demand-videos.'
      },
      sv: {
        title: 'Neverthinktv',
        desc: ''
      }
    },
    link: 'https://neverthink.tv/',
    img_src: '/img/neverthink.png',
    locations: [
      'National'
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
      en: {
        title: 'Elixia',
        desc: 'Elixia has a large library of home workouts and online classes which are open to everyone.'
      },
      sv: {
        title: 'Elixia',
        desc: 'Elixia har ett omfattande bibliotek av hemmaträningspass och onlinetimmar som är öppna för alla.'
      }
    },
    link: 'https://www.elixia.fi/',
    img_src: '/img/elixia.png',
    locations: [
      'National'
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
      en: {
        title: 'Les Mills',
        desc: 'Les Mills opened 100+ workouts form it\'s service for two months.'
      },
      sv: {
        title: 'Les Mills',
        desc: 'Les Mills gjorde över 100 träningspass fritt tillgängliga för alla i två månaders tid.'
      }
    },
    link: 'https://watch.lesmillsondemand.com/at-home-workouts',
    img_src: '/img/lesmills.png',
    locations: [
      'National'
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
      en: {
        title: 'Edventures',
        desc: 'Elecric mountain bike rental in Porvoo and Espoo.'
      },
      sv: {
        title: 'Edventures',
        desc: 'Uthyrning av eldrivna mountainbikes i Borgå och Esbo.'
      }
    },
    link: 'https://www.edventures.fi/',
    img_src: '/img/edventures.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
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
      en: {
        title: 'Fressi',
        desc: 'Fressi offers free live-workout classes.'
      },
      sv: {
        title: 'Fressi',
        desc: 'Fressi livesänder gratis gruppgymnastiktimmar som hjälper dig träna med Fressis proffs var som helst.'
      }
    },
    link: 'https://www.fressi.fi/',
    img_src: '/img/fressi.png',
    locations: [
      'National'
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
      en: {
        title: 'Sanoste',
        desc: 'Sanoste offers digital exercise and singig courses for the elederly. The services are paid. '
      },
      sv: {
        title: 'Sanoste',
        desc: 'Sanostes digitala serviceplattform erbjuder olika tränings- och allsångskurser för de äldre på distans. Tjänsterna är avgiftsbelagda.'
      }
    },
    link: 'https://store.sanoste.fi/fi/',
    img_src: '/img/sanoste.png',
    locations: [
      'National'
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
      en: {
        title: 'Down Dog',
        desc: 'Down Dog offers all of their services for free of charge till 1.4.2020; Yoga, Yoga for beginners, HIIT, Barre and 7-minute training. \nIn response to the many school closures taking place, there are also free access until July 1st for all students and teachers (K-12 and college).'
      },
      sv: {
        title: 'Down Dog',
        desc: ''
      }
    },
    link: 'https://www.downdogapp.com/',
    img_src: '/img/downdog.png',
    locations: [
      'National'
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
      en: {
        title: 'Juurikorven kauppa',
        desc: 'Food cooking and delivery to local homes in the Kotka area. Also groceries to go or delivered from the shop.'
      },
      sv: {
        title: 'Juurikorven kauppa',
        desc: ''
      }
    },
    link: 'https://www.facebook.com/Juurikorven-kauppa-kokous-ja-cat%C3%A9ring-724147044697069/',
    img_src: '/img/juurikorvenkauppa.png',
    locations: [
      'Kotka'
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
      en: {
        title: 'Kahvila Donner',
        desc: 'Cafe Donner offers home cooked meals during lunch time either picked up or delivered in the Hyvinkää area. You can pay with card, Edenred, Eazybreak or cash.'
      },
      sv: {
        title: 'Kahvila Donner',
        desc: ''
      }
    },
    link: 'https://www.kahviladonner.com',
    img_src: '/img/kahviladonner.png',
    locations: [
      'Hyvinkää'
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
      en: {
        title: 'Lähitaksi',
        desc: 'LÄHIAPU is a store- and errand service which is run by Lähitaksi. The customer makes a list of things needed and calls 0100 7300.'
      },
      sv: {
        title: 'Lähitaksi',
        desc: ''
      }
    },
    link: 'https://www.lahitaksi.fi/fi/ajankohtaista/lahitaksilta-uusi-kauppa-ja-asiointipalvelu',
    img_src: '/img/lahitaksi.png',
    locations: [
      'National'
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Turvataan tulevaisuus',
        desc: 'Turvataan tulevaisuus on viiden aktiivisen kansalaisen perustama sivusto, jonka tarkoituksena on yhdistää pulassa olevat pien- ja mikroyrittäjien tarjoamat palvelut, tuotteet ja työkalut.'
      },
      en: {
        title: 'Turvataan tulevaisuus',
        desc: 'Website that combines small business and their services.'
      },
      sv: {
        title: 'Turvataan tulevaisuus',
        desc: ''
      }
    },
    link: 'https://www.turvataantulevaisuus.fi/',
    img_src: '/img/turvataantulevaisuus.png',
    locations: [
      'National'
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Koirahoitola Vohveli ',
        desc: 'Koirahoitola Vohveli tarjoaa kodinomaista hoitoa koirallesi Tuusulassa.'
      },
      en: {
        title: 'Koirahoitola Vohveli ',
        desc: 'Home-like care for your dog in Tuusula.'
      },
      sv: {
        title: 'Koirahoitola Vohveli ',
        desc: ''
      }
    },
    link: 'https://www.vohveli.net/',
    img_src: '/img/--.png../img/koirahoitolavohveli.png',
    locations: [
      'Tuusula '
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Venner',
        desc: 'Venner tarjoaa täysin uudenlaisen ja yksinkertaisen tavan tukea suomalaisia vähävaraisia lapsiperheitä ravitsevan ruan avulla, suoraan kotiovelle toimitettuna.'
      },
      en: {
        title: 'Venner',
        desc: 'Venner offers a complitely and easy way to support small-income families with healthy food.'
      },
      sv: {
        title: 'Venner',
        desc: ''
      }
    },
    link: 'https://venner.fi/',
    img_src: '/img/venner.png',
    locations: [
      'Helsinki','Turku'
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'E-kukka',
        desc: 'E-kukka -palvelusta voi tilata kukkia kotiisi ilman ihmiskontaktia.'
      },
      en: {
        title: 'E-kukka',
        desc: 'From E-kukka service you can order flowers straight to your home.'
      },
      sv: {
        title: 'E-kukka',
        desc: ''
      }
    },
    link: 'https://ekukka.fi/',
    img_src: '/img/ekukka.png',
    locations: [
      'National'
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'LahjaShop',
        desc: 'Lahjat netistä - iloa tuovia tuotteita kaikkina aikoina. Kotimainen verkkokauppa ja lahjakauppa netissä monipuolisilla maksutavoilla. Löydät valikoimasta lahjaideoita, lifestyle-tuotteita, sisustustavaraa, koruja ja paljon muuta. Ostaminen on turvallista ja samalla tuet kotimaista pienyritystä. Myös kotiinkuljetus!'
      },
      en: {
        title: 'LahjaShop',
        desc: 'Gifts online - products that bring joy at all times. Gift ideas, lifestyle products, decorations and much more. By buying you also support small and local businesses. Home delivery available.'
      },
      sv: {
        title: 'LahjaShop',
        desc: ''
      }
    },
    link: 'https://www.lahjashop.com/',
    img_src: '/img/lahjashop.png',
    locations: [
      'National'
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Karanteeniteatteri',
        desc: 'Ammattiteatteriesityksiä striimattuna kotiisi erittäin matalankynnyksen hinnoilla.'
      },
      en: {
        title: 'Karanteeniteatteri',
        desc: 'Professional thearter performances live-streamed to your home with low prices.'
      },
      sv: {
        title: 'Karanteeniteatteri',
        desc: ''
      }
    },
    link: 'http://www.karanteeniteatteri.fi/',
    img_src: '/img/karanteeniteatteri.png',
    locations: [
      'National'
    ],
    category: 'entertainment'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kuntokauppa.fi',
        desc: 'Kuntokaupan valikoimasta löytyy 1500 tuotetta urheiluun ja kuntoiluun. Valikoimasta löytyvät mm. juoksumatot, kuntopyörät, crosstrainerit, levytangot, painonnostopenkit & telineet, hulavanteet ja jumppavälineet. Nopea toimitus Tampereen varastolta suoraan kotiovelle.'
      },
      en: {
        title: 'Kuntokauppa.fi',
        desc: 'Over 1500 products for sports. Fast delovery from Tampere.'
      },
      sv: {
        title: 'Kuntokauppa.fi',
        desc: ''
      }
    },
    link: 'https://www.kuntokauppa.fi/',
    img_src: '/img/kuntokauppa.png',
    locations: [
      'National'
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Tampereen paahtimo',
        desc: 'Tampereen paahtimo on yhden naisen pienyritys. Kahveissa kohtaavat hyvä laatu, mainio maku ja huolellisesti tehty käsityö. Koko Pirkanmaan alueella jokaiseen tilaukseen ilmainen kuljetus. Koko Suomeen postitus mahdollinen.'
      },
      en: {
        title: 'Tampereen paahtimo',
        desc: 'A small business ran by a single woman. Great quality, delicious taste and delicate work combine in the coffees. Free home delivery in Pirkanmaa, post delivery possible to all around Finland.'
      },
      sv: {
        title: 'Tampereen paahtimo',
        desc: ''
      }
    },
    link: 'https://tampereenpaahtimo.com/',
    img_src: '/img/tampereenpaahtimo.png',
    locations: [
      'National'
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kukkakauppa Puntti',
        desc: 'Kukkia, mullanvaihtotarvikkeita ym. kotiovelle kannettuna, nopea toimitus.'
      },
      en: {
        title: 'Kukkakauppa Puntti',
        desc: 'Flowers etc. to your home. Fast delivery.'
      },
      sv: {
        title: 'Kukkakauppa Puntti',
        desc: ''
      }
    },
    link: 'https://www.kukkakauppapuntti.fi/',
    img_src: '/img/kukkakauppapuntti.png',
    locations: [
      'National'
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Suomen Seniorihoiva',
        desc: 'Kotipalvelut, hoivapalvelut, kauppa- ja asiointiapu, koronasiivoukset alvittomasti ikäihmisille ja riskiryhmille.'
      },
      en: {
        title: 'Suomen Seniorihoiva',
        desc: 'Home services, healthcare, grocery help and cleaning services to seniors and risk groups.'
      },
      sv: {
        title: 'Suomen Seniorihoiva',
        desc: ''
      }
    },
    link: 'https://suomenseniorihoiva.fi/',
    img_src: '/img/suomenseniorihoiva.png',
    locations: [
      'National'
    ],
    category: 'care'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Livetaajuus',
        desc: 'Palvelusta löytyy kaikki kotimaiset radiokanavat, sekä paikalliset että valtakunnalliset. Radiosta kuuluu myös viranomaisten tiedotukset koronatilanteeseen liittyen. Valmiuslain mukaan radiot ovat velvollisia julkaisemaan viranomaisen tiedotukset.'
      },
      en: {
        title: 'Livetaajuus',
        desc: 'All Finnish radio channels - both local and national.'
      },
      sv: {
        title: 'Livetaajuus',
        desc: ''
      }
    },
    link: 'https://livetaajuus.fi/',
    img_src: '/img/livetaajuus.png',
    locations: [
      'National'
    ],
    category: 'entertainment'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Tutor Trio',
        desc: 'Kun opiskelu tapahtuu kotona ilman opettajan apua, niin meiltä saa apua mihin tahansa oppiaineeseen etänäkin. Samalla palkkaamme myös ansioituneita opiskelijoita etätyöhön.'
      },
      en: {
        title: 'Tutor Trio',
        desc: 'When you must study remotely without a teacher\'s help then Tutor Trio is there to help. At the same time, Tutor Trio employs commendable students remotely.'
      },
      sv: {
        title: 'Tutor Trio',
        desc: ''
      }
    },
    link: 'http://www.tutortrio.fi/',
    img_src: '/img/tutortrio.png',
    locations: [
      'National'
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Mili\'s',
        desc: 'Toimittaa Espoossa kotiin lounasannoksia.'
      },
      en: {
        title: 'Mili\'s',
        desc: 'Lunch deliverys in Espoo.'
      },
      sv: {
        title: 'Mili\'s',
        desc: ''
      }
    },
    link: 'https://www.milisfood.fi/',
    img_src: '/img/milis.png',
    locations: [
      'Espoo'
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Business Meeting Park',
        desc: 'Etätapaamiset, -kokoukset, webinaarit ja muut tapahtumat "avaimet käteen" periaattella, tarvittaessa jopa täysin etänä.'
      },
      en: {
        title: 'Business Meeting Park',
        desc: 'Remote meetings, webinars and other events.'
      },
      sv: {
        title: 'Business Meeting Park',
        desc: ''
      }
    },
    link: 'https://www.meetingpark.fi/fi/',
    img_src: '/img/businessmeetingpark.png',
    locations: [
      'National'
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'ShipIt',
        desc: 'Suomen kattavin kuljetusvalikoima, todella helppo käyttöliittymä ja edulliset hinnat. Kotiinkuljetukset yksityisille ja yrityksille.'
      },
      en: {
        title: 'ShipIt',
        desc: 'Comprehensive selection of transport possibilities - for private persons as well as companies.'
      },
      sv: {
        title: 'ShipIt',
        desc: ''
      }
    },
    link: 'https://www.shipit.fi/',
    img_src: '/img/shipit.png',
    locations: [
      'National'
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'LVI-tarvikkeet',
        desc: 'Kodin remontointitarvikkeet edullisesti kotiinkuljetettuna.'
      },
      en: {
        title: 'LVI-tarvikkeet',
        desc: 'Renoval supplies delivered to your home.'
      },
      sv: {
        title: 'LVI-tarvikkeet',
        desc: ''
      }
    },
    link: 'https://www.lvitarvikkeet.fi/',
    img_src: '/img/lvitarvikkeet.png',
    locations: [
      'National'
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Centrum services',
        desc: 'Pääkaupunkiseudulla toimiva IT yritys, joka palvelee ensisijaisesti kuluttaja asiakkaita. Palveluun on aina kuulunut ilmainen noutopalvelu suoraan kotiovelta noudettuna pääkaupunkiseudulta. Huollon jälkeen laite toimitetaan takaisin kotiovelle veloituksetta.'
      },
      en: {
        title: 'Centrum services',
        desc: 'IT-company that works in the Helsinki metropolitan area. Free pick up and return for maitance.'
      },
      sv: {
        title: 'Centrum services',
        desc: ''
      }
    },
    link: 'https://www.centrumservices.fi/',
    img_src: '/img/centrumservices.png',
    locations: [
      'Helsinki'
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Pinnijalkapojat',
        desc: 'Etätyöläisten arkea helpottamaan. Pinnijaloilla saa edullisesti rakennettua itselleen tyylikkään etätyöpisteen.'
      },
      en: {
        title: 'Pinnijalkapojat',
        desc: 'To make remote workes life easier. You can build customised work station.'
      },
      sv: {
        title: 'Pinnijalkapojat',
        desc: ''
      }
    },
    link: 'https://www.pinnijalkapojat.fi/',
    img_src: '/img/pinnijalkapojat.png',
    locations: [
      'National'
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Onlineope',
        desc: 'Etäopetuspalvelut videoyhteydellä: Vaivaton ja joustava opiskelu missä tahansa'
      },
      en: {
        title: 'Onlineope',
        desc: 'Remote teaching with video. Effortless and flexible service for individual students.'
      },
      sv: {
        title: 'Onlineope',
        desc: ''
      }
    },
    link: 'https://www.onlineope.fi/',
    img_src: '/img/onlineope.png',
    locations: [
      'National'
    ],
    category: 'services'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Nokturno',
        desc: 'Ilmaiseksi saatavilla olevaa nykyrunoutta'
      },
      en: {
        title: 'Nokturno',
        desc: 'Modern poetry for free.'
      },
      sv: {
        title: 'Nokturno',
        desc: ''
      }
    },
    link: 'https://nokturno.fi/',
    img_src: '/img/nokturno.png',
    locations: [
      'National'
    ],
    category: 'entertainment'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Osuma Streetwear',
        desc: 'Osuma Streetwear on vuonna 2005 perustettu suomalainen katuvaatemerkki, joka inspiroituu katutaiteesta ja eri alakulttuureista. Osuma tuo Helsingin ja muun Suomen katukuvaan kestävää, laadukasta ja ehdottoman katu-uskottavaa muotia.'
      },
      en: {
        title: 'Osuma Streetwear',
        desc: 'Finnish streetwear brand which is inspired of streetart and subcultures. Sustainable and quality streetwear.'
      },
      sv: {
        title: 'Osuma Streetwear',
        desc: ''
      }
    },
    link: 'https://osw.fi/',
    img_src: '/img/osuma.png',
    locations: [
      'National'
    ],
    category: 'ecommerce'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kotitila',
        desc: 'Lähiruokaa kotiintoimitettuna pääkaupunkiseudulla.'
      },
      en: {
        title: 'Kotitila',
        desc: 'Local food delivered in the Helsinki metropolitan area.'
      },
      sv: {
        title: 'Kotitila',
        desc: ''
      }
    },
    link: 'https://www.kotitila.fi/',
    img_src: '/img/suomenkotitila.png',
    locations: [
      'Helsinki'
    ],
    category: 'food'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kauneusmaailma',
        desc: 'Kauneuden- ja terveydenhuoltotarvikkeet koko Suomeen toimitettuna. Laaja valikoima ihonhoitotuotteita.'
      },
      en: {
        title: 'Kauneusmaailma',
        desc: 'Beuty and healthcare supplies delivered to all around Finland. A large variety of skin care products.'
      },
      sv: {
        title: 'Kauneusmaailma',
        desc: ''
      }
    },
    link: 'https://www.kauneusmaailma.fi/',
    img_src: '/img/kauneusmaailma.png',
    locations: [
      'National'
    ],
    category: 'ecommerce'
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