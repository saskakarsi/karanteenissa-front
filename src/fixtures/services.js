const services = [
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
    img_src: 'img/taidelaboratorio.png',
    locations: [
      'Espoo'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Ravintola Skiffer',
        desc: 'Toimittaa ruokaa kotiinkuljetuksella Espoon alueella.'
      },
      gb: {
        title: 'Restaurant Skiffer',
        desc: 'Delivers food by home delivery in the Espoo area.'
      },
      se: {
        title: 'Restaurang Skiffer',
        desc: ''
      }
    },
    link: 'https://www.skiffer.fi/',
    img_src: 'img/skiffer.png',
    locations: [
      'Espoo'
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
        desc: 'Työpaikalle tulevan hedelmäboksin tilaus voidaan ohjata etätyöläisten kotiovelle. Fruitboxin voi tilata myös lahjaksi esimerkiksi sairaaloille tai kouluille.'
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
        title: 'MyNaviGo',
        desc: 'Palvelussa hoiva-alan yrittäjät voivat halutessaan tarjota tukea myös etänä. Palvelu on käytössät toistaiseksi Päijät-Hämeessä ja palveluntuottajien ilmouttautuminen sinne on maksutonta. Palvelua pyritään laajentamaan myös muihin maakuntiin.'
      },
      gb: {
        title: 'MyNaviGo',
        desc: 'The service allows remote care providers to provide support if they so wish. The service is currently available in Päijät-Häme, and registration by service providers is free of charge. The aim is to expand the service to other provinces.'
      },
      se: {
        title: 'MyNaviGo',
        desc: ''
      }
    },
    link: 'https://mynavigo.fi/home',
    img_src: 'img/mynavigo.png',
    locations: [
      'Päijät-Häme'
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
        title: 'PIKI-kirjastot',
        desc: 'PIKI-kirjastokortilla saat kuunneltavaksesi niin äänikirjoja kuin musiikkiakin, luettavaksesi e-kirjoja suomeksi ja englanniksi sekä katsottavaksesi elokuvia Kirjastokino-palvelussa.'
      },
      gb: {
        title: 'PIKI-libraries',
        desc: 'With the PIKI Library Card, you can listen to both audiobooks and music, read e-books in Finnish and English, and watch movies at Library Library.'
      },
      se: {
        title: 'PIKI-libraries',
        desc: ''
      }
    },
    link: 'https://piki.verkkokirjasto.fi/en/web/arena/-/luettavaa-kuunneltavaa-ja-katsottavaa-verkossa',
    img_src: 'img/verkkokirjasto.png',
    locations: [
      'Pirkanmaa'
    ],
    category: 'Palvelut'
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
        title: 'Tampereen aluetaksi Oy',
        desc: 'Taksi Tampere auttaa erilaisissa kuljetustehttävissä. Lisäksi Taksi Tampere voi hoitaa kaupassa ja apteekissa asioinnin ilman asiakkaan mukana oloa tai noutaa ruoka-annoksesi ravintolasta kotiin, silloin kun asiakkaan on tärkeintä pysyä kotona.'
      },
      gb: {
        title: 'Tampereen aluetaksi Oy',
        desc: 'A taxi in Tampere helps you with different transport tasks. In addition, Taxi Tampere can handle shopping and pharmacy service without the customer being present or picking up your meal from the restaurant to your home when it is most important for the customer to stay home.'
      },
      se: {
        title: 'Tampereen aluetaksi Oy',
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
        title: 'Kahvikeisarinna',
        desc: 'Yritys toimittaa/postittaa laadukkaan vastapaahdetun vietnamilaisen kahvin kotiisi/työpaikallesi jne.'
      },
      gb: {
        title: 'Kahvikeisarinna',
        desc: 'Company delivering / mailing quality freshly roasted Vietnamese coffee to your home / work, etc.\n'
      },
      se: {
        title: 'Kahvikeisarinna',
        desc: ''
      }
    },
    link: 'https://www.kahvikeisarinna.com/',
    img_src: 'img/kahvikeisarinna.png',
    locations: [
      'Tampere'
    ],
    category: 'Ruoka'
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
    img_src: 'img/koirahoitolavohveli.png',
    locations: [
      'Tuusula '
    ],
    category: 'Palvelut'
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
    img_src: 'img/tassumafia.png',
    locations: [
      'Helsinki'
    ],
    category: 'Palvelut'
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
        title: 'Ruokaa Kotiovelle',
        desc: 'Huippukokkien tekemää koko perheelle maistuvaa kotiruokaa isoina annoksia ja kotiin kuljetettuna. Toimitukset tällä hetkellä vain Helsingissä.'
      },
      gb: {
        title: 'Ruokaa Kotiovelle',
        desc: 'Home-cooked food made by top chefs in large portions and delivered home. Deliveries currently only in Helsinki.'
      },
      se: {
        title: 'Ruokaa Kotiovelle',
        desc: ''
      }
    },
    link: 'https://ruokaakotiovelle.fi/',
    img_src: 'img/ruokaakotiovelle.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Lacara',
        desc: 'Muutot, autot kotiinkuljetuksiin, tavarantoimitukset, autonvuokraus.'
      },
      gb: {
        title: 'Lacara',
        desc: 'Movings, cars for home delivery, car rental.'
      },
      se: {
        title: 'Lacara',
        desc: ''
      }
    },
    link: 'https://lacara.net/',
    img_src: 'img/lacara.png',
    locations: [
      'Helsinki'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Helppy',
        desc: 'Helppy auttaa senioreita. Aina sama tuttu turvallinen helpperi avuksi. Apua monessa arjen askareessa, kuten kaupassa/apteekissa käymisessä, asioinnissa, kodin ylläpidossa, digiavussa ja peseytymisen tukemisessa.'
      },
      gb: {
        title: 'Helppy',
        desc: 'Helppy helps seniors. Always the same familiar safe helper to help. Help with many everyday activities such as going to the store / pharmacy, doing business, maintaining a home, digital assistant, and supporting washing.'
      },
      se: {
        title: 'Helppy',
        desc: ''
      }
    },
    link: 'https://www.helppy.fi/',
    img_src: 'img/helppy.png',
    locations: [
      'Helsinki'
    ],
    category: 'Palvelut'
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
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Ruoka'
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
        desc: 'Kotikaappi24 makes sure that the 100 most important dry groceries are available. You can order the package to your front door, for you closeone or someone in the risk groups.'
      },
      se: {
        title: 'Kotikaappi',
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
        title: 'I&P Group Oy',
        desc: 'Siivous palvelut/ Desinfiointi, kiinteistönhoitoala, tilojen desinfiointi — Kontaminoituneen tilan desinfiointi (viruksen tappaminen tiloista), lääkkeiden kuljetukset vain Helsinki,Vantaa ja Espoon alueella. ( eläkeläiskortilla -30% alennus).'
      },
      gb: {
        title: 'I&P Group Oy',
        desc: 'Cleaning services / Disinfection, property management, disinfection of premises - Disinfection of contaminated premises (killing of virus in the premises), transportation of medicines only in Helsinki, Vantaa and Espoo area. (-30% discount on pensioner card).'
      },
      se: {
        title: 'I&P Group Oy',
        desc: ''
      }
    },
    link: 'http://ipgroup.fi/',
    img_src: 'img/ipgroup.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Tapiolan Apteekki',
        desc: 'Reseptilääkkeet ja muut apteekkituotteet myös netistä tai puhelimitse. Hae tuotteet apteekin kassalta tai tilaa edullinen ja nopea kotiinkuljetus pääkaupunkiseudulle.'
      },
      gb: {
        title: 'Tapiola Pharmacy',
        desc: 'Prescription Drugs and Other Pharmacy Products Also Online or By Phone. Find products at the pharmacy checkout or order a cheap and fast home delivery to the Helsinki metropolitan area.'
      },
      se: {
        title: 'Tapiola Pharmacy',
        desc: ''
      }
    },
    link: 'https://www.tapiolanapteekki.fi/fi/',
    img_src: 'img/tapiolanapteekki.png',
    locations: [
      'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Palvelut'
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
        title: 'Koti Helsinki',
        desc: 'Korkealuokkaisia uusia kalustettuja huoneistoja väliaikaiseen asumistarpeeseen. Palveluun kuuluu myös mm siivous-ja kodinhoitopalvelut ja asiointipalvelut. '
      },
      gb: {
        title: 'Koti Helsinki',
        desc: 'High quality new furnished apartments for temporary living. The service also includes cleaning and housekeeping and transaction services.'
      },
      se: {
        title: 'Koti Helsinki',
        desc: ''
      }
    },
    link: 'https://kotihelsinki.fi/',
    img_src: 'img/kotihelsinki.png',
    locations: [
      'Helsinki', 'Kaartinkaupunki'
    ],
    category: 'Palvelut'
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
      'Helsinki', 'Tampere', 'Turku'
    ],
    category: 'Ruoka'
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
        title: 'Hoivakoti Kultahelmi',
        desc: 'Ympärivuorokautista tehostettua asumispalvelua yli 65-vuotiaillle muistisairaille'
      },
      gb: {
        title: 'Hoivakoti Kultahelmi',
        desc: '24-hour enhanced housing service for memory patients over 65 years of age.'
      },
      se: {
        title: 'Hoivakoti Kultahelmi',
        desc: ''
      }
    },
    link: 'https://www.hoivakoti-kultahelmi-oy.com/',
    img_src: 'img/kultahelmi.png',
    locations: [
      'Koskue'
    ],
    category: 'Palvelut'
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
        title: 'Ruokaboksi',
        desc: 'Reseptit ja arkiruokaan valikoidut ainekset kotiovelle. Kaikki boksit sisältävät aina ilmaisen kylmäkuljetuksen.'
      },
      gb: {
        title: 'Ruokaboksi',
        desc: 'Recepies and ingridients for weekday meals delivered to your home. All boxes have a free cold delivery.'
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
        title: 'Karkkikoulu',
        desc: 'Korttivarasto on Lahdessa ja nähtävänä verkkosivuilla. Sähköpostitse voi sopia korttien hausta tai toimituksesta jonnekin.'
      },
      gb: {
        title: 'Karkkikoulu',
        desc: 'Card supply is on show in Lahti and can be seen on their website. You can talk about picking up or shipping the cards trough email.'
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
        title: 'Kuntokauppa',
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
    img_src: 'img/linja.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
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
        title: 'Kosmetologikauppa.fi',
        desc: 'Helsingissä valmistettua luonnonkosmetiikkaa sekä muita kosmetologilta saatavia ihonhoitotuotteita.'
      },
      gb: {
        title: 'Kosmetologikauppa.fi',
        desc: 'Natural cosmetics made in Helsinki and other skin care products available from a cosmetologist.'
      },
      se: {
        title: 'Kosmetologikauppa.fi',
        desc: ''
      }
    },
    link: 'https://www.kosmetologikauppa.fi/',
    img_src: 'img/kosmetologikauppa.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Uplus Oy',
        desc: 'Uplus yksityisopetus auttaa kaiken ikäisiä oppijoita koulunkäynnissä, alakoulusta lukioon ja pääsykokeisiin. Jokainen oppilas saa henkilökohtaisen opettajan, ja opetus on saatavilla verkon välityksellä koko Suomeen.'
      },
      gb: {
        title: 'Uplus Oy',
        desc: 'Uplus Private Education helps learners of all ages in school, from elementary to high school and through entrance exams. Each student receives a personal teacher and the teaching is available online throughout Finland.'
      },
      se: {
        title: 'Uplus Oy',
        desc: ''
      }
    },
    link: 'https://www.uplus.fi/',
    img_src: 'img/uplus.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'BoBoLa',
        desc: 'Sivusto tarjoaa ilmaisia aktiviteettejä lapsiperheiden ja lastenmielisten iloksi.'
      },
      gb: {
        title: 'BoBoLa',
        desc: 'The site offers free activities for families with children'
      },
      se: {
        title: 'BoBoLa',
        desc: ''
      }
    },
    link: 'https://www.bobola.fi/',
    img_src: 'img/bobola.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'StepUp Online',
        desc: 'Voit tanssia ilmaisilla tanssitunneilla kotoa käsin. Tanssituntien videokirjasto kasvaa koko ajan.'
      },
      gb: {
        title: 'StepUp Online',
        desc: 'You can dance with free dance lessons from home. The Dance Class Video Library is constantly growing.'
      },
      se: {
        title: 'StepUp Online',
        desc: ''
      }
    },
    link: 'https://www.stepupschool.online/',
    img_src: 'img/stepup.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Äitiysliikunta-akatemia',
        desc: 'Äitiysliikunta-akatemia® tarjoaa terveys- ja liikunta-alalla toimiville asiantuntijoille ajankohtaista, tutkittua ja luotettavaa tietoa.'
      },
      gb: {
        title: 'Äitiysliikunta-akatemia',
        desc: 'Maternity Exercise Academy® provides up-to-date, researched, and reliable information to health and fitness experts.'
      },
      se: {
        title: 'Äitiysliikunta-akatemia',
        desc: ''
      }
    },
    link: 'https://aitiysliikuntaakatemia.fi/',
    img_src: 'img/aitiysliikunta.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Ruuan hinta',
        desc: 'Palvelussa voi verrata ruoan hintaa sekä helposti tarkastaa mitä tuotetta saa mistäkin kaupasta. https://ruoanhinta.fi/kaupat sivustolta löytyy myös ajankohtaiset tiedot kauppojen aukioloajoista sekä niiden tarkat osoitteet ja sijannit kartalla.'
      },
      gb: {
        title: 'Ruuan hinta',
        desc: 'The service allows you to compare the price of food and easily check which product is available at which store. The https://ruoanhinta.fi/kaupat website also contains current information on store opening hours, their exact addresses and locations on the map.'
      },
      se: {
        title: 'Ruuan hinta',
        desc: ''
      }
    },
    link: 'https://ruoanhinta.fi/',
    img_src: 'img/ruoanhinta.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'SYKE Tribe',
        desc: 'Suomen laajin valikoima nettivalmennuksia ja monet näistä soveltuvat kotona tehtäviksi eli myös mahdollisen karanteenin ajalle. Samalla on mahdollisuus tukea suomalaisia valmentajayrittäjiä, joiden tulovirrat ovat tällä hetkellä monien muiden tavoin nollissa.'
      },
      gb: {
        title: 'SYKE Tribe',
        desc: 'The widest range of online coaching in Finland and many of these are suitable for home tasks, including quarantine. At the same time, there is the opportunity to support Finnish coaching entrepreneurs, whose income streams, like many others, are currently zero.'
      },
      se: {
        title: 'SYKE Tribe',
        desc: ''
      }
    },
    link: 'https://syketribe.fi/',
    img_src: 'img/syketribe.png',
    locations: [
      'National'
    ],
    category: 'Urheilu'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kirjastokino',
        desc: 'Ilmaisia elokuvia, avoin kaikille.'
      },
      gb: {
        title: 'Kirjastokino',
        desc: 'Free movies online, open to everyone.'
      },
      se: {
        title: 'Kirjastokino',
        desc: ''
      }
    },
    link: 'https://www.kirjastokino.fi/fi/videos',
    img_src: 'img/kirjastokino.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'HalpaHalli',
        desc: 'Verkkokauppa josta löytyy yli 30 000 artikkelin aktiivinen valikoima kodin ja vapaa-ajan tuotteista, ruuanlaittoon, astiastoihin sekä pukeutumiseen.'
      },
      gb: {
        title: 'HalpaHalli',
        desc: 'An online shop with over 30,000 articles with an active selection of home and leisure products, cooking, dinnerware and clothing.'
      },
      se: {
        title: 'HalpaHalli',
        desc: ''
      }
    },
    link: 'https://www.halpahalli.fi/',
    img_src: 'img/halpahalli.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Pop Up Yoga',
        desc: 'Helppoja ja ilman välineitä, kotona tehtäviä jooga, pilates, kehonhuolto sekä kehonpaino videoita viikoittain päivittyvästä videopalvelusta. Lue lisää nettisivuilta!'
      },
      gb: {
        title: 'Pop Up Yoga',
        desc: 'Easy and no tools, homework yoga, pilates, bodybuilding and bodyweight videos on a weekly video service. Read more on the website!\n'
      },
      se: {
        title: 'Pop Up Yoga',
        desc: ''
      }
    },
    link: 'https://popupyogaoulu.com/',
    img_src: 'img/yogakoulu.png',
    locations: [
      'National'
    ],
    category: 'Urheilu'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Aito-olo',
        desc: 'Verkkokaupasta löydät laadukkaat lisäravinteet, ravintolisät sekä muut terveyttäsi ja kokonaisvaltaista hyvinvointiasi tukevat tuotteet.'
      },
      gb: {
        title: 'Aito-olo',
        desc: 'The online store offers quality supplements, nutritional supplements and other products that support your health and well-being.'
      },
      se: {
        title: 'Aito-olo',
        desc: ''
      }
    },
    link: 'https://kauppa.aitokauppa.fi/',
    img_src: 'img/aitokauppa.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Primitive skills ',
        desc: 'Liikuntapalveluja nyt kun suurin osa liikuntapaikoista on kiinni. Personal training- ja pienryhmätreenit ulkona Espoon Kivenlahdessa. Tämän lisäksi online-joogaa, mitä on helppo tehdä omassa olohuoneessa.'
      },
      gb: {
        title: 'Primitive skills ',
        desc: 'Exercise services now that most sports facilities are closed. Personal training and small group trainings in Kivenlahti, Espoo. Plus, online yoga, which is easy to do in your living room.'
      },
      se: {
        title: 'Primitive skills ',
        desc: ''
      }
    },
    link: 'https://primitiveskills.fi/',
    img_src: 'img/primitiveskills.png',
    locations: [
      'National'
    ],
    category: 'Urheilu'
  },
  {
    id: '',
    langs: {
      fi: {
        title: '2 x Ilo',
        desc: 'Nyt koronaviruksen ajan kortin lähetys -palvelun teille, jotka haluatte muistaa esimerkiksi isovanhempia, kauempana asuvaa perhettä tai ystävää. Nyt kun pyritään välttämään fyysistä läheisyyttä, on hyvä hetki muistaa läheisiä kortilla. Miten paljon se ilahduttaisi esimerkiksi isovanhempia vanhainkodissa.'
      },
      gb: {
        title: '2 x Ilo',
        desc: 'Card sending service to those you want to remember, such as grandparents, a distant family, or a friend. Now that you are trying to avoid physical intimacy, it is a good time to remember your loved ones on the card. How much it would please grandparents, for example, in a retirement home.'
      },
      se: {
        title: '2 x Ilo',
        desc: ''
      }
    },
    link: 'https://2xilo.fi/shop/kortin-lahetyspalvelu/',
    img_src: 'img/2xilo.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'TT-Kauppa',
        desc: 'TT-Kauppa.fi toimii aputoiminimenä Suomen Nettimyynti Oy:lle. Verkkokauppa tarjoaa monipuolisia suojakuoria erilaisille puhelimille ja tableteille, lisäksi löytyy myös puhelimia ja muita puhelintarvikkeita kuten kaapeleita, kuulokkeita, latureita, muistikortteja jne.'
      },
      gb: {
        title: 'TT-Kauppa',
        desc: 'TT-Kauppa.fi acts as an auxiliary business name for Suomen Nettimyynti Oy. The webshop offers versatile protective covers for a variety of phones and tablets, as well as phones and other phone accessories such as cables, headphones, chargers, memory cards, etc.'
      },
      se: {
        title: 'TT-Kauppa',
        desc: ''
      }
    },
    link: 'https://www.ttkauppa.fi/',
    img_src: 'img/ttkauppa.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Poesia ',
        desc: 'Osuuskuntamuotoinen kustantamo, jonka keskiössä on kiinnostava ja monimuotoinen runous. Kaikki tilaukset verkkokaupasta toistaiseksi ilman toimituskuluja koodilla LUKURAUHA.'
      },
      gb: {
        title: 'Poesia ',
        desc: 'A co-operative publishing house focused on interesting and diverse poetry. All orders from the web store for the time being free of charge with the code LUKURAUHA.'
      },
      se: {
        title: 'Poesia ',
        desc: ''
      }
    },
    link: 'https://poesia.fi/',
    img_src: 'img/poesia.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'NFL - Game Pass',
        desc: 'Kaiken kattava kausikortti amerikkalaisen jalkapallon tapahtumiin ja ilmainen oikeus jo pelattujen otteluiden seurantaan.'
      },
      gb: {
        title: 'NFL - Game Pass',
        desc: 'An all-inclusive season pass for American football events and free access to matches already played.'
      },
      se: {
        title: 'NFL - Game Pass',
        desc: ''
      }
    },
    link: 'https://www.nflgamepass.com/en',
    img_src: 'img/nflgamepass.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Sportyplanner',
        desc: 'Sportyplanner -ohjelmisto avattu maksuttomaan käyttöön 31.07.2020 saakka. Sportyplanner on kehitetty liikunnan- ja kuntoutuksen ammattilaisten käyttöön, mutta palvelee yhtälailla kuluttajia. Palvelussa runsaasti valmiita harjoitusohjelmia eri tavoitteisiin: voima-, nopeus-, liikkuvuus- ja hallinta. Paljon treeniohjelmia kotiharjoitteluun.'
      },
      gb: {
        title: 'Sportyplanner',
        desc: 'Sportyplanner software opened for free use until 31.07.2020. The Sportyplanner is designed for use by exercise and rehabilitation professionals, but serves consumers in the same way. The service has plenty of ready-made exercise programs for different purposes: power, speed, mobility and control. Lots of exercise programs for home training.'
      },
      se: {
        title: 'Sportyplanner',
        desc: ''
      }
    },
    link: 'https://sportyplanner.com/',
    img_src: 'img/sportyplanner.png',
    locations: [
      'National'
    ],
    category: 'Urheilu'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'TradeUp',
        desc: 'TradeUp myy huoltoliikkeen tarkastamia käytettyjä iPhone puhelimia 12KK takuulla. Edullinen kotiintoimitus ja osamaksumahdollisuus. '
      },
      gb: {
        title: 'TradeUp',
        desc: 'TradeUp sells dealer-inspected used iPhone phones under the 12KK Warranty. Affordable home delivery and installment option.'
      },
      se: {
        title: 'TradeUp',
        desc: ''
      }
    },
    link: 'https://tradeup.fi/',
    img_src: 'img/tradeup.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Pässinpää',
        desc: 'Kevään upea valikoima sisustustavaraa, ihania pellavaisia vaatteita ja oman tilan lammastuotteita:pakaste lihat, langat ja taljat. Kukkakaupasta saat tilattua kukkaviennin tai hakea kimppuja omaan pöytään.'
      },
      gb: {
        title: 'Pässinpää',
        desc: 'A stunning selection of home furnishings, lovely linen, and sheep\'s products from the spring: frozen meats, yarns and pulses. You can order a flower delivery or pick bouquets for your table at the flower shop.'
      },
      se: {
        title: 'Pässinpää',
        desc: ''
      }
    },
    link: 'https://passinpaa.fi/',
    img_src: 'img/passinpaa.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Debora',
        desc: 'Jatketaan kotiin tuotavia hoiva-, puhtaus- ja avustuspalveluita normaalisti myös poikkeustilanteessa. Lisäksi uusia palveluita, joista uskomme olevan apua koronatilanteesta kärsiville. Ajankohtaisiin palveluihin kuuluu mm. kauppa- ja asiointiapu, desinfiointisiivous ja kotilabra. Lomautettuja voidaan työllistää tilapäisesti auttamistyön parissa.'
      },
      gb: {
        title: 'Debora',
        desc: 'Home care, cleanliness and assistance services will normally continue even in exceptional circumstances. In addition, new services that we believe will help those suffering from corona. Current services include: trade and transaction assistance, disinfection cleaning and home lab. The lay-offs can be temporarily employed in the relief work.'
      },
      se: {
        title: 'Debora',
        desc: ''
      }
    },
    link: 'https://debora.fi/',
    img_src: 'img/debora.png',
    locations: [
      'National'
    ],
    category: 'Hoiva'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Stella Kotihoitopalvelut',
        desc: 'Laadukkaat siivouspalvelut, terveyspalvelut ja kauppakassipalvelut.'
      },
      gb: {
        title: 'Stella Kotihoitopalvelut',
        desc: 'High quality cleaning services, health services and shopping bag services.'
      },
      se: {
        title: 'Stella Kotihoitopalvelut',
        desc: ''
      }
    },
    link: 'https://www.stella.fi/',
    img_src: 'img/stella.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Helppy',
        desc: 'Helppy auttaa senioreita. Aina sama tuttu turvallinen helpperi avuksi. Apua monessa arjen askareessa, kuten kaupassa/apteekissa käymisessä, asioinnissa, kodin ylläpidossa, digiavussa ja peseytymisen tukemisessa.'
      },
      gb: {
        title: 'Helppy',
        desc: 'Helppy helps seniors. Always the same familiar safe helper to help. Help with many everyday activities such as going to the store / pharmacy, doing business, maintaining a home, digital assistant, and supporting washing.'
      },
      se: {
        title: 'Helppy',
        desc: ''
      }
    },
    link: 'https://www.helppy.fi/',
    img_src: 'img/helppy.png',
    locations: [
      'Helsinki'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'WorkPilots',
        desc: 'Palvelusta löytyy tuhansia nuoria ympäri suomea joita voit tilata avuksesi sekä kodin että yrityksen tarpeisiin alkaen yhdestä tunnista. Esimerkkeinä voisi olla kaupassa käynti, tavaroiden noutaminen, koiran ulkoilutus (pääkaupunkiseudulla palvelussa koulutetut 4H dogistterit, apua lasten kanssa (vaikka etänäkin) ja kaikki muut kodin askareet.  '
      },
      gb: {
        title: 'WorkPilots',
        desc: 'The service has thousands of young people all over Finland who can be ordered to help you with the needs of your home and business from just one hour. Examples could be shopping, picking up supplies, dog walking (4H dog trainers trained in the Greater Helsinki area), assistance with children (even remotely) and all other household chores.'
      },
      se: {
        title: 'WorkPilots',
        desc: ''
      }
    },
    link: 'https://workpilots.fi/',
    img_src: 'img/workpilots.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Edun Herkkukeidas',
        desc: 'Ruoka-annoksia ja lounasta noutaen tai kotiinkuljetuksella.'
      },
      gb: {
        title: 'Edun Herkkukeidas',
        desc: 'Meals and lunch for takeaway or home delivery.'
      },
      se: {
        title: 'Edun Herkkukeidas',
        desc: ''
      }
    },
    link: 'https://www.edunherkkukeidas.fi/',
    img_src: 'img/edunherkkukeidas.png',
    locations: [
      'Tampere'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Vantaan Seurakunnat',
        desc: 'Vantaan seurakunnat tarjoavat ruoka-apua ja keskusteluapua koronaviruksen aiheuttamissa poikkeusoloissa.'
      },
      gb: {
        title: 'Vantaan Seurakunnat',
        desc: 'The churches in Vantaa provide food aid and discussion assistance in the event of an emergency caused by the coronavirus.'
      },
      se: {
        title: 'Vantaan Seurakunnat',
        desc: ''
      }
    },
    link: 'https://www.vantaanseurakunnat.fi/apua-ja-tukea/kirkko-auttaa-poikkeusoloissa',
    img_src: 'img/vantaanseurakunnat.png',
    locations: [
      'Vantaa'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kahvakoukku',
        desc: 'Kotimaisesta vanerista valmistettu ”kahvakoukku”, jolla voit avata ovia, painella katkaisimia, hissin nappeja tms on helppo apu käsihygienasta huolehtimiseen. Pintoihin kosketuksissa olevaan koukkuosaan ei tarvitse koskea missään vaiheessa käyttöä. Koukkua säilytetään rungon sisällä, jolloin siihen ei ole vahingossa kosketuksissa. Kahvakoukun hinta on 7.50€ sisältäen ilmaisen toimituksen Suomeen.'
      },
      gb: {
        title: 'Hand Hook',
        desc: 'Domestic plywood "handle hook" for opening doors, pressing switches, elevator buttons, etc. is an easy aid for hand hygiene. The hook part which is in contact with the surfaces need not be subjected at any time to use. The hook is stored inside the frame to prevent accidental contact. The handle hook price is 7.50 € including free shipping to Finland.'
      },
      se: {
        title: 'Kahvakoukku',
        desc: ''
      }
    },
    link: 'https://www.datanorppa.fi/tuote/kahvakoukku/',
    img_src: 'img/datanorppa.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: "Piece 'n' Love Pizza",
        desc: 'Pitsaa ja muita ruoka-annoksia kotiinkuljetettuna. Kuljetus on ilmainen yli 20€ tilauksille, muuten hinta on 4€.'
      },
      gb: {
        title: "Piece 'n' Love Pizza",
        desc: 'Pizza and other food delivered home. Free shipping on orders over 20 €, otherwise 4 €.'
      },
      se: {
        title: "Piece 'n' Love Pizza",
        desc: ''
      }
    },
    link: 'https://www.piecenlove.fi/',
    img_src: 'img/piecenlove.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Elämyslahjat',
        desc: 'Tarjoannassa sekä kotona että karanteenin jälkeen koettavia elämyksiä .'
      },
      gb: {
        title: 'Elämyslahjat',
        desc: 'Offers experiences both at home and after quarantine.'
      },
      se: {
        title: 'Elämyslahjat',
        desc: ''
      }
    },
    link: 'https://www.elamyslahjat.fi/',
    img_src: 'img/elamyslahjat.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Deliporo',
        desc: 'Syö hyvin myös karanteenissa, tilaa poronlihaa verkkokaupasta.'
      },
      gb: {
        title: 'Deliporo',
        desc: 'Eat well also in quarantine, order reindeer meat online.'
      },
      se: {
        title: 'Deliporo',
        desc: ''
      }
    },
    link: 'https://www.deliporo.fi/',
    img_src: 'img/deliporo.png',
    locations: [
      'National'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Villa Sofia Living',
        desc: 'Kodintekstiilit, sisustustarvikkeet, ekologiset pesuaineet, palashampoot, saippuat, kestovanulaput jne.'
      },
      gb: {
        title: 'Villa Sofia Living',
        desc: 'Home textiles, home furnishings, eco-detergents, shampoos, soaps, patches, etc.'
      },
      se: {
        title: 'Villa Sofia Living',
        desc: ''
      }
    },
    link: 'https://www.villasofia.fi/',
    img_src: 'img/villasofia.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: "Miriam's",
        desc: 'Kahvila tarjoavaa ilmaisen kotiinkuljetuksen Jyväskylän keskustan alueella, maksua vastaan kuljetus kauemmas. Tilaus puhelimitse.'
      },
      gb: {
        title: "Miriam's",
        desc: 'The café offers free home delivery in the center of Jyväskylä, for a fee for transportation further away. Order by phone.'
      },
      se: {
        title: "Miriam's",
        desc: ''
      }
    },
    link: 'https://www.miriams.fi/',
    img_src: 'img/miriams.png',
    locations: [
      'Jyväksylä'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Tirri Active Oy',
        desc: 'Yksilöllista Personal Training -palvelua myös etäyhteyksin. Tarjolla myös ilmainen kotitreenivideo yli 70-vuotiaille kotikaranteenissa: https://www.youtube.com/watch?v=LhTtwjhVfMg&feature=youtu.be'
      },
      gb: {
        title: 'Tirri Active Oy',
        desc: 'Personal Training also remotely. There is also a free home workout video for over 70s at home quarantine: https://www.youtube.com/watch?v=LhTtwjhVfMg&feature=youtu.be'
      },
      se: {
        title: 'Tirri Active Oy',
        desc: ''
      }
    },
    link: 'https://www.tirriactive.fi',
    img_src: 'img/tirriactive.png',
    locations: [
      'National'
    ],
    category: 'Urheilu'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'LI STLE',
        desc: 'Parturi- , kampaamo- sekä kosmetologipalveluita 30% alennuksella.'
      },
      gb: {
        title: 'LI STLE',
        desc: 'Hairdressing and beauty services at a 30% discount.'
      },
      se: {
        title: 'LI STLE',
        desc: ''
      }
    },
    link: 'https://www.listyle.fi',
    img_src: 'img/listyle.png',
    locations: [
      'Helsinki'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Pauner oy',
        desc: 'Ergonomiset kalusteet etätyö kotitoimistoon. Etätyössä kotitoimiston ergonomia kannattaa laittaa kuntoon, sillä huono työasento tietotyössä lisää riskiä mm. niska-hartiaseudun ja selän kipeytymiseen. Hyvillä ergonomiavälineillä etätyö sujuu hyvin.'
      },
      gb: {
        title: 'Pauner oy',
        desc: 'Ergonomic furniture for home office.With good ergonomic tools, working form home is fine.'
      },
      se: {
        title: 'Pauner oy',
        desc: ''
      }
    },
    link: 'https://www.pauner.fi/',
    img_src: 'img/pauner.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'AriHilly',
        desc: 'Sisustustuotteita ja tarvikkeita lemmikeille kotimaisesta puusta. Tuotteet toimitetaan tarpeen vaatiessa kotiovelle.'
      },
      gb: {
        title: 'AriHilly',
        desc: 'Furnishings and accessories for pets from domestic wood. Products will be delivered to your door when needed.'
      },
      se: {
        title: 'AriHilly',
        desc: ''
      }
    },
    link: 'https://www.arihilly.com',
    img_src: 'img/arihilly.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Uniao da Roseira',
        desc: '3 kertaa viikossa Facebookin kautta online-tunteja aidosta karnevaali sambasta. '
      },
      gb: {
        title: 'Uniao da Roseira',
        desc: 'Online lessons on true carnival samba three times a week via Facebook.'
      },
      se: {
        title: 'Uniao da Roseira',
        desc: ''
      }
    },
    link: 'https://roseira.net/',
    img_src: 'img/roseira.png',
    locations: [
      'National'
    ],
    category: 'Urheilu'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Lehtiluukku.fi',
        desc: 'Suosikkilehdet digitaalisina näköisversioina yhden klikkauksen päässä. Luettavissa kaikilla nykyaikaisilla älylaittelilla missä ja milloin tahansa, vaikka karanteenissa.'
      },
      gb: {
        title: 'Lehtiluukku.fi',
        desc: 'One-click favorite digital magazines. Readable on all modern smart devices anywhere, anytime, even in quarantine.'
      },
      se: {
        title: 'Lehtiluukku.fi',
        desc: ''
      }
    },
    link: 'https://www.lehtiluukku.fi/',
    img_src: 'img/lehtiluukku.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Suomen lastenkulttuurikeskusten liitto',
        desc: 'Tälle sivustolle kootaan vinkkejä taiteen ja kulttuurin harrastamiseen, tekemiseen ja kokemiseen kotona.'
      },
      gb: {
        title: 'Suomen lastenkulttuurikeskusten liitto',
        desc: 'This site gathers tips for practicing, making and experiencing art and culture at home.'
      },
      se: {
        title: 'Suomen lastenkulttuurikeskusten liitto',
        desc: ''
      }
    },
    link: 'https://www.lastenkulttuuri.fi/kulttuuriakotona/',
    img_src: 'img/lastenkulttuuri.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Virtuaalinen metsäretki',
        desc: 'Hyvän mielen metsäkävelyt virtuaalisesti.'
      },
      gb: {
        title: 'Virtual forest walk',
        desc: 'Good-spirited forest walks virtually.'
      },
      se: {
        title: 'Virtuaalinen metsäretki',
        desc: ''
      }
    },
    link: 'https://www.mielenterveystalo.fi/aikuiset/itsehoito-ja-oppaat/oppaat/tietoa_luonnon_hyvinvointivaikutuksista/Pages/mene-metsaan-virtuaalisesti.aspx',
    img_src: 'img/mielenterveystalo.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kuvista kotona',
        desc: 'Ideoita kotiin ja etäopetukseen kuvataiteesta.'
      },
      gb: {
        title: 'Kuvista kotona',
        desc: 'Ideas for home and distance education on visual arts.'
      },
      se: {
        title: 'Kuvista kotona',
        desc: ''
      }
    },
    link: 'https://sites.google.com/view/koulukuvis/teht%C3%A4vi%C3%A4/kuvista-kotona?fbclid=IwAR2YZ4WIqX7hygFuzPm9bKlguvaLu1We_RBOYHy9VWFXEwf2mgzyLhsbdzU',
    img_src: 'img/koulukuvis.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Finna',
        desc: 'Finna.fi on hakupalvelu, josta löydät aineistoja suomalaisista arkistoista, kirjastoista ja museoista.'
      },
      gb: {
        title: 'Finna',
        desc: 'Finna.fi is a search service where you can find material from Finnish archives, libraries and museums.'
      },
      se: {
        title: 'Finna',
        desc: ''
      }
    },
    link: 'https://finna.fi/',
    img_src: 'img/finna.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Minna Bakes',
        desc: 'Kahvila joutui sulkemaan ovensa, mutta tuotteita voi tilata ennakkotilauksena kotiinkuljetuksena.'
      },
      gb: {
        title: 'Minna Bakes',
        desc: 'The café had to close its doors, but products can be pre-ordered for home delivery.'
      },
      se: {
        title: 'Minna Bakes',
        desc: ''
      }
    },
    link: 'https://www.minnabakes.fi',
    img_src: 'img/minnabakes.png',
    locations: [
      'Jyväksylä'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Oopperan ja baletin virtuaalinäyttämö',
        desc: 'Täällä voit katsoa ja kuunnella Oopperabaletin mm. esitystallenteita, trailereita ja tekijöiden haastatteluja.'
      },
      gb: {
        title: 'Virtual stage for opera and ballet',
        desc: 'Here you can watch and listen to the Opera Ballet\'s presentations, trailers, and interviews with authors.'
      },
      se: {
        title: 'Oopperan ja baletin virtuaalinäyttämö',
        desc: ''
      }
    },
    link: 'https://oopperabaletti.fi/stage24/',
    img_src: 'img/oopperabaletti.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Rilla Tervonen',
        desc: 'Paperituotteita, joiden tarkoitus on lohduttaa ja antaa voimaa.'
      },
      gb: {
        title: 'Rilla Tervonen',
        desc: 'Paper products designed to comfort and empower.'
      },
      se: {
        title: 'Rilla Tervonen',
        desc: ''
      }
    },
    link: 'https://www.rillatervonen.fi',
    img_src: 'img/rillatervonen.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Teatteri kotisohvalle',
        desc: 'TINFO kerää tietoa teatterien erilaisista verkossa tapahtuvista esityksistä ja teostallenteista. Niitä päivitetään tälle sivulle yleisöä varten. '
      },
      gb: {
        title: 'Teatteri kotisohvalle',
        desc: 'TINFO collects information about theaters\' various online performances and performances. They will be updated on this page for the public.'
      },
      se: {
        title: 'Teatteri kotisohvalle',
        desc: ''
      }
    },
    link: 'https://www.tinfo.fi/fi/Teatteri_kotisohvalle',
    img_src: 'img/tinfo.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Nauti tanssista kotona',
        desc: 'Linkkejä ja vinkkejä tanssisisältöihin opetusvideoista esitystallenteisiin ja tanssielokuviin.'
      },
      gb: {
        title: 'Enjoy dance at home',
        desc: 'Links and tips for dance content from instructional videos to performance installations and dance films.'
      },
      se: {
        title: 'Nauti tanssista kotona',
        desc: ''
      }
    },
    link: 'https://www.danceinfo.fi/artikkelit/nauti-tanssista-kotona-kokosimme-linkkeja-ja-vinkkeja-tanssisisaltoihin-opetusvideoista-esitystallenteisiin-ja-tanssielokuviin/',
    img_src: 'img/danceinfo.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kototiimi',
        desc: 'Kun tarvitset itse tai läheisesi tarvitsee apua arjen askareissa esim. suihkussa käymiseen, ateriointiin, pukeutumiseen tai mihin tahansa arkiseen rutiiniin tai kodinhoidolliseen asiaan. Apua myös kauppaostosten teossa ja muissa kodin ulkopuolella asioinnissa esim. apteekkiasioissa. Soita ja kysy!'
      },
      gb: {
        title: 'Kototiimi',
        desc: 'When you or your loved ones need help with everyday tasks like showering, eating, dressing or any other routine or home care. Also help with groceries and other out-of-home shopping, eg pharmacy matters. Call and ask!'
      },
      se: {
        title: 'Kototiimi',
        desc: ''
      }
    },
    link: 'https://www.kototiimi.fi',
    img_src: 'img/kototiimi.png',
    locations: [
      'Raisio', 'Turku', 'Naantali', 'Kaarina'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Arkkitehtuuri- ja ympäristökulttuurikoulu Lastu ',
        desc: 'Lasten kädentaitovinkkisarja kodin kierrätysmateriaaleista. Helppoja ideoita yhteiseksi iloksi ja ajanvietteeksi.'
      },
      gb: {
        title: 'Arkkitehtuuri- ja ympäristökulttuurikoulu Lastu ',
        desc: 'Children\'s handicraft tips set from home recycling materials. Easy ideas for common fun and entertainment.'
      },
      se: {
        title: 'Arkkitehtuuri- ja ympäristökulttuurikoulu Lastu ',
        desc: ''
      }
    },
    link: 'https://fi-fi.facebook.com/lastenkulttuurikeskuslastu/',
    img_src: 'img/lastenkulttuurikeskuslastu.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kotihoiva ja -hieronta Kirsti Makkonen',
        desc: 'Siivous, ruuanlaitto, lääkehoito, kauppakassipalvelut.'
      },
      gb: {
        title: 'Kotihoiva ja -hieronta Kirsti Makkonen',
        desc: 'Cleaning, cooking, medicine care, groceries.'
      },
      se: {
        title: 'Kotihoiva ja -hieronta Kirsti Makkonen',
        desc: ''
      }
    },
    link: 'https://www.kotihoivajahieronta.fi',
    img_src: 'img/kotihoivajahieronta.png',
    locations: [
      'Savonlinna'
    ],
    category: 'Hoiva'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Neuvokas perhe / Olohuonesirkus',
        desc: 'Olohuonesirkus on sarja erilaisia liikkeitä, joita voi tehdä yhdessä lapsen iän ja taidot huomioiden.'
      },
      gb: {
        title: 'Neuvokas perhe / Olohuonesirkus',
        desc: 'The Living Room Circus is a series of different movements that can be done together based on the age and skills of the child.'
      },
      se: {
        title: 'Neuvokas perhe / Olohuonesirkus',
        desc: ''
      }
    },
    link: 'https://neuvokasperhe.fi/liikkuminen/olohuonesirkus/',
    img_src: 'img/neuvokasperhe.png',
    locations: [
      'National'
    ],
    category: 'Urheilu'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Pihamuusikko',
        desc: 'Imatran alueella voit tilata ilmaiseksi pihamuusikon keikalle ikkunan alle.'
      },
      gb: {
        title: 'Pihamuusikko',
        desc: 'In Imatra area you can order a court musician for a free gig under the window.'
      },
      se: {
        title: 'Pihamuusikko',
        desc: ''
      }
    },
    link: 'https://esaimaa.fi/uutiset/lahella/0465629f-7899-4750-8696-75439684b117',
    img_src: 'img/esaimaa.png',
    locations: [
      'Imatra'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Iltasatu',
        desc: 'Lue lapselle satuja, missä ja milloin vain - maksutta.'
      },
      gb: {
        title: 'Iltasatu',
        desc: 'Read stories to your child, anytime, anywhere - for free.'
      },
      se: {
        title: 'Iltasatu',
        desc: ''
      }
    },
    link: 'https://iltasatu.org',
    img_src: 'img/iltasatu.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Marttakoulu',
        desc: 'Ruokaohjeita, kädentaitovinkkejä yms. kotiarkeen.'
      },
      gb: {
        title: 'Marttakoulu',
        desc: 'Food tips, crafting tips and more for your home day.'
      },
      se: {
        title: 'Marttakoulu',
        desc: ''
      }
    },
    link: 'https://www.martat.fi/marttakoulu/',
    img_src: 'img/martat.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Made by HanneleRusila',
        desc: 'Perinnevaatteita ja arkkupeitteitä tilauksesta, ilmainen toimitus Suomessa yli 30€ ostoksista.'
      },
      gb: {
        title: 'Made by HanneleRusila',
        desc: 'Traditional clothes and cushion covers by order, free shipping in Finland for orders over 30 €.'
      },
      se: {
        title: 'Made by HanneleRusila',
        desc: ''
      }
    },
    link: 'https://www.hannelerusila.fi/',
    img_src: 'img/hannelerusila.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Sarjiskone',
        desc: 'Sarjiskone on ilmainen työkalu mediatuottamiseen. Se opastaa sukeltamaan oikein päin sarjakuvaruutuun, ideoimaan hahmoja ja tarinoita, viihdyttämään, valistamaan, ottamaan kantaa tai paneutumaan itsetutkiskeluun.'
      },
      gb: {
        title: 'Sarjiskone',
        desc: 'Comic Machine is a free tool for media production. It guides you to dive right into the comic book screen, brainstorm characters and stories, entertain, enlighten, take a stand or engage in self-exploration.'
      },
      se: {
        title: 'Sarjiskone',
        desc: ''
      }
    },
    link: 'https://sarjiskone.fi/',
    img_src: 'img/sarjiskone.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'T:mi Soja Murto',
        desc: 'Kansallispukuja ja muita käsityötuotteita.'
      },
      gb: {
        title: 'T:mi Soja Murto',
        desc: 'National costumes and other handicraft items.'
      },
      se: {
        title: 'T:mi Soja Murto',
        desc: ''
      }
    },
    link: 'https://www.kansallispuku.com/',
    img_src: 'img/kansallispuku.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Leikkipankki',
        desc: 'Leikkejä ja vinkkejä hauskaan yhdessäoloon kaikenikäisille.'
      },
      gb: {
        title: 'Leikkipankki',
        desc: 'Games and tips for fun for all ages.'
      },
      se: {
        title: 'Leikkipankki',
        desc: ''
      }
    },
    link: 'https://leikkipankki.fi/haku',
    img_src: 'img/leikkipankki.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Tarjan Puoti Paakkila',
        desc: 'Naisten, miesten ja lasten vaatteita sekä Oriflamen kosmetiikkaa kotiinkuljetuksella Tuusniemen alueella, muualle postin välityksellä.'
      },
      gb: {
        title: 'Tarjan Puoti Paakkila',
        desc: 'Women\'s, men\'s and children\'s clothing as well as Oriflame cosmetics; home delivery in the Tuusniemi area and to elsewhere by Post.'
      },
      se: {
        title: 'Tarjan Puoti Paakkila',
        desc: ''
      }
    },
    link: 'facebook.com/tarjanpuotipaakkila',
    img_src: 'img/tarjanpuoti.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Ateljee Keltainen Talo',
        desc: 'Sisustustarvikkeita ja muita kodintuotteita verkkokaupasta toimitettuna kaikkialle maailmaan.'
      },
      gb: {
        title: 'Ateljee Keltainen Talo',
        desc: 'Furnishings and other home products from the online store delivered worldwide.'
      },
      se: {
        title: 'Ateljee Keltainen Talo',
        desc: ''
      }
    },
    link: 'http://www.ateljeekeltainentalo.com/page/13/kauppa',
    img_src: 'img/ateljeekeltainentalo.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kotimai',
        desc: 'Kotimai.fi tarjoaa eettisesti ja ekologisesti lähellä valmistettuja vaatteita naisille ja lapsille.'
      },
      gb: {
        title: 'Kotimai',
        desc: 'Kotimai.fi offers ethically and environmentally friendly clothing for women and children.'
      },
      se: {
        title: 'Kotimai',
        desc: ''
      }
    },
    link: 'https://www.kotimai.fi/',
    img_src: 'img/kotimai.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kotona kotimaista',
        desc: '#kotonakotimaista – Tue, tee, jaa; palvelu kokoaa yhteen Suomalaisia yrittäjiä ja heidän palveluitaan.'
      },
      gb: {
        title: 'Kotona kotimaista',
        desc: '#kotonakotimaista - Support, do, share; The service brings together Finnish entrepreneurs and their services.'
      },
      se: {
        title: 'Kotona kotimaista',
        desc: ''
      }
    },
    link: 'https://www.kotonakotimaista.fi/',
    img_src: 'img/kotonakotimaista.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Auta pientä',
        desc: 'Osta kotimaisista pienistä verkkokaupoista, tilaa kotiinkuljetuksella ruokaa lähiravintoloista, hanki lahjakortteja palveluihin, jotka voit hyödyntää pandemian kukistuttua. Suosi oman kylän yrittäjää ja kotimaisuutta. Tapoja on monia. Tehdään viisaita valintoja.'
      },
      gb: {
        title: 'Auta pientä',
        desc: 'Buy from home-based small online stores, order home-cooked food from local restaurants, get gift certificates for services you can take advantage of when the pandemic has passed. Favors entrepreneurship and domesticity in their village. There are many ways. Making wise choices.'
      },
      se: {
        title: 'Auta pientä',
        desc: ''
      }
    },
    link: 'https://me.yrittajat.fi/autapienta?utm_source=kuntal&utm_medium=display&utm_campaign=CO_kuntal',
    img_src: 'img/meyrittajat.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Punkanen Oy',
        desc: 'Palveluilta koronan aiheuttaman psyykkisen stressin käsittelyyn.'
      },
      gb: {
        title: 'Punkanen Oy',
        desc: 'Services for dealing with mental stress caused by Covid-19'
      },
      se: {
        title: 'Punkanen Oy',
        desc: ''
      }
    },
    link: 'https://www.tiinapunkanen.fi',
    img_src: 'img/tiinapunkanen.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Terveyspojat Oy',
        desc: 'Apua kauppa- ym. asioinnissa, siivouksissa, pesuissa ja lähes kaikissa kodin töissä. Palveluun kuuluu myös kotisairaanhoidon palvelu. '
      },
      gb: {
        title: 'Terveyspojat Oy',
        desc: 'Help with shopping, cleaning, laundry and almost any home work. The service also includes a home health care service.'
      },
      se: {
        title: 'Terveyspojat Oy',
        desc: ''
      }
    },
    link: 'https://wwww.terveyspojatoy.com',
    img_src: 'img/terveyspojat.png',
    locations: [
      'Taivalkoski'
    ],
    category: 'Hoiva'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'House of Sandwiches',
        desc: 'Kuljetus veloituksetta kotiin; lounaita ja muita ruoka-annoksia.'
      },
      gb: {
        title: 'House of Sandwiches',
        desc: 'Free home delivery; lunches and other meals.'
      },
      se: {
        title: 'House of Sandwiches',
        desc: ''
      }
    },
    link: 'https://www.hofs.fi',
    img_src: 'img/hofs.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Arctic Design Shop',
        desc: 'Kodintuotteita sekä vaatteita ilmaisella kotiinkuljetuksella (yli 40€ tilaukset) Rovaniemen alueella, muualle postitse.'
      },
      gb: {
        title: 'Arctic Design Shop',
        desc: 'Home goods and clothing with free home delivery (orders over 40 €) in the Rovaniemi area, elsewhere by post.'
      },
      se: {
        title: 'Arctic Design Shop',
        desc: ''
      }
    },
    link: 'https://arcticdesignshop.com/',
    img_src: 'img/arcticdesignshop.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Lapin Leipomo',
        desc: 'Tuoreen leivän kotiinkuljetus Rovaniemen alueella hintaan 20€.'
      },
      gb: {
        title: 'Lapin Leipomo',
        desc: 'Home delivery of fresh bread in Rovaniemi for 20 €.'
      },
      se: {
        title: 'Lapin Leipomo',
        desc: ''
      }
    },
    link: 'https://m.facebook.com/lapinleipomo/?ref=page_internal&mt_nav=0',
    img_src: 'img/lapinleipomo.png',
    locations: [
      'Rovaniemi'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Likiliike',
        desc: 'Sivustolle kerätty useiden liikkeiden kotiinkuljetus- ym erityispalvelut poikkeustilan aikana.'
      },
      gb: {
        title: 'Likiliike',
        desc: 'Multiple shop home delivery and special services collected during the emergency.'
      },
      se: {
        title: 'Likiliike',
        desc: ''
      }
    },
    link: 'https://likiliike.fi/ajankohtaista/likiliikkeet-poikkeustilan-aikana/',
    img_src: 'img/likiliike.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Synnytyksen ABC',
        desc: 'Doules tarjoaa synnytysvalmennuksen verkkokurssia. Nyt -50% koodilla korona.'
      },
      gb: {
        title: 'Synnytyksen ABC',
        desc: 'Doules offers an online training course in childbirth. Now with -50% code Korona.'
      },
      se: {
        title: 'Synnytyksen ABC',
        desc: ''
      }
    },
    link: 'http://doules.fi/courses/synnytyksen-abc',
    img_src: 'img/doules.png',
    locations: [
      'National'
    ],
    category: 'Hoiva'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'TL Konttorikaluste',
        desc: 'Sähkö -ja työpöydät. Satula -ja toimistotuolit ilmaisella toimituksella kotimaassa.'
      },
      gb: {
        title: 'TL Konttorikaluste',
        desc: 'Electric and work desks. Saddle and office chairs free shipping in Finland.'
      },
      se: {
        title: 'TL Konttorikaluste',
        desc: ''
      }
    },
    link: 'https://www.toimistotuoli.com',
    img_src: 'img/toimistotuoli.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'PILATES Studio Vantaa',
        desc: 'Online -tunteja; pilates, barre, syvävenyttely, spiraalistabilaatio, rentoutus, mindfulness sekä tanssi.'
      },
      gb: {
        title: 'PILATES Studio Vantaa',
        desc: 'Online classes; Pilates, Barre, Deep Stretching, Spiral Stabilization, Relaxation, Mindfulness and Dance.'
      },
      se: {
        title: 'PILATES Studio Vantaa',
        desc: ''
      }
    },
    link: 'https://www.pilatesstudiovantaa.fi',
    img_src: 'img/pilatesstudiovantaa.png',
    locations: [
      'National'
    ],
    category: 'Urheilu'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kranssit.fi',
        desc: 'Piristystä ja luovaa tekemistä kotiin, parvekkeelle ja puutarhaan.'
      },
      gb: {
        title: 'Kranssit.fi',
        desc: 'Brighten up and get creative with your home, balcony and garden.'
      },
      se: {
        title: 'Kranssit.fi',
        desc: ''
      }
    },
    link: 'https://www.kranssit.fi/',
    img_src: 'img/kranssit.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Karaokekeskus.com',
        desc: 'Karaoketarvikkeita netistä.'
      },
      gb: {
        title: 'Karaokekeskus.com',
        desc: 'Karaoke accessories online.'
      },
      se: {
        title: 'Karaokekeskus.com',
        desc: ''
      }
    },
    link: 'https://www.karaokekeskus.com',
    img_src: 'img/karaokekeskus.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Omakuori.fi',
        desc: 'Omakuori.fi mahdollistaa suojakuoren tai -laukun tekemisen omasta valokuvasta, yrityksen logosta tai tekstistä. Muokattavia suojakuoria saatavissa noin 50 eri puhelinmalliin.'
      },
      gb: {
        title: 'Omakuori.fi',
        desc: 'Omakuori.fi allows you to make a protective cover or bag with your own photo, company logo or text. Customizable covers are available for about 50 different phone models.'
      },
      se: {
        title: 'Omakuori.fi',
        desc: ''
      }
    },
    link: 'https://www.omakuori.fi',
    img_src: 'img/omakuori.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Luurinetti.fi',
        desc: '15-vuotias tamperelainen perheyritys. Lähes 20 000 tuotetta, laajasti mobiilialan ja muita pienelektroniikan laitteita ja tarvikkeita uusiin, mutta myös vanhempiin laitteisiin. Brandejä ja pienempien valmistajien tuotteita.'
      },
      gb: {
        title: 'Luurinetti.fi',
        desc: '15-year-old family business in Tampere. Nearly 20,000 products, extensively for mobile and other small electronics devices and supplies for new but also older devices. Brands and products from smaller manufacturers.'
      },
      se: {
        title: 'Luurinetti.fi',
        desc: ''
      }
    },
    link: 'https://www.luurinetti.fi',
    img_src: 'img/luurinetti.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Pizzeria Ruka',
        desc: 'Pizzeria Ruka palvelee huhtikuun take away -periaatteella, toimitus kotiin 6km säteellä.'
      },
      gb: {
        title: 'Pizzeria Ruka',
        desc: 'Pizzeria Ruka serves in April by take away principle, home delivery within 6km.'
      },
      se: {
        title: 'Pizzeria Ruka',
        desc: ''
      }
    },
    link: 'https://www.pizzeriaruka.fi',
    img_src: 'img/pizzeriaruka.png',
    locations: [
      'Ruka'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Design Inkamaria',
        desc: 'Ihmisille iloksi pieniä videoita, joihin liitetääm värityskuvia, puuhavinkkejä yms. mitä ihmiset voivat tehdä koronan aikana. #koronaprojektini on maksuton.'
      },
      gb: {
        title: 'Design Inkamaria',
        desc: 'People can enjoy the small videos that we add coloring pictures, wood tips and more about what people can do during the Covid-19.'
      },
      se: {
        title: 'Design Inkamaria',
        desc: ''
      }
    },
    link: 'https://valtamo.me/kaikkea-kivaa-koronalaisille/',
    img_src: 'img/inkamaria.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Lasten Synttärihahmot, Laatikko-synttärit',
        desc: 'Toimitamme synttärisankarin oven taakse laatikon, jossa on muhkea synttäriyllätys!'
      },
      gb: {
        title: 'Lasten Synttärihahmot, Laatikko-synttärit',
        desc: 'We deliver a box with a birthday surprise behind the door of the birthday hero!'
      },
      se: {
        title: 'Lasten Synttärihahmot, Laatikko-synttärit',
        desc: ''
      }
    },
    link: 'https://lastensynttarihahmot.com/',
    img_src: 'img/lastensynttarihahmot.png',
    locations: [
      'Turku', 'Helsinki', 'Espoo', 'Vantaa'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Tina Salminen',
        desc: 'Laulutunteja etänä. Tunnit onnistuvat sekä Whereby:n kautta, että videolähetyksinä puolin toisin.'
      },
      gb: {
        title: 'Tina Salminen',
        desc: 'Singing lessons remotely. Lessons work through Whereby and video streaming.'
      },
      se: {
        title: 'Tina Salminen',
        desc: ''
      }
    },
    link: 'https://tinasalminen.com/laulutunnit/',
    img_src: 'img/tinasalminen.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Neste Mertala',
        desc: 'Ruoan kotiinkuljetus ja take away.'
      },
      gb: {
        title: 'Neste Mertala',
        desc: 'Food delivery and take away.'
      },
      se: {
        title: 'Neste Mertala',
        desc: ''
      }
    },
    link: 'https://nestemertala.fi/',
    img_src: 'img/nestemartela.png',
    locations: [
      'Savonlinna', 'Enonkoski'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Canit',
        desc: 'Canit-mobiilisovellus yhdistää turvallisesti pullojen palauttajat ja kerääjät. Sovelluksen avulla voi palauttaa tyhjät panttipullot ja -tölkit omalta kotiovelta, ilman että pulloja täytyy itse viedä kauppaan. Myynti-ilmoitusten jättäminen sovellukseen on maksutonta. Yksittäisiä pulloja ja tölkkejä ei tarvitse laskea eikä niiden tarkkaa lukumäärää tarvitse tietää.'
      },
      gb: {
        title: 'Canit',
        desc: 'The Canit mobile app securely connects bottle returners and collectors. The application allows you to return empty deposit bottles and cans from your door without having to take the bottles to the store yourself. Submitting sales announcements to the app is free. Individual bottles and cans do not need to be counted and their exact number need not be known.'
      },
      se: {
        title: 'Canit',
        desc: ''
      }
    },
    link: 'https://www.canit-app.com/fi',
    img_src: 'img/canit.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Senioripalvelu Luonasi',
        desc: 'Senioripalvelut Luonasi on ikäihmisten ja heidän läheistensä apuna erityisesti nyt kun kotikaranteeni rajoittaa normaalia elämää. Palvelu huolehtii, että ikäihminen saa tarvitsemansa avun ja huolenpidon, autamme kauppa-, apteekki- ja muissa asioinneissa. Tällä hetkellä tarjotaan myös keskusteluseuraa asiakkaille, tarvittaessa myös puhelimitse.'
      },
      gb: {
        title: 'Senioripalvelu Luonasi',
        desc: 'Senior Services Luonasi is there to help the elderly and their loved ones, especially now when quarantine limits normal life. The service ensures that the elderly receive the help and care they need, such as assisting in trade, pharmacy and other matters. At the moment, a chat company is also offered to customers, if necessary by telephone.'
      },
      se: {
        title: 'Senioripalvelu Luonasi',
        desc: ''
      }
    },
    link: 'https://luonasi.fi/',
    img_src: 'img/luonasi.png',
    locations: [
      'Espoo', 'Vantaa', 'Helsinki', 'Kirkkonummi', 'Lohja', 'Inkoo'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kirjaston Kulttuuribunkkeri',
        desc: 'Keskustele kulttuurista ja mistä ikinä keksit kirjaston henkilökunnan avustuksella. Koe myös yhteisöllinen lukeminen, leffan katselu, musiikin kuuntelu, pelaaminen, vierailijahaastattelu... "Kulttuuria yhdessä - erillämme."'
      },
      gb: {
        title: 'Kirjaston Kulttuuribunkkeri',
        desc: 'Discuss the culture and whatever you come up with with the help of the library staff. Also experience community reading, watching a movie and listening to music.'
      },
      se: {
        title: 'Kirjaston Kulttuuribunkkeri',
        desc: ''
      }
    },
    link: 'https://discordapp.com/invite/fFgZzhE',
    img_src: 'img/kulttuuribunkkeri.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Oulun Keskus apteekki',
        desc: 'Etäasiointi apteekissa puhelimitse ja Remomedi-sovelluksella sekä kotiinkuljetukset.'
      },
      gb: {
        title: 'Oulun Keskus apteekki',
        desc: 'Remote transaction in a pharmacy by phone and Remomedi application, as well as home deliveries.'
      },
      se: {
        title: 'Oulun Keskus apteekki',
        desc: ''
      }
    },
    link: 'https://www.oulunkeskusapteekki.fi/',
    img_src: 'img/oulunkeskusapteekki.png',
    locations: [
      'Oulu'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Menumat Oy',
        desc: 'Menumat Oy tarjoaa nopean avun kotiruokailuun - RehtiLunssi -ateriat.'
      },
      gb: {
        title: 'Menumat Oy',
        desc: 'Menumat Oy offers quick help with home dining - RehtiLunssi meals.'
      },
      se: {
        title: 'Menumat Oy',
        desc: ''
      }
    },
    link: 'https://www.menumat.fi',
    img_src: 'img/menumat.png',
    locations: [
      'Vantaa'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Stage - kulttuuripaja verkossa',
        desc: 'Kulttuuripaja Stage on verkossa toimiva kohtaamispaikka, yhteisö ja työtila. Esittele Stagessa omaa taidettasi, jaa osaamistasi ja kannusta muita. Osallistu ammattilaisten ohjaamiin tapaamisiin, tapahtumiin, kilpailuihin ja sparraukseen. Liity Stageen!        '
      },
      gb: {
        title: 'Stage - kulttuuripaja verkossa',
        desc: 'The Stage Culture Workshop is an online meeting place, community and workspace. Showcase your own art on Stage, share your skills and encourage others. Attend professionally led meetings, events, competitions and sparring. Join Stage!'
      },
      se: {
        title: 'Stage - kulttuuripaja verkossa',
        desc: ''
      }
    },
    link: 'http://mentalbeautyrecords.fi/kulttuuripaja-stage/ ',
    img_src: 'img/mentalbeauty.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Plywood Print',
        desc: 'Ainutlaatuiset koivuvaneritaulut kuvistasi toimitettuna Postin Kotipakettina suoraan kotiovellesi. Tue kotimaista ja sisusta kotiasi kätevästi omalta sohvaltasi! Plywood Print on erikoistunut kuvien tulostamiseen kotimaiselle koivuvanerille. Teetä omista valokuvistasi ainutlaatuiset vaneritaulut tai valitse Plywood Print Collectionista juuri omaan sisustukseesi parhaiten sopiva printti.'
      },
      gb: {
        title: 'Plywood Print',
        desc: 'Make unique plywood boards from your own photos or choose from the Plywood Print Collection the print that best suits your interior.'
      },
      se: {
        title: 'Plywood Print',
        desc: ''
      }
    },
    link: 'https://plywoodprint.com/',
    img_src: 'img/plywoodprint.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'JH Tukku',
        desc: 'JH Tukku on Lappeenrantalainen antennien ja elektroniikan erikoisliike. Toiminnan periaatteena on hyvän asiakaspalvelun lisäksi hyvä ammatillinen osaaminen ja laadukkaat tuotteet, sekä toimitusvarmuus.'
      },
      gb: {
        title: 'JH Tukku',
        desc: 'JH Tukku is a specialty antenna and electronics store in Lappeenranta. In addition to good customer service, the principle of operations is good professional know-how and high-quality products, as well as delivery reliability.'
      },
      se: {
        title: 'JH Tukku',
        desc: ''
      }
    },
    link: 'https://jhtukku.fi/',
    img_src: 'img/jhtukku.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Zildren',
        desc: 'Apua ja tukea perheille lastenhoidon järjestämisen avulla.'
      },
      gb: {
        title: 'Zildren',
        desc: 'Zildren helps to support families by arranging childcare.'
      },
      se: {
        title: 'Zildren',
        desc: ''
      }
    },
    link: 'https://www.zildren.com/',
    img_src: 'img/zildren.png',
    locations: [
      'National'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Pinballboys',
        desc: 'Flipperi kotiin koko perheen iloksi! TARJOUS alk. 179 €/kk. Pidä tauko kännykän ja tietokoneen ruudulta – ole kotisi Grand Champion! Sis. kuljetuksen pääkaupunkiseudulla.'
      },
      gb: {
        title: 'Pinballboys',
        desc: 'Now you can rent a pinball machine to your home for the whole family to enjoy! OFFER from 179 € / month. Take a break from your cell phone and computer screen - be your home Grand Champion! Including transport in Helsinki area.'
      },
      se: {
        title: 'Pinballboys',
        desc: ''
      }
    },
    link: 'https://www.pinballboys.com/vuokraa-flipperi-kotiin',
    img_src: 'img/pinballboys.png',
    locations: [
      'Helsinki'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Piilola.fi',
        desc: 'Kukkien toimitus kotiin ja lahjaksi.'
      },
      gb: {
        title: 'Piilola.fi',
        desc: 'Flowers home-delivered.'
      },
      se: {
        title: 'Piilola.fi',
        desc: ''
      }
    },
    link: 'https://piilola.fi',
    img_src: 'img/piilola.png',
    locations: [
      'Helsinki'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Suomen Urheiluhierontakeskus',
        desc: 'Laadukasta ja vaivatonta hierontaa, fysioterapiaa ja osteopatiaa. Nyt uutuutena myös online-palvelut videon välityksellä. Verkkokaupasta saatavalla lahjakortilla ilahdutat läheistäsi merkkipäivänä! Toimimme 8 toimipisteessä Espoossa, Helsingissä ja Kirkkonummella sekä verkossa.'
      },
      gb: {
        title: 'Suomen Urheiluhierontakeskus',
        desc: 'Quality and effortless massage, physiotherapy and osteopathy. Online services now also available. With the gift card available from the online store, you will delight your loved ones on the anniversary! 8 offices in Espoo, Helsinki and Kirkkonummi, as well as online.'
      },
      se: {
        title: 'Suomen Urheiluhierontakeskus',
        desc: ''
      }
    },
    link: 'www.suhk.fi',
    img_src: 'img/suhk.png',
    locations: [
      'Espoo', 'Helsinki', 'Kirkkonummi'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Rotuaarin verkkoapteekki',
        desc: 'Rotuaarin apteekki tarjoaa kotiinkuljetuspalvelua korkeintaan 25 kilometrin päähän Oulun keskustasta. Riskiryhmälle ilmainen kuljetus korkeintaan 4 km päähän. Muualle useita toimitusvaihtoehtoja.'
      },
      gb: {
        title: 'Rotuaarin verkkoapteekki',
        desc: 'Rotuaari Pharmacy offers a home delivery service up to 25 kilometers from the center of Oulu. Free transport for groups at risk up to 4 km away. Elsewhere, several delivery options.'
      },
      se: {
        title: 'Rotuaarin verkkoapteekki',
        desc: ''
      }
    },
    link: 'https://rotuaarinverkkoapteekki.fi/fi/',
    img_src: 'img/rotuaarinverkkoapteekki.png',
    locations: [
      'Oulu'
    ],
    category: 'Palvelut'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Ravintola Ullan Krouvi',
        desc: 'Ravintola tarjoaa annoksilleen take away-madollisuuden.'
      },
      gb: {
        title: 'Ravintola Ullan Krouvi',
        desc: 'The restaurant offers take-away food.'
      },
      se: {
        title: 'Ravintola Ullan Krouvi',
        desc: ''
      }
    },
    link: 'https://www.ullankrouvi.fi',
    img_src: 'img/ullankrouvi.png',
    locations: [
      'Kuopio'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kulttuuria kodeissa',
        desc: 'Jaa oma ideasi poikkeusolojen kulttuuriharrastuksestasi Kulttuuria kodeissa -kampanjasivulla ja osallistu palkintojen arvontaan.'
      },
      gb: {
        title: 'Kulttuuria kodeissa',
        desc: 'Share your own idea of ​​your exceptional cultural hobby on the Culture in Homes campaign page and enter the prize draw.'
      },
      se: {
        title: 'Kulttuuria kodeissa',
        desc: ''
      }
    },
    link: 'https://www.naantali.fi/fi/uutiset/kulttuuria-kodeissa-millaista-kulttuuria-sina-harrastat-kotona-vinkkaa-siita-muillekin',
    img_src: 'img/naantalikulttuuria.png',
    locations: [
      'Naantali'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Karanteeniklubi',
        desc: 'Keikkastriimauksia, esitystallenteita, virtuaalinäyttelyitä ja muita tapahtumia.'
      },
      gb: {
        title: 'Karanteeniklubi',
        desc: 'Gig streamings, performance recordings, virtual exhibitions and other events.'
      },
      se: {
        title: 'Karanteeniklubi',
        desc: ''
      }
    },
    link: 'https://www.facebook.com/groups/karanteeniklubi/',
    img_src: 'img/karanteeniklubi.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kulttuuria kotisohville',
        desc: 'Museokortin perustama ryhmä digitaalisille kulttuurivinkeille.'
      },
      gb: {
        title: 'Kulttuuria kotisohville',
        desc: 'A group set up by the Museum Card for digital cultural tips.'
      },
      se: {
        title: 'Kulttuuria kotisohville',
        desc: ''
      }
    },
    link: 'https://www.facebook.com/groups/kulttuuriakotisohville/',
    img_src: 'img/kulttuuriakotishvalle.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Taideyliopiston kulttuuria kotisohvalle',
        desc: 'Taideyliopiston podcasteja, konserttitallenteita ja muita sisältöjä.'
      },
      gb: {
        title: 'Taideyliopiston kulttuuria kotisohvalle',
        desc: 'University of the Arts Helsinki podcasts, concert recordings and other content.'
      },
      se: {
        title: 'Taideyliopiston kulttuuria kotisohvalle',
        desc: ''
      }
    },
    link: 'https://www.uniarts.fi/taidetta-kotiin-koronaviruksen-aikaan/',
    img_src: 'img/taidettakotiin.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'ARTE Opera Season',
        desc: 'Oopperatallenteita 23 oopperatalosta ympäri maailmaa.'
      },
      gb: {
        title: 'ARTE Opera Season',
        desc: 'Opera recordings from 23 opera houses around the world.'
      },
      se: {
        title: 'ARTE Opera Season',
        desc: ''
      }
    },
    link: 'https://www.arte.tv/en/videos/RC-016485/arte-opera-season/',
    img_src: 'img/arte.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Berliinin filharmonikot',
        desc: 'Konserttitallenteita ja livestriimauksia.'
      },
      gb: {
        title: 'Berliner Philharmoniker',
        desc: 'Concert recordings and live streamings.'
      },
      se: {
        title: 'Berliner Philharmoniker',
        desc: ''
      }
    },
    link: 'https://www.digitalconcerthall.com/en/live',
    img_src: 'img/digitalconcerthall.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Helsinki City Orchestra',
        desc: 'Helsingin kaupunginorkesterin konserttitallenteita ja livestriimauksia.'
      },
      gb: {
        title: 'Helsinki City Orchestra',
        desc: 'Helsinki City Orchestra concert recordings and live streamings.'
      },
      se: {
        title: 'Helsinki City Orchestra',
        desc: ''
      }
    },
    link: 'https://helsinginkaupunginorkesteri.fi/fi/hko-screen',
    img_src: 'img/helsinginkaupunginorkesteri.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Koronakonsertit',
        desc: 'Kattava listaus nettilivekeikoista.'
      },
      gb: {
        title: 'Koronakonsertit',
        desc: 'Comprehensive list of online live gigs.'
      },
      se: {
        title: 'Koronakonsertit',
        desc: ''
      }
    },
    link: 'https://www.koronakonsertit.fi/',
    img_src: 'img/koronakonsertit.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Lahti Sinfonia',
        desc: 'Useita konserttitallenteita.'
      },
      gb: {
        title: 'Lahti Sinfonia',
        desc: 'Several concert recordings.'
      },
      se: {
        title: 'Lahti Sinfonia',
        desc: ''
      }
    },
    link: 'https://classiclive.com/',
    img_src: 'img/classiclive.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'The Metropolitan Opera, New York',
        desc: 'Useita oopperatallenteita.'
      },
      gb: {
        title: 'The Metropolitan Opera, New York',
        desc: 'Several opera recordings.'
      },
      se: {
        title: 'The Metropolitan Opera, New York',
        desc: ''
      }
    },
    link: 'https://www.metopera.org/user-information/nightly-met-opera-streams/',
    img_src: 'img/metopera.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Radion sinfoniaorkesteri',
        desc: 'RSO:n konsertit Yle Areenassa.'
      },
      gb: {
        title: 'Radion sinfoniaorkesteri',
        desc: 'RSO concerts at Yle Areena.'
      },
      se: {
        title: 'Radion sinfoniaorkesteri',
        desc: ''
      }
    },
    link: 'https://areena.yle.fi/1-3217809',
    img_src: 'img/radionsinfoniaorkesteri.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Tapiola Sinfonietta',
        desc: 'Konserttitallenteita ja livestriimauksia.'
      },
      gb: {
        title: 'Tapiola Sinfonietta',
        desc: 'Concert recordings and live streamings.'
      },
      se: {
        title: 'Tapiola Sinfonietta',
        desc: ''
      }
    },
    link: 'https://www.tapiolasinfonietta.fi/news/katso-maksuttomia-strimauksia-verkossa/',
    img_src: 'img/tapiolansinfonietta.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Wienin valtionooppera ',
        desc: 'Useita oopperatallenteita.'
      },
      gb: {
        title: 'Wiener Staatsopera',
        desc: 'Several opera recordings.'
      },
      se: {
        title: 'Wiener Staatsopera',
        desc: ''
      }
    },
    link: 'https://www.staatsoperlive.com/',
    img_src: 'img/staatsoperalive.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Viddla-suoratoistopalvelu',
        desc: 'Palvelun avulla yleiset kirjastot pystyvät tarjoamaan digitaalisia elokuvia lainaajilleen. Tarjolla olevat elokuvat on valittu Kirjastopalvelun informaatikkojen toimesta pyrkien hyvään laatuun, sisältöjen monipuolisuuteen ja siihen, että tarjolla on sisältöä eri katsojaryhmille.'
      },
      gb: {
        title: 'Viddla on-demand video',
        desc: 'The service will allow public libraries to offer digital movies to their borrowers. The films on offer have been selected by the library service\'s IT staff, striving for good quality, diversity of content and the availability of content for different groups of viewers.'
      },
      se: {
        title: 'Viddla on-demand video',
        desc: ''
      }
    },
    link: 'https://www.viddla.fi/',
    img_src: 'img/viddla.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Ateneum: Suomen taiteen tarina -lyhytelokuvia',
        desc: 'Suomen taiteen tarina -lyhytelokuvat näyttävät tutut klassikot uudessa valossa.'
      },
      gb: {
        title: 'Ateneum',
        desc: 'The short film The Story of Finnish Art shows familiar classics in a new light.'
      },
      se: {
        title: 'Ateneum',
        desc: ''
      }
    },
    link: 'https://ateneum.fi/nayttelyt-nyt/suomen-taiteen-tarina-lyhytelokuvat/',
    img_src: 'img/ateneum.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Google Arts & Culture',
        desc: 'Satojen museoiden ja gallerioiden teoksia.'
      },
      gb: {
        title: 'Google Arts & Culture',
        desc: 'Works by hundreds of museums and galleries.'
      },
      se: {
        title: 'Google Arts & Culture',
        desc: ''
      }
    },
    link: 'https://artsandculture.google.com/',
    img_src: 'img/googleartsandculture.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Keski-Uudenmaan museoiden Markalla merkkareita -sivusto',
        desc: 'Tietoa, tarinoita, tehtäviä, valokuvia ja muuta mukavaa lapsuudesta 1970-luvulla.'
      },
      gb: {
        title: 'Markalla Merkkareita',
        desc: 'Information, stories, assignments, photos and more about nice childhood in the 1970s.'
      },
      se: {
        title: 'Markalla Merkkareita',
        desc: ''
      }
    },
    link: 'https://www.markallamerkkareita.fi/',
    img_src: 'img/markallamerkkareita.png',
    locations: [
      'National'
    ],
    category: 'Viihde'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Anne\'s Vege Oy',
        desc: 'Anne\'s Vege tekee ma-pe kotiinkuljetuksia kerran päivässä, klo 12.00. Myös noutopalvelu klo 11.00-16.30. Kaikki ruoka vegaanista ja gluteenitonta.'
      },
      gb: {
        title: 'Anne\'s Vege Oy',
        desc: 'Anne’s Vege does home deliveries Mon-Fri once a day, 12 noon. There is also a pick-up service from 11:00 to 16:30. All food vegan and gluten free.'
      },
      se: {
        title: 'Anne\'s Vege Oy',
        desc: ''
      }
    },
    link: 'https://Annesvege.fi',
    img_src: 'img/annesvege.png',
    locations: [
      'Espoo'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Tyylikotka',
        desc: 'Yksilölliset kalusteet kotiin ja yrityksiin.Satoja malleja ja kankaita, paljon värejä.'
      },
      gb: {
        title: 'Tyylikotka',
        desc: 'Individual furniture for home and business. Hundreds of designs and fabrics, lots of colors.'
      },
      se: {
        title: 'Tyylikotka',
        desc: ''
      }
    },
    link: 'https://www.tyylikotka.fi',
    img_src: 'img/tyylikotka.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Mariel Design',
        desc: 'Vuonna 2010 perustettu perheyritys Mariel Design valmistaa uniikkeja koruja'
      },
      gb: {
        title: 'Mariel Design',
        desc: 'Founded in 2010, the family business Mariel Design manufactures unique jewelry'
      },
      se: {
        title: 'Mariel Design',
        desc: ''
      }
    },
    link: 'https://holvi.com/shop/marieldesign/',
    img_src: 'img/marieldesign.png',
    locations: [
      'National'
    ],
    category: 'Verkkokauppa'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Baba Foods Ruokakassi ',
        desc: 'Käsintehtyä kasvisruokaa kotiinkuljetettuna Helsingissä.'
      },
      gb: {
        title: 'Baba Foods Ruokakassi ',
        desc: 'Handmade vegetarian food delivered home.'
      },
      se: {
        title: 'Baba Foods Ruokakassi ',
        desc: ''
      }
    },
    link: 'https://www.baba.fi',
    img_src: 'img/baba.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Restaurant Jord',
        desc: 'Pohjoismaista luomuruokaa, esimerkiksi tartaria, frittimuikkuja ja tyrnijäädykettä, päivällisaikaan tiistaista lauantaihin. Tilaukset puhelimitse ja nouto paikan päältä.'
      },
      gb: {
        title: 'Restaurant Jord',
        desc: 'Nordic organic food, such as tartar, deep-fried vendace and sea buckthorn ice cream, for dinner from Tuesday to Saturday. Orders by phone and pick-up on site.'
      },
      se: {
        title: 'Restaurant Jord',
        desc: ''
      }
    },
    link: 'http://restaurantjord.fi/?lang=en',
    img_src: 'img/jord.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Ravintola Wanha Mylly',
        desc: 'Lähes kaikkia kartanomiljöössä sijaitsevan ravintolan ruokia saa take away -annoksina, ensi viikolla ravintolassa siirrytään supistettuun listaan. Tilaukset puhelimitse ja nouto paikan päältä.'
      },
      gb: {
        title: 'Restaurant Wanha Mylly',
        desc: 'Almost all the dishes of the restaurant located in the manor environment are available as take-away portions, next week the restaurant will move to a reduced list. Orders by phone and pick-up on site.'
      },
      se: {
        title: 'Restaurant Wanha Mylly',
        desc: ''
      }
    },
    link: 'https://vanhamylly.fi/',
    img_src: 'img/wanhamylly.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Demo',
        desc: 'Michelin-ravintola myy koronaepidemian aikana tähtikokin ruokakassia, jonka esivalmistelluista aineksista asiakas kokkaa neljän ruokalajin aterian kotona, 65 e/hlö. Nouto tai kotiinkuljetus.'
      },
      gb: {
        title: 'Demo',
        desc: 'During the corona epidemic, the Michelin restaurant sells the star chef\'s food bag, from the prepared ingredients of which the customer cooks a four-course meal at home, 65 e / person. Pick up or drop off.'
      },
      se: {
        title: 'Demo',
        desc: ''
      }
    },
    link: 'https://www.restaurantdemo.fi/',
    img_src: 'img/restaurantdemo.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Ravintola Villd',
        desc: 'Take awayna saa Vöneristä tehtyä ”kebabia riisillä” ja ”käristystä muusilla”, gluteenittomat versiot tehdään tofusta tai suppilovahveroista. Villd toimittaa ruokaa lähialueelle ilmaiseksi. Tilaukset puhelimitse, maksu MobilePaylla.'
      },
      gb: {
        title: 'Restaurant Villd',
        desc: 'As take away you can get “kebab with rice” made from Vöner and “yeast with muses”, gluten-free versions are made from tofu or funnel wafers. Villd delivers food to the surrounding area free of charge. Orders by phone, payment with MobilePay.'
      },
      se: {
        title: 'Restaurant Villd',
        desc: ''
      }
    },
    link: 'https://www.villd.fi/',
    img_src: 'img/villd.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Inari',
        desc: 'Oman verkkoalustan perustanut Michelin-ravintola myy noutoruokana muun muassa klassikkoaan eli Pekingin ankkaa korealaisittain tarjottuna, 30 e/2 annosta. Tilaukset theplatform.pro.'
      },
      gb: {
        title: 'Inari',
        desc: 'A Michelin star restaurant, which has set up its own online platform, sells as a takeaway, among other things, its classic, the Peking duck, offered in Korean, 30 e / 2 servings. Orders theplatform.pro.'
      },
      se: {
        title: 'Inari',
        desc: ''
      }
    },
    link: 'https://www.restaurantinari.com/',
    img_src: 'img/inari.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Kuurna',
        desc: 'Kaupungin parhaisiin bistroihin lukeutuva ravintola myy kolmen ruokalajin kokonaisuutta, 30 e, torstaista-lauantaihin klo 15–21 ja sunnuntaisin klo 15–20. Ravintola antaa verkkosivuillaan ruuille viinisuositukset Alkon valikoimista löytyvillä viineillä. Tilaukset puhelimitse tai sähköpostilla, nouto tai kotiinkuljetus kantakaupungin alueella.'
      },
      gb: {
        title: 'Kuurna',
        desc: 'Kuurna, one of the best bistros in the city, sells a three-course package, 30 euros, from Thursday to Saturday from 3 pm to 9 pm and on Sundays from 3 pm to 8 pm. The restaurant provides wine recommendations for its dishes on its website with wines found in Alko\'s selections. Orders by phone or email, pick-up or drop-off in the downtown area.'
      },
      se: {
        title: 'Kuurna',
        desc: ''
      }
    },
    link: 'https://www.kuurna.fi/',
    img_src: 'img/kuurna.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Finlandia Caviar',
        desc: 'Piskuisen ravintolan verkkokaupasta voi tilata mätilajitelman, noutaa sen myymälästä tai tilata kotiinkuljetuksella kantakaupungin alueelle.'
      },
      gb: {
        title: 'Finlandia Caviar',
        desc: 'You can order a rust assortment from the small restaurant\'s online store, pick it up from the store or order it by home delivery to the downtown area.'
      },
      se: {
        title: 'Finlandia Caviar',
        desc: ''
      }
    },
    link: 'https://www.finlandiacaviar.fi/fi/',
    img_src: 'img/finlandiacaviar.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Ônam Vietnamese Cuisine',
        desc: 'Vietnamin keittiön antimia, kuten pho-keittoa, 11 e, kotiin kuljetettuna tai ravintolasta noudettuna. Tilaukset puhelimitse.'
      },
      gb: {
        title: 'Ônam Vietnamese Cuisine',
        desc: 'Vietnamese cuisine, such as pho soup, 11e, delivered home or picked up from a restaurant. Orders by phone.'
      },
      se: {
        title: 'Ônam Vietnamese Cuisine',
        desc: ''
      }
    },
    link: 'https://www.onam.fi/',
    img_src: 'img/onam.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Locanda Scappi',
        desc: 'Italialaisten valmistamia pastaruokia ja muita saapasmaan herkkuja noutona. Tilaukset sähköpostilla, puhelimitse, Instagramissa tai Facebookissa.'
      },
      gb: {
        title: 'Locanda Scappi',
        desc: 'Italian pasta dishes and other booty delicacies to pick up. Orders by email, phone, Instagram or Facebook.'
      },
      se: {
        title: 'Locanda Scappi',
        desc: ''
      }
    },
    link: 'https://www.locandascappi.fi/',
    img_src: 'img/scappi.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Blue Peter',
        desc: 'Lauttasaaren klassikkoravintola toimittaa päivittäin vaihtuvia lounaita, 7 e, jallulihapullia, 9 e, lasagnea ja burgereita kotiinkuljetuksella. Tilaukset puhelimitse, maksu MobilePaylla.'
      },
      gb: {
        title: 'Blue Peter',
        desc: 'Lauttasaari\'s classic restaurant serves daily changing lunches, 7 e, leg meatballs, 9 e, lasagna and burgers with home delivery. Orders by phone, payment with MobilePay.\n'
      },
      se: {
        title: 'Blue Peter',
        desc: ''
      }
    },
    link: 'http://bluepeter.fi/',
    img_src: 'img/bluepeter.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Chapter',
        desc: 'Fine dining -ravintolan frittikanaa, cevicheä ja korvapuusteja (coronapuusti-nimellä) noutona tai kotiinkuljetuksella kantakaupunkiin tiistaista lauantaihin klo 12–20. Tilaustiedot löytyvät ravintolan verkkosivulta.'
      },
      gb: {
        title: 'Chapter',
        desc: 'The fine dining restaurant’s deep-fried chicken, ceviche and cinnamon buns  (under the name coronapuusti) can be picked up or taken home to the main town from Tuesday to Saturday from 12 noon to 8 pm. Ordering information can be found on the restaurant\'s website.'
      },
      se: {
        title: 'Chapter',
        desc: ''
      }
    },
    link: 'https://www.chapter.fi/',
    img_src: 'img/chapter.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Ravintola Jura',
        desc: 'Bistrotyylisen Juran kasvispainotteinen menu muuttuu sesongin mukaan. Tällä viikolla lounaslistalla oli tarjolla kaksi kasvis- ja kaksi lihavaihtoehtoa. '
      },
      gb: {
        title: 'Restaurant Jura',
        desc: 'The bistro-style Jura’s vegetable-focused menu changes according to the season. This week, the lunch menu offered two vegetarian and two meat options.'
      },
      se: {
        title: 'Restaurant Jura',
        desc: ''
      }
    },
    link: 'https://www.ravintolajura.fi/en/',
    img_src: 'img/jura.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Wino',
        desc: 'Ravintola ja alkuviinibaari Wino tarjoaa japanilaishenkistä take away -lounasta. Sushin lisäksi tarjolla on misokeittoa ja vaihtuva pääruoka, tällä viikolla se oli misoglaseeratut ribsit sobanuudeleilla.'
      },
      gb: {
        title: 'Wino',
        desc: 'Wino Restaurant and Early Wine Bar offers a Japanese-inspired take-away lunch. In addition to sushi, there is miso soup and a changing main course, this week it was misoglazed ribs with soba noodles.'
      },
      se: {
        title: 'Wino',
        desc: ''
      }
    },
    link: 'https://www.wino.fi/',
    img_src: 'img/wino.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Ora',
        desc: 'Sasu Laukkosen Michelin-ravintola Ora ryhtyi tekemään take away -sushibokseja. 15 euroa maksavassa sushilaatikossa on 14 sushia, ja täytteet vaihtuvat päivittäin.'
      },
      gb: {
        title: 'Ora',
        desc: 'Sasu Laukkonen\'s Michelin restaurant Ora started making take-away sushi boxes. The sushi box, which costs 15 euros, has 14 sushi, and the fillings change daily.'
      },
      se: {
        title: 'Ora',
        desc: ''
      }
    },
    link: 'http://orarestaurant.fi/',
    img_src: 'img/ora.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Trattoria Sogno',
        desc: 'Trattoria Sognosta saa take awayna italialaista ruokaa. Ravintola kehottaa kertomaan tilausta tehdessä, aikooko ruuan syödä heti vai lämmittää myöhemmin, ruoka valmistetaan sen mukaan.'
      },
      gb: {
        title: 'Trattoria Sogno',
        desc: 'Trattoria Sogno serves take awayna Italian food. When ordering, the restaurant will tell you whether you plan to eat the food immediately or heat it up later, the food will be prepared accordingly.'
      },
      se: {
        title: 'Trattoria Sogno',
        desc: ''
      }
    },
    link: 'https://www.trattoriasogno.fi/',
    img_src: 'img/sogno.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Juuri',
        desc: 'Suomalaista ruokaa kotimaisista aineksista kokkaava Juuri toimittaa ruokaa lähialueelle ilmaiseksi. Tilaukset pitää tehdä edellisenä iltana kello 20 mennessä puhelimitse tai sähköpostilla.'
      },
      gb: {
        title: 'Juuri',
        desc: 'Juuri, who cooks Finnish food from domestic ingredients, delivers food to the surrounding area free of charge. Orders must be placed by 8pm the previous night by phone or email.'
      },
      se: {
        title: 'Juuri',
        desc: ''
      }
    },
    link: 'https://juuri.fi/',
    img_src: 'img/juuri.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Penelope',
        desc: 'Hans Välimäen Penèlopesta saa kotiruokaa sekä ravintolan listalta tuttuja annoksia. Tilaukset puhelimitse tai sähköpostitse, nouto paikan päältä. Kotiinkuljetus kantakaupungin alueelle, kuljetusmaksu 5 euroa.'
      },
      gb: {
        title: 'Penelope',
        desc: 'Hans Välimäki\'s Penèlope offers home-cooked food and familiar dishes from the restaurant\'s list. Orders by phone or e-mail, pick-up on site. Home delivery to the downtown area, transport fee 5 euros.'
      },
      se: {
        title: 'Penelope',
        desc: ''
      }
    },
    link: 'https://ravintolapenelope.fi/',
    img_src: 'img/penelope.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'The Bull and The Firm',
        desc: 'The Bull and The Firmin lounasmenussa on ollut tähän mennessä muun muassa kulhoruokia ja leipiä. Kotiinkuljetus lähialueelle, kuljetusmaksu 4 euroa. Jos haluaa ruuan suoraan kotiin, tilaus puhelimitse ja maksu MobilePaylla.'
      },
      gb: {
        title: 'The Bull and The Firm',
        desc: 'The Bull and The Company’s lunch menu has so far included bowls and breads, among other things. Home delivery to the surrounding area, transport fee 4 euros. If you want food straight home, order by phone and pay with MobilePay.'
      },
      se: {
        title: 'The Bull and The Firm',
        desc: ''
      }
    },
    link: 'https://www.facebook.com/thebullandthefirm/',
    img_src: 'img/thebull.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Hotel Kämp, Brasserie',
        desc: 'Legendaarisen Kämp-hotellin huonepalvelu laajenee kaikille. Listalla on ainakin suosittu burgeri, jossa ranskalaiset on vaihdettu kuljetuksen kestäviin sipseihin. Myös kaviaaria löytyy halukkaille. Ravintolan menu tulee maanantaina 30.3. saataville lähes kokonaisuudessaan, ja myös kotiinkuljetus käynnistyy silloin. Tilaus puhelimitse, ruuat voi noutaa paikan päältä.'
      },
      gb: {
        title: 'Hotel Kämp, Brasserie',
        desc: 'Room service at the legendary Kämp Hotel is expanding for everyone. On the list is at least the popular burger, where the French have been replaced with transport-resistant chips. Caviar is also available for those who wish. The restaurant menu will be on Monday 30.3. available almost in full, and home delivery will also start then. Order by phone, food can be picked up on site.'
      },
      se: {
        title: 'Hotel Kämp, Brasserie',
        desc: ''
      }
    },
    link: 'https://www.brasseriekamp.fi/',
    img_src: 'img/brasserie.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Paulette',
        desc: 'Ullanlinnan ranskalaisravintolasta voi hakea ruokaa ilman tilausta, sillä heillä on tiskissä valmiina lämpimiä ruokia ja salaatteja. Ravintolaan päästetään sisään vain kaksi ihmistä kerrallaan, jotta ihmiskontaktit voidaan minimoida. Päivän ruuat löytyvät myös ravintolan Facebook-sivulta, ja halutessaan ruuat voit tilata sen kautta tai puhelimitse.'
      },
      gb: {
        title: 'Paulette',
        desc: 'You can pick up food from the Ullanlinna French restaurant without an order, as they have hot dishes and salads ready at the counter. Only two people are admitted to the restaurant at a time to minimize human contact. The food of the day can also be found on the restaurant\'s Facebook page, and if you wish, you can order the food through it or by phone.'
      },
      se: {
        title: 'Paulette',
        desc: ''
      }
    },
    link: 'https://www.facebook.com/ravintolapaulette/',
    img_src: 'img/paulette.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Malaga Bar',
        desc: 'Jätkäsaaren rento ravintola myy mukaan lounasta 10.30–14. Tarjolla on muun muassa jallulihapullia, pastaa ja keittoja. Pääsiäisenä tilattavissa myös erikoismenu. Hinnat ja lounaslista löytyvät ravintolan verkkosivuilta.'
      },
      gb: {
        title: 'Malaga Bar',
        desc: 'Jätkäsaari\'s casual restaurant sells lunch from 10.30 am to 2 pm. Among other things, beef steaks, pasta and soups are available. A special menu can also be ordered for Easter. Prices and lunch list can be found on the restaurant\'s website.'
      },
      se: {
        title: 'Malaga Bar',
        desc: ''
      }
    },
    link: 'https://www.malagabar.fi/',
    img_src: 'img/malagabar.png',
    locations: [
      'Helsinki'
    ],
    category: 'Ruoka'
  },
  {
    id: '',
    langs: {
      fi: {
        title: 'Juristi tukena',
        desc: 'Joukko Suomalaisia juristeja tarjoaa ilmaista puhelinneuvontaa koronakriisin keskellä painiskeleville yrittäjille.'
      },
      gb: {
        title: 'Juristi tukena',
        desc: 'A number of Finnish lawyers offer free telephone advice to entrepreneurs struggling in the midst of a corona crisis.'
      },
      se: {
        title: 'Juristi tukena',
        desc: ''
      }
    },
    link: 'https://www.juristittukena.fi',
    img_src: 'img/juristittukena.png',
    locations: [
      'National'
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
