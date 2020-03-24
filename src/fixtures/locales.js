const locales = [
    {
        lang: 'Suomi',
        value: 'fi'
    }, {
        lang: 'English',
        value: 'gb'
    }, {
        lang: 'Svenska',
        value: 'se'
    }
]

const menuLocalizations = {
    fi: {
        app: {
            serviceButton: 'Palvelut',
            contactButton: 'Ota yhteyttä',
            homeButton: 'Etusivu',
            mainTitle: 'Löydä apua karanteenissa',
            frontTitle1: 'Karanteenissa.fi kokoaa tietoa erilaisista tuote- ja palveluratkaisuista koronaviruksen vaikutusten ehkäisemiseksi.',
            frontTitle2: 'Pidetään toisistamme huolta. <3'
        },
        services: {
            categorySelector: 'Kategoria',
            locationSelector: 'Paikka',
        },
        home: {
            conversationButton: 'img/facebook-fi.png',
            tellUsButton: 'img/tellus-fi.png',
            tipsButton: 'img/tips-fi.png',
            facebookButton: 'Keskustele fb-ryhmässä',
            kauppaApuText: 'Oletko riskiryhmässä, kykenemätön käymään kaupassa tai tahdot auttaa? Tsekkaa '
        },
        contact: {
            description: 'Karanteenissa.fi on viiden opiskelijan tapa auttaa koronaviruksen aiheuttaman epävarmuuden aikana.',
            monetary: 'Sivuston ylläpitäjät eivät ansaitse rahaa sivustolla olevista linkeistä.',
            translate: ''
        },
        tips: {
            title1: 'Yrittäjille',
            point1: 'Hallitus linjasi 20.3.2020 pitämässään tiedotustilaisuudessaan lukuisista yrityksille suunnatuista koronakriisin lievitystoimista. ',
            point2: 'Business Finlandin rahoitusta lisättiin 150 miljoonalla eurolla. Business Finlandilta voi nyt hakea liiketoiminnan kehitysrahoitusta häiriötilanteissa. Rahoitus on suunnattu Suomessa toimiville pk- ja midcap-yrityksille, joiden liiketoiminta kärsii koronavirustilanteesta. Rahoitusta voi saada enintään 100 000 euroa, josta 70% voi saada etukäteisrahoituksena heti projektin alkuun.',
            point3: 'Hallitus päätti kasvattaa Finnveran valtuuksia 2 miljardista eurosta 12 miljardiin euroon. Finnveralta voi saada takauksen pankkilainoihin (takaus maksimissaan 80% lainan määrästä). Pankkilainaa haetaan pääsääntöisesti omasta pankista.',
            point4: 'Yritykset saavat kevennyksiä myös työeläkemaksuihin. Työeläkemaksujen eräpäiviä tullaan lykkäämään 3 kuukaudella (effective immediately), minkä lisäksi TyEL-maksuihin tulee myös 2,6%:n alennus (alkaen viimeistään 1.6.2020). Yritykset voivat myös hakea eläkeyhtiöltä eläkemaksujen takaisinlainausta, joihin Finnvera lupaa 80%:n takauksia. Olkaa yhteydessä omaan eläkerahoitusyhtiöönne.',
            point5: 'Yrittäjät saavat myös väliaikaisesti oikeuden työttömyyspäivärahaan. Tämä koskee myös itsensä työllistäjiä ja freelancer-yrittäjiä. Yrittäjien tulee perustella, miten koronaviruskriisi on heikentänyt yritystoimintaa. Tulot otetaan huomioon soviteltua työttömyysturvaa varten. Työttömyyspäivärahaa voi hakea TE-toimiston sivuilta.',
            point6: 'Yritys-Suomi Talousapu neuvontapalvelu auttaa, neuvoo ja ohjaa talous- ja maksuvaikeuksissa olevia pk-yrityksiä ja yrittäjiä ja sen tavoitteena on ehkäistä turhia konkursseja tarjoamalla alhaisen yhteydenottokynnyksen maksutonta talousneuvontaa puhelimitse.',
            title2: 'Lomautetuille työntekijöille',
            point11: 'Hallitus tiedotti 20.3.2020 pitämässään tiedotustilaisuudessa myös muutamista lomautettujen työntekijöiden taloudellista asemaa helpottavista toimista.',
            point12: 'Työttömyysturvan tasoa parannetaan väliaikaisesti poistamalla työttömyyden alun viisi omavastuupäivää, joilta etuutta ei normaalisti makseta.',
            point13: 'Työttömyysturvan työssäoloehtoa lyhennetään väliaikaisesti 13 viikkoon nykyisestä noin puolesta vuodesta. Muutos koskee kaikkia työsuhteita, jotka ovat alkaneet 1.1.2020 jälkeen.',
            point14: 'Jos joudut lomautetuksi:',
            point15: 'Ilmoittaudu työttömäksi työnhakijaksi TE-palveluiden asiointipalvelussa tai paikallisessa TE-toimistossasi.',
            point16: 'Kela tarjoaa hyvän pikaoppaan työttömyysturvan hakemiseen.',
            read: 'Lue lisää'
        }
    },
    se: {
        app: {
            serviceButton: 'Tjänster',
            contactButton: 'Kontakta oss',
            homeButton: 'Hem',
            mainTitle: 'Hjälp för din karantän',
            frontTitle1: 'Karanteenissa.fi samlar information om olika produkt- och servicelösningar för att förebygga coronavirusets verkningar.',
            frontTitle2: 'Låt oss ta hand om varandra. <3',
            translate: 'Svensk översättning: pauhu.fi / Linda Ahlblad'
        },
        services: {
            categorySelector: 'Kategori',
            locationSelector: 'Plats',
        },
        home: {
            searchButton: 'Sök',
            conversationButton: 'img/facebook-se.png',
            tellUsButton: 'img/tellus-se.png',
            tipsButton: 'img/tips-se.png',
            facebookButton: 'Tipsa och delta på Facebook!',
            kauppaApuText: 'Är du i riskgruppen, kan du inte handla eller vill hjälpa? Kolla: '
        },
        contact: {
            description: 'En webbplats av fem studerande till hjälp för den tid av osäkerhet som coronaviruset förorsakar.',
            monetary: 'Webbansvarig tjänar inte pengar på webbplatsens länkar.',
        },
        tips: {
            title1: 'För företagare',
            point1: 'Vid sin presskonferens den 20 mars 2020 presenterade regeringen ekonomiska stödåtgärder för företagare med anledning av coronakrisen.',
            point2: 'Business Finland fick en tilläggsbudget på 150 miljoner euro. Nu kan du ansöka om företagsfinansiering för interferenssituationen från Business Finland. Utvecklingsfinansieringen är avsedd för samtliga små och medelstora företag samt midcap-företag med verksamhet i Finland, vars nuvarande affärsverksamhet påverkas negativt av koronavirusläget. Företagen kan få finansiering på upp till 100 000 euro, varav 70 % kan erhållas som förhandsfinansiering vid projektstart.',
            point3: 'Regeringen beslutade att öka Finnveras mandat från två miljarder euro till 12 miljarder euro. Bankerna kan ge kredit med Finnvera som borgenär (för högst 80 % av lånebeloppet). I regel ansöker du om banklån hos din egen bank.',
            point4: 'Företagen får också sänkta arbetspensionsavgifter. Förfallodagarna för arbetspensionsavgifter kommer att skjutas upp med tre månader (med omedelbar verkan) och FöPL-försäkringens avgifter minskas med 2,6 % (senast från och med den 1 juni 2020). Företagen kan också ansöka om pensionsåtervinning hos sitt arbetspensionsförsäkringsbolag, för vilken Finnvera utlovar 80% borgen. Kontakta ditt eget arbetspensionsförsäkringsbolag.',
            point5: 'Företagare har även tillfälligt rätt till arbetslöshetsersättning. Detta gäller även enskilda näringsidkare och frilansare. Företagare bör motivera hur coronaviruskrisen har försvagat företagsverksamheten. Inkomster beaktas iakttas för jämkad arbetslöshetsförmån. Du kan ansöka om arbetslöshetsdagpenning på TE-byråns webbplats.',
            point6: 'FöretagsFinlands rådgivningstjänst Ekonomihjälpen erbjuder hjälp, rådgivning och handledning för små och medelstora företag samt företagare med betalningssvårigheter. Genom att erbjuda kostnadsfri telefonrådgivning med låg tröskel vill man förhindra onödiga konkurser.',
            title2: 'För permitterade arbetstagare',
            point11: 'Vid sin presskonferens den 20 mars 2020 presenterade regeringen även om några ekonomiska stödåtgärder för permitterade arbetstagare.',
            point12: 'Nivån på arbetslöshetsskyddet förbättras temporärt genom att avskaffa arbetslöshetsperiodens fem första självriskdagar för vilka förmånen normalt inte betalas ut.',
            point13: 'Arbetslöshetsskyddets arbetsvillkor förkortas temporärt till 13 veckor från nuvarande sex månader. Ändringen gäller alla anställningsförhållanden som inletts efter den 1 januari 2020.',
            point14: 'Om du blir permitterad:',
            point15: 'Registrera dig som arbetslös arbetssökande i TE-byråns e-tjänst eller på din lokala TE-byrå.',
            point16: 'FPA erbjuder en bra snabbguide om arbetslöshetsförmåner.',
            read: 'Läs mer'
        }
    },
    gb: {
        app: {
            contactButton: 'Contact us',
            serviceButton: 'Services',
            homeButton: 'Home',
            mainTitle: 'Find help in quarantine',
            frontTitle1: 'Karanteenissa.fi combines information about different services to minimize the effects of the Corona virus',
            frontTitle2: 'Let us take care of each other. <3'
        },
        services: {
            categorySelector: 'Category',
            locationSelector: 'Location',
        },
        home: {
            searchButton: 'Search',
            conversationButton: 'img/facebook-gb.png',
            tellUsButton: 'img/tellus-gb.png',
            tipsButton: 'img/tips-gb.png',
            facebookButton: 'Discuss on Facebook',
            kauppaApuText: 'Are you in a risk group, unable to get groceries or would like to help? Check out '
        },
        contact: {
            description: 'The web service has been created by five students that want to do everything they can to help.',
            monetary: 'We do not make any money from the website.',
            translate: ''
        }
    }
}

module.exports = { locales, menuLocalizations }