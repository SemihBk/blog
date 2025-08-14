// assets/js/data/attaques-data.js
window.ATTAQUES_DATA = [
  {
    id: "social",
    title: "Attaques basées sur l'ingénierie sociale",
    items: [
      /* Phishing */
      {
        name: "Phishing",
        aliases: ["Hameçonnage"],
        def: ` Le phishing est une technique d'ingénierie sociale où un attaquant se fait passer pour une entité légitime, comme une banque, un service en ligne ou une entreprise, dans le but de tromper les victimes pour qu'elles divulguent des informations sensibles telles que des identifiants de connexion, des numéros de carte de crédit ou d'autres données personnelles. `,
        how: [
          `L'attaque de phishing se déroule généralement par le biais de courriels ou de messages instantanés qui semblent provenir d'une source fiable. Ces messages contiennent souvent un lien vers un site web frauduleux qui imite un site légitime. Lorsque la victime clique sur le lien et saisit ses informations sur ce faux site, celles-ci sont envoyées directement à l'attaquant, qui peut ensuite les utiliser pour accéder aux comptes de la victime ou effectuer des transactions frauduleuses. `,
          ` Les attaquants peuvent également utiliser des techniques comme le spear phishing (ciblage spécifique d'une personne ou d'une organisation) ou le whaling (ciblage de personnes de haut rang, comme des PDG). `,
        ],
        exampleText: ` Un exemple célèbre est l'attaque de phishing qui a visé les utilisateurs de Gmail en 2017. Les utilisateurs recevaient un mail semblant provenir de Google, leur demandant de vérifier leurs informations de compte. Le lien les dirigeait vers une page web imitant parfaitement la page de connexion de Google, où leurs identifiants étaient capturés par les attaquants. `,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/phishing.webp",
            alt: "Exemple de kit de phishing",
            caption:
              " Les utilisateurs gmail ont reçu ce qui semble être un partage de document. (https://arstechnica.com/information-technology/2017/05/dont-trust-oauth-why-the-google-docs-worm-was-so-convincing/) ",
          },
        ],
        sources: [
          [
            "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/hameconnage-phishing",
            "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/hameconnage-phishing",
          ],
          [
            "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/dossier-phishing",
            "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/dossier-phishing",
          ],
          [
            "https://fr.wikipedia.org/wiki/Hame%C3%A7onnage",
            "https://fr.wikipedia.org/wiki/Hame%C3%A7onnage",
          ],
          [
            "https://arstechnica.com/information-technology/2017/05/dont-trust-oauth-why-the-google-docs-worm-was-so-convincing/",
            "https://arstechnica.com/information-technology/2017/05/dont-trust-oauth-why-the-google-docs-worm-was-so-convincing/",
          ],
        ],
      },

      /* Deepfake */
      {
        name: "Deepfake",
        def: `Le deepfake est une technique qui utilise l'intelligence
            artificielle (IA) pour créer des vidéos, des images ou des
            enregistrements audio manipulés qui semblent réels, mais qui sont en
            réalité faux. Ces contenus sont souvent utilisés pour imiter une
            personne spécifique, en faisant dire ou faire à cette personne des
            choses qu'elle n'a jamais dites ou faites.`,
        how: [
          `Les deepfakes sont créés en utilisant des techniques avancées de
            machine learning, comme les réseaux de neurones convolutionnels et
            les réseaux antagonistes génératifs (GANs). Le processus commence
            par la collecte de nombreuses images, vidéos ou enregistrements
            audio de la personne cible. Ces données sont ensuite utilisées pour
            entraîner un modèle d'IA capable de générer des images, des vidéos
            ou des voix synthétiques très réalistes.`,
          `Dans le cas des vidéos, par exemple, l'IA peut superposer le visage
            de la personne cible sur le corps d'une autre personne dans une
            vidéo, tout en synchronisant les mouvements des lèvres et les
            expressions faciales pour correspondre à un dialogue fabriqué. Le
            résultat final est une vidéo qui semble authentique, mais qui est en
            réalité entièrement manipulée.`,
        ],
        media: [
          {
            type: "image",
            src: "src/imgAttaques/deepfake.jpg",
            alt: `Image générée par une IA représentant le président français Emmanuel Macron sur un tas d'ordure avec la tour Eiffel en fond.`,
            caption: `Image générée par l’IA Midjourney représentant Emmanuel Macron sur
              des ordures – Par Nicolas Livanis (@n_livanis – Twitter -
              https://x.com/n_livanis/status/1637481683539697664)`,
          },
          {
            type: "video",
            src: "https://www.youtube.com/embed/K2Savbt2kDY?si=HXYg1j9nuTZ0S3Sp",
            caption: `La chaîne Youtube "French Faker" ayant remplacé le visage et la
              voix du court métrage "Les dessous du pouvoir" (version originale
              ici : https://www.dailymotion.com/video/x7zcsy4?playlist=x78kzc)`,
          },
          {
            type: "video",
            src: "https://www.youtube.com/embed/fNREoy1NvQ0",
            caption: `Comment utiliser l'IA pour coper la voix et le visage de quelqu'un
              ? (Chaîne Youtube : Defend Intelligence)
              https://www.youtube.com/watch?v=fNREoy1NvQ0)`,
          },
        ],
        sources: [
          [
            "https://spectrum.ieee.org/what-is-deepfake",
            "https://spectrum.ieee.org/what-is-deepfake",
          ],
          [
            "https://www.freethink.com/science/what-is-a-deepfake",
            "https://www.freethink.com/science/what-is-a-deepfake",
          ],
          [
            "https://www.dailymotion.com/video/x7zcsy4?playlist=x78kzc",
            "https://www.dailymotion.com/video/x7zcsy4?playlist=x78kzc",
          ],
          [
            "https://x.com/n_livanis/status/1637481683539697664",
            "https://x.com/n_livanis/status/1637481683539697664",
          ],
          [
            "https://www.youtube.com/watch?v=fNREoy1NvQ0",
            "https://www.youtube.com/watch?v=fNREoy1NvQ0",
          ],
        ],
      },

      /* IDN Attack */
      {
        name: "IDN Attack",
        aliases: ["Attaque homographe", "Attaque homoglyphes"],
        def: `L'attaque IDN (Internationalized Domain Name) exploite les
            caractères similaires ou identiques provenant de différents
            alphabets pour créer des noms de domaine qui semblent légitimes,
            mais qui redirigent en réalité les utilisateurs vers des sites web
            malveillants. Ce type d'attaque est souvent utilisé pour le
            phishing, car il est difficile de distinguer
            visuellement le faux domaine du vrai.`,
        how: [
          `Les noms de domaine IDN permettent l'utilisation de caractères non
            latins, comme ceux de l'alphabet cyrillique, chinois ou arabe. Les
            attaquants enregistrent un nom de domaine en utilisant des
            caractères qui ressemblent visuellement à des lettres latines, mais
            qui sont en réalité différents. Par exemple, un attaquant pourrait
            remplacer le "a" de "apple.com" par "а" en cyrillique (qui ressemble
            beaucoup à la lettre "a" en latin) pour créer un domaine comme
            "аррle.com". Les utilisateurs qui ne remarquent pas cette subtilité
            peuvent être dirigés vers un site frauduleux conçu pour voler leurs
            informations sensibles.`,
        ],
        exampleText: `En 2017, un chercheur en sécurité a démontré la gravité des attaques
            IDN en enregistrant un domaine "аррӏе.com" (utilisant des caractères
            cyrilliques ressemblant à "apple.com"). Les navigateurs non protégés
            dirigeaient les utilisateurs vers une page de phishing parfaitement
            imitant celle d'Apple, où les victimes pouvaient potentiellement
            divulguer leurs identifiants Apple ID.`,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/idn-attack.jpg",
            alt: "Image représentant le message du ransomware WannaCry",
            caption: `Les deux sites ont l'air tous les deux légitimes, cependant l'un
              deux est une page de phishing (https://www.blazeinfosec.com/post/homographs-attack/)`,
          },
        ],
        sources: [
          [
            "https://www.systonic.fr/attaques-homographes-homoglyphes",
            "https://www.systonic.fr/attaques-homographes-homoglyphes",
          ],
          [
            "https://techblogs.42gears.com/internationalized-domain-name-idn-homograph-attack/",
            "https://techblogs.42gears.com/internationalized-domain-name-idn-homograph-attack/",
          ],
          [
            "https://www.blazeinfosec.com/post/homographs-attack/",
            "https://www.blazeinfosec.com/post/homographs-attack/",
          ],
        ],
      },
    ],
  },

  /* Attaques basées sur les logiciels malveillants */
  {
    id: "malware",
    title: "Attaques basées sur les logiciels malveillants",
    items: [
      /* Ransomware */
      {
        name: "Ransomware",
        aliases: ["Rançongiciel"],
        def: `Le ransomware est un type de malware qui chiffre les fichiers de la
            victime, rendant ses données inaccessibles. Les attaquants demandent
            ensuite une rançon, généralement en cryptomonnaie, pour fournir la
            clé de déchiffrement nécessaire à la récupération des données.`,
        how: [
          `L'attaque par ransomware commence généralement par une infection du
            système, souvent via un e-mail de phishing contenant une pièce
            jointe malveillante, un lien vers un site compromis, ou un
            téléchargement de logiciel infecté. Une fois le ransomware installé,
            il commence à chiffrer les fichiers sur l'ordinateur de la victime,
            rendant les données inaccessibles.`,
          `Après le chiffrement, le ransomware affiche un message informant la
            victime que ses fichiers ont été chiffrés et qu'elle doit payer une
            rançon pour les récupérer. Le paiement est souvent exigé en
            cryptomonnaie pour préserver l'anonymat des attaquants. Dans
            certains cas, si la rançon n'est pas payée dans un délai imparti,
            les fichiers peuvent être définitivement perdus ou la rançon peut
            augmenter.`,
          `Certaines attaques de ransomware menacent également de divulguer les
            données volées si la rançon n'est pas payée.`,
        ],
        exampleText: `En 2017, le ransomware WannaCry a infecté des centaines de milliers
            de systèmes dans le monde entier en exploitant une vulnérabilité du
            système d'exploitation Windows. L'attaque a causé des perturbations
            majeures, notamment dans les hôpitaux britanniques, où de nombreux
            services ont été interrompus. Les victimes ont été invitées à payer
            une rançon en Bitcoin pour récupérer l'accès à leurs fichiers.`,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/wannacry-ransomware.png",
            alt: "Image représentant le message du ransomware WannaCry",
            caption: `WannaCry, 2017 (https://fr.wikipedia.org/wiki/WannaCry)`,
          },
        ],
        sources: [
          [
            "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/rancongiciels-ransomwares#definition-ransomware",
            "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/rancongiciels-ransomwares#definition-ransomware",
          ],
          [
            "https://www.malwarebytes.com/fr/ransomware",
            "https://www.malwarebytes.com/fr/ransomware",
          ],
          [
            "https://www.cyberuniversity.com/post/wannacry-tout-savoir-sur-la-pire-cyberattaque-de-lhistoire",
            "https://www.cyberuniversity.com/post/wannacry-tout-savoir-sur-la-pire-cyberattaque-de-lhistoire",
          ],
          [
            "https://fr.wikipedia.org/wiki/WannaCry",
            "https://fr.wikipedia.org/wiki/WannaCry",
          ],
        ],
      },

      /* Virus informatique */
      {
        name: "Virus",
        aliases: ["Virus informatique"],
        def: `Un virus informatique est un type de malware qui se reproduit en
            infectant des fichiers ou des programmes sur un ordinateur. Il
            s'auto-replie en attachant son code à des fichiers exécutables, des
            documents ou des programmes légitimes. Lorsqu'un fichier infecté est
            ouvert ou exécuté, le virus se propage et peut causer des dommages
            au système, comme la corruption de données, la perte de fichiers ou
            la lenteur du système.`,
        how: [
          `Les virus informatiques se propagent généralement de la manière
            suivante :`,
          `→ Infection initiale : Le virus se fixe sur un fichier ou un
            programme légitime. Cette infection peut se produire par le biais
            de téléchargements malveillants, de mails de phishing contenant
            des pièces jointes infectées, ou de supports amovibles comme des
            clés USB.`,
          `→ Propagation : Une fois que le fichier ou le programme
            infecté est exécuté, le virus se reproduit en infectant d'autres
            fichiers sur le même système. Il peut également se propager à
            d'autres ordinateurs via des réseaux ou des supports amovibles
            connectés.`,
          `→ Activation : Certains virus ne déclenchent leurs actions
            nuisibles qu'à des moments spécifiques ou après un certain nombre
            d'infections. Cela peut inclure la suppression de fichiers, le vol
            de données, ou l'endommagement du système.`,
          `→ Masquage : Les virus peuvent utiliser des techniques pour
            éviter la détection par les logiciels antivirus, comme le
            chiffrement de leur code ou la modification des fichiers infectés
            pour rendre l'analyse plus difficile.`,
        ],
        exampleText: `Un exemple célèbre de virus est le ILOVEYOU qui a été diffusé en
            2000. Ce virus se propageait via des mails avec un objet attirant,
            "I LOVE YOU". En ouvrant la pièce jointe, les utilisateurs
            infectaient leur propre système et envoyaient automatiquement le
            virus à tous les contacts de leur carnet d'adresses. L'attaque a
            provoqué d'importantes pertes financières et une perturbation
            mondiale.`,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/iloveyou-letter.png",
            alt: "Image représentant le mail ILOVEYOU qui encourageait les victimes à ouvrir la pièce jointe infectée",
            caption: `Loveletter, 2000 (https://fr.wikipedia.org/wiki/I_love_you_%28ver_informatique%29)`,
          },
        ],
        sources: [
          [
            "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/virus-informatiques",
            "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/virus-informatiques",
          ],
          [
            "https://www.cisa.gov/news-events/news/virus-basics",
            "https://www.cisa.gov/news-events/news/virus-basics",
          ],
          [
            "https://us.norton.com/blog/malware/what-is-a-computer-virus",
            "https://us.norton.com/blog/malware/what-is-a-computer-virus",
          ],
          [
            "https://fr.wikipedia.org/wiki/I_love_you_%28ver_informatique%29",
            "https://fr.wikipedia.org/wiki/I_love_you_%28ver_informatique%29",
          ],
          [
            "https://www.kaspersky.fr/blog/cybersecurity-history-iloveyou/19266/",
            "https://www.kaspersky.fr/blog/cybersecurity-history-iloveyou/19266/",
          ],
        ],
      },

      /* Ver informatique */
      {
        name: "Ver informatique",
        aliases: ["Worm", "Computer worm"],
        def: `Un ver informatique est un type de malware conçu pour se répliquer
            et se propager automatiquement à travers les réseaux informatiques,
            souvent sans intervention humaine. Contrairement aux virus, les vers
            n'ont pas besoin d'un fichier hôte pour se propager. Ils exploitent
            généralement des vulnérabilités dans les systèmes ou utilisent des
            techniques d'ingénierie sociale pour infecter de nouveaux systèmes.`,
        how: [
          `Les vers informatiques fonctionnent en suivant ces étapes typiques :`,
          `→ Infection initiale : Le ver se propage en exploitant des
              failles de sécurité dans un système ou un réseau. Il peut se
              diffuser par le biais de pièces jointes de mails, de
              téléchargements malveillants, ou de réseaux peer-to-peer.`,
          `→ Propagation : Une fois installé sur un système, le ver
              recherche d'autres systèmes vulnérables sur le même réseau ou via
              Internet. Il peut exploiter des vulnérabilités connues ou des mots
              de passe faibles pour accéder à d'autres machines et les infecter.`,
          `→ Exécution des charges utiles : Certains vers sont conçus
              pour exécuter des charges utiles malveillantes une fois installés,
              telles que le vol de données, la suppression de fichiers, ou la
              création d'un botnet pour des attaques par
              déni de service distribué (DDoS).`,
          `→ Propagation continue : Le ver continue de se répliquer et
              de se propager, souvent en utilisant les ressources du système
              infecté pour envoyer des copies de lui-même à d'autres systèmes.`,
        ],
        exampleText: `Un exemple célèbre de ver informatique est WannaCry, qui a infecté
            des centaines de milliers d'ordinateurs dans le monde entier en mai
            2017. WannaCry exploitait une vulnérabilité dans les systèmes
            Windows (connue sous le nom de "EternalBlue") pour se propager
            rapidement à travers les réseaux.`,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/wannacry-ransomware.png",
            alt: "Image représentant le message du ransomware WannaCry",
            caption: `WannaCry, 2017 (https://fr.wikipedia.org/wiki/WannaCry), (https://fr.wikipedia.org/wiki/EternalBlue)`,
          },
        ],
        sources: [
          [
            "https://fr.wikipedia.org/wiki/WannaCry",
            "https://fr.wikipedia.org/wiki/WannaCry",
          ],
          [
            "https://fr.wikipedia.org/wiki/EternalBlue",
            "https://fr.wikipedia.org/wiki/EternalBlue",
          ],
          [
            "https://www.bitdefender.fr/consumer/support/answer/77434/",
            "https://www.bitdefender.fr/consumer/support/answer/77434/",
          ],
          [
            "https://www.keepersecurity.com/blog/fr/2024/01/02/computer-worm-vs-virus-whats-the-difference/",
            "https://www.keepersecurity.com/blog/fr/2024/01/02/computer-worm-vs-virus-whats-the-difference/",
          ],
        ],
      },

      /* Cheval de Troie */
      {
        name: "Cheval de Troie",
        aliases: ["Trojan", "Trojan horse"],
        def: `Un cheval de Troie est un type de malware qui se fait passer pour un
            logiciel légitime ou inoffensif pour tromper les utilisateurs et les
            inciter à l’installer. Une fois activé, il peut effectuer diverses
            actions malveillantes sans que l'utilisateur s'en rende compte,
            telles que l'installation d'autres logiciels malveillants,
            l'espionnage, le vol de données ou le contrôle à distance de
            l'ordinateur.`,
        how: [
          `Les chevaux de Troie fonctionnent en trois étapes principales :`,
          `→ Déguisement et installation : Le cheval de Troie se
              présente sous la forme d’un logiciel ou d’une pièce jointe
              légitime. Les utilisateurs sont trompés pour télécharger et
              exécuter le programme.`,
          `→ Activation : Une fois installé, le cheval de Troie s'active
              en arrière-plan.`,
          `→ Exécution des tâches malveillantes : Le cheval de Troie
              peut effectuer diverses actions selon son objectif. Cela inclut le
              vol de mots de passe et d'informations bancaires, le
              keylogging, la prise de contrôle à
              distance de l'ordinateur, ou l'utilisation de l'ordinateur pour
              mener d'autres attaques (envoi de spam ou botnet).`,
        ],
        exampleText: `L'un des chevaux de Troie les plus connus est Zeus, découvert en
            2007. Zeus a été utilisé pour voler des informations bancaires et
            des identifiants en infectant des millions d'ordinateurs. Il a été
            distribué principalement via des campagnes de phishing, où les
            utilisateurs étaient incités à ouvrir des pièces jointes ou des
            liens malveillants. Une fois installé, Zeus capturait les frappes au
            clavier et redirigeait les utilisateurs vers de faux sites web pour
            voler leurs identifiants bancaires.`,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/chevaldetroie.jpg",
            alt: "Image représentant une peinture de Henri-Paul Motte, le cheval de Troie",
            caption: `Le Cheval de Troie, Huile sur Toile, Henri-Paul Motte (1874)`,
          },
        ],
        sources: [
          [
            "https://www.fortinet.com/resources/cyberglossary/trojan-horse-virus",
            "https://www.fortinet.com/resources/cyberglossary/trojan-horse-virus",
          ],
          [
            "https://www.kaspersky.com/resource-center/threats/trojans",
            "https://www.kaspersky.com/resource-center/threats/trojans",
          ],
          [
            "https://www.kaspersky.fr/resource-center/threats/zeus-trojan-malware",
            "https://www.kaspersky.fr/resource-center/threats/zeus-trojan-malware",
          ],
        ],
      },

      /* Spyware */
      {
        name: "Spyware",
        aliases: ["Logiciel espion"],
        def: `Le spyware est un logiciel malveillant conçu pour espionner
            l'utilisateur à son insu. Il collecte des informations sensibles
            telles que les mots de passe, les données de navigation, les
            adresses mails, les informations bancaires, et peut même enregistrer
            les frappes au clavier. Ces données sont ensuite envoyées à
            l'attaquant, qui peut les utiliser à des fins malveillantes, comme
            le vol d'identité, la fraude financière ou la surveillance.`,
        how: [
          `Les spywares s'installent généralement sur un système de manière
            discrète. Voici comment ils fonctionnent :`,
          `→ Infection : Le spyware est souvent installé en même temps
              que des logiciels gratuits, des applications douteuses, ou via des
              vulnérabilités dans le navigateur web.`,
          `→ Collecte de données : Une fois installé, le spyware
              fonctionne en arrière-plan, collectant divers types
              d'informations. Cela peut inclure l'historique de navigation, les
              frappes au clavier, les informations de connexion, et les données
              personnelles stockées sur l'ordinateur.`,
          `→ Transmission des données : Les informations recueillies
              sont envoyées à l'attaquant. L'attaquant peut ensuite utiliser ces
              données pour des activités malveillantes, telles que l'usurpation
              d'identité, l'accès non autorisé à des comptes, ou la revente des
              informations sur le marché noir.`,
          `→ Impact sur le système : En plus de voler des informations,
              les spywares peuvent également ralentir le système, provoquer des
              plantages, ou modifier les paramètres du navigateur (comme la page
              d'accueil ou les moteurs de recherche par défaut).`,
        ],
        exampleText: `Un exemple connu de spyware est CoolWebSearch, qui a infecté de
            nombreux ordinateurs au début des années 2000. Ce logiciel espion
            modifiait les paramètres du navigateur, redirigeait les utilisateurs
            vers des sites web malveillants, et surveillait leurs habitudes de
            navigation pour collecter des informations. Il était
            particulièrement difficile à supprimer, car il réinstallait ses
            composants après chaque tentative de suppression.`,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/coolwebsearch.webp",
            alt: "Image représentant le navigateur CoolWebSearch, un spyware qui prenait la place de notre moteur de recherche par défaut.",
            caption: `Moteur de recherche CoolWebSearch (image reprise de
              https://malwaretips.com/blogs/websearch-coolwebsearch-info-removal/), (https://fr.wikipedia.org/wiki/CoolWebSearch)`,
          },
        ],
        sources: [
          [
            "https://www.fortinet.com/resources/cyberglossary/spyware",
            "https://www.fortinet.com/resources/cyberglossary/spyware",
          ],
          [
            "https://www.eset.com/fr/cybermenaces/spyware/",
            "https://www.eset.com/fr/cybermenaces/spyware/",
          ],
          [
            "https://www.malwarebytes.com/fr/spyware",
            "https://www.malwarebytes.com/fr/spyware",
          ],
          [
            "https://malwaretips.com/blogs/websearch-coolwebsearch-info-removal/",
            "https://malwaretips.com/blogs/websearch-coolwebsearch-info-removal/",
          ],
          [
            "https://fr.wikipedia.org/wiki/CoolWebSearch",
            "https://fr.wikipedia.org/wiki/CoolWebSearch",
          ],
        ],
      },

      /* Adware */
      {
        name: "Adware",
        aliases: ["Logiciel publicitaire"],
        def: `L'adware est un logiciel indésirable conçu pour afficher des
            publicités sur votre ordinateur, souvent sous forme de fenêtres
            pop-up ou de bannières publicitaires intégrées à d'autres
            programmes. Bien qu'il ne soit pas toujours malveillant, l'adware
            est souvent perçu comme nuisible car il collecte des données sur les
            habitudes de navigation de l'utilisateur pour cibler les publicités
            et peut entraîner une dégradation des performances du système.`,
        how: [
          `→ Installation : L'adware est souvent installé à l'insu de
              l'utilisateur lorsqu'il télécharge des logiciels gratuits ou des
              applications douteuses. Il peut également être installé via des
              sites web non sécurisés ou en tant que partie d'un package
              logiciel où il est inclus par défaut.`,
          `→ Affichage de publicités : Une fois installé, l'adware
              commence à afficher des publicités, souvent sous forme de fenêtres
              pop-up, de bannières, ou de redirections vers des sites web
              publicitaires. Ces annonces sont souvent générées en fonction des
              données collectées sur les habitudes de navigation de
              l'utilisateur.`,
          `→ Collecte de données : L'adware surveille les activités en
              ligne de l'utilisateur, telles que les sites visités, les
              recherches effectuées, et les clics sur les publicités. Ces
              informations sont utilisées pour personnaliser les annonces ou
              peuvent être vendues à des tiers pour un profit.`,
          `→ Impact sur le système : L'adware peut ralentir le système,
              consommer de la bande passante, et rendre l'expérience de
              navigation désagréable en affichant des publicités de manière
              intrusive. Dans certains cas, il peut également ouvrir des portes
              aux logiciels malveillants plus dangereux.`,
        ],
        exampleText: `Un exemple d'adware bien connu est Gator, qui était populaire dans
            les années 2000. Gator s'installait souvent avec d'autres logiciels
            gratuits et affichait des publicités ciblées en fonction des
            habitudes de navigation de l'utilisateur. Il collectait également
            des données sur les utilisateurs à des fins de marketing sans leur
            consentement explicite. Bien que Gator ne soit pas explicitement
            malveillant, il a suscité des inquiétudes quant à la vie privée et à
            la sécurité des données.`,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/adware.jpg",
            alt: "Image représentant un ancien système d'exploitation Windows avec des fenêtres pop-up de publicités indésirables.",
            caption: `Ancienne version de Windows contaminée par un adware (image
              reprise de https://www.techtarget.com/searchsecurity/definition/adware)`,
          },
        ],
        sources: [
          [
            "https://www.techtarget.com/searchsecurity/definition/adware",
            "https://www.techtarget.com/searchsecurity/definition/adware",
          ],
          [
            "https://www.crowdstrike.fr/cybersecurity-101/adware/",
            "https://www.crowdstrike.fr/cybersecurity-101/adware/",
          ],
          [
            "https://www.avast.com/fr-fr/c-adware",
            "https://www.avast.com/fr-fr/c-adware",
          ],
          [
            "https://www.malwarebytes.com/fr/adware",
            "https://www.malwarebytes.com/fr/adware",
          ],
          [
            "https://www.investopedia.com/terms/g/gator.asp",
            "https://www.investopedia.com/terms/g/gator.asp",
          ],
          [
            "https://www.supermoney.com/encyclopedia/gator",
            "https://www.supermoney.com/encyclopedia/gator",
          ],
        ],
      },

      /* Botnets */
      {
        name: "Botnets",
        aliases: ["Réseau de bots", "Botnet"],
        def: `Un botnet est un réseau de plusieurs ordinateurs infectés par un
            logiciel malveillant, contrôlé par un attaquant à distance, souvent
            appelé "botmaster" ou "herder". Les ordinateurs infectés, appelés
            "bots" ou "zombies", sont utilisés collectivement pour mener des
            activités malveillantes, telles que des attaques par déni de service
            distribué (DDoS), l'envoi de spam, le vol de
            données, ou la propagation de logiciels malveillants
            supplémentaires.`,
        how: [
          `→ Infection initiale : Les attaquants infectent des
              ordinateurs en utilisant des logiciels malveillants, souvent
              distribués via des mails de phishing, des téléchargements
              malveillants, des exploits de vulnérabilités logicielles, ou des
              sites web compromis.`,
          `→ Contrôle et communication : Une fois infectés, les
              ordinateurs deviennent des bots, communiquant avec un serveur de
              commande et de contrôle (C&C) géré par l'attaquant. Ce serveur
              permet au botmaster de coordonner et contrôler les actions des
              bots, généralement via des canaux chiffrés pour éviter la
              détection.`,
          `→ Exécution d'attaques : Le botmaster peut alors utiliser le
              réseau de bots pour diverses activités malveillantes.`,
        ],
        exampleText: `Un exemple notoire est le botnet Mirai, qui a fait les gros titres
            en 2016. Mirai infectait des appareils IoT (Internet of Things)
            comme les caméras de sécurité et les routeurs en exploitant des
            identifiants par défaut ou des mots de passe faibles. Une fois sous
            contrôle, il a été utilisé pour lancer des attaques DDoS massives,
            notamment contre le fournisseur de DNS Dyn, provoquant
            l'indisponibilité de nombreux sites web majeurs tels que Twitter,
            Reddit, et Netflix.`,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/mirai-botnet.jpg",
            alt: "Organigramme de l'infection par botnet",
            caption: `Organigramme de l'infection (https://www.cyfirma.com/blogs/mirai-the-botnet-that-made-iot-dangerous/)`,
          },
        ],
        sources: [
          [
            "https://www.kaspersky.fr/resource-center/threats/botnet-attacks",
            "https://www.kaspersky.fr/resource-center/threats/botnet-attacks",
          ],
          [
            "https://fr.wikipedia.org/wiki/Botnet",
            "https://fr.wikipedia.org/wiki/Botnet",
          ],
          [
            "https://www.avast.com/fr-fr/c-mirai",
            "https://www.avast.com/fr-fr/c-mirai",
          ],
          [
            "https://www.cyfirma.com/blogs/mirai-the-botnet-that-made-iot-dangerous/",
            "https://www.cyfirma.com/blogs/mirai-the-botnet-that-made-iot-dangerous/",
          ],
        ],
      },
    ],
  },

  /* Attaques basées sur les réseaux */
  {
    id: "network",
    title: "Attaques basées sur les réseaux",
    items: [
      /* DDoS */
      {
        name: "DDoS",
        aliases: ["Déni de Service Distribué", "Distributed Denial of Service"],
        def: `Une attaque par Déni de Service Distribué (DDoS) vise à rendre un
            service, un serveur ou un réseau indisponible pour ses utilisateurs
            légitimes. Cela est réalisé en inondant la cible avec un volume
            massif de trafic ou de requêtes simultanées provenant de multiples
            sources. Les attaques DDoS exploitent souvent des botnets, qui sont des réseaux de machines
            compromises, pour générer ce trafic et submerger la capacité de la
            cible à gérer les requêtes.`,
        how: [
          `→ Compromission des machines : Les attaquants infectent un
              grand nombre d'ordinateurs ou d'appareils connectés à Internet
              (comme des routeurs ou des objets connectés) avec un logiciel
              malveillant, les transformant en bots contrôlés à distance.`,
          `→ Coordination de l'attaque : L'attaquant utilise un serveur
              de commande et de contrôle (C&C) pour coordonner les bots. Ces
              machines infectées agissent alors de manière synchronisée pour
              envoyer un volume massif de trafic vers la cible, qui peut être un
              site web, un serveur, ou une infrastructure réseau.`,
          `→ Inondation de trafic : Les bots envoient un grand nombre de
              requêtes ou de paquets de données à la cible. Les types courants
              d'attaques DDoS incluent :
              - Attaques de volume : Inondent la cible avec un trafic
                massif, comme le UDP flood ou le ICMP flood, visant à saturer
                la bande passante.
              - Attaques de protocole : Exploitent les failles dans les
                protocoles réseau, comme le SYN flood, pour épuiser les
                ressources de la cible.
              - Attaques applicatives : Visent les couches supérieures,
                comme les serveurs web (HTTP flood), pour surcharger la
                capacité de traitement de l'application.`,
          `→ Résultat : L'attaque submerge les ressources de la cible,
              provoquant un ralentissement significatif ou un blocage total du
              service, empêchant les utilisateurs légitimes d'y accéder.`,
        ],
        exampleText: `Un exemple notable est l'attaque DDoS contre Dyn en octobre 2016.
            Cette attaque, menée par le botnet Mirai, a inondé le fournisseur de
            services DNS avec un trafic massif, provoquant des perturbations
            majeures sur de nombreux sites web importants comme Twitter, Reddit,
            et Spotify. L'attaque exploitait des appareils IoT vulnérables pour
            générer le volume de trafic nécessaire à la surcharge du service DNS
            de Dyn, rendant des parties importantes d'Internet inaccessibles
            pendant plusieurs heures.`,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/dyndns.png",
            alt: "Carte des zones les plus touchées par l'attaque de DynDNS le 21 octobre à 11h45",
            caption: `Carte des zones les plus touchées par l'attaque le 21 octobre 2016
              à 11h45 (https://fr.wikipedia.org/wiki/Cyberattaque_de_2016_contre_Dyn)`,
          },
        ],
        sources: [
          [
            "https://fr.wikipedia.org/wiki/Cyberattaque_de_2016_contre_Dyn",
            "https://fr.wikipedia.org/wiki/Cyberattaque_de_2016_contre_Dyn",
          ],
          [
            "https://www.kaspersky.fr/resource-center/threats/ddos-attacks",
            "https://www.kaspersky.fr/resource-center/threats/ddos-attacks",
          ],
          [
            "https://www.cloudflare.com/fr-fr/learning/ddos/what-is-a-ddos-attack/",
            "https://www.cloudflare.com/fr-fr/learning/ddos/what-is-a-ddos-attack/",
          ],
          [
            "https://www.zdnet.fr/actualites/le-service-dns-dyn-attaque-reddit-spotify-twitter-trebuchent-39843682.htm",
            "https://www.zdnet.fr/actualites/le-service-dns-dyn-attaque-reddit-spotify-twitter-trebuchent-39843682.htm",
          ],
          [
            "https://www.numerama.com/tech/203154-panique-aux-usa-des-dizaines-de-sites-web-inaccessibles-apres-une-attaque-ddos.html",
            "https://www.numerama.com/tech/203154-panique-aux-usa-des-dizaines-de-sites-web-inaccessibles-apres-une-attaque-ddos.html",
          ],
        ],
      },

      /* Man in the Middle */
      {
        name: "Man in the Middle",
        aliases: ["MitM", "Attaque de l'Homme du Milieu"],
        def: `Une attaque de l'Homme du Milieu (MitM) est une cyberattaque où un
            attaquant intercepte et éventuellement altère la communication entre
            deux parties sans qu'elles s'en aperçoivent. L'attaquant se
            positionne furtivement entre le client et le serveur, espionnant ou
            manipulant les informations échangées pour voler des données
            sensibles comme les identifiants de connexion, les numéros de carte
            de crédit, ou d'autres informations confidentielles.`,
        how: [
          `→ Interception : L'attaquant intercepte les communications
              entre deux parties. Cela peut se produire de différentes manières :
              - Attaque WiFi : Dans un réseau WiFi non sécurisé,
                l'attaquant peut intercepter le trafic entre l'utilisateur et
                le routeur.
              - ARP Spoofing : L'attaquant envoie de fausses
                informations d'adresse de contrôle d'accès (ARP) sur un réseau
                local pour lier son adresse MAC à l'adresse IP de la victime,
                interceptant ainsi le trafic.
              - DNS Spoofing : L'attaquant modifie les enregistrements
                DNS pour rediriger le trafic vers un serveur sous son
                contrôle.`,
          `→ Décryptage et manipulation : L'attaquant peut déchiffrer le
              trafic s'il n'est pas chiffré, ou exploiter des faiblesses dans le
              protocole de chiffrement utilisé. Il peut ensuite lire, modifier
              ou injecter des données dans la communication.
              - Écoute clandestine : L'attaquant espionne
                silencieusement la conversation pour voler des informations
                comme les identifiants et les mots de passe.
              - Altération : L'attaquant modifie les messages en
                transit, comme changer les détails d'une transaction
                financière ou rediriger les utilisateurs vers de faux sites
                web.`,
          `→ Relayage des communications : L'attaquant relaie les
              communications entre les deux parties, les faisant croire qu'elles
              interagissent directement entre elles, tout en interceptant et
              potentiellement altérant les messages.`,
        ],
        exampleText: `Un exemple d'attaque MitM s'est produit en 2015, connu sous le nom
            de FREAK attack (Factoring RSA Export Keys). Cette attaque
            exploitait une vulnérabilité dans le chiffrement SSL/TLS, permettant
            aux attaquants de forcer les navigateurs et les serveurs à utiliser
            un chiffrement plus faible. Une fois le chiffrement affaibli,
            l'attaquant pouvait intercepter et déchiffrer les communications
            entre le client et le serveur, exposant les données sensibles telles
            que les identifiants de connexion et les informations financières.`,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/freak.png",
            alt: "Image représentant Man-in-the-Middle et la rétrogradation de l'algorithme de chiffrement",
            caption: `MiTM et rétrogradation de l'algorithme de chiffrement (https://www.hitachi.com/hirt/publications/hirt-pub15003/index.html)`,
          },
        ],
        sources: [
          [
            "https://fr.wikipedia.org/wiki/Attaque_de_l%27homme_du_milieu",
            "https://fr.wikipedia.org/wiki/Attaque_de_l%27homme_du_milieu",
          ],
          [
            "https://www.futura-sciences.com/tech/definitions/cybersecurite-attaque-man-in-middle-10048/",
            "https://www.futura-sciences.com/tech/definitions/cybersecurite-attaque-man-in-middle-10048/",
          ],
          [
            "https://www.fortinet.com/fr/resources/cyberglossary/man-in-the-middle-attack",
            "https://www.fortinet.com/fr/resources/cyberglossary/man-in-the-middle-attack",
          ],
          [
            "https://blog.lockself.com/attaque-par-homme-du-milieu",
            "https://blog.lockself.com/attaque-par-homme-du-milieu",
          ],
          [
            "https://www.hitachi.com/hirt/publications/hirt-pub15003/index.html",
            "https://www.hitachi.com/hirt/publications/hirt-pub15003/index.html",
          ],
        ],
      },

      /* Sniffing */
      {
        name: "Sniffing",
        def: `Le sniffing est une technique utilisée pour intercepter et
            surveiller le trafic réseau. Cette pratique peut être légale ou
            malveillante. Dans un contexte malveillant, les attaquants utilisent
            des outils appelés "sniffers" ou "renifleurs de paquets" pour
            capturer et analyser les données en transit sur un réseau, telles
            que les identifiants de connexion, les mots de passe, les courriels,
            et d'autres informations sensibles.`,
        how: [
          `→ Installation du sniffer : L'attaquant installe un logiciel
              de sniffing sur un réseau, soit en compromettant un appareil sur
              le réseau (comme un ordinateur ou un routeur), soit en connectant
              un appareil à un point d'accès WiFi non sécurisé.`,
          `→ Capture de paquets : Le sniffer intercepte les paquets de
              données qui circulent sur le réseau. Ces paquets contiennent des
              informations diverses, comme des requêtes HTTP, des courriels, ou
              des données de connexion.`,
          `→ Analyse des données : Les paquets interceptés sont ensuite
              analysés. Les attaquants recherchent des informations sensibles
              telles que des noms d'utilisateur, des mots de passe, des adresses
              e-mail, des numéros de carte de crédit, ou d'autres données
              personnelles.`,
          `→ Exploitation : Les informations collectées peuvent être
              utilisées pour divers actes malveillants, comme l'usurpation
              d'identité, l'accès non autorisé à des comptes, ou la surveillance
              des communications.`,
        ],
        exampleText: `Un exemple courant de sniffing est l'attaque WiFi public sniffing,
            où un attaquant configure un sniffer sur un réseau WiFi public,
            comme ceux dans les cafés ou les aéroports. Les utilisateurs se
            connectant à ces réseaux sans utiliser de chiffrement (comme un VPN)
            risquent d'avoir leurs données interceptées. Les attaquants peuvent
            ainsi capturer des informations de connexion non chiffrées, des
            sessions web, ou d'autres données transmises en clair sur le réseau.`,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/wireshark.png",
            alt: "Exemple de paquets d'un réseau sniffé avec Wireshark",
            caption: `Exemple de sniffing avec Wireshark (https://www.wireshark.org/)`,
          },
        ],
        sources: [
          [
            "https://cyberinstitut.fr/sniffing-reseau-detecter-prevenir-attaques/",
            "https://cyberinstitut.fr/sniffing-reseau-detecter-prevenir-attaques/",
          ],
          [
            "https://www.oracle.com/fr/security/definition-sniffer-renifleur/",
            "https://www.oracle.com/fr/security/definition-sniffer-renifleur/",
          ],
          [
            "https://www.globalsecuritymag.fr/Des-hackers-revelent-les-dangers,20190829,90270.html",
            "https://www.globalsecuritymag.fr/Des-hackers-revelent-les-dangers,20190829,90270.html",
          ],
          [
            "https://www.titanhq.fr/blog/attaques-reseau-wifi-courantes-se-proteger/",
            "https://www.titanhq.fr/blog/attaques-reseau-wifi-courantes-se-proteger/",
          ],
          ["https://www.wireshark.org/", "https://www.wireshark.org/"],
        ],
      },

      /* VLAN Hopping */
      {
        name: "VLAN Hopping",
        def: `Le VLAN hopping est une attaque réseau qui permet à un attaquant de
            s'échapper de son VLAN (Virtual Local Area Network) assigné et
            d'accéder à des ressources ou des données sur d'autres VLANs, qui
            devraient normalement être isolés pour des raisons de sécurité.`,
        how: [
          `→ Double tagging : L'attaquant injecte des balises VLAN
              supplémentaires dans les trames Ethernet qu'il envoie. Le premier
              commutateur retire la première balise VLAN et transmet la trame au
              VLAN ciblé. Une fois arrivée à destination, la trame contient
              toujours une seconde balise qui l'oriente vers un autre VLAN,
              permettant ainsi à l'attaquant d'envoyer des paquets sur des VLAN
              non autorisés.`,
          `→ Switch Spoofing : Dans cette technique, l'attaquant
              configure son port en mode trunk, comme s'il était un commutateur,
              permettant ainsi au périphérique de l'attaquant de recevoir du
              trafic de plusieurs VLANs au lieu d'un seul.`,
          `→ Accès à des données non autorisées : Une fois sur le VLAN
              ciblé, l'attaquant peut tenter de capturer des paquets, de lancer
              des attaques sur d'autres machines, ou de compromettre des données
              confidentielles en profitant de la segmentation défaillante.`,
        ],
        media: [
          {
            type: "image",
            src: "src/imgAttaques/vlanhopping.jpg",
            alt: "Illustration du double tagging",
            caption: `Illustration du double tagging (https://cybersecurity.att.com/blogs/security-essentials/vlan-hopping-and-mitigation)`,
          },
        ],
        sources: [
          [
            "https://en.wikipedia.org/wiki/VLAN_hopping",
            "https://en.wikipedia.org/wiki/VLAN_hopping",
          ],
          [
            "https://www.techopedia.com/definition/15787/virtual-local-area-network-hopping-vlan-hopping",
            "https://www.techopedia.com/definition/15787/virtual-local-area-network-hopping-vlan-hopping",
          ],
          [
            "https://www.orange-business.com/fr/blogs/securite/bonnes-pratiques/la-verite-sur-lattaque-vlan-hopping",
            "https://www.orange-business.com/fr/blogs/securite/bonnes-pratiques/la-verite-sur-lattaque-vlan-hopping",
          ],
          [
            "https://cybersecurity.att.com/blogs/security-essentials/vlan-hopping-and-mitigation",
            "https://cybersecurity.att.com/blogs/security-essentials/vlan-hopping-and-mitigation",
          ],
        ],
      },

      /* DHCP Spoofing */
      {
        name: "DHCP Spoofing",
        def: `Le DHCP spoofing est une attaque réseau où un attaquant configure un
            faux serveur DHCP (Dynamic Host Configuration Protocol) pour
            répondre aux requêtes DHCP des utilisateurs légitimes du réseau. En
            attribuant de fausses informations réseau, l'attaquant peut
            rediriger le trafic, intercepter des communications ou mener des
            attaques de type Man in the Middle.`,
        how: [
          `→ Faux serveur DHCP : L'attaquant met en place un faux
              serveur DHCP sur le réseau local, prêt à répondre aux requêtes
              DHCP envoyées par des appareils cherchant une adresse IP.`,
          `→ Attribution de paramètres malveillants : Le serveur DHCP
              malveillant attribue aux appareils des informations de
              configuration réseau incorrectes, comme une fausse adresse de
              passerelle (gateway) ou des serveurs DNS contrôlés par
              l'attaquant.`,
          `→ Redirection et interception : Avec ces fausses
              informations, le trafic réseau des utilisateurs peut être redirigé
              vers l'attaquant, qui peut alors intercepter les données sensibles
              (mots de passe, emails, etc.), modifier les communications ou
              injecter des contenus malveillants.`,
          `→ Escalade des attaques : L'attaquant peut utiliser cette
              position pour lancer d'autres attaques, telles que des attaques de
              type Man in the Middle, des attaques DNS (DNS spoofing), ou même
              bloquer l'accès à Internet pour certaines machines.`,
        ],
        media: [
          {
            type: "image",
            src: "src/imgAttaques/dhcpspoofing.png",
            alt: "Schéma d'un attaquant se faisant passer pour le serveur DHCP",
            caption: `DHCP Spoofing (https://info.pivitglobal.com/resources/dhcp-spoofing-and-starvation-attacks)`,
          },
        ],
        sources: [
          [
            "https://le-guide-du-secops.fr/2020/06/01/le-dhcp-snooping-pour-contrer-les-attaques-dhcp-spoofing/",
            "https://le-guide-du-secops.fr/2020/06/01/le-dhcp-snooping-pour-contrer-les-attaques-dhcp-spoofing/",
          ],
          [
            "https://community.fs.com/fr/article/what-is-dhcp-snooping-and-how-it-works.html",
            "https://community.fs.com/fr/article/what-is-dhcp-snooping-and-how-it-works.html",
          ],
          [
            "https://info.pivitglobal.com/resources/dhcp-spoofing-and-starvation-attacks",
            "https://info.pivitglobal.com/resources/dhcp-spoofing-and-starvation-attacks",
          ],
        ],
      },

      /* MAC Flooding */
      {
        name: "MAC Flooding",
        def: `Le MAC flooding est une attaque réseau visant à submerger un switch
            avec de fausses adresses MAC, afin d'épuiser sa table de
            correspondance MAC (CAM table). Une fois saturée, le switch bascule
            en mode "hub", envoyant tout le trafic à tous les ports, ce qui
            permet à l'attaquant de capturer et d'analyser les paquets réseau.`,
        how: [
          `→ Inondation de la table MAC : Le switch conserve une table
              CAM (Content Addressable Memory) qui associe les adresses MAC des
              appareils connectés aux ports du switch. L'attaquant inonde cette
              table avec un grand nombre de fausses adresses MAC.`,
          `→ Saturation de la table MAC : En raison du nombre excessif
              d'entrées, la table CAM est rapidement saturée et ne peut plus
              associer les adresses MAC aux ports spécifiques.`,
          `→ Basculement en mode "hub" : Une fois saturé, le switch
              envoie les paquets à tous les ports (plutôt qu'au port spécifique
              associé à une adresse MAC). Cela permet à l'attaquant de capturer
              et d'écouter le trafic destiné à d'autres machines sur le réseau.`,
          `→ Interception des données : En capturant les paquets,
              l'attaquant peut espionner des communications non chiffrées, y
              compris des identifiants de connexion, des emails, ou d'autres
              données sensibles.`,
        ],
        media: [
          {
            type: "image",
            src: "src/imgAttaques/tablecam.webp",
            alt: "Table CAM d'un switch",
            caption: `Avec la commande "show mac address-table", nous pouvons connaître
              la table CAM d'un switch (https://www.fingerinthenet.com/table-cam/)`,
          },
          {
            type: "image",
            src: "src/imgAttaques/flooding.png",
            alt: "MAC Flooding avec l'outil macof",
            caption: `MAC Flooding avec l'outil macof (https://www.vicarius.io/vsociety/posts/data-link-layer-mac-flooding)`,
          },
        ],
        sources: [
          [
            "https://www.fingerinthenet.com/table-cam/",
            "https://www.fingerinthenet.com/table-cam/",
          ],
          [
            "https://www.vicarius.io/vsociety/posts/data-link-layer-mac-flooding",
            "https://www.vicarius.io/vsociety/posts/data-link-layer-mac-flooding",
          ],
          [
            "https://www.youtube.com/watch?v=4IoZXE9t4CE",
            "https://www.youtube.com/watch?v=4IoZXE9t4CE",
          ],
          [
            "http://www.coursnet.com/2014/11/mac-flooding-switch.html",
            "http://www.coursnet.com/2014/11/mac-flooding-switch.html",
          ],
        ],
      },
    ],
  },

  /* Attaques basées sur le web */
  {
    id: "web",
    title: "Attaques basées sur le web",
    items: [
      /* SQL Injection */
      {
        name: "SQL Injection",
        aliases: ["Injection SQL"],
        def: `L'injection SQL (Structured Query Language) est une vulnérabilité de
            sécurité qui permet à un attaquant d'insérer ou de "injecter" du
            code SQL malveillant dans une requête exécutée par une base de
            données. Cette attaque permet de manipuler les bases de données, par
            exemple en accédant à des données sensibles, en modifiant ou
            supprimant des informations, ou même en exécutant des commandes sur
            le serveur.`,
        how: [
          `→ Point d'injection : L'attaque commence par identifier un
              point d'entrée dans une application web où les entrées de
              l'utilisateur sont incorporées dans les requêtes SQL. Les
              formulaires de connexion, les champs de recherche, ou les
              paramètres d'URL sont des cibles courantes.`,
          `→ Injection de code malveillant : L'attaquant injecte du code
              SQL malveillant dans un champ de saisie. Si l'application ne
              filtre pas correctement les entrées, ce code est intégré à la
              requête SQL exécutée par la base de données.`,
          `→ Exécution de la requête : La base de données exécute la
              requête modifiée, permettant à l'attaquant d'accéder à des données
              non autorisées. Les attaques peuvent inclure :
              - Extraction de données : L'attaquant peut obtenir des
                informations sensibles, telles que les identifiants de
                connexion ou les données des utilisateurs.
              - Modification ou suppression de données : Modifier les
                enregistrements existants ou supprimer des informations de la
                base de données.
              - Exécution de commandes : Dans certains cas, l'attaquant
                peut exécuter des commandes système sur le serveur hébergeant
                la base de données.`,
          `→ Exploitation des données : Les informations obtenues par
              l'attaquant peuvent être utilisées pour compromettre davantage le
              système, voler des informations sensibles, ou détruire des
              données.`,
        ],
        exampleText: `L'un des exemples les plus célèbres d'injection SQL est l'attaque
            contre Sony Pictures en 2011. Les attaquants ont exploité une
            vulnérabilité d'injection SQL pour accéder aux serveurs de Sony et
            ont volé des informations personnelles, y compris des noms, des
            adresses, et des mots de passe de millions de clients. Cette attaque
            a mis en lumière l'importance de sécuriser les applications web
            contre les injections SQL.`,
        media: [
          {
            type: "video",
            src: "https://www.youtube.com/embed/2OPVViV-GQk?si=dOHM0RIUI2_jXEVD",
            caption: `SQL Injections are scary!! (hacking tutorial for beginners) (Chaîne Youtube : NetworkChuck)
           https://www.youtube.com/watch?v=2OPVViV-GQk`,
          },
        ],
        sources: [
          [
            "https://www.zdnet.fr/actualites/le-site-de-sony-pictures-pirate-un-million-de-comptes-utilisateurs-exposes-39761357.htm",
            "https://www.zdnet.fr/actualites/le-site-de-sony-pictures-pirate-un-million-de-comptes-utilisateurs-exposes-39761357.htm",
          ],
          [
            "https://www.youtube.com/watch?v=2OPVViV-GQk",
            "https://www.youtube.com/watch?v=2OPVViV-GQk",
          ],
          [
            "https://book.hacktricks.xyz/v/fr/pentesting-web/sql-injection",
            "https://book.hacktricks.xyz/v/fr/pentesting-web/sql-injection",
          ],
          [
            "https://archives.fbi.gov/archives/losangeles/press-releases/2011/member-of-hacking-group-lulzsec-arrested-for-june-2011-intrusion-of-sony-pictures-computer-systems",
            "https://archives.fbi.gov/archives/losangeles/press-releases/2011/member-of-hacking-group-lulzsec-arrested-for-june-2011-intrusion-of-sony-pictures-computer-systems",
          ],
          [
            "https://www.hacksplaining.com/lessons/sql-injection",
            "https://www.hacksplaining.com/lessons/sql-injection",
          ],
        ],
      },

      /* Cross-Site Scripting (XSS) */
      {
        name: "Cross-Site Scripting",
        aliases: ["XSS", "Cross Site Scripting"],
        def: `Le Cross-Site Scripting (XSS) est une vulnérabilité qui permet à un
            attaquant d'injecter du code malveillant, généralement JavaScript,
            dans les pages web visualisées par d'autres utilisateurs. Cela peut
            entraîner diverses conséquences, telles que le vol de cookies de
            session, la manipulation de l'interface utilisateur, le
            redirectionnement vers des sites malveillants, ou l'exécution
            d'actions à l'insu de l'utilisateur.`,
        how: [
          `→ Injection de code : L'attaquant identifie un point d'entrée
              dans une application web où les entrées de l'utilisateur ne sont
              pas correctement filtrées ou validées. Il injecte un script
              malveillant dans un champ de saisie, comme un champ de commentaire
              ou de recherche.`,
          `→ Stocké vs Réfléchi vs DOM :
              - XSS stocké : Le script malveillant est stocké sur le
                serveur de l'application web, par exemple dans une base de
                données. Lorsqu'un utilisateur accède à une page qui affiche
                le contenu stocké (comme un commentaire), le script est
                exécuté dans le navigateur de l'utilisateur.
              - XSS réfléchi : Le script malveillant est injecté dans
                la requête HTTP et renvoyé immédiatement par le serveur dans
                la réponse. Cela se produit souvent via des liens malveillants
                que les utilisateurs sont incités à cliquer.
              - XSS basée sur le DOM : Le script malveillant est
                injecté directement dans la structure DOM de la page web via
                le navigateur, sans jamais passer par le serveur. L'attaquant
                manipule le DOM via des variables JavaScript accessibles ou
                des méthodes client, et le script est exécuté localement dans
                le navigateur de l'utilisateur en fonction de l'état du DOM,
                souvent en exploitant des éléments comme \`document.location\`
                ou \`document.write\`.`,
          `→ Exécution du script : Lorsque le script est exécuté dans le
              navigateur de la victime, il peut effectuer diverses actions au
              nom de l'utilisateur sans son consentement :
              - Vol de cookies : Le script peut accéder aux cookies de
                session de l'utilisateur, permettant à l'attaquant de voler
                l'identité de la session.
              - Détournement de l'interface : Le script peut manipuler
                l'interface utilisateur pour tromper l'utilisateur et
                l'inciter à fournir des informations sensibles.
              - Redirection : L'utilisateur peut être redirigé vers des
                sites web malveillants.`,
          `→ Exploitation : L'attaquant utilise les informations volées
              ou les actions effectuées par le script pour poursuivre ses
              objectifs, tels que le vol d'identités, l'accès à des comptes, ou
              l'installation de logiciels malveillants.`,
        ],
        exampleText: `Un exemple célèbre d'attaque XSS est l'attaque contre MySpace en
            2005, menée par Samy Kamkar. Il a créé un ver XSS, connu sous le nom
            de "Samy Worm", qui a exploité une vulnérabilité XSS sur MySpace. Le
            script s'exécutait chaque fois qu'un utilisateur visitait le profil
            de Samy, puis ajoutait automatiquement Samy comme ami et copié le
            script malveillant sur le profil de l'utilisateur infecté. En moins
            de 24 heures, plus d'un million de profils MySpace ont été infectés,
            démontrant l'ampleur des dégâts qu'une attaque XSS peut causer.`,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/myspace-samy.jpg",
            alt: "Exemple du ver Samy",
            caption: `Le ver Samy ajoutait cette phrase à la fin de certaines
              informations "but most of all, samy is my hero." (http://vsb2006001.pbworks.com/w/page/23221389/%22Samy%22%20Myspace%20Worm) (connexion non sécurisée)`,
          },
        ],
        sources: [
          [
            "https://en.wikipedia.org/wiki/Samy_%28computer_worm%29",
            "https://en.wikipedia.org/wiki/Samy_%28computer_worm%29",
          ],
          [
            "https://www.fortinet.com/fr/resources/cyberglossary/cross-site-scripting",
            "https://www.fortinet.com/fr/resources/cyberglossary/cross-site-scripting",
          ],
          [
            "https://www.youtube.com/watch?v=E47rY21gXSY",
            "https://www.youtube.com/watch?v=E47rY21gXSY",
          ],
          [
            "https://www.linkedin.com/pulse/how-cross-site-scripting-xss-took-down-myspace-tim-queen--0drke/",
            "https://www.linkedin.com/pulse/how-cross-site-scripting-xss-took-down-myspace-tim-queen--0drke/",
          ],
          [
            "https://nordvpn.com/fr/blog/faille-xss/",
            "https://nordvpn.com/fr/blog/faille-xss/",
          ],
          [
            "https://evan-tech.livejournal.com/150019.html",
            "https://evan-tech.livejournal.com/150019.html",
          ],
          [
            "https://www.vice.com/en/article/the-myspace-worm-that-changed-the-internet-forever/",
            "https://www.vice.com/en/article/the-myspace-worm-that-changed-the-internet-forever/",
          ],
          [
            "http://vsb2006001.pbworks.com/w/page/23221389/%22Samy%22%20Myspace%20Worm",
            "http://vsb2006001.pbworks.com/w/page/23221389/%22Samy%22%20Myspace%20Worm",
          ],
        ],
      },

      /* Cross-Site Request Forgery (CSRF) */
      {
        name: "Cross-Site Request Forgery",
        aliases: ["CSRF"],
        def: `Le Cross-Site Request Forgery (CSRF) est une attaque qui force un
            utilisateur authentifié sur un site web à exécuter des actions non
            souhaitées sur une autre session ou un autre site où il est
            également authentifié. L'attaquant exploite la confiance qu'un site
            a envers l'utilisateur, en envoyant des requêtes malveillantes à
            l'insu de l'utilisateur, entraînant des actions comme la
            modification de paramètres de compte, le transfert de fonds, ou
            l'envoi de messages.`,
        how: [
          `→ Exploitation de l'authentification : L'attaque CSRF repose
              sur le fait que l'utilisateur est déjà authentifié sur un site
              cible (par exemple, une session bancaire en ligne ou un compte de
              réseau social).`,
          `→ Création d'une requête malveillante : L'attaquant crée une
              requête malveillante vers le site cible où l'utilisateur est
              authentifié. Cette requête peut être intégrée dans un lien ou un
              formulaire sur un site contrôlé par l'attaquant, ou simplement
              cachée dans une image ou un script.`,
          `→ Induction de l'utilisateur : L'utilisateur est incité à
              effectuer une action qui envoie la requête malveillante, comme
              cliquer sur un lien ou charger une page web. Étant donné que
              l'utilisateur est déjà authentifié sur le site cible, son
              navigateur inclut automatiquement les cookies d'authentification
              de ce site dans la requête.`,
          `→ Exécution de l'action non-autorisée : La requête est envoyée
              au site cible avec les cookies d'authentification de
              l'utilisateur, donnant l'impression qu'elle provient de
              l'utilisateur. Le site web cible exécute alors l'action comme si
              l'utilisateur l'avait intentionnellement initiée, permettant à
              l'attaquant de manipuler les actions de l'utilisateur à son
              profit.`,
        ],
        media: [
          {
            type: "image",
            src: "src/imgAttaques/csrf.png",
            alt: "Schéma d'une attaque CSRF",
            caption: `Schéma du fonctionnement d'une attaque CSRF (https://kinsta.com/fr/blog/attaques-csrf/)`,
          },
        ],
        sources: [
          [
            "https://en.wikipedia.org/wiki/Samy_%28computer_worm%29",
            "https://en.wikipedia.org/wiki/Samy_%28computer_worm%29",
          ],
          [
            "https://developer.mozilla.org/fr/docs/Glossary/CSRF",
            "https://developer.mozilla.org/fr/docs/Glossary/CSRF",
          ],
          [
            "https://www.youtube.com/watch?v=7bTNMSqCMI0",
            "https://www.youtube.com/watch?v=7bTNMSqCMI0",
          ],
          [
            "https://www.ionos.fr/digitalguide/serveur/securite/cross-site-request-forgery/",
            "https://www.ionos.fr/digitalguide/serveur/securite/cross-site-request-forgery/",
          ],
        ],
      },
    ],
  },

  /* Attaques basées sur l'exploitation des vulnérabilités */
  {
    id: "vulns",
    title: "Attaques basées sur l'exploitation des vulnérabilités",
    items: [
      /* Zero-Day Exploit */
      {
        name: "Zero-Day Exploit",
        aliases: ["Zero Day", "0-day", "0day", "Vulnérabilité zero-day"],
        def: `Un Zero-Day exploit est une attaque qui tire parti d'une
            vulnérabilité inconnue dans un logiciel, un matériel, ou un système.
            Le terme "Zero-Day" signifie que les développeurs du logiciel n'ont
            eu "zéro jour" pour corriger ou contrer la vulnérabilité, car elle
            n'a pas encore été découverte ou rendue publique. Les attaques
            Zero-Day sont particulièrement dangereuses car elles exploitent des
            failles pour lesquelles aucune solution ou correctif n'est encore
            disponible.`,
        how: [
          `→ Découverte de la vulnérabilité : L'attaquant découvre une
              vulnérabilité dans un logiciel, un système d'exploitation, ou un
              matériel. Cette vulnérabilité n'est pas encore connue des
              développeurs du logiciel ni des organismes de sécurité.`,
          `→ Développement de l'exploit : L'attaquant développe un code
              exploitant cette vulnérabilité. Cela peut inclure la création d'un
              malware, d'un script ou d'une autre méthode permettant de tirer
              parti de la faille.`,
          `→ Déploiement de l'attaque : L'exploit est ensuite utilisé
              pour attaquer des cibles spécifiques ou est déployé de manière
              plus large. Les attaquants peuvent propager l'exploit via des
              e-mails de phishing, des sites web infectés, des téléchargements
              de logiciels, ou d'autres vecteurs de distribution.`,
          `→ Exploitation de la vulnérabilité : Comme la vulnérabilité
              est inconnue et sans correctif, le logiciel ou le système ciblé
              est généralement incapable de détecter ou de bloquer l'attaque.
              L'attaquant peut alors exécuter des actions malveillantes, telles
              que l'installation de malwares, l'exécution de commandes à
              distance, le vol de données, ou la compromission du système.`,
          `→ Révélation publique : Souvent, les attaques Zero-Day sont
              découvertes lorsque des incidents de sécurité se produisent,
              incitant les développeurs et les chercheurs en sécurité à analyser
              et identifier la vulnérabilité. Une fois révélée, un correctif est
              généralement développé et déployé, mais les systèmes restent
              vulnérables jusqu'à ce que la mise à jour soit appliquée.`,
        ],
        exampleText: `L'un des Zero-Day exploits les plus connus est Stuxnet, découvert en
            2010. Ce malware ciblait spécifiquement les systèmes SCADA utilisés
            dans les installations industrielles, y compris les centrifugeuses
            nucléaires en Iran. Stuxnet exploitait plusieurs vulnérabilités
            Zero-Day dans Windows pour s'infiltrer dans les systèmes et altérer
            le fonctionnement des machines sans détection. Cette attaque a
            montré l'ampleur des dommages que peuvent causer les exploits
            Zero-Day, notamment dans des infrastructures critiques.`,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/stuxnet-schema.png",
            alt: "Illustration de l'attaque Stuxnet",
            caption:
              "Illustration de l'attaque Stuxnet (https://www.researchgate.net/figure/Stuxnet-computer-virus-attack_fig8_349633101)",
          },
        ],
        sources: [
          [
            "https://www.varonis.com/fr/blog/la-vulnerabilite-zero-day-expliquee",
            "https://www.varonis.com/fr/blog/la-vulnerabilite-zero-day-expliquee",
          ],
          [
            "https://fr.wikipedia.org/wiki/Stuxnet",
            "https://fr.wikipedia.org/wiki/Stuxnet",
          ],
          [
            "https://www.ibm.com/fr-fr/topics/zero-day",
            "https://www.ibm.com/fr-fr/topics/zero-day",
          ],
          [
            "https://fr.wikipedia.org/wiki/Vuln%C3%A9rabilit%C3%A9_zero-day",
            "https://fr.wikipedia.org/wiki/Vuln%C3%A9rabilit%C3%A9_zero-day",
          ],
          [
            "https://www.cloudflare.com/fr-fr/learning/security/threats/zero-day-exploit/",
            "https://www.cloudflare.com/fr-fr/learning/security/threats/zero-day-exploit/",
          ],
          [
            "https://www.researchgate.net/figure/Stuxnet-computer-virus-attack_fig8_349633101",
            "https://www.researchgate.net/figure/Stuxnet-computer-virus-attack_fig8_349633101",
          ],
        ],
      },

      /* Buffer Overflow */
      {
        name: "Buffer Overflow",
        aliases: ["Débordement de tampon"],
        def: `Un buffer overflow (dépassement de tampon) est une vulnérabilité de
            sécurité qui se produit lorsque un programme écrit plus de données
            dans un espace de mémoire (tampon) que ce que ce dernier est capable
            de contenir. Cela peut corrompre les données adjacentes, entraîner
            un comportement imprévu du programme, ou permettre à un attaquant
            d'exécuter du code malveillant. Cette faille est souvent exploitée
            pour compromettre la sécurité des systèmes, car elle peut permettre
            une prise de contrôle à distance.`,
        how: [
          `→ Stockage de données dans un tampon : Les programmes
              informatiques utilisent des tampons pour stocker temporairement
              des données en mémoire. Un tampon a une taille fixe définie à
              l'avance.`,
          `→ Dépassement du tampon : Un buffer overflow se produit
              lorsque le programme essaie d'écrire plus de données dans le
              tampon qu'il n'en peut contenir. Par exemple, si un tampon est
              configuré pour contenir 8 octets et qu'une opération tente
              d'écrire 16 octets, les 8 octets excédentaires "débordent" dans la
              mémoire adjacente.`,
          `→ Corruption de la mémoire : Le débordement peut corrompre
              des données importantes, telles que des pointeurs ou des variables
              de contrôle, ce qui peut altérer le fonctionnement du programme.
              Dans certains cas, l'attaquant peut injecter du code malveillant
              dans la mémoire.`,
          `→ Exécution de code malveillant : En exploitant le
              débordement, l'attaquant peut manipuler l'exécution du programme.
              Par exemple, il peut rediriger le flux de contrôle du programme
              pour exécuter son propre code. Cela peut permettre à l'attaquant
              d'exécuter des commandes à distance, de lire des données
              sensibles, ou de compromettre le système.`,
        ],
        exampleText: `Un exemple célèbre d'attaque par buffer overflow est l'exploitation
            de la vulnérabilité dans le ver Morris en 1988. Le ver utilisait une
            faille de buffer overflow dans le protocole de communication de
            messagerie électronique Sendmail pour se propager. Il a infecté un
            grand nombre de machines sur le réseau ARPANET, perturbant
            considérablement le réseau. Plus récemment, de nombreuses
            vulnérabilités buffer overflow ont été trouvées dans des logiciels
            couramment utilisés, soulignant l'importance de protéger contre ce
            type d'attaque.`,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/bufferoverflow.jpeg",
            alt: "Exemple de Buffer Overflow",
            caption:
              "Exemple de Buffer Overflow (https://www.wallarm.com/what/buffer-overflow-attack-definition-types-use-by-hackers-part-1)",
          },
        ],
        sources: [
          [
            "https://www.securiteinfo.com/attaques/hacking/buff.shtml",
            "https://www.securiteinfo.com/attaques/hacking/buff.shtml",
          ],
          [
            "https://www.fortinet.com/fr/resources/cyberglossary/buffer-overflow",
            "https://www.fortinet.com/fr/resources/cyberglossary/buffer-overflow",
          ],
          [
            "https://www.wallarm.com/what/buffer-overflow-attack-definition-types-use-by-hackers-part-1",
            "https://www.wallarm.com/what/buffer-overflow-attack-definition-types-use-by-hackers-part-1",
          ],
          [
            "https://fr.wikipedia.org/wiki/Morris_(ver_informatique)",
            "https://fr.wikipedia.org/wiki/Morris_(ver_informatique)",
          ],
        ],
      },

      /* Remote Code Execution (RCE) */
      {
        name: "Remote Code Execution",
        aliases: ["RCE"],
        def: `Le Remote Code Execution permet à un attaquant d'exécuter du code
            arbitraire sur un serveur ou une machine à distance. Cela signifie
            que l'attaquant peut contrôler l'appareil victime depuis un autre
            emplacement, en lui faisant exécuter des actions malveillantes,
            comme l'installation de logiciels, la modification de fichiers ou le
            vol d'informations.`,
        how: [
          `→ Identification de la vulnérabilité : L'attaquant repère une
              vulnérabilité dans une application web, un logiciel, ou un système
              d'exploitation. Les failles RCE sont souvent dues à de mauvaises
              pratiques de gestion des entrées utilisateur, comme des
              validations insuffisantes ou des failles de sécurité dans le code
              (par exemple, un buffer overflow ou une injection de commandes).`,
          `→ Injection de code malveillant : L'attaquant exploite la
              faille en injectant du code malveillant dans une requête ou une
              action envoyée au système cible. Le code peut être du shell
              script, des commandes systèmes ou du code compilé.`,
          `→ Exécution de code à distance : Une fois le code injecté, le
              serveur ou l'appareil victime exécute les commandes avec les
              droits associés au processus vulnérable, donnant à l'attaquant la
              possibilité de manipuler le système cible. Si le processus
              compromis a des privilèges élevés, l'attaquant peut prendre un
              contrôle total du système.`,
          `→ Prise de contrôle : L'attaquant peut installer des
              backdoors, exécuter d'autres attaques, voler des informations, ou
              perturber les services du système cible. Le niveau d'accès dépend
              des privilèges de l'application ou du service compromis.`,
        ],
        media: [
          {
            type: "video",
            src: "https://www.youtube.com/embed/J-t5ezd-V9M?si=qR_P7yHyCp6f3eeS",
            caption:
              "Remote Code Execution (RCE) Vulnerability Bug Hunting (Chaîne Youtube : Rahad Chowdhury) https://www.youtube.com/watch?v=J-t5ezd-V9M",
          },
        ],
        sources: [
          [
            "https://www.cloudflare.com/learning/security/what-is-remote-code-execution/",
            "https://www.cloudflare.com/learning/security/what-is-remote-code-execution/",
          ],
          [
            "https://www.wallarm.com/what/the-concept-of-rce-remote-code-execution-attack",
            "https://www.wallarm.com/what/the-concept-of-rce-remote-code-execution-attack",
          ],
          [
            "https://cyberinstitut.fr/comprendre-attaques-rce-remote-code-execution/",
            "https://cyberinstitut.fr/comprendre-attaques-rce-remote-code-execution/",
          ],
          [
            "https://www.youtube.com/watch?v=J-t5ezd-V9M",
            "https://www.youtube.com/watch?v=J-t5ezd-V9M",
          ],
        ],
      },

      /* Attaque par canaux auxiliaires */
      {
        name: "Attaque par canaux auxiliaires",
        aliases: ["Side-Channel Attack"],
        def: `Une attaque par canal auxiliaire est une méthode d'espionnage qui
            exploite des informations indirectes ou accidentelles émanant d'un
            système informatique pour compromettre sa sécurité. Plutôt que de
            s'attaquer directement aux algorithmes cryptographiques ou au
            logiciel, l'attaquant recueille des données comme les émissions
            électromagnétiques, la consommation d'énergie, le bruit, ou le temps
            d'exécution pour en déduire des informations sensibles, telles que
            des clés de chiffrement.`,
        how: [
          `→ Observation des comportements physiques : L'attaquant
              surveille les informations physiquement mesurables (énergie,
              temps, rayonnement électromagnétique, chaleur, etc.) produites par
              le système pendant son fonctionnement. Par exemple, une variation
              dans la consommation d'énergie ou le temps de réponse pourrait
              révéler des différences dans les opérations de chiffrement.`,
          `→ Corrélation avec des données sensibles : Les
              caractéristiques observées sont ensuite corrélées avec des données
              internes du système, comme les clés de chiffrement. Une fois que
              l'attaquant a suffisamment d'informations, il peut reconstituer
              des données sensibles, comme des mots de passe ou des clés
              privées.`,
          `→ Exploitation de la faiblesse : L'attaquant utilise les
              données obtenues pour pénétrer le système ou voler des
              informations. Contrairement aux méthodes d'attaque
              traditionnelles, il ne compromet pas directement les algorithmes
              ou logiciels, mais exploite les "fuites" d'informations générées
              pendant l'exécution normale.`,
          `→ Types d'attaques par canal auxiliaire :
              - Analyse de la consommation d'énergie : Mesurer la
                consommation d'énergie pendant des opérations cryptographiques
                pour en déduire des clés ou d'autres informations.
              - Analyse du temps d'exécutions : Observer le temps pris par
                un système pour effectuer certaines opérations, en particulier les
                opérations cryptographiques, afin d'inférer des informations
                sensibles.
              - Attaque par rayonnement électromagnétique : Capturer les
                émissions électromagnétiques produites par un appareil
                électronique et les analyser pour en extraire des données
                confidentielles.
              - Analyse acoustique : Utiliser les sons émis par un appareil
                (comme un disque dur ou un clavier) pour reconstituer des
                informations.`,
        ],
        exampleText: `L'une des attaques par canal auxiliaire les plus célèbres est celle
            menée contre des smartcards utilisant des algorithmes de chiffrement
            RSA. En 1996, il a été démontré que la consommation d'énergie d'une
            smartcard pouvait être mesurée pour révéler des informations sur les
            opérations de chiffrement en cours (https://cyber.gouv.fr/sites/default/files/IMG/pdf/CHES2014_Side_Channel_Attack_against_RSA_Key_Generation_Algorithms.pdf).
            En analysant ces variations d'énergie, les chercheurs ont pu déduire
            les clés de chiffrement, compromettant ainsi la sécurité des cartes
            à puce.`,
        media: [
          {
            type: "image",
            src: "src/imgAttaques/sidechannelattack.webp",
            alt: "Analyse de l'activité électromagnétique d'un processeur",
            caption:
              "Analyse de l'activité électromagnétique d'un processeur permettant d'identifier les opérations qui sont effectuées (multiplication ou mise au carré) afin de reconstituer partiellement une clé (https://www.synetis.com/attaques_auxiliaires/)",
          },
        ],
        sources: [
          [
            "https://www.synetis.com/attaques_auxiliaires/",
            "https://www.synetis.com/attaques_auxiliaires/",
          ],
          [
            "https://cyber.gouv.fr/sites/default/files/IMG/pdf/CHES2014_Side_Channel_Attack_against_RSA_Key_Generation_Algorithms.pdf",
            "https://cyber.gouv.fr/sites/default/files/IMG/pdf/CHES2014_Side_Channel_Attack_against_RSA_Key_Generation_Algorithms.pdf",
          ],
          [
            "https://fr.wikipedia.org/wiki/Attaque_par_canal_auxiliaire",
            "https://fr.wikipedia.org/wiki/Attaque_par_canal_auxiliaire",
          ],
        ],
      },
    ],
  },

  /* Attaques sur les systèmes d'authentification */
  {
    id: "auth",
    title: "Attaques sur les systèmes d'authentification",
    items: [
      /* Brute Force Attack */
      {
        name: "Brute Force Attack",
        def: `Une attaque par force brute est une méthode de piratage qui consiste
            à essayer systématiquement toutes les combinaisons possibles pour
            deviner un mot de passe, une clé de chiffrement ou d'autres
            informations sensibles. L'attaquant tente de toutes les possibilités
            jusqu'à trouver la bonne, en s'appuyant souvent sur des outils
            automatisés pour accélérer le processus.`,
        how: [
          `→ Essais et erreurs : L'attaquant utilise un programme qui
              essaie toutes les combinaisons possibles d'un mot de passe ou
              d'une clé de chiffrement. Cela peut être réalisé avec différentes
              approches :
              - Brute force pure : Essayer toutes les combinaisons
                possibles de caractères (lettres, chiffres, symboles) jusqu'à
                trouver la combinaison correcte.
              - Dictionnaire : Utiliser une liste de mots courants
                (comme des mots de passe populaires ou des phrases connues)
                pour deviner plus rapidement le bon mot de passe.
              - Attaque avec variantes : L'attaquant teste des
                variations de mots courants, en combinant des majuscules,
                chiffres, et symboles.`,
          `→ Automatisation : Les attaques par force brute sont souvent
              automatisées grâce à des outils spécialisés qui peuvent essayer
              des milliers ou des millions de combinaisons par seconde, en
              fonction de la complexité du mot de passe et des mesures de
              sécurité en place.`,
          `→ Accès au compte ou au système : Si le mot de passe ou la
              clé est faible (par exemple, un mot de passe simple ou un
              chiffrement de faible longueur), l'attaquant finit par trouver la
              bonne combinaison et obtient l'accès à l'élément protégé.`,
        ],
        media: [
          {
            type: "image",
            src: "src/imgAttaques/catrockyou.png",
            alt: "Liste de mots de passe venant de rockyou.txt",
            caption:
              "Le fichier rockyou.txt (https://www.geeksforgeeks.org/how-to-extract-rockyou-txt-gz-file-in-kali-linux/)",
          },
          {
            type: "video",
            src: "https://www.youtube.com/embed/z4_oqTZJqCo?si=7Onu2gQJ5_MHQ2K5",
            caption:
              "how to HACK a password // password cracking with Kali Linux and HashCat (Chaîne Youtube : NetworkChuck) https://www.youtube.com/watch?v=z4_oqTZJqCo",
          },
        ],
        sources: [
          [
            "https://www.fortinet.com/fr/resources/cyberglossary/brute-force-attack",
            "https://www.fortinet.com/fr/resources/cyberglossary/brute-force-attack",
          ],
          [
            "https://github.com/exploit-development/RockYou2024",
            "https://github.com/exploit-development/RockYou2024",
          ],
          [
            "https://www.geeksforgeeks.org/how-to-extract-rockyou-txt-gz-file-in-kali-linux/",
            "https://www.geeksforgeeks.org/how-to-extract-rockyou-txt-gz-file-in-kali-linux/",
          ],
          [
            "https://www.imperva.com/learn/application-security/brute-force-attack/",
            "https://www.imperva.com/learn/application-security/brute-force-attack/",
          ],
          [
            "https://www.youtube.com/watch?v=z4_oqTZJqCo",
            "https://www.youtube.com/watch?v=z4_oqTZJqCo",
          ],
        ],
      },

      /* Keylogging */
      {
        name: "Keylogging",
        aliases: ["Keylogger", "Enregistreur de frappes"],
        def: `Le keylogging est une méthode de surveillance qui enregistre
            secrètement toutes les frappes clavier effectuées sur un appareil.
            Un keylogger est un logiciel ou un matériel utilisé pour capturer
            les informations tapées par l'utilisateur, telles que des mots de
            passe, des messages, ou des informations de carte bancaire.
            L'attaquant peut ainsi récupérer des données sensibles à l'insu de
            la victime.`,
        how: [
          `→ Keylogger logiciel : Installé discrètement sur un
              ordinateur ou un appareil mobile, ce type de keylogger fonctionne
              en arrière-plan pour enregistrer toutes les touches pressées. Il
              peut être installé via des malwares, des emails de phishing ou des
              téléchargements malveillants.`,
          `→ Keylogger matériel : Ce dispositif physique est branché
              entre le clavier et l'ordinateur ou intégré directement dans le
              matériel (par exemple, un clavier compromis). Il capture les
              frappes sans nécessiter d'accès au système d'exploitation.`,
          `→ Transmission des données : Les frappes enregistrées sont
              soit stockées localement sur l'appareil compromis, soit transmises
              à distance à l'attaquant, qui les analyse pour obtenir des
              informations sensibles.`,
          `→ Extraction des informations sensibles : L'attaquant
              récupère les données telles que des identifiants, des mots de
              passe, des informations bancaires, ou des communications
              personnelles.`,
        ],
        media: [
          {
            type: "image",
            src: "src/imgAttaques/keylogger.jpg",
            alt: "Un exemple de keylogger",
            caption:
              "L'attaquant voit tout ce que la victime tape sur son clavier (https://www.techtarget.com/searchsecurity/definition/keylogger)",
          },
          {
            type: "video",
            src: "https://www.youtube.com/embed/LBM3EzBXhdY?si=x3zbNEJM4vQmRaqO",
            caption:
              "Warning! Python Remote Keylogger (this is really too easy!) (Chaîne Youtube : David Bombal) https://www.youtube.com/watch?v=LBM3EzBXhdY",
          },
        ],
        sources: [
          [
            "https://www.fortinet.com/fr/resources/cyberglossary/what-is-keyloggers",
            "https://www.fortinet.com/fr/resources/cyberglossary/what-is-keyloggers",
          ],
          [
            "https://www.techtarget.com/searchsecurity/definition/keylogger",
            "https://www.techtarget.com/searchsecurity/definition/keylogger",
          ],
          [
            "https://www.youtube.com/watch?v=LBM3EzBXhdY",
            "https://www.youtube.com/watch?v=LBM3EzBXhdY",
          ],
          [
            "https://www.techopedia.com/fr/dictionnaire/keylogger",
            "https://www.techopedia.com/fr/dictionnaire/keylogger",
          ],
        ],
      },
    ],
  },

  /* Attaques sur les infrastructures critiques */
  {
    id: "critical",
    title: "Attaques sur les infrastructures critiques",
    items: [
      /* SCADA Attack (Supervisory Control and Data Acquisition) */
      {
        name: "SCADA Attack",
        aliases: ["Supervisory Control and Data Acquisition"],
        def: `Une attaque SCADA cible les systèmes de contrôle industriel utilisés
            pour superviser et contrôler des infrastructures critiques telles
            que les centrales électriques, les systèmes de distribution d'eau,
            et les usines de fabrication. Ces systèmes sont essentiels pour le
            fonctionnement de nombreuses industries et leur compromission peut
            entraîner des interruptions de service, des dommages matériels, ou
            des menaces pour la sécurité publique.`,
        how: [
          `→ Vulnérabilités du système : Les systèmes SCADA peuvent
              présenter des failles de sécurité, comme des mots de passe par
              défaut, des protocoles non sécurisés, ou un accès réseau non
              protégé. Il n'est pas rare de trouver d'anciens OS non maintenus
              dans les réseaux SCADA.`,
          `→ Accès non autorisé : : Un attaquant peut accéder au réseau
              SCADA via des méthodes variées, telles que le phishing,
              l'exploitation de failles de sécurité, ou même un accès physique
              aux installations.`,
          `→ Manipulation des données : Une fois dans le système,
              l'attaquant peut manipuler les données ou les commandes,
              entraînant des actions non autorisées, comme le désengagement de
              systèmes de sécurité, la modification des processus industriels,
              ou même le déclenchement d'opérations dangereuses.`,
          `→ Impact sur l'infrastructure : Les conséquences d'une
              attaque SCADA peuvent être graves, allant de la perte de
              production et des pannes de service à des dommages physiques ou
              des risques pour la sécurité des employés et du public.`,
        ],
        exampleText: `Un exemple célèbre d'attaque SCADA est le malware Stuxnet, qui a
            ciblé les systèmes de contrôle industriel utilisés dans le programme
            nucléaire iranien. Stuxnet a réussi à infiltrer les systèmes SCADA
            pour manipuler les centrifugeuses, entraînant des dommages matériels
            significatifs et démontrant la vulnérabilité des infrastructures
            critiques face aux cyberattaques. Cette attaque a ouvert les yeux
            sur les menaces potentielles posées aux systèmes SCADA à l'échelle
            mondiale.`,
        media: [
          {
            type: "video",
            src: "https://www.youtube.com/embed/UtFqtA0X_hM?si=4UumpWz9ti4tZuOp",
            caption:
              "Stuxnet: The Cyber Weapon That Destroyed Iran's Nuclear Program (Chaîne Youtube : Warographics) https://www.youtube.com/watch?v=UtFqtA0X_hM",
          },
        ],
        sources: [
          [
            "https://hackernoon.com/6-major-scada-attacks-that-happened-and-their-consequences",
            "https://hackernoon.com/6-major-scada-attacks-that-happened-and-their-consequences",
          ],
          [
            "https://www.idna.fr/2017/09/13/scada-et-iot-les-prochaines-cibles-des-cyberattaques/",
            "https://www.idna.fr/2017/09/13/scada-et-iot-les-prochaines-cibles-des-cyberattaques/",
          ],
          [
            "https://www.solutions-numeriques.com/comprendre-les-attaques-en-environnement-scada/",
            "https://www.solutions-numeriques.com/comprendre-les-attaques-en-environnement-scada/",
          ],
          [
            "https://www.youtube.com/watch?v=UtFqtA0X_hM",
            "https://www.youtube.com/watch?v=UtFqtA0X_hM",
          ],
          [
            "https://www.cert-ist.com/public/fr/SO_detail?code=stuxnet",
            "https://www.cert-ist.com/public/fr/SO_detail?code=stuxnet",
          ],
        ],
      },

      /* Supply Chain Attack */
      {
        name: "Supply Chain Attack",
        aliases: ["Attaque de la chaîne d'approvisionnement"],
        def: `Une attaque de la chaîne d'approvisionnement (Supply Chain Attack)
            est une méthode où un attaquant cible les vulnérabilités présentes
            dans les produits ou services d'une entreprise, en s'introduisant
            dans le réseau ou le système via un fournisseur ou un partenaire.
            L'objectif est d'infiltrer une organisation en compromettant un
            maillon de sa chaîne d'approvisionnement, comme un logiciel, un
            matériel, ou un service tiers.`,
        how: [
          `→ Ciblage des fournisseurs : L'attaquant identifie un
              fournisseur ou un partenaire de l'entreprise qui a un accès
              privilégié ou qui fournit des logiciels, du matériel, ou des
              services.`,
          `→ Compromission du fournisseur : L'attaquant compromet les
              systèmes du fournisseur en exploitant des vulnérabilités, en
              injectant du malware dans les mises à jour logicielles, ou en
              utilisant des méthodes de phishing pour obtenir des informations
              d'identification.`,
          `→ Propagation du malware : Une fois que le fournisseur est
              compromis, le malware ou l'accès non autorisé est transmis à
              l'entreprise cible, souvent via des mises à jour logicielles ou
              des produits contenant du code malveillant.`,
          `→ Exploitation de l'accès : L'attaquant peut alors exploiter
              cet accès pour voler des données sensibles, espionner des
              activités, ou lancer d'autres attaques au sein de l'organisation
              cible.`,
        ],
        exampleText: `Un exemple marquant d'attaque de la chaîne d'approvisionnement est
            l'attaque SolarWinds révélée en 2020. Des cybercriminels ont
            compromis les mises à jour de logiciels de SolarWinds, un
            fournisseur de logiciels de gestion des systèmes informatiques. En
            injectant un code malveillant dans les mises à jour de son produit,
            ils ont réussi à infiltrer des milliers d'organisations, y compris
            des agences gouvernementales américaines, ce qui a permis un accès
            non autorisé à des données sensibles et à des systèmes critiques.
            Cette attaque a mis en lumière la vulnérabilité des chaînes
            d'approvisionnement et l'importance de la sécurité dans les
            relations avec les fournisseurs.`,
        media: [
          {
            type: "video",
            src: "https://www.youtube.com/embed/3e_RzLCPM-Y?si=FAaxAqbUXtmBP1v5",
            caption:
              "Le plus grand CYBERESPIONNAGE du 21e siècle ! (SolarWinds) (Chaîne Youtube : Numerama) https://www.youtube.com/watch?v=3e_RzLCPM-Y",
          },
        ],
        sources: [
          [
            "https://www.crowdstrike.fr/cybersecurity-101/cyberattacks/supply-chain-attacks/",
            "https://www.crowdstrike.fr/cybersecurity-101/cyberattacks/supply-chain-attacks/",
          ],
          [
            "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2019-CTI-004.pdf",
            "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2019-CTI-004.pdf",
          ],
          [
            "https://www.youtube.com/watch?v=3e_RzLCPM-Y",
            "https://www.youtube.com/watch?v=3e_RzLCPM-Y",
          ],
          [
            "https://www.keepersecurity.com/fr_FR/threats/supply-chain-attack.html",
            "https://www.keepersecurity.com/fr_FR/threats/supply-chain-attack.html",
          ],
        ],
      },
    ],
  },
];
