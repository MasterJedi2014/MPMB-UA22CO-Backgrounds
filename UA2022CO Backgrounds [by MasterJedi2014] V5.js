/*	-INFORMATION-
	Subject:	Backgrounds & Feats
	Effect:		This script adds the Backgrounds from the 2022 Unearthed Arcana "Character Origins" article.
				It also adds the Feats that are either new to this article or have significantly different functions from their previous version.
				This file has been made by MasterJedi2014.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference
	Date:		2024-02-19 (sheet v13.1.0)
*/

var iFileName = "UA2022CO Backgrounds [by MasterJedi2014] V5.js";
RequiredSheetVersion("13.1.0");

SourceList["MJ:HB"] = {
	name : "MasterJedi2014's Homebrew",
	abbreviation : "MJ:HB",
	date : "2024/02/18",
};

SourceList["UA22CO"] = {
	name : "Unearthed Arcana 2022: Character Origins",
	abbreviation : "UA22CO",
	date : "2022/08/18",
};

// Add the backgrounds presented in this UA article

BackgroundList["acolyte ua22co"] = {
	regExpSearch : /^(?=.*acolyte).*$/i,
	name : "Acolyte (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 11]],
	skills : ["Insight", "Religion"],
	gold : 3,
	toolProfs : ["Calligrapher's supplies"],
	languageProfs : ["Celestial"],
	lifestyle : "poor",
	scores : [0, 0, 0, 1, 2, 0],
	equipleft : [
		["Calligrapher's supplies", "", 5],
		["Holy symbol", "", 0.03125],
		["Book (Prayers)", "", 5],
		["Parchment sheet", 10, 0.00625],
	],
	equipright : [
		["Robe", "", 4],
	],
	feature : "Shelter of the Faithful UA22CO",
	trait : [
		"I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.",
		"I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
		"I see omens in every event and action. The gods try to speak to us, we just need to listen.",
		"Nothing can shake my optimistic attitude.",
		"I quote (or misquote) sacred texts and proverbs in almost every situation.",
		"I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
		"I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.",
		"I've spent so long in the temple that I have little practical experience dealing with people in the outside world.",
	],
	ideal : [
		["Tradition",
			"Tradition: The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)"
		],
		["Charity",
			"Charity: I always try to help those in need, no matter what the personal cost. (Good)"
		],
		["Change",
			"Change: We must help bring about the changes the gods are constantly working in the world. (Chaotic)"
		],
		["Power",
			"Power: I hope to one day rise to the top of my faith's religious hierarchy. (Lawful)"
		],
		["Faith",
			"Faith: I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)"
		],
		["Aspiration",
			"Aspiration: I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings. (Any)"
		],
	],
	bond : [
		"I would die to recover an ancient relic of my faith that was lost long ago.",
		"I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
		"I owe my life to the priest who took me in when my parents died.",
		"Everything I do is for the common people.",
		"I will do anything to protect the temple where I served.",
		"I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.",
	],
	flaw : [
		"I judge others harshly, and myself even more severely.",
		"I put too much trust in those who wield power within my temple's hierarchy.",
		"My piety sometimes leads me to blindly trust those that profess faith in my god.",
		"I am inflexible in my thinking.",
		"I am suspicious of strangers and expect the worst of them.",
		"Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.",
	],
};

BackgroundList["artisan ua22co"] = {
	regExpSearch : /^(?=.*artisan).*$/i,
	name : "Artisan (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 12]],
	skills : ["Investigation", "Persuasion"],
	gold : 25,
	toolProfs : [["Artisan's tools", 1]],
	languageProfs : [1, "Gnomish"],
	lifestyle : "comfortable",
	scores : [0, 0, 0, 2, 0, 1],
	scorestxt : "+2 Intelligence, +1 Charisma",
	equipleft : [
		["Artisan's tools (of chosen type)", "", ""],
		["Abacus", "", 2],
		["Merchant's scale", "", 3],
		["Belt, with:", "----", 0.0625],
		["- Pouch", 2, 1],
	],
	equipright : [
		["Traveler's clothes", "", 4],
	],
	feature : "Respect of the Stout Folk UA22CO",
	trait : [
		"I believe that anything worth doing is worth doing right. I can't help it—I'm a perfectionist.",
		"I'm a snob who looks down on those who can't appreciate fine art.",
		"I always want to know how things work and what makes people tick.",
		"I'm full of witty aphorisms and have a proverb for every occasion.",
		"I'm rude to people who lack my commitment to hard work and fair play.",
		"I like to talk at length about my profession.",
		"I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
		"I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.",
	],
	ideal : [
		["Community",
			"Community: It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)"
		],
		["Generosity",
			"Generosity: My talents were given to me so that I could use them to benefit the world. (Good)"
		],
		["Freedom",
			"Freedom: Everyone should be free to pursue his or her own livelihood. (Chaotic)"
		],
		["Greed",
			"Greed: I'm only in it for the money. (Evil)"
		],
		["People",
			"People: I'm committed to the people I care about, not to ideals. (Neutral)"
		],
		["Aspiration",
			"Aspiration: I work hard to be the best there is at my craft. (Any)"
		],
	],
	bond : [
		"The workshop where I learned my trade is the most important place in the world to me.",
		"I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
		"I owe my guild a great debt for forging me into the person I am today.",
		"I pursue wealth to secure someone's love.",
		"One day I will return to my guild and prove that I am the greatest artisan of them all.",
		"I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.",
	],
	flaw : [
		"I'll do anything to get my hands on something rare or priceless.",
		"I'm quick to assume that someone is trying to cheat me.",
		"No one must ever learn that I once stole money from guild coffers.",
		"I'm never satisfied with what I have—I always want more.",
		"I would kill to acquire a noble title.",
		"I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals.",
	],
	extra : [
		"Select an Artisan Specialty",
		"Alchemists & apothecaries",
		"Armorers, locksmiths, & finesmiths",
		"Brewers, distillers, & vintners",
		"Calligraphers, scribes, & scriveners",
		"Carpenters, roofers, & plasterers",
		"Cartographers, surveyors, & chart-makers",
		"Cobblers & shoemakers",
		"Cooks & bakers",
		"Glassblowers & glaziers",
		"Jewelers & gemcutters",
		"Leatherworkers, skinners, & tanners",
		"Masons & stonecutters",
		"Painters, limners, & sign-makers",
		"Potters & tile-makers",
		"Shipwrights & sail-makers",
		"Smiths & metal-forgers",
		"Tinkers, pewterers, & casters",
		"Wagon-makers & wheelwrights",
		"Weavers & dyers",
		"Woodcarvers, coopers, & bowyers",
	],
};

BackgroundList["charlatan ua22co"] = {
	regExpSearch : /^(?=.*charlatan).*$/i,
	name : "Charlatan (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 12]],
	skills : ["Deception", "Sleight of Hand"],
	gold : 15,
	toolProfs : ["Forgery kit"],
	languageProfs : [1, "Infernal"],
	lifestyle : "comfortable",
	scores : [0, 1, 0, 0, 0, 2],
	scorestxt : "+2 Charisma, +1 Dexterity",
	equipleft : [
		["Forgery kit", "", 5],
		["Costume clothes", "", 4],
	],
	equipright : [
		["Fine clothes", "", 6],
	],
	feature : "False Identity UA22CO",
	trait : [
		"I fall in and out of love easily, and am always pursuing someone.",
		"I have a joke for every occasion, especially occasions where humor is inappropriate.",
		"Flattery is my preferred trick for getting what I want.",
		"I'm a born gambler who can't resist taking a risk for a potential payoff.",
		"I lie about almost everything, even when there's no reason to.",
		"Sarcasm and insults are my weapons of choice.",
		"I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
		"I pocket anything I see that might have some value.",
	],
	ideal : [
		["Independence",
			"Independence: I am a free spirit—no one tells me what to do. (Chaotic)"
		],
		["Fairness",
			"Fairness: I never target people who can't afford to lose a few coins. (Lawful)"
		],
		["Charity",
			"Charity: I distribute the money I acquire to the people who really need it. (Good)"
		],
		["Creativity",
			"Creativity: I never run the same con twice. (Chaotic)"
		],
		["Friendship",
			"Friendship: Material goods come and go. Bonds of friendship last forever. (Good)"
		],
		["Aspiration",
			"Aspiration: I'm determined to make something of myself. (Any)"
		],
	],
	bond : [
		"I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
		"I owe everything to my mentor—a horrible person who's probably rotting in jail somewhere.",
		"Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
		"I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
		"A powerful person killed someone I love. Some day soon, I'll have my revenge.",
		"I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.",
	],
	flaw : [
		"I can't resist a pretty face.",
		"I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
		"I'm convinced that no one could ever fool me the way I fool others.",
		"I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
		"I can't resist swindling people who are more powerful than me.",
		"I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough.",
	],
	extra : [
		"Select a Charlatan Scheme",
		"Cheat at games of chance",
		"Shave coins, forge documents",
		"User/manipulator",
		"Change identity",
		"Sleight-of-hand cons",
		"Sell junk as expensive necessities",
	],
};

