// assets/js/data/lexique-data.js
window.LEXIQUE_TERMS = [
  {
    term: "2FA",
    aliases: ["Authentification à deux facteurs"],
    def: `L'authentification à deux facteurs (2FA) est une méthode de sécurité qui nécessite deux formes distinctes d'identification pour vérifier l'identité d'un utilisateur.`,
  },
  {
    term: "Adresse IP",
    def: `Une adresse IP est une série unique de chiffres attribuée à chaque appareil connecté à un réseau informatique utilisant le protocole Internet. Elle sert à identifier un appareil sur le réseau et à diriger les données entre les appareils.`,
  },
  {
    term: "AH",
    aliases: ["Authentication Header"],
    def: `L'AH est un protocole de sécurité utilisé dans la suite IPsec pour assurer l'intégrité et l'authentification des paquets IP. AH garantit que les données envoyées n'ont pas été modifiées pendant le transit et authentifie l'origine du message, mais il ne chiffre pas les données.`,
  },
  {
    term: "Anonymat",
    def: `L’anonymat est la capacité d’une personne à effectuer des actions tout en restant non identifiable. Cela signifie que l’identité de la personne ne peut pas être liée à une action ou à un ensemble d’informations.`,
  },
  {
    term: "ARP",
    aliases: ["Address Resolution Protocol"],
    def: `ARP est un protocole utilisé pour associer les adresses IP aux adresses MAC (Media Access Control) des appareils sur un réseau local. Il permet aux appareils de communiquer entre eux en traduisant les adresses IP en adresses physiques nécessaires pour l'envoi de données sur le réseau.`,
  },
  {
    term: "AuthN",
    aliases: ["Authentification"],
    def: `L'AuthN est le processus de vérification de l'identité d'un utilisateur ou d'un système avant de lui accorder l'accès à une ressource ou un service. Cela peut se faire via des mots de passe, des jetons de sécurité, des empreintes digitales, ou d'autres méthodes d'authentification.`,
  },
  {
    term: "AuthZ",
    aliases: ["Autorisation"],
    def: `L'AuthZ est le processus de déterminer les permissions et les niveaux d'accès qu'un utilisateur authentifié ou un système peut avoir sur une ressource ou un service. Après l'authentification (AuthN), l'autorisation décide ce que l'utilisateur est autorisé à faire.`,
  },
  {
    term: "BGP",
    aliases: ["Border Gateway Protocol"],
    def: `Le BGP est un protocole de routage utilisé pour échanger des informations de routage entre différents réseaux sur Internet. Il permet de déterminer les meilleurs chemins pour transmettre les données à travers des réseaux autonomes (AS), en assurant la connectivité entre différents fournisseurs d'accès à Internet (FAI).`,
  },
  {
    term: "Bitcoin",
    def: `Bitcoin est une cryptomonnaie décentralisée, créée en 2009 par un individu ou un groupe sous le pseudonyme de Satoshi Nakamoto. Il utilise une technologie de blockchain pour permettre des transactions sécurisées et anonymes sans intermédiaire, comme une banque.`,
  },
  {
    term: "Blockchain",
    def: `La blockchain est une technologie de stockage et de transmission d'informations qui se présente sous la forme d'une chaîne de blocs, chaque bloc contenant un ensemble de transactions. Chaque bloc est lié au précédent par des références cryptographiques, assurant ainsi la sécurité, l'intégrité et la transparence des données sans nécessiter d'autorité centrale.`,
  },
  {
    term: "Broadcast",
    def: `Le broadcast est une méthode de communication réseau où un message est envoyé à tous les appareils connectés sur un réseau local, plutôt qu'à un destinataire spécifique. Tous les appareils reçoivent le message, mais seuls ceux qui sont concernés y répondent.`,
  },
  {
    term: "Checksum",
    def: `Un checksum est une valeur calculée à partir d'un ensemble de données, utilisée pour vérifier l'intégrité et l'exactitude de ces données lors de leur transmission ou stockage. Il est souvent utilisé dans les protocoles de communication et les systèmes de fichiers pour détecter les erreurs potentielles.`,
  },
  {
    term: "Confidentialité",
    def: `Propriété selon laquelle l'information n'est pas rendue accessible ou divulguée à des personnes, entités ou processus non autorisés. (ISO/IEC 27001:2022)`,
  },
  {
    term: "Consentement éclairé",
    def: `Le consentement éclairé est l’accord donné par une personne après avoir été informée de la manière dont ses données seront collectées, utilisées et protégées. Ce consentement doit être libre, spécifique, informé et univoque.`,
  },
  {
    term: "Cryptographie",
    def: `La cryptographie est l’ensemble des techniques permettant de protéger des informations par le biais du chiffrement, rendant les données incompréhensibles pour toute personne non autorisée.`,
  },
  {
    term: "CSS",
    aliases: ["Cascading Style Sheet"],
    def: `CSS est un langage de feuille de style utilisé pour décrire l'apparence et la mise en page des pages web. Il permet de séparer le contenu HTML de la présentation visuelle, en définissant des styles pour des éléments comme les couleurs, les polices, les marges et la disposition des éléments.`,
  },
  {
    term: "CVE",
    aliases: ["Common Vulnerabilities and Exposures"],
    def: `CVE est un système de référence standardisé pour identifier et répertorier les vulnérabilités de sécurité dans les logiciels et systèmes informatiques. Chaque vulnérabilité reçoit un identifiant unique, facilitant son suivi et sa gestion.`,
  },
  {
    term: "Dark web",
    def: `Le dark web est une partie d'Internet accessible uniquement via des logiciels spécifiques, comme Tor, qui permettent l'anonymat. Contrairement au web visible, il n'est pas indexé par les moteurs de recherche traditionnels et est souvent utilisé pour des activités illégales, mais aussi pour protéger la vie privée et la liberté d'expression dans des environnements répressifs.`,
  },
  {
    term: "Deep web",
    def: `Le deep web désigne la partie d'Internet qui n'est pas indexée par les moteurs de recherche traditionnels et qui ne peut pas être accessible par des méthodes de recherche standard. Cela inclut des contenus tels que des bases de données, des archives, des réseaux sociaux protégés, et des pages nécessitant une authentification pour y accéder.`,
  },
  {
    term: "DHCP",
    aliases: ["Domain Host Configuration Protocol"],
    def: `Le DHCP est un protocole réseau qui attribue automatiquement des adresses IP et d'autres informations de configuration réseau aux appareils sur un réseau, permettant ainsi leur connexion sans intervention manuelle. Il facilite la gestion des adresses IP dans les réseaux.`,
  },
  {
    term: "Diffie-Hellman",
    def: `Diffie-Hellman est un protocole de cryptographie qui permet à deux parties d'échanger des clés secrètes sur un canal de communication non sécurisé. Il repose sur des principes mathématiques complexes pour permettre la génération d'une clé partagée sans qu'elle soit jamais transmise directement.`,
  },
  {
    term: "Disponibilité",
    def: `Propriété d'être accessible et utilisable à la demande par une entité autorisée. (ISO/IEC 27001:2022)`,
  },
  {
    term: "DNS",
    aliases: ["Domain Name System"],
    def: `Le DNS est un système essentiel dans les réseaux informatiques qui traduit les noms de domaine lisibles par l’homme (comme www.exemple.com) en adresses IP numériques (comme "192.0.2.1") que les ordinateurs utilisent pour localiser et communiquer entre eux sur Internet.`,
  },
  {
    term: "DNSSEC",
    aliases: ["Domain Name System Security Extensions"],
    def: `DNSSEC est un ensemble de protocoles de sécurité ajoutés au DNS (Domain Name System) pour garantir l'authenticité et l'intégrité des réponses aux requêtes DNS.`,
  },
  {
    term: "Donnée",
    def: `Description élémentaire d'une réalité sortie de tout contexte.`,
  },
  {
    term: "Données personnelles",
    def: `Les données personnelles sont toute information qui peut être utilisée pour identifier directement ou indirectement une personne. Cela inclut des éléments tels que le nom, l’adresse, les informations financières, l’adresse IP, etc.`,
  },
  {
    term: "Dorking",
    aliases: ["Google Dorks"],
    def: `Le Dorking est une technique de recherche avancée qui consiste à utiliser des opérateurs de recherche spécifiques sur les moteurs de recherche pour trouver des informations sensibles ou non sécurisées, souvent non intentionnellement exposées au public. Cette méthode permet de découvrir des fichiers, des bases de données, des configurations système, et d'autres types de contenus qui peuvent contenir des informations confidentielles ou vulnérables.`,
  },
  {
    term: "Doxing",
    def: `Le doxing est une pratique malveillante qui consiste à rechercher et à publier des informations personnelles identifiables sur une personne, souvent dans le but de nuire ou de harceler. Cela peut inclure des détails tels que le nom, l'adresse, le numéro de téléphone, et d'autres informations privées qui devraient rester confidentielles.`,
  },
  {
    term: "EBIOS RM",
    aliases: [
      "Expression des Besoins et Identification des Objectifs de Sécurité - Risk Manager",
    ],
    def: `EBIOS RM est une
              méthode d'analyse de risques de sécurité numérique développée par
              l'ANSSI. Elle aide à identifier, évaluer et traiter les risques
              liés à la cybersécurité en tenant compte des menaces, des
              vulnérabilités et des impacts potentiels sur un système
              d'information.`,
  },
  {
    term: "ESP",
    aliases: ["Encapsulation Security Payload"],
    def: `L'ESP est un protocole de la
              suite IPsec qui assure la confidentialité, l'intégrité et
              l'authentification des paquets de données en les chiffrant.
              Contrairement à l'Authentication Header (AH), ESP chiffre le
              contenu des paquets IP, offrant ainsi une protection contre les
              interceptions, en plus de garantir que les données n'ont pas été
              altérées.`,
  },
  {
    term: "FIB",
    aliases: ["Forwarding Information Base"],
    def: `Le FIB st une
              table de routage utilisée dans les routeurs pour stocker des
              informations sur les chemins réseau disponibles et déterminer la
              meilleure route pour transmettre les paquets de données.`,
  },
  {
    term: "GANs",
    aliases: ["Generative Adversarial Networks"],
    def: `Les GANs sont une architecture de machine
              learning composée de deux réseaux neuronaux, un générateur et un
              discriminateur, qui s'affrontent dans un processus compétitif. Le
              générateur crée des données synthétiques, tandis que le
              discriminateur évalue leur authenticité par rapport à des données
              réelles, améliorant ainsi progressivement la qualité des données
              générées.`,
  },
  {
    term: "HTML",
    aliases: ["HyperText Markup Language"],
    def: `HTML est un langage
              de balisage utilisé pour structurer et afficher le contenu sur le
              web. Il permet de créer des pages web en définissant des éléments
              comme les titres, paragraphes, images, liens, et autres composants
              interactifs.`,
  },
  {
    term: "HTTP/HTTPS",
    aliases: ["HyperText Transfer Protocol/Secure"],
    def: `HTTP 
              est un protocole de communication utilisé pour transférer des
              données entre un navigateur web et un serveur. Il permet
              l'affichage des pages web et l'échange d'informations sur le World
              Wide Web. HTTPS est une version sécurisée de HTTP qui chiffre les
              données échangées pour garantir la confidentialité et l'intégrité
              des communications.`,
  },
  {
    term: "IA",
    aliases: ["Intelligence artificielle"],
    def: `L'intelligence artificielle désigne la
              capacité d'un système informatique à effectuer des tâches qui
              nécessitent normalement une intelligence humaine, telles que la
              reconnaissance de la parole, la prise de décision, l'apprentissage
              et la compréhension du langage naturel. Elle englobe divers
              sous-domaines, comme l'apprentissage automatique et le traitement
              du langage naturel.`,
  },
  {
    term: "IDE",
    aliases: ["Integrated Development Environment"],
    def: `Un IDE est un environnement de développement
              intégré qui fournit des outils complets pour le développement de
              logiciels. Il regroupe des fonctionnalités telles que l'édition de
              code, le débogage, la compilation, et la gestion de projets dans
              une interface unifiée, facilitant ainsi le processus de
              développement.`,
  },
  {
    term: "IKEv2",
    aliases: ["Internet Key Exchange v2"],
    def: `IKEv2 est un
              protocole de sécurisation des échanges de clés utilisé dans le
              cadre d'IPsec pour établir et maintenir des connexions VPN
              sécurisées. Il permet l'authentification mutuelle entre les
              parties et la gestion dynamique des clés de chiffrement,
              garantissant la sécurité des données transmises sur le réseau.`,
  },
  {
    term: "Information",
    def: `Une interprétation d'une donnée ou d'un
              ensemble de données dans un contexte déterminé.`,
  },
  {
    term: "Intégrité",
    def: `Propriété de protection de l'exactitude et
              de l'exhaustivité des actifs. (ISO/IEC 27001:2022)`,
  },
  {
    term: "IOC",
    aliases: ["Indicator of Compromise"],
    def: `Un IOC est une preuve
              ou un signe qu'une violation de sécurité ou une activité
              malveillante a eu lieu dans un système informatique. Il s'agit
              d'éléments détectables, comme des fichiers, des adresses IP, ou
              des signatures spécifiques, qui permettent d'identifier une
              compromission ou une attaque en cours.`,
  },
  {
    term: "IP",
    aliases: ["Internet Protocol"],
    def: `IP est un protocole utilisé
              pour identifier et localiser les appareils sur un réseau, en leur
              attribuant une adresse IP unique. Il gère l'acheminement des
              paquets de données entre les dispositifs connectés à Internet ou à
              un réseau local.`,
  },
  {
    term: "IPsec",
    aliases: ["Internet Protocol Security"],
    def: `IPsec est un ensemble de protocoles de
              sécurité utilisé pour chiffrer et authentifier les communications
              sur un réseau IP. Il assure la confidentialité, l'intégrité et
              l'authenticité des données transmises, notamment dans les VPN.`,
  },
  {
    term: "Kernel",
    aliases: ["Noyau"],
    def: `Le kernel est le cœur du système
              d'exploitation. Il gère les interactions entre le matériel et le
              logiciel, allouant les ressources système telles que le
              processeur, la mémoire et les périphériques. Il est responsable de
              la gestion des processus, des fichiers, de la mémoire et des
              communications entre les composants.`,
  },
  {
    term: "LDAP",
    aliases: ["Lightweight Directory Access Protocol"],
    def: `LDAP
              est un protocole utilisé pour accéder et gérer des informations
              dans des services d'annuaires, souvent utilisés pour stocker des
              données sur les utilisateurs, les groupes, et les ressources d'un
              réseau. Il permet de centraliser l'authentification et la gestion
              des identités dans une organisation.`,
  },
  {
    term: "Malware",
    aliases: ["Malicious Software"],
    def: `Un malware est un
              logiciel malveillant conçu pour infiltrer, endommager ou perturber
              des systèmes informatiques sans le consentement de l'utilisateur.
              Il peut voler des données, détruire des fichiers, espionner des
              activités ou rendre des systèmes inopérants.`,
  },
  {
    term: "Multicast",
    def: `Le multicast est une méthode de
              communication réseau dans laquelle un message ou des données sont
              envoyés à un groupe spécifique d'appareils sur un réseau, plutôt
              qu'à un seul destinataire (unicast) ou à tous les appareils
              (broadcast).`,
  },
  {
    term: "NIS-2",
    aliases: ["Network and Information Security 2"],
    def: `NIS-2 est une directive européenne visant à
              améliorer la cybersécurité des réseaux et systèmes d'information
              dans les secteurs critiques. Elle impose des exigences renforcées
              en matière de sécurité et de notification des incidents pour un
              plus grand nombre d'entités par rapport à la directive NIS
              initiale.`,
  },
  {
    term: "Obfuscation",
    def: `L’obfuscation est une technique utilisée
              pour rendre les données moins compréhensibles ou traçables, par
              exemple en mélangeant des informations, en utilisant des
              techniques de masquage ou en créant de fausses pistes.`,
  },
  {
    term: "OCSP",
    aliases: ["Online Certificate Status Protocol"],
    def: `L'OCSP est un protocole utilisé pour vérifier
              en temps réel la validité d'un certificat numérique. Il permet de
              s'assurer qu'un certificat SSL/TLS n'a pas été révoqué par
              l'autorité de certification, garantissant ainsi la sécurité des
              connexions en ligne.`,
  },
  {
    term: "Open Source",
    def: `Open Source désigne un modèle de
              développement logiciel dans lequel le code source est rendu
              accessible au public. Cela permet à quiconque de visualiser,
              modifier et distribuer le code, favorisant la collaboration et
              l'innovation.`,
  },
  {
    term: "OSINT",
    aliases: ["Open Source Intelligence"],
    def: `L'OSINT désigne la collecte et l'analyse
              d'informations provenant de sources accessibles au public pour
              obtenir des renseignements exploitables. Cela inclut des données
              provenant de sites web, de réseaux sociaux, de publications, de
              forums et de médias traditionnels.`,
  },
  {
    term: "P2P",
    aliases: ["Peer-to-Peer"],
    def: `Le P2P est un modèle de réseau
              dans lequel les ordinateurs (ou "pairs") peuvent agir à la fois
              comme clients et serveurs, permettant ainsi le partage direct de
              ressources et de données entre eux sans passer par un serveur
              central. Ce modèle favorise la décentralisation et la
              collaboration entre les utilisateurs.`,
  },
  {
    term: "Perceptron",
    def: `Le perceptron est un modèle de réseau de
              neurones artificiels de base, conçu pour la classification
              binaire. Il prend un ensemble d'entrées pondérées, les combine
              pour produire une sortie, et apprend à ajuster ces poids au fil du
              temps en fonction des erreurs de classification.`,
  },
  {
    term: "Profilage",
    def: `Le profilage est le traitement automatisé
              des données personnelles pour analyser ou prédire des aspects
              concernant une personne, souvent à des fins de marketing ou de
              sécurité.`,
  },
  {
    term: "Proxy",
    def: `Un proxy est un serveur intermédiaire qui
              relaie les requêtes entre un utilisateur et Internet. Il agit
              comme un filtre en masquant l'adresse IP de l'utilisateur,
              permettant ainsi de naviguer de manière plus anonyme et de
              contourner certaines restrictions d'accès. Le proxy peut également
              filtrer le contenu en fonction de règles spécifiques, améliorant
              ainsi la sécurité ou contrôlant l'accès à certaines ressources.`,
  },
  {
    term: "Pseudonymat",
    def: `Le pseudonymat est l’utilisation d’un
              faux nom ou d’un pseudonyme pour cacher son identité réelle, tout
              en permettant certaines formes de traçabilité si nécessaire.`,
  },
  {
    term: "RDP",
    aliases: ["Remote Desktop Protocol"],
    def: `RDP est un protocole
              développé par Microsoft qui permet à un utilisateur de se
              connecter à distance à un autre ordinateur via une interface
              graphique. Il permet de contrôler et d'interagir avec une machine
              distante comme si l'utilisateur y accédait localement.`,
  },
  {
    term: "RGPD",
    aliases: ["Règlement général sur la protection des données"],
    def: `Le RGPD
              (UE 2016/679), est une législation de l’Union Européenne entrée en
              vigueur en mai 2018 constituant le cadre juridique de référence
              pour la protection des données personnelles des résidents de l’UE.
              `,
  },
  {
    term: "Routeur",
    def: `Un routeur est un appareil réseau qui
              achemine les données entre différents réseaux informatiques en
              déterminant le meilleur chemin pour les paquets de données. Il
              fonctionne principalement à la couche 3 (couche réseau) du modèle
              OSI, où il utilise des adresses IP pour diriger le trafic entre
              des réseaux distincts.`,
  },
  {
    term: "Service",
    aliases: ["ITIL v4 Service"],
    def: `Un service est un moyen de permettre la
              co-création de valeur en facilitant les résultats que les clients
              veulent atteindre, sans que le client ait à gérer les coûts et les
              risques spécifiques. (ITIL v4)`,
  },
  {
    term: "Service Management",
    aliases: ["ITIL v4 Service Management"],
    def: `Un ensemble de capacités
              organisationnelles spécialisées permettant de créer de la valeur
              pour les clients sous forme de services. (ITIL v4)`,
  },
  {
    term: "SIEM",
    aliases: ["Security Information and Event Management"],
    def: `Un SIEM  est un système qui collecte, analyse et corrèle en
              temps réel les données de sécurité provenant de différentes
              sources pour détecter des incidents de sécurité et répondre aux
              menaces. Il permet une gestion centralisée des alertes de sécurité
              et des événements dans un environnement informatique.`,
  },
  {
    term: "SMTP",
    aliases: ["Simple Mail Transfer Protocol"],
    def: `SMTP est un
              protocole standard utilisé pour envoyer des emails sur Internet.
              Il gère la transmission des messages d'un serveur de messagerie à
              un autre, ainsi que l'envoi des courriels depuis un client de
              messagerie vers un serveur.`,
  },
  {
    term: "SOC",
    aliases: ["Security Operations Center"],
    def: `Un SOC est une
              équipe centralisée de spécialistes qui surveille, analyse et
              réagit aux incidents de sécurité en temps réel dans une
              organisation. Il a pour mission de détecter, prévenir et répondre
              aux menaces qui pourraient compromettre la sécurité des systèmes
              d'information.`,
  },
  {
    term: "SPI",
    aliases: ["Security Parameters Index"],
    def: `Le SPI est un
              identifiant unique utilisé dans les protocoles IPsec, comme ESP et
              AH, pour associer un paquet de données à une connexion sécurisée
              spécifique. Il permet de retrouver les paramètres de sécurité
              utilisés pour protéger une communication, tels que les clés de
              chiffrement et les algorithmes.`,
  },
  {
    term: "SSL",
    aliases: ["Secure Sockets Layer"],
    def: `SSL est un protocole de
              sécurité qui établit une connexion chiffrée entre un serveur web
              et un navigateur, garantissant que les données échangées entre les
              deux restent privées et intégrales. SSL protège les informations
              sensibles telles que les mots de passe, les numéros de carte de
              crédit, et autres données confidentielles lors de leur
              transmission sur Internet.`,
  },
  {
    term: "Stalking",
    def: `Le stalking est une forme de harcèlement
              caractérisée par une surveillance obsessionnelle ou non désirée
              d'une personne, en ligne ou dans le monde réel. Cela inclut la
              collecte d'informations personnelles, la surveillance de
              l'activité sur les réseaux sociaux, ou l'espionnage dans le but de
              contrôler ou d'intimider la victime.`,
  },
  {
    term: "SWIFT",
    aliases: ["Society for Worldwide Interbank Financial Telecommunication"],
    def: `SWIFT est un réseau de messagerie international
              utilisé par les institutions financières pour envoyer et recevoir
              des informations de manière sécurisée et standardisée. Il est
              principalement utilisé pour les transactions financières
              internationales, facilitant le transfert de fonds entre banques à
              travers le monde.`,
  },
  {
    term: "Surveillance",
    def: `La surveillance est la surveillance
              systématique des activités des individus, souvent sans le
              consentement des personnes concernées.`,
  },
  {
    term: "TCP",
    aliases: ["Transmission Control Protocol"],
    def: `TCP est un
              protocole de communication utilisé pour transmettre des données
              sur un réseau IP. Il fonctionne en établissant une connexion entre
              l'expéditeur et le destinataire, garantissant que les données sont
              livrées de manière fiable et dans l'ordre correct. TCP gère
              également la détection des erreurs et la retransmission des
              paquets perdus.`,
  },
  {
    term: "Token",
    aliases: ["Jeton"],
    def: `Un token est une unité numérique utilisée pour
              représenter des droits d'accès ou d'authentification dans les
              systèmes informatiques. Il sert souvent à valider l'identité d'un
              utilisateur ou d'un appareil sans avoir à transmettre des
              informations sensibles, comme un mot de passe. Les tokens sont
              généralement temporaires et peuvent être utilisés dans les
              systèmes d'authentification, d'autorisation ou de paiement.`,
  },
  {
    term: "Tor",
    aliases: ["The Onion Router"],
    def: `Tor est un réseau décentralisé qui
              permet d’anonymiser la navigation sur Internet en redirigeant le
              trafic à travers plusieurs serveurs (appelés « nœuds ») dispersés
              dans le monde. Chaque nœud ne connaît que l’adresse IP du nœud
              précédent et du nœud suivant, rendant extrêmement difficile
              l’identification de l’utilisateur ou la surveillance de ses
              activités en ligne.`,
  },
  {
    term: "Traçabilité",
    def: `Garantie que les accès et tentatives
              d'accès aux éléments considérés sont tracés et que ces traces sont
              conservées et exploitables. (ISO/IEC 27001:2022)`,
  },
  {
    term: "Trame",
    def: `Une trame est l'unité de transmission de
              données au niveau de la couche liaison de données (couche 2 du
              modèle OSI). Elle encapsule les données, incluant des informations
              de contrôle, telles que les adresses MAC source et destination,
              pour garantir la transmission correcte des données entre deux
              appareils sur un réseau local.`,
  },
  {
    term: "TLS",
    aliases: ["Transport Layer Security"],
    def: `TLS est un protocole
              de sécurité cryptographique utilisé pour sécuriser les
              communications sur Internet. Il garantit la confidentialité,
              l'intégrité des données, et l'authentification entre deux systèmes
              communicants (comme un client et un serveur) en chiffrant les
              données échangées.`,
  },
  {
    term: "TTL",
    aliases: ["Time To Live"],
    def: `Le TTL est un champ dans les
              paquets IP ou dans les enregistrements DNS qui limite la durée
              pendant laquelle ces données peuvent circuler sur le réseau. Il
              définit le nombre de "sauts" qu'un paquet peut effectuer avant
              d'être rejeté ou expiré, pour éviter qu'il ne boucle indéfiniment.`,
  },
  {
    term: "Vie privée",
    def: `La vie privée est le droit des individus
              de garder leur vie personnelle et leurs données personnelles hors
              de la vue du public. C’est le contrôle qu’une personne a sur la
              divulgation de ses informations personnelles.`,
  },
  {
    term: "UDP",
    aliases: ["User Datagram Protocol"],
    def: `UDP est un protocole de
              communication utilisé pour transmettre des données sur un réseau
              IP. Il fonctionne en mode sans connexion, ce qui signifie qu'il
              n'établit pas de connexion préalable entre l'expéditeur et le
              destinataire avant l'envoi des données. Cela permet une
              transmission rapide, mais sans garantie de livraison ni d'ordre
              des paquets.`,
  },
  {
    term: "UML",
    aliases: ["Unified Modeling Language"],
    def: `UML est un langage
              de modélisation standardisé utilisé pour visualiser, spécifier,
              concevoir et documenter les systèmes logiciels. Il permet de
              représenter graphiquement des concepts, des processus, des
              structures et des relations dans un projet de développement.`,
  },
  {
    term: "Unicast",
    def: `Le unicast est une méthode de communication
              réseau dans laquelle un message est envoyé directement d'un
              émetteur à un seul destinataire spécifique.`,
  },
  {
    term: "VLAN",
    aliases: ["Virtual Local Area Network"],
    def: `Un VLAN est un réseau local virtuel qui
              segmente un réseau physique en plusieurs réseaux logiques
              distincts. Cela permet de séparer les appareils en fonction de
              leur fonction ou de leur service, même s'ils sont physiquement
              connectés au même réseau, améliorant ainsi la sécurité et la
              gestion du réseau.`,
  },
  {
    term: "VPN",
    aliases: ["Virtual Private Network"],
    def: `Un VPN est une technologie qui
              crée une connexion sécurisée et chiffrée entre un appareil et un
              serveur distant via Internet. Cette connexion protège les données
              en transit, masque l’adresse IP et permet d’accéder à des
              ressources ou des contenus géographiquement restreints, tout en
              préservant l’anonymat en ligne.`,
  },
  {
    term: "WAF",
    aliases: ["Web Application Firewall"],
    def: `Un WAF est un
              pare-feu spécialisé qui protège les applications web contre
              diverses attaques en filtrant et surveillant le trafic HTTP/HTTPS.`,
  },
  {
    term: "WiFi",
    def: `Le WiFi est une technologie de communication
              sans fil qui permet aux appareils électroniques de se connecter à
              Internet et de communiquer entre eux sur un réseau local. Il
              utilise des ondes radio pour transmettre des données, permettant
              ainsi l'accès à des réseaux sans avoir besoin de câbles.`,
  },
  {
    term: "WWW",
    aliases: ["World Wide Web"],
    def: `Le World Wide Web est un système d'information
              interconnecté qui permet de consulter et de partager des documents
              et des ressources via Internet, en utilisant des protocoles comme
              HTTP. Il est composé de pages web accessibles par des navigateurs
              via des adresses URL.`,
  },
];
