
const quizdata = [
  
    
   
      {
        id: 1,
        questionImages: [
         require("../../assets/germany/wolfsburg.png"),
         require("../../assets/belgium/royalchaleroi.png"),
         require("../../assets/france/lile.png"),
         require("../../assets/italy/napoli.png"),
          
        ],
        options: [ "Divock Origi", "Victor Osimhen","Didier Drogba","Ciro Immobile" ],
        answer: "Victor Osimhen"
      },
      {
        id: 2,
        questionImages: [
          require("../../assets/belgium/genk.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/germany/wolfsburg.png"),
          require("../../assets/England/mancity.png"),
        ],
        options: [ "Frank Lampard", "Raheem Sterling","Yaya Toure","Kevin De Bruyne" ],
        answer: "Kevin De Bruyne"
      },
      {
        id: 3,
        questionImages: [
          require("../../assets/England/WestHam.png"),
          require("../../assets/England/Liverpool.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/others/hebei.png"),
        ],
        options: ["Javier Mascherano", "Yossi Benayoun", "Alberto Moreno", "Fabio Aurelio"],
        answer: "Javier Mascherano"
      },
      {
        id: 4,
        questionImages: [
          require("../../assets/England/Arsenal.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/italy/as-roma.png"),
          require("../../assets/America/la-galaxy.png"),
        ],
        options: ["Tomas Rosicky", "William Gallas", "Darren Bent", "Ashley Cole"],
        answer: "Ashley Cole"
      },
      {
        id: 5,
        questionImages: [
          require("../../assets/others/seoul.png"),
          require("../../assets/germany/Hamburger.png"),
          require("../../assets/germany/bayer-leverkusen.png"),
          require("../../assets/England/tottenham.png"),
        ],
        options: ["Ivan Perisic", "Heung-Min Son", "Rafael Van Dar Vaart", "Clint Dempsey"],
        answer: "Heung-Min Son"
      },
      {
        id: 6,
        questionImages: [
          require("../../assets/Netherlands/gronigem.png"),
          require("../../assets/others/Celtic.png"),
          require("../../assets/England/Southampton.png"),
          require("../../assets/England/Liverpool.png"),
        ],
        options: ["Virgil van Dijk", "Luke Shaw", "Olivier Giroud", "Sol Campbell"],
        answer: "Virgil van Dijk"
      },
      {
        id: 7,
        questionImages: [
          require("../../assets/others/molde.png"),
          require("../../assets/others/salzburg.png"),
          require("../../assets/germany/dortmud.png"),
          require("../../assets/England/mancity.png"),
        ],
        options: ["Erling Haaland", "Marco Reus", "Mario Balotelli", "Jerome Boateng"],
        answer: "Erling Haaland"
      },
      {
        id: 8,
        questionImages: [
          require("../../assets/others/santos.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/france/psg.png"),
          require("../../assets/others/Al-hilal.png"),
        ],
        options: ["Erling Haaland", "Neymar Jr", "Mario Balotelli", "Jerome Boateng"],
        answer: "Neymar Jr"
      },
      {
        id: 9,
        questionImages: [
          require("../../assets/England/Southampton.png"),
          require("../../assets/England/tottenham.png"),
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/America/LAfc.png"),
        ],
        options: ["Robbie Kene", "Luka Modric", "David Beckham", "Gareth Bale"],
        answer: "Gareth Bale"
      },
      {
        id: 10,
        questionImages: [
          require("../../assets/England/wigan.png"),
          require("../../assets/England/hull.png"),
          require("../../assets/England/leiceter.png"),
          require("../../assets/England/Man-united.png"),
        ],
        options: ["Paul Konchesky", "Robert Huth", "Harry Maguire", "Ibrahima Konate"],
        answer: "Harry Maguire"
      },
      {
        id: 11,
        questionImages: [
          require("../../assets/England/Arsenal.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/portugal/sporting.png"),
          require("../../assets/Spain/real-betis.png"),
        ],
        options: ["Hector Bellerin", "Samir Nasri", "Oleksandr Zinchenko", "Jordi Alba"],
        answer: "Hector Bellerin"
      },
      {
        id: 12,
        questionImages: [
          require("../../assets/others/fluminese.png"),
          require("../../assets/italy/ac-milan.png"),
          require("../../assets/france/psg.png"),
          require("../../assets/England/chelsea.png"),
        ],
        options: ["Sergio Ramos", "Raphael Varane", "Thiago Silva", "Kalidou Koulibaly"],
        answer: "Thiago Silva"
      },
      {
        id: 13,
        questionImages: [
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/italy/juventus.png"),
          require("../../assets/England/Man-united.png"),
          require("../../assets/others/al-nasir.png"),
        ],
        options: ["David Beckam", "Cristiano Ronaldo", "Diego Forlan", "Rudd Van Nistelrooy"],
        answer: "Cristiano Ronaldo"
      },
      {
        id: 14,
        questionImages: [
          require("../../assets/italy/inter-milan.png"),
          require("../../assets/italy/ac-milan.png"),
          require("../../assets/italy/juventus.png"),
          require("../../assets/America/new-york-city.png"),
        ],
        options: ["Andrea Pirlo", "Samuel Eto'o", "Gennaro Gattuso", "Javier Zanetti"],
        answer: "Andrea Pirlo"
      },
      {
        id: 15,
        questionImages: [
          require("../../assets/others/basel.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/italy/as-roma.png"),
          require("../../assets/England/Liverpool.png"),
        ],
        options: ["Daniel Sturridge", "Ryan Babel", "Raheem Sterling", "Mohamed Salah"],
        answer: "Mohamed Salah"
      },
      {
        id: 16,
        questionImages: [
          require("../../assets/germany/nuremberg.png"),
          require("../../assets/germany/dortmud.png"),
          require("../../assets/England/mancity.png"),
          require("../../assets/Spain/barcelona.png"),
        ],
        options: ["Yaya Toure", "Ilkay Gundogan", "Claudio Bravo", "Denis Suarez"],
        answer: "Ilkay Gundogan"
      },
      {
        id: 17,
        questionImages: [
          require("../../assets/italy/udinese.png"),
          require("../../assets/italy/sampdoria.png"),
          require("../../assets/portugal/sporting.png"),
          require("../../assets/England/Man-united.png"),
        ],
        options: ["Diogo Dalot", "Ricardo Quaresma", "Bruno Fernandes", "Nani"],
        answer: "Bruno Fernandes"
      },
      {
        id: 18,
        questionImages: [
          require("../../assets/others/newell-old-boys.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/france/psg.png"),
          require("../../assets/America/inter-miami.png"),
        ],
        options: ["Ousmane Dembele", "Zlatan Ibrahimovic", "Ronaldinho", "Lionel Messi"],
        answer: "Lionel Messi"
      },
      {
        id: 19,
        questionImages: [
          require("../../assets/England/burnley.png"),
          require("../../assets/England/tottenham.png"),
          require("../../assets/Spain/athletico-madrid.png"),
          require("../../assets/England/Newcastle.png"),
        ],
        options: ["Kieran Trippier", "Jermain Defoe", "David De Gea", "Alexander Isak"],
        answer: "Kieran Trippier"
      },
      {
        id: 20,
        questionImages: [
          require("../../assets/others/lech-poznan.png"),
          require("../../assets/germany/dortmud.png"),
          require("../../assets/germany/bayern-munich.png"),
          require("../../assets/Spain/barcelona.png"),
        ],
        options: ["Philippe Coutinho", "Arturo Vidal", "Pepe Reina", "Robert Lewandoski"],
        answer: "Robert Lewandoski"
      },
      {
        id: 21,
        questionImages: [
          require("../../assets/England/Man-united.png"),
          require("../../assets/England/mancity.png"),
          require("../../assets/italy/juventus.png"),
          require("../../assets/others/boca-juniors.png"),
        ],
        options: ["Angel Di Maria", "Carlos Tevez", "Andy Cole", "Owen Hargreaves"],
        answer: "Carlos Tevez"
      },
      {
        id: 22,
        questionImages: [
          require("../../assets/Spain/real-sociedad.png"),
          require("../../assets/Spain/athletico-madrid.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/Spain/athletico-madrid.png"),
        ],
        options: ["Sergio Aguero", "Fernando Torres", "Antoine Griezmann", "Ivan Rakitic"],
        answer: "Antoine Griezmann"
      },
      {
        id: 23,
        questionImages: [
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/Netherlands/ajax.png"),
          require("../../assets/italy/inter-milan.png"),
          require("../../assets/England/Man-united.png"),
        ],
        options: ["Christian Eriksen", "Alexis Sanchez", "Edwin Van Der Sar", "Andre Onana"],
        answer: "Andre Onana"
      },
      {
        id: 24,
        questionImages: [
          require("../../assets/England/charlton.png"),
          require("../../assets/England/tottenham.png"),
          require("../../assets/England/sunderland.png"),
          require("../../assets/England/Aston-Villa.png"),
        ],
        options: ["Nigel Reo-Coker", "Daren Bent", "Anton Ferdinand", "Steve Sidwell"],
        answer: "Daren Bent"
      },
      {
        id: 25,
        questionImages: [
          require("../../assets/Netherlands/feyenord.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/England/bournemouth.png"),
          require("../../assets/England/mancity.png"),
        ],
        options: ["Nathan Ake", "Wayne Bridge", "Shaun Wright-Phillips", "Boudewijn Zenden"],
        answer: "Nathan Ake"
      },
      {
        id: 26,
        questionImages: [
          require("../../assets/france/psg.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/italy/ac-milan.png"),
          require("../../assets/others/Flamengo-RJ.png"),
        ],
        options: ["Ronaldinho", "Van Bommel", "Maxi López", "Edgar Davies"],
        answer: "Ronaldinho"
      },
      {
        id: 27,
        questionImages: [
          require("../../assets/portugal/Pacos-Ferreira.png"),
          require("../../assets/Spain/athletico-madrid.png"),
          require("../../assets/England/wolves.png"),
          require("../../assets/England/Liverpool.png"),
        ],
        options: ["Fernando Torres", "Darwin Nunez", "Diogo Jota", "Maxi Rodriguez"],
        answer: "Diogo Jota"
      },
      {
        id: 28,
        questionImages: [
          require("../../assets/England/coventry.png"),
          require("../../assets/England/norwich.png"),
          require("../../assets/England/leiceter.png"),
          require("../../assets/England/tottenham.png"),
        ],
        options: ["Jermaine Jenas", "James Maddison", "Jonathan Woodgate", "Andros Townsend"],
        answer: "James Maddison"
      },
      {
        id: 29,
        questionImages: [
          require("../../assets/italy/Verona.png"),
          require("../../assets/italy/napoli.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/England/Arsenal.png"),
        ],
        options: ["Olivier Giroud", "Dries Mertens", "Kai Havertz", "Jorginho"],
        answer: "Jorginho"
      },
      {
        id: 30,
        questionImages: [
          require("../../assets/portugal/sporting.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/italy/inter-milan.png"),
        ],
        options: ["Ronaldo Nazario", "Luis Figo", "Samuel Eto'o", "Ivan Cordoba"],
        answer: "Luis Figo"
      },
      {
        id: 31,
        questionImages: [
          require("../../assets/Spain/sevilla.png"),
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/france/psg.png"),
          require("../../assets/Spain/sevilla.png"),
        ],
        options: ["Ivan Rakitic", "José Antonio Reyes", "Sergio Ramos", "Toni Kroos"],
        answer: "Sergio Ramos"
      },
      {
        id: 32,
        questionImages: [
          require("../../assets/others/penarol.png"),
          require("../../assets/Spain/almeria.png"),
          require("../../assets/portugal/benfica.png"),
          require("../../assets/England/Liverpool.png"),
        ],
        options: ["Darwin Nunez", "Cody Gakpo", "Iago Aspas", "Luis Garcia"],
        answer: "Darwin Nunez"
      },
      {
        id: 33,
        questionImages: [
          require("../../assets/others/shaktr-Donetsk.png"),
          require("../../assets/others/Ufa.png"),
          require("../../assets/England/mancity.png"),
          require("../../assets/England/Arsenal.png"),
        ],
        options: ["Gabriel Jesus", "Gabriel Martinelli", "Oleksandr Zinchenko", "Kolo Toure"],
        answer: "Oleksandr Zinchenko"
      },
      {
        id: 34,
        questionImages: [
          require("../../assets/England/Newcastle.png"),
          require("../../assets/others/Celtic.png"),
          require("../../assets/England/Southampton.png"),
          require("../../assets/England/tottenham.png"),
        ],
        options: ["Fraser Forster", "Pierre-Emile Hojbjerg", "James Ward-Prowse", "Kyle Walker-Peters"],
        answer: "Fraser Forster"
      },
      {
        id: 35,
        questionImages: [
          require("../../assets/others/AIK.png"),
          require("../../assets/germany/dortmud.png"),
          require("../../assets/Spain/real-sociedad.png"),
          require("../../assets/England/Newcastle.png"),
        ],
        options: ["Miguel Almiron", "Alexander Isak", "Nick Pope", "Demba Ba"],
        answer: "Alexander Isak"
      },
      {
        id: 36,
        questionImages: [
          require("../../assets/others/beerschot-ac.png"),
          require("../../assets/belgium/Anderlecht.png"),
          require("../../assets/france/Rennes.png"),
          require("../../assets/England/mancity.png"),
        ],
        options: ["Jeremy Doku", "Samir Nasri", "Gael Clichy", "Julian Alvarez"],
        answer: "Jeremy Doku"
      },
      {
        id: 37,
        questionImages: [
          require("../../assets/England/sheffeildutd.png"),
          require("../../assets/England/bournemouth.png"),
          require("../../assets/England/sheffeildutd.png"),
          require("../../assets/England/Arsenal.png"),
        ],
        options: ["scott Carson", "Bukayo Saka", "Aaron Ramsdale", "Ben White"],
        answer: "Aaron Ramsdale"
      },
      {
        id: 38,
        questionImages: [
          require("../../assets/france/monaco.png"),
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/England/everton.png"),
          require("../../assets/others/AlRyyan.png"),
        ],
        options: ["Radamel Falcao", "Diego Costa", "Emmanuel Adebayor", "James Rodriguez"],
        answer: "James Rodriguez"
      },
      {
        id: 39,
        questionImages: [
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/italy/ac-milan.png"),
          require("../../assets/france/psg.png"),
          require("../../assets/England/Man-united.png"),
        ],
        options: ["Angel Di Maria", "Zlatan Ibrahimovic", "Edinson Cavani", "Ander Herrera"],
        answer: "Zlatan Ibrahimovic"
      },
      {
        id: 40,
        questionImages: [
          require("../../assets/france/monaco.png"),
          require("../../assets/England/Arsenal.png"),
          require("../../assets/England/mancity.png"),
          require("../../assets/England/tottenham.png"),
        ],
        options: ["Emmanuel Adebayor", "Sol Campbell", "Bacary Sagna", "William Gallas"],
        answer: "Emmanuel Adebayor"
      },
      {
        id: 41,
        questionImages: [
          require("../../assets/England/Man-united.png"),
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/America/la-galaxy.png"),
          require("../../assets/italy/ac-milan.png"),
        ],
        options: ["David Beckham", "Casemiro", "Javier Hernandez", "Raphael Varane"],
        answer: "David Beckham"
      },
      {
        id: 42,
        questionImages: [
          require("../../assets/italy/inter-milan.png"),
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/England/mancity.png"),
        ],
        options: ["Alvaro Morata", "Nicolas Anelka", "Daniel Sturridge", "Mateo Kovacic"],
        answer: "Mateo Kovacic"
      },
      {
        id: 43,
        questionImages: [
          require("../../assets/others/fluminese.png"),
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/others/Olympiacos.png"),
          require("../../assets/others/fluminese.png"),
        ],
        options: ["Marcelo", "James Rodriguez", "Eric Abidal", "Ruud Gulith"],
        answer: "Marcelo"
      },
      {
        id: 44,
        questionImages: [
          require("../../assets/England/Arsenal.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/france/monaco.png"),
        ],
        options: ["Alex Song", "Cesc Fabregas", "Thomas Varmaelen", "Aleksandr Hleb"],
        answer: "Cesc Fabregas"
      },
      {
        id: 45,
        questionImages: [
          require("../../assets/belgium/Anderlecht.png"),
          require("../../assets/germany/Hamburger.png"),
          require("../../assets/England/mancity.png"),
          require("../../assets/belgium/Anderlecht.png"),
        ],
        options: ["Rafael Van Der Vaat", "Vincent Kompany", "Dedryck Boyata", "Pablo Zabaleta"],
        answer: "Vincent Kompany"
      },
      {
        id: 46,
        questionImages: [
          require("../../assets/Netherlands/ajax.png"),
          require("../../assets/England/Liverpool.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/Spain/athletico-madrid.png"),
        ],
        options: ["Fernando Torres", "Carlos Tevez", "Luiz Suarez", "Klaas Huntelaar"],
        answer: "Luiz Suarez"
      },
      {
        id: 47,
        questionImages: [
          require("../../assets/germany/wolfsburg.png"),
          require("../../assets/germany/bayern-munich.png"),
          require("../../assets/Spain/athletico-madrid.png"),
          require("../../assets/italy/juventus.png"),
        ],
        options: ["Mario Mandzukic", "Miroslav Klose", "Aturo Vidal", "Zlatan Ibrahimovic"],
        answer: "Mario Mandzukic"
      },
      {
        id: 48,
        questionImages: [
          require("../../assets/portugal/porto.png"),
          require("../../assets/Spain/athletico-madrid.png"),
          require("../../assets/france/monaco.png"),
          require("../../assets/others/galatasaray.png"),
        ],
        options: ["Filipe Luiz", "Saul Niguez", "Diego Costa", "Radmel Falcao"],
        answer: "Radmel Falcao"
      },
      {
        id: 49,
        questionImages: [
          require("../../assets/italy/chievo-verona.png"),
          require("../../assets/italy/palermo.png"),
          require("../../assets/germany/wolfsburg.png"),
          require("../../assets/italy/juventus.png"),
        ],
        options: ["Luca Toni", "Marco Materazzi", "Giorgio Chiellini", "Andrea Barzagli"],
        answer: "Andrea Barzagli"
      },
       {
        id: 50,
        questionImages: [
          require("../../assets/germany/Kaiserslautern.png"),
          require("../../assets/germany/weder-bremen.png"),
          require("../../assets/germany/bayern-munich.png"),
          require("../../assets/italy/lazio.png"),
        ],
        options: ["Miroslav Klose", "Thomas Muller", "Bastian Schweinsteiger", "Lukas Poldoski"],
        answer: "Miroslav Klose"
      },
      {
        id: 50,
        questionImages: [
          require("../../assets/England/Southampton.png"),
          require("../../assets/England/Liverpool.png"),
          require("../../assets/germany/bayern-munich.png"),
          require("../../assets/others/al-nasir.png"),
        ],
        options: ["Dejan Lovren", "Xabi Alonso", "Sadio Mane", "Pepe Reina"],
        answer: "Sadio Mane"
      },
      {
        id: 51,
        questionImages: [
          require("../../assets/germany/dortmud.png"),
          require("../../assets/germany/Ahlen.png"),
          require("../../assets/germany/B-Mochengladbach.png"),
          require("../../assets/germany/dortmud.png"),
        ],
        options: ["Emre can", "Marco Reus", "Las Bender", "Alexander Isak"],
        answer: "Marco Reus"
      },
      {
        id: 52,
        questionImages: [
          require("../../assets/others/fernabache.png"),
          require("../../assets/france/psg.png"),
          require("../../assets/England/bolton.png"),
          require("../../assets/others/Qatar-sc.png"),
        ],
        options: ["Jay Jay Okocha", "Claude Makelele", " Djibril Cisse", "Alou Diarra"],
        answer: "Jay Jay Okocha"
      },
      {
        id: 53,
        questionImages: [
          require("../../assets/others/lokomotiv-moscow.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/others/zenith.png"),
          require("../../assets/England/westbrom.png"),
        ],
        options: ["Adrian Mutu", "Steve Sidwell", "Branislav Ivanovic", "Ricardo Carvalho"],
        answer: "Branislav Ivanovic"
      },
      {
        id: 54,
        questionImages: [
          require("../../assets/others/fernabache.png"),
          require("../../assets/England/bolton.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/others/Shanghai-Shenhua.png"),
        ],
        options: ["Romelu Lukaku", "Nicolas Anelka", " Luis Saha", "Claude Makelele"],
        answer: "Nicolas Anelka"
      },
      {
        id: 55,
        questionImages: [
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/italy/inter-milan.png"),
          require("../../assets/others/anzhimakh.png"),
          require("../../assets/England/chelsea.png"),
        ],
        options: ["Ricardo Quaresma", "Juliano Belletti", "Samuel Eto'o", "Sulley Muntari"],
        answer: "Samuel Eto'o"
      },
      {
        id: 56,
        questionImages: [
          require("../../assets/England/WestHam.png"),
          require("../../assets/England/Liverpool.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/England/qpr.png"),
        ],
        options: ["Joe Cole", "Demba Ba", "Yossi Benayoun", "Raul Meireles"],
        answer: "Yossi Benayoun"
      },
      {
        id: 57,
        questionImages: [
          require("../../assets/germany/dortmud.png"),
          require("../../assets/England/Arsenal.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/England/chelsea.png"),
        ],
        options: ["Alexander Song", "Cesc Fabregas", "Pierre-Emerick Aubameyang", "Thierry Henry"],
        answer: "Pierre-Emerick Aubameyang"
      },
      {
        id: 58,
        questionImages: [
          require("../../assets/france/monaco.png"),
          require("../../assets/italy/inter-milan.png"),
          require("../../assets/England/mancity.png"),
          require("../../assets/italy/as-roma.png"),
        ],
       options: ["Silvan Distin", "Maicon", "Aleksandar Kolarov", "Edin Dzeko"],
        answer: "Maicon"
      },
      {
        id: 59,
        questionImages: [
          require("../../assets/france/psg.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/England/Arsenal.png"),
          require("../../assets/others/Flamengo-RJ.png"),
        ],
        options: ["David Luiz", "Alex", "Mateja Kezman", "Thiago Silva"],
        answer: "David Luiz"
      },
      {
        id: 60,
        questionImages: [
          require("../../assets/Spain/zaragoza.png"),
          require("../../assets/Spain/valencia.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/Spain/athletico-madrid.png"),
        ],
        options: ["Paulo Alcacer", "David Villa", "Seydou Keita", "Jordi Alba"],
        answer: "David Villa"
      },
      {
        id: 61,
        questionImages: [
          require("../../assets/England/Arsenal.png"),
          require("../../assets/England/Man-united.png"),
          require("../../assets/others/fernabache.png"),
          require("../../assets/Netherlands/feyenord.png"),
        ],
        options: ["Robin Van Persie", "Alexis Sanchez", "Danny Welbeck", "Henrikh Mkhitaryan"],
        answer: "Robin Van Persie"
      },
      {
        id: 62,
        questionImages: [
          require("../../assets/England/WestHam.png"),
          require("../../assets/England/fulham.png"),
          require("../../assets/England/qpr.png"),
          require("../../assets/England/Brighton.png"),
        ],
        options: ["Scot Parker", "Bobby Zamora", " Clint Dempsey", "Dickson Etuhu"],
        answer: "Bobby Zamora"
      },
      {
        id: 63,
        questionImages: [
          require("../../assets/Spain/athletico-madrid.png"),
          require("../../assets/England/Liverpool.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/italy/ac-milan.png"),
        ],
        options: ["Olivier Giroud", "Glen Johnson", "Jose Bosingwa", "Fernando Torres"],
        answer: "Fernando Torres"
      },
      {
        id: 64,
        questionImages: [
          require("../../assets/England/Man-united.png"),
          require("../../assets/Spain/villareal.png"),
          require("../../assets/Spain/athletico-madrid.png"),
          require("../../assets/italy/inter-milan.png"),
        ],
        options: ["Fabio Da Silva", "Diego Forlan", "J.S Park", "Nani"],
        answer: "Diego Forlan"
      },
      {
        id: 65,
        questionImages: [
          require("../../assets/germany/bayern-munich.png"),
          require("../../assets/Spain/malaga.png"),
          require("../../assets/Spain/athletico-madrid.png"),
          require("../../assets/England/mancity.png"),
        ],
        options: ["Segio Aguero", "Antoine Griezmann", " Diego Costa", "Martin Demichelis"],
        answer: "Martin Demichelis"
      },
      {
        id: 66,
        questionImages: [
          require("../../assets/france/marseile.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/others/Shanghai-Shenhua.png"),
          require("../../assets/others/galatasaray.png"),
        ],
        options: ["Claude Makelele", "Solomon Kalou", "Didier Drogba", "Juliano Belletti"],
        answer: "Didier Drogba"
      },
      {
        id: 67,
        questionImages: [
          require("../../assets/germany/Hamburger.png"),
          require("../../assets/England/mancity.png"),
          require("../../assets/germany/bayern-munich.png"),
          require("../../assets/france/lyon.png"),
        ],
        options: ["Jerome Boateng", "Leroy Sane", "Roque Santa Cruz", "Daniel Van Buyten"],
        answer: "Jerome Boateng"
      },
      {
        id: 68,
        questionImages: [
          require("../../assets/England/chelsea.png"),
          require("../../assets/England/everton.png"),
          require("../../assets/England/Man-united.png"),
          require("../../assets/italy/inter-milan.png"),
        ],
        options: ["Nemanja Matic", "Radamel Falcao", "Sebastian Veron", "Romelu Lukaku"],
        answer: "Romelu Lukaku"
      },
      {
        id: 69,
        questionImages: [
          require("../../assets/others/zadar.png"),
          require("../../assets/others/d-zagreb.png"),
          require("../../assets/England/tottenham.png"),
          require("../../assets/Spain/realmadrid.png"),
        ],
        options: ["Harry Kane", "Gareth Bale", "Luka Modric", "Rafael van der Vaart"],
        answer: "Luka Modric"
      },
      {
        id: 70,
        questionImages: [
          require("../../assets/italy/inter-milan.png"),
          require("../../assets/England/Liverpool.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/England/Aston-Villa.png"),
        ],
        options: ["Milan Baros", "Fabio Aurelio", "Philippe Coutinho", "Javier Mascherano"],
        answer: "Philippe Coutinho"
      },
      {
        id: 71,
        questionImages: [
          require("../../assets/france/caen.png"),
          require("../../assets/England/leiceter.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/others/Al-Ittihad.png"),
        ],
        options: ["Ryan Bertrand", "N'Golo Kante", "Daniel Drinkwater", "Wesley Fofana"],
        answer: "N'Golo Kante"
      },
      {
        id: 72,
        questionImages: [
          require("../../assets/England/Man-united.png"),
          require("../../assets/italy/juventus.png"),
          require("../../assets/England/Man-united.png"),
          require("../../assets/italy/juventus.png"),
        ],
        options: ["Carlos Tevez", "Cristiano Ronaldo", "Paul Pogba", "Patrice Evra"],
        answer: "Paul Pogba"
      },
      {
        id: 73,
        questionImages: [
          require("../../assets/germany/stuttgart.png"),
          require("../../assets/italy/as-roma.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/Spain/realmadrid.png"),
        ],
        options: ["Antonio Rudiger", "Michael Essien", "Gonzalo Higuain", "Ashely Cole"],
        answer: "Antonio Rudiger"
      },
      {
        id: 74,
        questionImages: [
          require("../../assets/Spain/villareal.png"),
          require("../../assets/Spain/athletico-madrid.png"),
          require("../../assets/italy/inter-milan.png"),
          require("../../assets/italy/cagliari.png"),
        ],
        options: ["Alvaro Morata", "Gerard Moreno", "Raul Gimenez", "Diego Godin"],
        answer: "Diego Godin"
      },
      {
        id: 75,
        questionImages: [
          require("../../assets/italy/napoli.png"),
          require("../../assets/france/psg.png"),
          require("../../assets/England/Man-united.png"),
          require("../../assets/Spain/valencia.png"),
        ],
        options: ["Angel Di Maria", "Edinson Cavani", "Zlatan Ibrahimović", "Ander Herrera"],
        answer: "Edinson Cavani"
      },
      {
        id: 76,
        questionImages: [
          require("../../assets/belgium/Tubize.png"),
          require("../../assets/france/lile.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/Spain/realmadrid.png"),
        ],
        options: ["Gonzalo Higuain", "Michael Essien", "Eden Hazard", "Alvaro Morata"],
        answer: "Eden Hazard"
      },
      {
        id: 77,
        questionImages: [
          require("../../assets/Spain/malaga.png"),
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/Spain/sevilla.png"),
          require("../../assets/Spain/real-betis.png"),
        ],
        options: ["Isco", "Sergio Ramos", "José Antonio Reyes", "Javier Saviola"],
        answer: "Isco"
      },
      {
        id: 78,
        questionImages: [
          require("../../assets/germany/schake.png"),
          require("../../assets/Spain/sevilla.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/Spain/sevilla.png"),
        ],
        options: ["Fernando Navarro", "Dani Alves", "Ivan Rakitic", "Seydou Keita"],
        answer: "Ivan Rakitic"
      },
      {
        id: 79,
        questionImages: [
          require("../../assets/france/lyon.png"),
          require("../../assets/England/Southampton.png"),
          require("../../assets/England/Liverpool.png"),
          require("../../assets/others/zenith.png"),
        ],
        options: ["Rickie Lambert", "Adam Lallana", "Nathaniel Clyne", "Dejan Lovren"],
        answer: "Dejan Lovren"
      },
      {
        id: 80,
        questionImages: [
          require("../../assets/germany/dortmud.png"),
          require("../../assets/germany/wolfsburg.png"),
          require("../../assets/italy/inter-milan.png"),
          require("../../assets/England/tottenham.png"),
        ],
        options: ["Kevin-Prince Boateng", "Christian Eriksen", "Edgar Davids", "Ivan Perišić"],
        answer: "Ivan Perišić"
      },
      {
        id: 81,
        questionImages: [
          require("../../assets/germany/bayern-munich.png"),
          require("../../assets/germany/dortmud.png"),
          require("../../assets/germany/bayern-munich.png"),
          require("../../assets/germany/dortmud.png"),
        ],
        options: ["Mats Hummels", "Mario Gotze", "Niklas Sule", "Robert Lewandowski"],
        answer: "Mats Hummels"
      },
      {
        id: 82,
        questionImages: [
          require("../../assets/others/instituito.png"),
          require("../../assets/italy/palermo.png"),
          require("../../assets/italy/juventus.png"),
          require("../../assets/italy/as-roma.png"),
        ],
        options: ["Simone Perrotta", "Miralem Pjanić", "Paulo Dybala", "Wojciech Szczęsny"],
        answer: "Paulo Dybala"
      },
      {
        id: 83,
        questionImages: [
          require("../../assets/England/chelsea.png"),
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/germany/bayern-munich.png"),
          require("../../assets/Netherlands/gronigem.png"),
        ],
        options: ["Arjen Robben", "David Alaba", "Xabi Alonso", "Zé Roberto"],
        answer: "Arjen Robben"
      },
      {
        id: 84,
        questionImages: [
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/England/Arsenal.png"),
          require("../../assets/England/Man-united.png"),
          require("../../assets/italy/inter-milan.png"),
        ],
        options: ["Sebastian Veron", "Mikael Silvestre", "Alexis Sanchez", "Matteo Darmian"],
        answer: "Alexis Sanchez"
      },
      {
        id: 85,
        questionImages: [
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/England/Arsenal.png"),
          require("../../assets/others/fernabache.png"),
          require("../../assets/others/basaksehir.png"),
        ],
        options: ["Martin Odegaard", "Emmanuel Adebayor", "Jose Antonio Reyes", "Mesut Özil"],
        answer: "Mesut Özil"
      },
      {
        id: 86,
        questionImages: [
          require("../../assets/Netherlands/ajax.png"),
          require("../../assets/italy/juventus.png"),
          require("../../assets/England/fulham.png"),
          require("../../assets/England/Man-united.png"),
        ],
        options: ["Chris Smalling", "Edwin van der sar", "Andreas Pereira", "Dimitar Berbatov"],
        answer: "Edwin van der sar"
      },
      {
        id: 87,
        questionImages: [
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/England/mancity.png"),
          require("../../assets/italy/ac-milan.png"),
          require("../../assets/others/guangzhou.png"),
        ],
        options: ["Robinho", "Mario Balotelli", "Patrick Vieira", "Nigel de Jong"],
        answer: "Robinho"
      },
      {
        id: 88,
        questionImages: [
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/italy/napoli.png"),
          require("../../assets/italy/juventus.png"),
          require("../../assets/America/inter-miami.png"),
        ],
        options: ["Zinedine Zidane", "Sami Khedira", "Gonzalo Higuaín", "Fabio Cannavaro"],
        answer: "Gonzalo Higuaín"
      },
      {
        id: 89,
        questionImages: [
          require("../../assets/germany/bayern-munich.png"),
          require("../../assets/germany/koln.png"),
          require("../../assets/England/Arsenal.png"),
          require("../../assets/others/galatasaray.png"),
        ],
        options: ["Bernd Leno", "Lukas Podolski", "Serge Gnabry", "Carl Jenkinson"],
        answer: "Lukas Podolski"
      },
      {
        id: 90,
        questionImages: [
          require("../../assets/England/Man-united.png"),
          require("../../assets/germany/bayer-leverkusen.png"),
          require("../../assets/England/WestHam.png"),
          require("../../assets/Spain/sevilla.png"),
        ],
        options: ["Javier Hernandez", "Michael Carrick", "Rio Ferdinand", "Carlos Tevez"],
        answer: "Javier Hernandez"
      },
      {
        id: 91,
        questionImages: [
          require("../../assets/England/Man-united.png"),
          require("../../assets/England/everton.png"),
          require("../../assets/America/dc-united.png"),
          require("../../assets/England/derby.png"),
        ],
        options: ["Phil Neville", "Wayne Rooney", "Tim Howard", "Louis Saha"],
        answer: "Wayne Rooney"
      },
      {
        id: 92,
        questionImages: [
          require("../../assets/others/independiente.png"),
          require("../../assets/Spain/athletico-madrid.png"),
          require("../../assets/England/mancity.png"),
          require("../../assets/Spain/barcelona.png"),
        ],
        options: ["Yaya Toure", "Ferrán Torres", "İlkay Gündoğan", "Sergio Agüero"],
        answer: "Sergio Agüero"
      },
      {
        id: 93,
        questionImages: [
          require("../../assets/Netherlands/PSV.png"),
          require("../../assets/England/Man-united.png"),
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/germany/Hamburger.png"),
        ],
        options: ["Ruud van Nistelrooy", "Michael Owen", "Gabriel Heinze", "David Bechkam"],
        answer: "Ruud van Nistelrooy"
      },
      {
        id: 94,
        questionImages: [
          require("../../assets/france/marseile.png"),
          require("../../assets/germany/bayern-munich.png"),
          require("../../assets/italy/fiorentina.png"),
          require("../../assets/italy/salernitana.png"),
        ],
        options: ["Daniel Van Buyten", "Franck Ribéry", "Luiz Gustavo", "Samir Nasri"],
        answer: "Franck Ribéry"
      },
      {
        id: 95,
        questionImages: [
          require("../../assets/germany/bayer-leverkusen.png"),
          require("../../assets/germany/bayern-munich.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/germany/bayer-leverkusen.png"),
        ],
        options: ["Claudio Pizarro", "Arjen Robben", "Michael Ballack", "Andre Schurrle"],
        answer: "Michael Ballack"
      },
      {
        id: 96,
        questionImages: [
          require("../../assets/England/Man-united.png"),
          require("../../assets/italy/juventus.png"),
          require("../../assets/france/marseile.png"),
          require("../../assets/England/WestHam.png"),
        ],
        options: ["Carlos Tevez", "Patrice Evra", "Paul Pogba", "Bastian Schweinsteiger"],
        answer: "Patrice Evra"
      },
      {
        id: 97,
        questionImages: [
          require("../../assets/italy/lazio.png"),
          require("../../assets/England/Man-united.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/others/estudiantes.png"),
        ],
        options: ["Romelu Lukaku", "Nemanja Matic", "Mark Hughes", "Juan Sebastian Veron"],
        answer: "Juan Sebastian Veron"
      },
      {
        id: 98,
        questionImages: [
          require("../../assets/Spain/real-sociedad.png"),
          require("../../assets/England/Liverpool.png"),
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/germany/bayern-munich.png"),
        ],
        options: ["Xabi Alonso", "Michael Owen", "Fernando Morientes", "Alvaro Arbeloa"],
        answer: "Xabi Alonso"
      },
      {
        id: 99,
        questionImages: [
          require("../../assets/England/mancity.png"),
          require("../../assets/italy/as-roma.png"),
          require("../../assets/italy/inter-milan.png"),
          require("../../assets/others/fernabache.png"),
        ],
        options: ["Aleksandar Kolarov", "Mario Balotelli", "Edin Dzeko", "Stevan Jovetic"],
        answer: "Edin Dzeko"
      },
      {
        id: 100,
        questionImages: [
          require("../../assets/italy/juventus.png"),
          require("../../assets/England/Arsenal.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/America/NY-redbulls.png"),
        ],
        options: ["Cesc Fabregas", "Thierry Henry", "Aleksandr Hleb", "Alex Song"],
        answer: "Thierry Henry"
      },
      {
        id: 101,
        questionImages: [
          require("../../assets/Spain/zaragoza.png"),
          require("../../assets/italy/genoa.png"),
          require("../../assets/italy/inter-milan.png"),
          require("../../assets/others/racing.png"),
        ],
        options: ["Javier Zanetti", "Esteban Cambiasso", "Dejan Stankovic", "Diego Milito"],
        answer: "Diego Milito"
      },
      {
        id: 102,
        questionImages: [
          require("../../assets/france/lyon.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/italy/ac-milan.png"),
          require("../../assets/others/panathinaikos.png"),
        ],
        options: ["Andriy Shevchenko", "Michael Essien", "Hernan Crespo", "Tiemoue Bakayoko"],
        answer: "Michael Essien"
      },
      {
        id: 103,
        questionImages: [
          require("../../assets/portugal/porto.png"),
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/others/Besiktas.png"),
          require("../../assets/portugal/porto.png"),
        ],
        options: ["James Rodríguez", "Iker Casillas", "Ricardo Carvalho", "Pepe"],
        answer: "Pepe"
      },
      {
        id: 104,
        questionImages: [
          require("../../assets/italy/fiorentina.png"),
          require("../../assets/England/mancity.png"),
          require("../../assets/italy/inter-milan.png"),
          require("../../assets/france/monaco.png"),
        ],
        options: ["Patrick Vieira", "Stevan Jovetic", "Maicon", "Mario Balotelli"],
        answer: "Stevan Jovetic"
      },
      {
        id: 105,
        questionImages: [
          require("../../assets/germany/Hamburger.png"),
          require("../../assets/germany/bayern-munich.png"),
          require("../../assets/germany/wolfsburg.png"),
          require("../../assets/germany/Hamburger.png"),
        ],
        options: ["Luiz Gustavo", "Ivan Perišić", "Ivica Olic", "Mario Gómez"],
        answer: "Ivica Olic"
      },
      {
        id: 106,
        questionImages: [
          require("../../assets/Spain/albacete.png"),
          require("../../assets/Spain/levante.png"),
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/france/psg.png"),
        ],
        options: ["Angel Di Maria", "Keylor Navas", "Claude Makelele", "Sergio Ramos"],
        answer: "Keylor Navas"
      },
      {
        id: 107,
        questionImages: [
          require("../../assets/Spain/sevilla.png"),
          require("../../assets/England/swansea.png"),
          require("../../assets/England/tottenham.png"),
          require("../../assets/italy/napoli.png"),
        ],
        options: ["Michu", "Tanguy Ndombele", "Fernando Llorente", "Wayne Routledge"],
        answer: "Fernando Llorente"
      },
      {
        id: 108,
        questionImages: [
          require("../../assets/italy/juventus.png"),
          require("../../assets/Spain/realmadrid.png"),
          require("../../assets/England/chelsea.png"),
          require("../../assets/Spain/athletico-madrid.png"),
        ],
        options: ["Jao Felix", "Alvaro Morata", "Fernando Torres", "Filipe Luis"],
        answer: "Alvaro Morata"
      },
      {
        id: 109,
        questionImages: [
          require("../../assets/italy/as-roma.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/England/stoke.png"),
          require("../../assets/America/CF-Montreal.png"),
        ],
        options: ["Thomas Vermaelen", "Lucas Digne", "Seydou Keita", "Bojan Krkic"],
        answer: "Bojan Krkic"
      },
      {
        id: 110,
        questionImages: [
          require("../../assets/Netherlands/PSV.png"),
          require("../../assets/England/Man-united.png"),
          require("../../assets/france/lyon.png"),
          require("../../assets/Spain/barcelona.png"),
        ],
        options: ["Gerard Pique", "Memphis Depay", "Zlatan Ibrahimovic", "Alexis Sanchez"],
        answer: "Memphis Depay"
      },
      {
        id: 111,
        questionImages: [
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/England/Aston-Villa.png"),
          require("../../assets/England/middlesbrough.png"),
          require("../../assets/England/wolves.png"),
        ],
        options: ["Joleon Lescott", "Ruben Neves", "Ollie Watkins", "Adama Traoré"],
        answer: "Adama Traoré"
      },
      {
        id: 112,
        questionImages: [
          require("../../assets/others/ponte-preta.png"),
          require("../../assets/others/Athletico-minairo.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/England/tottenham.png"),
        ],
        options: ["Emerson Royal", "Giovani Dos Santos", "Clement Lenglet", "Cristian Ceballos"],
        answer: "Emerson Royal"
      },
      {
        id: 113,
        questionImages: [
          require("../../assets/portugal/sintrense.png"),
          require("../../assets/portugal/benfica.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/England/wolves.png"),
        ],
        options: ["Diogo Jota", "Adama Traoré", "Nelson Semedo", "Ruben Neves"],
        answer: "Nelson Semedo"
      },
      {
        id: 114,
        questionImages: [
          require("../../assets/others/galatasaray.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/Spain/athletico-madrid.png"),
          require("../../assets/others/galatasaray.png"),
        ],
        options: ["Arda Turan", "David Villa", "Arturo Vidal", "Luis Garcia"],
        answer: "Arda Turan"
      },
      {
        id: 115,
        questionImages: [
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/England/everton.png"),
          require("../../assets/Spain/barcelona.png"),
          require("../../assets/England/watford.png"),
        ],
        options: ["Andre Gomes", "Yerry Mina", "Gerard Deulofeu", "Lucas Digne"],
        answer: "Gerard Deulofeu"
      },
]

export default quizdata