BackgroundList["criminal ua22co"] = {
	regExpSearch : /^(?=.*criminal).*$/i,
	name : "Criminal (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 12]],
	skills : ["Sleight of Hand", "Stealth"],
	gold : 16,
	toolProfs : ["Thieves' tools"],
	languageProfs : [1, "Thieves' Cant"],
	lifestyle : "poor",
	scores : [0, 2, 0, 1, 0, 0],
	scorestxt : "+2 Dexterity, +1 Intelligence",
	equipleft : [
		["Crowbar", "", 5],
		["Dagger", "", 1],
		["Belt, with:", "----", 0.0625],
		["- Thieves' tools", "", 1],
		["- Pouch", "2", 1],
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Dagger", "", 1],
	],
	feature : "Criminal Contact UA22CO",
	trait : [
		"I always have a plan for when things go wrong.",
		"I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
		"The first thing I do in a new place is note the locations of everything valuable—or where such things could be hidden.",
		"I would rather make a new friend than a new enemy.",
		"I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
		"I don't pay attention to the risks in a situation. Never tell me the odds.",
		"The best way to get me to do something is to tell me I can't do it.",
		"I blow up at the slightest insult.",
	],
	ideal : [
		["Honor",
			"Honor: I don't steal from others in the trade. (Lawful)"
		],
		["Freedom",
			"Freedom: Chains are meant to be broken, as are those who would forge them. (Chaotic)"
		],
		["Charity",
			"Charity: I steal from the wealthy so that I can help people in need. (Good)"
		],
		["Greed",
			"Greed: I will do whatever it takes to become wealthy. (Evil)"
		],
		["People",
			"People: I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)"
		],
		["Redemption",
			"Redemption: There's a spark of good in everyone. (Good)"
		],
	],
	bond : [
		"I'm trying to pay off an old debt I owe to a generous benefactor.",
		"My ill-gotten gains go to support my family.",
		"Something important was taken from me, and I aim to steal it back.",
		"I will become the greatest thief that ever lived.",
		"I'm guilty of a terrible crime. I hope I can redeem myself for it.",
		"Someone I loved died because of a mistake I made. That will never happen again.",
	],
	flaw : [
		"When I see something valuable, I can't think about anything but how to steal it.",
		"When faced with a choice between money and my friends, I usually choose the money.",
		"If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
		"I have a 'tell' that reveals when I'm lying.",
		"I turn tail and run when things look bad.",
		"An innocent person is in prison for a crime that I committed. I'm okay with that.",
	],
	extra : [
		"Select a Criminal Specialty",
		"Blackmailer",
		"Burglar",
		"Enforcer",
		"Fence",
		"Highway robber",
		"Hired killer",
		"Pickpocket",
		"Smuggler",
	],
};

BackgroundList["cultist ua22co"] = {
	regExpSearch : /^(?=.*cultist).*$/i,
	name : "Cultist (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 12]],
	skills : ["Arcana", "Religion"],
	gold : 19,
	toolProfs : ["Disguise kit"],
	languageProfs : [1, "Abyssal"],
	lifestyle : "poor",
	scores : [0, 0, 0, 2, 0, 1],
	scorestxt : "+2 Intelligence, +1 Charisma",
	equipleft : [
		["Disguise kit", "", 3],
		["Bell", "", 0.03125],
		["Lamp", "", 1],
		["Robe", "", 4],
	],
	equipright : [
		["Common clothes", "", 3],
		["Dagger", "", 1],
	],
	feature : "Cult Teachings UA22CO",
	trait : [
		"I need a dagger close at hand at all times. Just in case they find me.",
		"I can't believe I'm out here fighting monsters. After everything I've been through, why can't I find a normal life?",
		"I need a stiff drink before I do anything stressful these days. I know it's a problem. Just...let me have this.",
		"Murder is okay when it's for a good cause! I didn't tear my past out by the roots so I could let evil people cause more harm.",
		"My past is filled with stories like you wouldn't believe. Ones that'll really make your skin crawl. Do you want to hear...?",
		"I know you've told me your name twice already, but that's not good enough. How can I be sure you are who you say you are?",
	],
	ideal : [
		["Guild",
			"Guild: My guild is all that really matters. (Any)"
		],
		["Hedonism",
			"Hedonism: Death comes for everyone, so take as much pleasure as you can from every moment of life. (Neutral)"
		],
		["Creativity",
			"Creativity: I strive to find more ways to express my art through pain—my own as well as others'. (Chaotic)"
		],
		["Spectacle",
			"Spectacle: People are inspired by the greatness they see in art. (Any)"
		],
		["Solidarity",
			"Solidarity: The worthy must respect the worthy. In the afterlife, all will be united in goal and action. (Lawful)"
		],
		["Knowledge",
			"Knowledge: The worthy shall cultivate a nimble mind, so as to perceive the wonders beyond imagination that wait in the afterlife. (Neutral)"
		],
		["Strength",
			"Strength: The worthy shall hone a strong body that can withstand the boundless energies of the afterlife. (Neutral)"
		],
		["Ambition",
			"Ambition: The worthy shall strive for greatness, for supremacy in life leads to supremacy in the afterlife. (Evil)"
		],
		["Zeal",
			"Zeal: The worthy shall rush to the Great One's side with relentless passion, rising to overcome every obstacle in their way. (Any)"
		],
	],
	bond : [
		"I have belonged to the same cultist cell for years, and these people mean everything to me.",
		"A blood witch told me I have a special destiny to fulfill, and I'm trying to figure out what it is.",
		"I'm secretly hoping that I can change the cult from the inside, using my influence to help rein in the wanton violence.",
		"I own something that the Great One once touched (it's seared black at the spot), and I cherish it.",
		"I want to be better at my devotion than any other member of my cultist cell.",
		"I am devoted to the Great One and live to impress them.",
	],
	flaw : [
		"I can't help but feel a rush whenever I see a life snuffed out before me. Just one more kill... just one more.",
		"Oh, I always tell the truth. Always. I've never had to keep a secret from anyone, so of course I'll be open with you.",
		"I throw caution to the wind.",
		"I resent the rich and powerful.",
		"When I'm angry, I lash out in violence.",
		"There's no such thing as too much pleasure.",
	],
};

BackgroundList["entertainer ua22co"] = {
	regExpSearch : /^(?=.*entertainer|actor|dancer|fire.?eater|jester|juggler|instrumentalist|poet|singer|storyteller|tumbler).*$/i,
	name : "Entertainer (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 12]],
	skills : ["Acrobatics", "Performance"],
	gold : 8,
	toolProfs : [["Musical instrument", 1]],
	languageProfs : [1, "Elvish"],
	lifestyle : "modest",
	scores : [0, 1, 0, 0, 0, 2],
	scorestxt : "+2 Charisma, +1 Dexterity",
	equipleft : [
		["Musical instrument (of chosen type)", "", ""],
		["Costume clothes", 2, 4],
		["Perfume (vial)", "", 0.125],
		["Steel mirror", , 0.5],
	],
	equipright : [
		["Traveler's clothes", "", 4],
	],
	feature : "By Popular Demand UA22CO",
	trait : [
		"I know a story relevant to almost every situation.",
		"Whenever I come to a new place, I collect local rumors and spread gossip.",
		"I'm a hopeless romantic, always searching for that 'special someone'.",
		"Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
		"I love a good insult, even one directed at me.",
		"I get bitter if I'm not the center of attention.",
		"I'll settle for nothing less than perfection.",
		"I change my mood or my mind as quickly as I change key in a song.",
	],
	ideal : [
		["Beauty",
			"Beauty: When I perform, I make the world better than it was. (Good)"
		],
		["Tradition",
			"Tradition: The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)"
		],
		["Creativity",
			"Creativity: The world is in need of new ideas and bold action. (Chaotic)"
		],
		["Greed",
			"Greed: I'm only in it for the money and fame. (Evil)"
		],
		["People",
			"People: I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)"
		],
		["Honesty",
			"Honesty: Art should reflect the soul; it should come from within and reveal who we really are. (Any)"
		],
	],
	bond : [
		"My instrument is my most treasured possession, and it reminds me of someone I love.",
		"Someone stole my precious instrument, and someday I'll get it back.",
		"I want to be famous, whatever it takes.",
		"I idolize a hero of the old tales and measure my deeds against that person's.",
		"I will do anything to prove myself superior to my hated rival.",
		"I would do anything for the other members of my old troupe.",
	],
	flaw : [
		"I'll do anything to win fame and renown.",
		"I'm a sucker for a pretty face.",
		"A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
		"I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
		"I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
		"Despite my best efforts, I am unreliable to my friends.",
	],
	extra : [
		"Select an Entertainer Specialty",
		"Actor",
		"Dancer",
		"Fire-eater",
		"Jester",
		"Juggler",
		"Instrumentalist",
		"Poet",
		"Singer",
		"Storyteller",
		"Tumbler",
	],
};

BackgroundList["farmer ua22co"] = {
	regExpSearch : /^(?=.*farmer).*$/i,
	name : "Farmer (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 13]],
	skills : ["Animal Handling", "Nature"],
	gold : 23,
	toolProfs : ["Carpenter's tools"],
	languageProfs : [1, "Halfling"],
	lifestyle : "poor",
	scores : [0, 0, 2, 0, 1, 0],
	scorestxt : "+2 Constitution, +1 Wisdom",
	equipleft : [
		["Carpenter's tools", "", 6],
		["Healer's kit (10 uses left)", "", 3],
		["Iron pot", "", 10],
		["Shovel", "", 5],
		["Sickle", "", 2],
	],
	equipright : [
		["Traveler's clothes", "", 4],
	],
	feature : "Harvest the Land UA22CO",
	trait : [
		"I am unmoved by the wrath of nature.",
		"My friends are my crew; we sink or float together.",
		"I need long stretches of quiet to clear my head.",
		"Rich folk don't know the satisfaction of hard work.",
		"I laugh heartily, feel deeply, and fear nothing.",
		"I work hard; nature offers no handouts.",
		"I dislike bargaining; state your price and mean it.",
		"Luck favors me, and I take risks others might not.",
	],
	ideal : [
		["Camaraderie",
			"Camaraderie: Good people make even the longest journey bearable. (Good)"
		],
		["Luck",
			"Luck: Our luck depends on respecting its rules—now throw this salt over your shoulder. (Lawful)"
		],
		["Daring",
			"Daring: The richest bounty goes to those who risk everything. (Chaotic)"
		],
		["Plunder",
			"Plunder: Take all that you can and leave nothing for the scavengers. (Evil)"
		],
		["Balance",
			"Balance: Do not sow the same spot twice in a row; suppress your greed, and nature will reward you. (Neutral)"
		],
		["Hard Work",
			"Hard Work: No wind can move a soul hard at work. (Any)"
		],
	],
	bond : [
		"I lost something important in the deep sea, and I intend to find it.",
		"Someone else's greed destroyed my livelihood, and I will be compensated.",
		"I will fish the many famous waters of this land.",
		"The gods saved me during a terrible storm, and I will honor their gift.",
		"My destiny awaits me at the bottom of a particular pond in the Feywild.",
		"I must repay my village's debt.",
	],
	flaw : [
		"I am judgmental, especially of those I deem homebodies or otherwise lazy.",
		"I become depressed and anxious if I'm away from the sea too long.",
		"I have lived a hard life and find it difficult to empathize with others.",
		"I am inclined to tell long-winded stories at inopportune times.",
		"I work hard, but I play harder.",
		"I am obsessed with catching an elusive aquatic beast, often to the detriment of other pursuits.",
	],
};

BackgroundList["gladiator ua22co"] = {
	regExpSearch : /^(?=.*gladiator).*$/i,
	name : "Gladiator (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 13]],
	skills : ["Athletics", "Performance"],
	gold : 15,
	toolProfs : ["Smith's tools"],
	languageProfs : [1, "Orc"],
	lifestyle : "modest",
	scores : [2, 0, 0, 0, 0, 1],
	scorestxt : "+2 Strength, +1 Charisma",
	equipleft : [
		["Smith's tools", "", 8],
		["Healer's kit (10 uses left)", "", 3],
		["Chain, feet of", 10, 1],
		["Costume clothes", "", 4],
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Javelin", 6, 2],
	],
	feature : "Are You Entertained? UA22CO",
	trait : [
		"I know a story relevant to almost every situation.",
		"Whenever I come to a new place, I collect local rumors and spread gossip.",
		"I'm a hopeless romantic, always searching for that 'special someone'.",
		"Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
		"I love a good insult, even one directed at me.",
		"I get bitter if I'm not the center of attention.",
		"I'll settle for nothing less than perfection.",
		"I change my mood or my mind as quickly as I change key in a song.",
	],
	ideal : [
		["Beauty",
			"Beauty: When I perform, I make the world better than it was. (Good)"
		],
		["Tradition",
			"Tradition: The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)"
		],
		["Creativity",
			"Creativity: The world is in need of new ideas and bold action. (Chaotic)"
		],
		["Greed",
			"Greed: I'm only in it for the money and fame. (Evil)"
		],
		["People",
			"People: I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)"
		],
		["Honesty",
			"Honesty: Art should reflect the soul; it should come from within and reveal who we really are. (Any)"
		],
	],
	bond : [
		"My instrument is my most treasured possession, and it reminds me of someone I love.",
		"Someone stole my precious instrument, and someday I'll get it back.",
		"I want to be famous, whatever it takes.",
		"I idolize a hero of the old tales and measure my deeds against that person's.",
		"I will do anything to prove myself superior to my hated rival.",
		"I would do anything for the other members of my old troupe.",
	],
	flaw : [
		"I'll do anything to win fame and renown.",
		"I'm a sucker for a pretty face.",
		"A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
		"I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
		"I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
		"Despite my best efforts, I am unreliable to my friends.",
	],
};

BackgroundList["guard ua22co"] = {
	regExpSearch : /^(?=.*guard).*$/i,
	name : "Guard (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 13]],
	skills : ["Athletics", "Perception"],
	gold : 12,
	toolProfs : [["Gaming set", 1]],
	languageProfs : [1, "Dwarvish"],
	lifestyle : "poor",
	scores : [2, 0, 0, 0, 1, 0],
	scorestxt : "+2 Strength, +1 Wisdom",
	equipleft : [
		["Gaming set (of chosen type)", "", ""],
		["Hooded lantern", "", 2],
		["Manacles", "", 6],
		["Quiver, with:", "----", 1],
		["- Crossbow bolt", 20, 0.075],
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Light crossbow", "", 5],
		["Spear", "", 3],
	],
	feature : "Watcher's Eye UA22CO",
	trait : [
		"I'm always polite and respectful.",
		"I'm haunted by memories of war. I can't get the images of violence out of my mind.",
		"I've lost too many friends, and I'm slow to make new ones.",
		"I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
		"I can stare down a hell hound without flinching.",
		"I enjoy being strong and like breaking things.",
		"I have a crude sense of humor.",
		"I face problems head-on. A simple, direct solution is the best path to success.",
	],
	ideal : [
		["Greater Good",
			"Greater Good: Our lot is to lay down our lives in defense of others. (Good)"
		],
		["Responsibility",
			"Responsibility: I do what I must and obey just authority. (Lawful)"
		],
		["Independence",
			"Independence: When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)"
		],
		["Might",
			"Might: In life as in war, the stronger force wins. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Ideals aren't worth killing over or going to war for. (Neutral)"
		],
		["Nation",
			"Nation: My city, nation, or people are all that matter. (Any)"
		],
	],
	bond : [
		"I would still lay down my life for the people I served with.",
		"Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
		"My honor is my life.",
		"I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
		"Those who fight beside me are those worth dying for.",
		"I fight for those who cannot fight for themselves.",
	],
	flaw : [
		"The monstrous enemy we faced in battle still leaves me quivering with fear.",
		"I have little respect for anyone who is not a proven warrior.",
		"I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.",
		"My hatred of my enemies is blinding and unreasoning.",
		"I obey the law, even if the law causes misery.",
		"I'd rather eat my armor than admit when I'm wrong.",
	],
};

BackgroundList["guide ua22co"] = {
	regExpSearch : /^(?=.*guide).*$/i,
	name : "Guide (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 13]],
	skills : ["Stealth", "Survival"],
	gold : 2,
	toolProfs : ["Cartographer's tools"],
	languageProfs : [1, "GIant"],
	lifestyle : "poor",
	scores : [0, 1, 0, 0, 2, 0],
	scorestxt : "+2 Wisdom, +1 Dexterity",
	equipleft : [
		["Cartographer's tools", "", 6],
		["Fishing tackle", "", 4],
		["Two-person tent", "", 20],
		["Bedroll", "", 7],
		["Quiver, with:", "----", 1],
		["- Arrow", 20, 0.05],
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Shortbow", "", 2],
	],
	feature : "Makeshift Meals UA22CO",
	trait : [
		"I always have an exit strategy in mind if things go poorly.",
		"You can't survive in this grim city without a good sense of humor, but I have a taste for gallows humor.",
		"I try to work in the thin grey area between the squabbling factions, squeezing under their radar when possible. The less I am seen, the better.",
		"If you spot danger, it is best to avoid it, that's how you survive.",
		"The outdoors are a dangerous place. But I can navigate it with my eyes closed. No one else I've ever met is as good as I am.",
		"In order to survive the monsters of nature, one must be a monster of the outdoors.",
		"Take everything you can from the dead, take it from the living if you can. If you are to survive, you must take any opportunity to scavenge.",
		"I will never give up until I reclaim what I lost in these ruins.",
	],
	ideal : [
		["Self-Reliance",
			"Self-Reliance: I won't risk my life for others. Everyone must fend for themselves—better you than me. (Evil)"
		],
		["Bravery",
			"Bravery: I find the thrill of surviving the monsters and magics of the outdoors exhilarating and thrive on the chaos. (Chaotic)"
		],
		["Safety",
			"Safety: Whatever I can do to keep myself fed and keep a safe place to rest is good in my books. (Any)"
		],
		["Helpful",
			"Helpful: People need all the help they can get in the city, and I know I can provide it. (Good)"
		],
		["Hope",
			"Hope: I believe there is something worth saving here, we must hold on to the idea of a better future. (Good)"
		],
		["Responsibility",
			"Responsibility: I lived here before the meteor, I'll live here long after. I must protect my home and do what I can to make it livable again. (Lawful)"
		],
	],
	bond : [
		"I had family in these ruins. I know not what became of them, but I must find out.",
		"Nature is my home, and I will fight for what's left of it until the very end.",
		"I'll do any dirty work in the city if it means a hot meal, a warm bed, or some good company.",
		"I've spent so long in these ruins, its the outside world that terrifies me now.",
		"Why haven't I left the outdoors? Have you seen how much gold there is to be made here?",
		"I am bound to the throne of a collapsed civilization, and fight to see it one day reclaimed.",
	],
	flaw : [
		"Any meal could be my last. I'll eat just about anything. I do what I must to survive.",
		"I don't like being outside the Haze of the city for too long, I've gotten used to it.",
		"I am convinced my family is alive in the city somewhere. I hear their voices call to me at night.",
		"I don't trust anyone easily. I'll sleep with one eye open even around my companions, for nature makes monsters of us all.",
		"The years spent here have turned me to a vice, I very much rely on that vice to get me through my days.",
		"I hear voices constantly. Sometimes I get distracted with conversations with people who are not there.",
	],
	extra : [
		"Select a Guide's Mark of Survival",
		"Talk to self",
		"Eat almost anything",
		"Scarred",
		"Missing finger",
		"Treasured locket",
		"Monster trophies",
		"Can sleep anywhere",
		"Recite names of the lost",
	],
};

BackgroundList["hermit ua22co"] = {
	regExpSearch : /^(?=.*hermit).*$/i,
	name : "Hermit (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 14]],
	skills : ["Medicine", "Religion"],
	gold : 15,
	toolProfs : ["Herbalism kit"],
	languageProfs : [1, "Sylvan"],
	lifestyle : "poor",
	scores : [0, 0, 1, 0, 2, 0],
	scorestxt : "+2 Wisdom, +1 Constitution",
	equipleft : [
		["Herbalism kit", "", 3],
		["Bedroll", "", 7],
		["Book (Philosophy)", "", 5],
		["Fishing tackle", "", 4],
		["Lamp", "", 1],
		["Oil (flasks of)", 3, 1],
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Quarterstaff", "", 4],
	],
	feature : "Discovery UA22CO",
	trait : [
		"I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
		"I am utterly serene, even in the face of disaster.",
		"The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
		"I feel tremendous empathy for all who suffer.",
		"I'm oblivious to etiquette and social expectations.",
		"I connect everything that happens to me to a grand, cosmic plan.",
		"I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
		"I am working on a grand philosophical theory and love sharing my ideas.",
	],
	ideal : [
		["Greater Good",
			"Greater Good: My gifts are meant to be shared with all, not used for my own benefit. (Good)"
		],
		["Logic",
			"Logic: Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)"
		],
		["Free Thinking",
			"Free Thinking: Inquiry and curiosity are the pillars of progress. (Chaotic)"
		],
		["Power",
			"Power: Solitude and contemplation are paths toward mystical or magical power. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Meddling in the affairs of others only causes trouble. (Neutral)"
		],
		["Self-Knowledge",
			"Self-Knowledge: If you know yourself, there's nothing left to know. (Any)"
		],
	],
	bond : [
		"Nothing is more important than the other members of my hermitage, order, or association.",
		"I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
		"I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
		"I entered seclusion because I loved someone I could not have.",
		"Should my discovery come to light, it could bring ruin to the world.",
		"My isolation gave me great insight into a great evil that only I can destroy.",
	],
	flaw : [
		"Now that I've returned to the world, I enjoy its delights a little too much.",
		"I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
		"I am dogmatic in my thoughts and philosophy.",
		"I let my need to win arguments overshadow friendships and harmony.",
		"I'd risk too much to uncover a lost bit of knowledge.",
		"I like keeping secrets and won't share them with anyone.",
	],
	extra : [
		"Select a Hermit Specialty",
		"Searching for spiritual enlightenment",
		"Living in accordance with a religious order",
		"Exiled for a crime I didn't commit",
		"Retreated from society after a life-altering event",
		"Worked on my art, literature, music, or manifesto",
		"Commune with nature, far from civilization",
		"Caretaker of an ancient ruin or relic",
		"Pilgrim in search of a thing of spiritual significance",
	],
};

BackgroundList["laborer ua22co"] = {
	regExpSearch : /^(?=.*laborer|mason).*$/i,
	name : "Laborer (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 14]],
	skills : ["Athletics", "Survival"],
	gold : 15,
	toolProfs : ["Mason's tools"],
	languageProfs : [1, "Dwarvish"],
	lifestyle : "modest",
	scores : [1, 0, 2, 0, 0, 0],
	scorestxt : "+2 Constitution, +1 Strength",
	equipleft : [
		["Mason's tools", "", 8],
		["Bullseye lantern", "", 2],
		["Mess kit", "", 1],
		["Oil (flasks of)", 1, 1],
		["Belt, with:", "----", 0.0625],
		["- Light hammer", "", 2],
	],
	equipright : [
		["Common clothes", "", 3],
		["Handaxe", "", 2],
	],
	feature : "Stone Infrastructure UA22CO",
	trait : [
		"I believe that anything worth doing is worth doing right. I can't help it—I'm a perfectionist.",
		"I'm a snob who looks down on those who can't appreciate fine art.",
		"I always want to know how things work and what makes people tick.",
		"I'm full of witty aphorisms and have a proverb for every occasion.",
		"I'm rude to people who lack my commitment to hard work and fair play.",
		"I like to talk at length about my profession.",
		"I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
		"I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.",
	],
	ideal : [
		["Community",
			"Community: It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)"
		],
		["Generosity",
			"Generosity: My talents were given to me so that I could use them to benefit the world. (Good)"
		],
		["Freedom",
			"Freedom: Everyone should be free to pursue his or her own livelihood. (Chaotic)"
		],
		["Greed",
			"Greed: I'm only in it for the money. (Evil)"
		],
		["People",
			"People: I'm committed to the people I care about, not to ideals. (Neutral)"
		],
		["Aspiration",
			"Aspiration: I work hard to be the best there is at my craft. (Any)"
		],
	],
	bond : [
		"The workshop where I learned my trade is the most important place in the world to me.",
		"I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
		"I owe my guild a great debt for forging me into the person I am today.",
		"I pursue wealth to secure someone's love.",
		"One day I will return to my guild and prove that I am the greatest artisan of them all.",
		"I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.",
	],
	flaw : [
		"I'll do anything to get my hands on something rare or priceless.",
		"I'm quick to assume that someone is trying to cheat me.",
		"No one must ever learn that I once stole money from guild coffers.",
		"I'm never satisfied with what I have—I always want more.",
		"I would kill to acquire a noble title.",
		"I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals.",
	],
};

BackgroundList["noble ua22co"] = {
	regExpSearch : /^(?!.*(waterdhavian|waterdeep|knight))(?=.*noble).*$/i,
	name : "Noble (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 14]],
	skills : ["History", "Persuasion"],
	gold : 24,
	toolProfs : [["Gaming set", 1]],
	languageProfs : [1, "Draconic"],
	lifestyle : "wealthy",
	scores : [0, 0, 0, 1, 0, 2],
	scorestxt : "+2 Charisma, +1 Intelligence",
	equipleft : [
		["Gaming set (of chosen type)", "", ""],
		["Perfume (vial)", "", 0.125],
		["Signet ring", "", 0.0625],
	],
	equipright : [
		["Fine clothes", "", 6],
	],
	feature : "Position of Privilege UA22CO",
	trait : [
		"My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
		"The common folk love me for my kindness and generosity.",
		"No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
		"I take great pains to always look my best and follow the latest fashions.",
		"I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
		"Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
		"My favor, once lost, is lost forever.",
		"If you do me an injury, I will crush you, ruin your name, and salt your fields.",
	],
	ideal : [
		["Respect",
			"Respect: Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)"
		],
		["Responsibility",
			"Responsibility: It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)"
		],
		["Independence",
			"Independence: I must prove that I can handle myself without coddling from my family. (Chaotic)"
		],
		["Power",
			"Power: If I can attain more power, no one will tell me what to do. (Evil)"
		],
		["Family",
			"Family: Blood runs thicker than water. (Any)"
		],
		["Noble Obligation",
			"Noble Obligation: It is my duty to protect and care for the people beneath me. (Good)"
		],
	],
	bond : [
		"I will face any challenge to win the approval of my family.",
		"My house's alliance with another noble family must be sustained at all costs.",
		"Nothing is more important than the other members of my family.",
		"I am in love with the heir of a family that my family despises.",
		"My loyalty to my sovereign is unwavering.",
		"The common folk must see me as a hero of the people.",
	],
	flaw : [
		"I secretly believe that everyone is beneath me.",
		"I hide a truly scandalous secret that could ruin my family forever.",
		"I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
		"I have an insatiable desire for carnal pleasures.",
		"In fact, the world does revolve around me.",
		"By my words and actions, I often bring shame to my family.",
	],
};

BackgroundList["pilgrim ua22co"] = {
	regExpSearch : /^(?=.*pilgrim).*$/i,
	name : "Pilgrim (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 14]],
	skills : ["Religion", "Survival"],
	gold : 16,
	toolProfs : [["Musical instrument", 1]],
	languageProfs : [1, "Halfling"],
	lifestyle : "poor",
	scores : [0, 0, 1, 0, 2, 0],
	scorestxt : "+2 Wisdom, +1 Constitution",
	equipleft : [
		["Musical intrument (of chosen type)", "", ""],
		["Bedroll", "", 7],
		["Healer's kit (10 uses left)", "", 3],
		["Holy symbol", "", 0.03125],
		["Rations (days of)", 2, 2],
	],
	equipright : [
		["Traveler's clothes", "", 4],
	],
	feature : "Wanderer UA22CO",
	trait : [
		"I'm driven by a wanderlust that led me away from home.",
		"I watch over my friends as if they were a litter of newborn pups.",
		"I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
		"I have a lesson for every situation, drawn from observing nature.",
		"I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
		"I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
		"I feel far more comfortable around animals than people.",
		"I was, in fact, raised by wolves.",
	],
	ideal : [
		["Change",
			"Change: Life is like the seasons, in constant change, and we must change with it. (Chaotic)"
		],
		["Greater Good",
			"Greater Good: It is each person's responsibility to make the most happiness for the whole tribe. (Good)"
		],
		["Honor",
			"Honor: If I dishonor myself, I dishonor my whole clan. (Lawful)"
		],
		["Might",
			"Might: The strongest are meant to rule. (Evil)"
		],
		["Nature",
			"Nature: The natural world is more important than all the constructs of civilization. (Neutral)"
		],
		["Glory",
			"Glory: I must earn glory in battle, for myself and my clan. (Any)"
		],
	],
	bond : [
		"My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
		"An injury to the unspoiled wilderness of my home is an injury to me.",
		"I will bring terrible wrath down on the evildoers who destroyed my homeland.",
		"I am the last of my tribe, and it is up to me to ensure their names enter legend.",
		"I suffer awful visions of a coming disaster and will do anything to prevent it.",
		"It is my duty to provide children to sustain my tribe.",
	],
	flaw : [
		"I am too enamored of ale, wine, and other intoxicants.",
		"There's no room for caution in a life lived to the fullest.",
		"I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
		"I am slow to trust members of other races, tribes, and societies.",
		"Violence is my answer to almost any challenge.",
		"Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish.",
	],
};

BackgroundList["sage ua22co"] = {
	regExpSearch : /^(?=.*sage).*$/i,
	name : "Sage (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 15]],
	skills : ["Arcana", "History"],
	gold : 8,
	toolProfs : ["Calligrapher's supplies"],
	languageProfs : [1, "Elvish"],
	lifestyle : "modest",
	scores : [0, 0, 0, 2, 1, 0],
	scorestxt : "+2 Intelligence, +1 Wisdom",
	equipleft : [
		["Calligrapher's supplies", "", 5],
		["Book (History)", "", 5],
		["Parchment sheet", 8, 0.00625],
	],
	equipright : [
		["Robe", "", 4],
		["Quarterstaff", "", 4],
	],
	feature : "Researcher UA22CO",
	trait : [
		"I use polysyllabic words that convey the impression of great erudition.",
		"I've read every book in the world's greatest libraries—or I like to boast that I have.",
		"I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
		"There's nothing I like more than a good mystery.",
		"I'm willing to listen to every side of an argument before I make my own judgment.",
		"I... speak... slowly... when talking... to idiots,... which... almost... everyone... is... compared... to me.",
		"I am horribly, horribly awkward in social situations.",
		"I'm convinced that people are always trying to steal my secrets.",
	],
	ideal : [
		["Knowledge",
			"Knowledge: The path to power and self-improvement is through knowledge. (Neutral)"
		],
		["Beauty",
			"Beauty: What is beautiful points us beyond itself toward what is true. (Good)"
		],
		["Logic",
			"Logic: Emotions must not cloud our logical thinking. (Lawful)"
		],
		["No Limits",
			"No Limits: Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)"
		],
		["Power",
			"Power: Knowledge is the path to power and domination. (Evil)"
		],
		["Self-Improvement",
			"Self-Improvement: The goal of a life of study is the betterment of oneself. (Any)"
		],
	],
	bond : [
		"It is my duty to protect my students.",
		"I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
		"I work to preserve a library, university, scriptorium, or monastery.",
		"My life's work is a series of tomes related to a specific field of lore.",
		"I've been searching my whole life for the answer to a certain question.",
		"I sold my soul for knowledge. I hope to do great deeds and win it back.",
	],
	flaw : [
		"I am easily distracted by the promise of information.",
		"Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
		"Unlocking an ancient mystery is worth the price of a civilization.",
		"I overlook obvious solutions in favor of complicated ones.",
		"I speak without really thinking through my words, invariably insulting others.",
		"I can't keep a secret to save my life, or anyone else's.",
	],
	extra : [
		"Select a Sage Specialty",
		"Alchemist",
		"Astronomer",
		"Discredited academic",
		"Librarian",
		"Professor",
		"Researcher",
		"Wizard's apprentice",
		"Scribe",
	],
};

BackgroundList["sailor ua22co"] = {
	regExpSearch : /^(?=.*sailor).*$/i,
	name : "Sailor (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 15]],
	skills : ["Acrobatics", "Perception"],
	gold : 10,
	toolProfs : ["Navigator's tools"],
	languageProfs : [1, "Primordial"],
	lifestyle : "modest",
	scores : [0, 2, 0, 0, 1, 0],
	scorestxt : "+2 Dexterity, +1 Wisdom",
	equipleft : [
		["Navigator's tools", "", 2],
		["Fishing tackle", "", 1],
		["Silk rope (feet of)", 50, 0.5],
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Dagger", "", 1],
	],
	feature : "Ship's Passage UA22CO",
	trait : [
		"My friends know they can rely on me, no matter what.",
		"I work hard so that I can play hard when the work is done.",
		"I enjoy sailing into new ports and making new friends over a flagon of ale.",
		"I stretch the truth for the sake of a good story.",
		"To me, a tavern brawl is a nice way to get to know a new city.",
		"I never pass up a friendly wager.",
		"My language is as foul as an otyugh nest.",
		"I like a job well done, especially if I can convince someone else to do it.",
	],
	ideal : [
		["Respect",
			"Respect: The thing that keeps a ship together is mutual respect between captain and crew. (Good)"
		],
		["Fairness",
			"Fairness: We all do the work, so we all share in the rewards. (Lawful)"
		],
		["Freedom",
			"Freedom: The sea is freedom—the freedom to go anywhere and do anything. (Chaotic)"
		],
		["Mastery",
			"Mastery: I'm a predator, and the other ships on the sea are my prey. (Evil)"
		],
		["People",
			"People: I'm committed to my crewmates, not to ideals. (Neutral)"
		],
		["Aspiration",
			"Aspiration: Someday, I'll own my own ship and chart my own destiny. (Any)"
		],
	],
	bond : [
		"I'm loyal to my captain first, everything else second.",
		"The ship is most important—crewmates and captains come and go.",
		"I'll always remember my first ship.",
		"In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
		"I was cheated out of my fair share of the profits, and I want to get my due.",
		"Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.",
	],
	flaw : [
		"I follow orders, even if I think they're wrong.",
		"I'll say anything to avoid having to do extra work.",
		"Once someone questions my courage, I never back down no matter how dangerous the situation.",
		"Once I start drinking, it's hard for me to stop.",
		"I can't help but pocket loose coins and other trinkets I come across.",
		"My pride will probably lead to my destruction.",
	],
};

BackgroundList["soldier ua22co"] = {
	regExpSearch : /^(?!.*mercenary)(?=.*soldier).*$/i,
	name : "Soldier (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 15]],
	skills : ["Athletics", "Intimidation"],
	gold : 14,
	toolProfs : ["Calligrapher's supplies"],
	languageProfs : [1, "Goblin"],
	lifestyle : "modest",
	scores : [2, 0, 1, 0, 0, 0],
	scorestxt : "+2 Strength, +1 Constitution",
	equipleft : [
		["Gaming set (of chosen type)", "", ""],
		["Healer's kit (10 uses left)", "", 3],
		["Quiver, with:", "----", 1],
		["- Arrow", 20, 0.05],
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Shortbow", "", 2],
		["Spear", "", 4],
	],
	feature : "Military Rank UA22CO",
	trait : [
		"I'm always polite and respectful.",
		"I'm haunted by memories of war. I can't get the images of violence out of my mind.",
		"I've lost too many friends, and I'm slow to make new ones.",
		"I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
		"I can stare down a hell hound without flinching.",
		"I enjoy being strong and like breaking things.",
		"I have a crude sense of humor.",
		"I face problems head-on. A simple, direct solution is the best path to success.",
	],
	ideal : [
		["Greater Good",
			"Greater Good: Our lot is to lay down our lives in defense of others. (Good)"
		],
		["Responsibility",
			"Responsibility: I do what I must and obey just authority. (Lawful)"
		],
		["Independence",
			"Independence: When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)"
		],
		["Might",
			"Might: In life as in war, the stronger force wins. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Ideals aren't worth killing over or going to war for. (Neutral)"
		],
		["Nation",
			"Nation: My city, nation, or people are all that matter. (Any)"
		],
	],
	bond : [
		"I would still lay down my life for the people I served with.",
		"Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
		"My honor is my life.",
		"I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
		"Those who fight beside me are those worth dying for.",
		"I fight for those who cannot fight for themselves.",
	],
	flaw : [
		"The monstrous enemy we faced in battle still leaves me quivering with fear.",
		"I have little respect for anyone who is not a proven warrior.",
		"I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.",
		"My hatred of my enemies is blinding and unreasoning.",
		"I obey the law, even if the law causes misery.",
		"I'd rather eat my armor than admit when I'm wrong.",
	],
};

BackgroundList["urchin ua22co"] = {
	regExpSearch : /^(?=.*urchin).*$/i,
	name : "Urchin (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 15]],
	skills : ["Insight", "Stealth"],
	gold : 18,
	toolProfs : ["Thieves' tools"],
	languageProfs : [1, "Common Sign Language"],
	lifestyle : "modest",
	scores : [0, 2, 0, 0, 1, 0],
	scorestxt : "+2 Dexterity, +1 Wisdom",
	equipleft : [
		["Bedroll", "", 7],
		["Dagger", "", 1],
		["Gaming set (of my choice)", "", ""],
		["Belt, with:", "----", 0.0625],
		["- Thieves' tools", "", 1],
		["- Pouch", "", 1],
	],
	equipright : [
		["Common clothes", "", 3],
		["Dagger", "", 1],
	],
	feature : "City Secrets UA22CO",
	trait : [
		"I hide scraps of food and trinkets away in my pockets.",
		"I ask a lot of questions.",
		"I like to squeeze into small places where no one else can get to me.",
		"I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.",
		"I eat like a pig and have bad manners.",
		"I think anyone who's nice to me is hiding evil intent.",
		"I don't like to bathe.",
		"I bluntly say what others are hinting at or hiding.",
	],
	ideal : [
		["Respect",
			"Respect: All people, rich or poor, deserve respect. (Good)"
		],
		["Community",
			"Community: We have to take care of each other, because no one else is going to do it. (Lawful)"
		],
		["Change",
			"Change: The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)"
		],
		["Retribution",
			"Retribution: The rich need to be shown what life and death are like in the gutters. (Evil)"
		],
		["People",
			"People: I help the people who help me—that's what keeps us alive. (Neutral)"
		],
		["Aspiration",
			"Aspiration: I'm going to prove that I'm worthy of a better life. (Any)"
		],
	],
	bond : [
		"My town or city is my home, and I'll fight to defend it.",
		"I sponsor an orphanage to keep others from enduring what I was forced to endure.",
		"I owe my survival to another urchin who taught me to live on the streets.",
		"I owe a debt I can never repay to the person who took pity on me.",
		"I escaped my life of poverty by robbing an important person, and I'm wanted for it.",
		"No one else should have to endure the hardships I've been through.",
	],
	flaw : [
		"If I'm outnumbered, I will run away from a fight.",
		"Gold seems like a lot of money to me, and I'll do just about anything for more of it.",
		"I will never fully trust anyone other than myself.",
		"I'd rather kill someone in their sleep than fight fair.",
		"It's not stealing if I need it more than someone else.",
		"People who can't take care of themselves get what they deserve.",
	],
};

// Add the background features for the backgrounds in this UA article

BackgroundFeatureList["shelter of the faithful ua22co"] = {
	// Acolyte BG Feature
	description : "I command the respect of those who share my faith. I can perform the religious ceremonies of my faith. My companions and I can expect free healing and care at an establishment of my faith, though I must provide any material components needed for spells. Those who share my religion will support me at a modest lifestyle. \n As an Acolyte, I gain the Magic Initiate (UA22CO) feat at 1st level, with my choice of either the Cleric or Paladin variant.",
	source : [["MJ:HB", 0], ["UA22CO", 11]],
	eval : function() { AddFeat("Magic Initiate"); },
	removeeval : function() { RemoveFeat("Magic Initiate"); }
};

BackgroundFeatureList["respect of the stout folk ua22co"] = {
	// Artisan BG Feature
	description : "No one esteems clan crafters quite so highly as dwarves do. I always have free room and board in any place where shield dwarves or gold dwarves dwell, and the individuals in such a settlement might vie among themselves to determine who can offer me (and possibly my compatriots) the finest accommodations and assistance. \n As an Artisan, I gain the Crafter (UA22CO) feat at 1st level.",
	source : [["MJ:HB", 0], ["UA22CO", 12]],
	eval : function() { AddFeat("Crafter (UA22CO)"); },
	removeeval : function() { RemoveFeat("Crafter (UA22CO)"); }
};

BackgroundFeatureList["false identity ua22co"] = {
	// Charlatan BG Feature
	description : "I have created a second identity that includes documentation, established acquaintances, and disguises that allow me to assume that persona. Additionally, I can forge documents, including official papers and personal letters, as long as I have seen an example of the kind of document or the handwriting I am trying to copy. \n As a Charlatan, I gain the Skilled (UA22CO) feat at 1st level.",
	source : [["MJ:HB", 0], ["UA22CO", 12]],
	eval : function() { AddFeat("Skilled"); },
	removeeval : function() { RemoveFeat("Skilled"); }
};

BackgroundFeatureList["criminal contact ua22co"] = {
	// Criminal BG Feature
	description : "I have a reliable and trustworthy contact who acts as my liaison to a network of other criminals. I know how to get messages to and from my contact, even over great distances; specifically, I know the local messengers, corrupt caravan masters, and seedy sailors who can deliver my messages. \n As a Criminal, I gain the Alert (UA22CO) feat at 1st level.",
	source : [["MJ:HB", 0], ["UA22CO", 12]],
	eval : function() { AddFeat("Alert (UA22CO)"); },
	removeeval : function() { RemoveFeat("Alert (UA22CO)"); }
};

BackgroundFeatureList["cult teachings ua22co"] = {
	// Cultist BG Feature
	description : "I was inundated with knowledge about one of the Great One, and know by heart everything from the cult's basic commandments to some of its most esoteric secrets. I have advantage on Intelligence (Religion) checks to know information about the Great One, including obscure secrets unknown to most worshipers. \n As a Cultist, I gain the Magic Initiate (UA22CO) feat at 1st level, with my choice of either the Sorcerer, Warlock, or Wizard variant.",
	source : [["MJ:HB", 0], ["UA22CO", 12]],
	eval : function() { AddFeat("Magic Initiate"); },
	removeeval : function() { RemoveFeat("Magic Initiate"); }
};

BackgroundFeatureList["by popular demand ua22co"] = {
	// Entertainer BG Feature
	description : "I can always find a place to perform (inn/tavern/circus/etc.), where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night. In addition, my performance makes me something of a local figure. When strangers recognize me in a town where I have performed, they typically take a liking to me. \n As an Entertainer, I gain the Musician (UA22CO) feat at 1st level.",
	source : [["MJ:HB", 0], ["UA22CO", 12]],
	eval : function() { AddFeat("Musician (UA22CO)"); },
	removeeval : function() { RemoveFeat("Musician (UA22CO)"); }
};

BackgroundFeatureList["harvest the land ua22co"] = {
	// Farmer BG Feature
	description : "I gain advantage on ability checks made using carpenter's tools, a shovel, or a sickle. I also gain advantage on Persuasion checks with other farmers to secure lodging or sustenance. \n As a Farmer, I gain the Tough (UA22CO) feat at 1st level.",
	source : [["MJ:HB", 0], ["UA22CO", 13]],
	eval : function() { AddFeat("Tough"); },
	removeeval : function() { RemoveFeat("Tough"); }
};

BackgroundFeatureList["are you entertained? ua22co"] = {
	// Gladiator BG Feature
	description : "I can always find a place to perform (arena/pit fight), where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night. In addition, my performance makes me something of a local figure. When strangers recognize me in a town where I have performed, they typically take a liking to me. \n As a Gladiator, I gain the Savage Attacker (UA22CO) feat at 1st level.",
	source : [["MJ:HB", 0], ["UA22CO", 13]],
	eval : function() { AddFeat("Savage Attacker"); },
	removeeval : function() { RemoveFeat("Savage Attacker"); }
};

BackgroundFeatureList["watcher's eye ua22co"] = {
	// Guard BG Feature
	description : "My experience in enforcing the law, and dealing with lawbreakers, gives me a feel for local laws and criminals. I can easily find the local outpost of the watch, guards or a similar organization, and just as easily pick out the dens of criminal activity in a community. I am far more likely to be welcome in the former locations rather than the latter, however. \n As a Guard, I gain the Alert (UA22CO) feat at 1st level.",
	source : [["MJ:HB", 0], ["UA22CO", 13]],
	eval : function() { AddFeat("Alert (UA22CO)"); },
	removeeval : function() { RemoveFeat("Alert (UA22CO)"); }
};

BackgroundFeatureList["makeshift meals ua22co"] = {
	// Guide BG Feature
	description : "I know how to purify food found in nature. When I take a short rest, I prepare a meal for a number of creatures equal to my proficiency bonus. Creatures who consume the food regain hit points equal to my level. Once they do, they can't regain hit points from another one of my meals until they finish a long rest. \n As a Guide, I gain the Magic Initiate (UA22CO) feat at 1st level, with my choice of either the Druid or Ranger variant.",
	source : [["MJ:HB", 0], ["UA22CO", 13]],
	eval : function() { AddFeat("Magic Initiate"); },
	removeeval : function() { RemoveFeat("Magic Initiate"); }
};

BackgroundFeatureList["discovery ua22co"] = {
	// Hermit BG Feature
	description : "The quiet seclusion of my extended hermitage gave me access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of my seclusion. It might be a great truth, a hidden site, a long forgotten fact, or unearthed some relic of the past that could rewrite history. \n As a Hermit, I gain the Magic Initiate (UA22CO) feat at 1st level, with my choice of either the Druid or Ranger variant.",
	source : [["MJ:HB", 0], ["UA22CO", 14]],
	eval : function() { AddFeat("Magic Initiate"); },
	removeeval : function() { RemoveFeat("Magic Initiate"); }
};

BackgroundFeatureList["stone infrastructure ua22co"] = {
	// Laborer BG Feature
	description : "I have an advanced knowledge of the properties of stone structures, including where they are strongest and weakest. \n As a Laborer, I gain the Tough (UA22CO) feat at 1st level.",
	source : [["MJ:HB", 0], ["UA22CO", 14]],
	eval : function() { AddFeat("Tough"); },
	removeeval : function() { RemoveFeat("Tough"); }
};

BackgroundFeatureList["position of privilege ua22co"] = {
	// Noble BG Feature
	description : "I am welcome in high society, and people assume I have the right to be wherever I am. The common folk make every effort to accommodate me and avoid my displeasure, and other people of high birth treat me as a member of the same social sphere. I can secure an audience with a local noble if I need to. \n As a Noble, I gain the Skilled (UA22CO) feat at 1st level.",
	source : [["MJ:HB", 0], ["UA22CO", 14]],
	eval : function() { AddFeat("Skilled"); },
	removeeval : function() { RemoveFeat("Skilled"); }
};

BackgroundFeatureList["wanderer ua22co"] = {
	// Pilgrim BG Feature
	description : "I have an excellent memory for maps and geography, and I can always recall the general layout of terrain, settlements, and other features around me. In addition, I can find food and fresh water for myself and up to five other people each day, provided that the land offers berries, small game, water, and so forth. \n As a Pilgrim, I gain the Healer (UA22CO) feat at 1st level.",
	source : [["MJ:HB", 0], ["UA22CO", 14]],
	eval : function() { AddFeat("Healer (UA22CO)"); },
	removeeval : function() { RemoveFeat("Healer (UA22CO)"); }
};

BackgroundFeatureList["researcher ua22co"] = {
	// Sage BG Feature
	description : "When I attempt to learn or recall a piece of lore, if I do not know that information, I often know where and from whom I can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign. \n As a Sage, I gain the Magic Initiate (UA22CO) feat at 1st level, with my choice of either the Artificer, Sorcerer, Warlock, or Wizard variant.",
	source : [["MJ:HB", 0], ["UA22CO", 15]],
	eval : function() { AddFeat("Magic Initiate"); },
	removeeval : function() { RemoveFeat("Magic Initiate"); }
};

BackgroundFeatureList["ship's passage ua22co"] = {
	// Sailor BG Feature
	description : "When I need to, I can secure free passage on a sailing ship for myself and my companions. I might sail on the ship I served on, or another ship I have good relations with. Because I'm calling in a favor, I can't be certain of a schedule or route that will meet my every need. My companions and I are expected to assist the crew during the voyage. \n As a Sailor, I gain the Tavern Brawler (UA22CO) feat at 1st level.",
	source : [["MJ:HB", 0], ["UA22CO", 15]],
	eval : function() { AddFeat("Tavern Brawler"); },
	removeeval : function() { RemoveFeat("Tavern Brawler"); }
};

BackgroundFeatureList["military rank ua22co"] = {
	// Soldier BG Feature
	description : "I have a military rank from my career as a soldier. Soldiers loyal to my former military organization still recognize my authority and influence. I can invoke my rank to influence soldiers and temporarily requisition simple equipment or horses. I can usually gain access to friendly military encampments and fortresses where my rank is recognized. \n As a Soldier, I gain the Savage Attacker (UA22CO) feat at 1st level.",
	source : [["MJ:HB", 0], ["UA22CO", 15]],
	eval : function() { AddFeat("Savage Attacker"); },
	removeeval : function() { RemoveFeat("Savage Attacker"); }
};

BackgroundFeatureList["city secrets ua22co"] = {
	// Urchin BG Feature
	description : "I know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When I am not in combat, I (and companions I lead) can travel between any two locations in the city twice as fast as my speed would normally allow. \n As an Urchin, I gain the Lucky (UA22CO) feat at 1st level.",
	source : [["MJ:HB", 0], ["UA22CO", 15]],
	eval : function() { AddFeat("Lucky"); },
	removeeval : function() { RemoveFeat("Lucky"); }
};

// Add the new feats for the backgrounds in this UA article.

FeatsList["alert ua22co"] = {
	name : "Alert (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 16]],
	allowDuplicates : false,
	addMod : [
		{ type : "skill", field : "Init", mod : "Prof", text : "I can add my Proficiency Bonus to initiative rolls." },
	],
	descriptionFull : " \u2022 Initiative Proficiency. When I roll Initiative, I can add my Proficiency Bonus to the roll.\n \u2022 Initiative Swap. Immediately after I roll Initiative, I can swap my Initiative with the Initiative of one willing ally in the same combat. I can’t make this swap if myself or the ally is Incapacitated.",
	description : " \u2022 Initiative Proficiency. When I roll Initiative, I can add my Proficiency Bonus to the roll.\n \u2022 Initiative Swap. I can swap my Initiative with one willing ally, unless myself or the ally is Incapacitated.",
};

FeatsList["crafter ua22co"] = {
	name : "Crafter (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 16]],
	allowDuplicates : false,
	toolProfs : [["Artisan's tools", 3]],
	descriptionFull : " \u2022 Tool Proficiency. I gain Tool Proficiency with three different Artisan’s Tools of my choice.\n \u2022 Discount. Whenever I buy a nonmagical item, I receive a 20 percent discount on it.\n \u2022 Faster Crafting. When I craft an item using a tool with which I have Tool Proficiency, the required crafting time is reduced by 20 percent.",
	description : " \u2022 Tool Proficiency. I gain Tool Proficiency with three different Artisan’s Tools of my choice.\n \u2022 Discount. I get a 20% discount on nonmagical items.\n \u2022 Faster Crafting. I craft items 20% faster when using a tool I am proficient with.",
};

FeatsList["healer ua22co"] = {
	name : "Healer (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 17]],
	allowDuplicates : false,
	descriptionFull : "I have the training and intuition to administer first aid and other care effectively, granting me the following benefits:\n \u2022 Battle Medic. If I have a Healer’s Kit, I can expend one use of it and tend to a creature within 5 feet of me as an Action. That creature can expend one of its Hit Dice, and I then roll that die. The creature regains a number of Hit Points equal to the roll plus my Proficiency Bonus.\n \u2022 Healing Re-Rolls. Whenever I roll a die to determine the number of Hit Points I restore with a spell or with this feat’s Battle Medic benefit, I can re-roll the die if it rolls a 1, and I must use the new roll.",
	description : " \u2022 Battle Medic. If I a Healer's Kit, I can expend one of its uses & roll one of the target's hit die plus my Proficiency Bonus and heal target the resulting value.\n \u2022 Healing Rerolls. I can reroll any dice used for healing that rolls a 1; must use new roll.",
};

FeatsList["musician ua22co"] = {
	name : "Musician (UA22CO)",
	source : [["MJ:HB", 0], ["UA22CO", 17]],
	allowDuplicates : false,
	toolProfs : [["Musical instrument", 3]],
	descriptionFull : " \u2022 Instrument Training. I gain Tool Proficiency with three Musical Instruments of my choice.\n \u2022 Inspiring Song. As I finish a Short Rest or a Long Rest, I can play a song on a Musical Instrument with which I have Tool Proficiency and give Heroic Advantage to allies who hear the song. The number of allies I can affect in this way equals my Proficiency Bonus.",
	description : " \u2022 Instrument Training. I gain Tool Proficiency with three Musical Instruments of my choice.\n \u2022 Inspiring Song. After a Short Rest or Long Rest, I can give Proficiency Bonus # of allies Heroic Advantage.",
};