# Maqueen gaat een zwarte lijn volgen!

## Introductie @showdialog

In deze tutorial ga jij Mauqeen een zwarte lijn laten volgen.
Je maakt hierbij gebruik van twee sensoren aan de onderkant en voorkant van Maqueen.
Deze sensoren kunnen zwart en wit van elkaar onderscheiden.

## Stap 1
In deze eerste stap ga je ontdekken hoe de sensoren van Maqueen zwart en wit onderscheiden.  
Plaats als eerst ``||logic: if ... then ... else||`` blok in ``||basic:forever||``.   
Pak dan uit de categorie ``||logic: logic||``, onder het kopje **Boolean**, het ruitvormige blok ``||logic: ... and ...||``.  
Plaats deze op true in het ``||logic: if ... then ... else||`` blok. Pak daarna uit dezelfde categorie, maar dan onder het kopje **Comparison** 
het ruitvormige blok ``||logic: 0 = 0||``. Klik deze in het linker donkere, ruitvormige vakje van het ``||logic: ... and ...||``.  
Plaats ``||logic: 0 = 0||`` ook op de rechter kant.  
Je kunt nu twee vergelijkingen (comparisons) laten bepalen of het *if*-stuk waar (true) is.  
In dit geval moeten beide vergelijkingen waar (true) zijn om het gehele stuk waar (true) te laten zijn. Dat zie je aan de **and** (en).  

Plaats nu op de linker 0 van het linker ``||logic: 0 = 0||`` blok het blok ``||maqueen: read ... line tracking sensor||``.  
Plaats ``||maqueen: read ... line tracking sensor||`` ook op de linker 0 van het rechter ``||logic: 0 = 0||`` blok. 
Kies op de linker ``||maqueen: read ... line tracking sensor||`` *left* als waarde en op de rechter *right*.  
Laat in beide vergelijkingen de 0 staan. Deze 0 is de waarde die binnenkomt van de line tracking sensor.  
Pak nu het ``||maqueen: motor ... move ... at speed ...||`` blok en plaats in het stuk onder al deze vergelijkingen.  
Vul hier voor de snelheid (speed) 100 in.    
Pak daarnaast ook nog het ``||maqueen: motor ... stop||`` blok en plaats deze in het **else** gedeelte.  

``|Download|`` nu dit stuk code op de micro:Maqueen en plaats Maqueen op het papier met het grote zwarte vlak.  
Zet Maqueen op het papier en zet hem aan. Doe dit een keer als je hem op het zwarte gedeelte neerzet en aanzet en ook een keer vanaf het witte gedeelte.  
Kan jij ontdekken welke kleur (zwart/wit) de waarde 0 geeft?

*Kom je er niet uit of werkt het niet? Kijk dan bij de hint en vraag eventueel hulp aan een begeleider*

```blocks
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
```

## Stap 2
Als het goed is heb je in de vorige stap ontdekt dat de sensor de waarde **0** geeft voor **zwart**. In het geval van deze sensoren geeft **wit** de waarde **1** door.  
Vanaf deze stap ga je de code zo uitbreiden dat Maqueen een zwarte lijn blijft volgen. Dat betekent dat Maqueen vooruit rijd als de sensoren zwart zien en Maqueen moet "bijdraaien" als één van sensoren wit "ziet".   

Druk op **+** aan de onderkant van het ``||logic: if ... then ... else||`` blok. Je ziet nu een **else if** gedeelte verschijnen.  
Je kunt hier nu een extra vergelijking invoegen. Om veel tijd en moeite te besparen kan je de vergelijking van het if-gedeelte kopiëren.  
Dit doe je door met de rechter muisknop vlakbij **and** te klikken en dan op **duplicate** (kopiëren) te drukken.  
*(Let goed op dat je de gehele vergelijking hebt gekopieerd en niet maar een stukje daarvan.)*  
Klik dit blok in het donkere ruitvormige vlakje op de regel waar **else if** staat.  
In dit stuk ga je Mauqeen naar *links* laten bijdraaien. Dit moet Maqueen doen als hij met zijn *rechter sensor* **wit** ziet. 
Vul nu een **1** in bij de vergelijking van de *rechter* sensor (read *right* line tracking sensor).  
Om Maqueen *links* te laten rijden moet de linker motor stoppen en de rechter motor blijven rijden.  
Hiervoor pak je nu het blok ``||maqueen: motor ... move ... at speed ...||`` en plaats deze **2 keer**.  

Vul in: motor *left* move *Forward* at speed *0* en op het blok eronder motor *right* move *Forward* at speed *100*.  

Kijk nu in de hint of je code overeenkomt met de hint. Klopt je code? Ga dan door naar de volgende stap!

```blocks
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
```
## Stap 3
In deze stap ga je bijna hetzelfde doen als in stap 2. Je gaat Maqueen nu naar *rechts* laten bijdraaien wanneer de *linker sensor* **wit** ziet.  
Klik als eerst weer op **+** onderaan het ``||logic: if ... then ... else||``. Nu kan je weer hetzelfde "kopieer-trucje" toepassen als je in stap 2 hebt gedaan.  
Kopieer nu eerst weer de gehele vergelijking en plaats deze. Kopieer nu ook beide ``||maqueen: motor ... move ... at speed ...||`` blokken en plaats deze.  
Maqueen moet precies het tegenovergestelde doen dan in de vorige stap, oftwel: Vul een **1** in bij de vergelijking van de *linker* sensor en daarnaast 
vul je de ``||maqueen: motor ... move ... at speed ...||`` blokken in met de waardes:  
motor *left* move *Forward* at speed *100* en motor *right* move *Forward* at speed *0*.    

Kijk nu in de hint of je code overeenkomt met de hint. Klopt je code? Ga dan door naar de volgende stap!

```blocks
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
```

## Stap 4
In deze stap ga je het **else** gedeelte van het ``||logic: if ... then ... else||`` aanpassen.  Het **else** gedeelte heeft geen eigen vergelijking, maar in jou code is alleen nog de combinatie van verglelijking over dat zowel de *rechter* als *linker* sensor *wit* ziet (oftwel *1* binnenkrijgt).
Op dit moment heb je in je code staan dat beide motoren stoppen, wanneer dit het geval is. Om Maqueen de zwarte lijn op jouw baan te laten vinden, wanneer die begint in een volledig wit vlak, laat je in dit stuk code beide motor achteruit rijden.  
Verwijder nu eerst het ``||maqueen: motor ... stop||`` blok. Plaats dan het ``||maqueen: motor ... move ... at speed ...||`` blok en vul in:  
motor *all* move *Backward* at speed *100*.  

``|Download|`` nu dit stuk code op de micro:Maqueen en plaats Maqueen op het papieren met de zwarte lijnen.  
Kan Maqueen lijn volgen? Kan Maqueen de lijn ook "vinden" wanneer je hem aanzet in het midden tussen de zwarte lijnen? 

*Kom je er niet uit? Kijk dan bij de hint en vraag eventueel hulp aan een begeleider*

```blocks
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    }
})
```

## Stap 5
Gefeliciteerd! Maqueen kan nu een zwarte lijn volgen!  
Je code werkt en is in principe compleet. Toch is er nog een ding die je kan aanpassen om de code te verbeteren.  
Je zult misschien opgemerkt hebben dat je meerdere keren de snelheid hebt moeten invullen. Stel dat je er na het testen achter komt dat je Maqueen toch een andere snelheid zou laten willen rijden
zou je dit op elke plek moeten aanpassen. Met dit relatief kleine stukje code zou dat nog te doen zijn, maar al snel is dit met grotere programma's niet praktisch.  
In programmeren wordt er dan ook vaak gebruik gemaakt van **variabelen**. Een variabele is een naam voor een bepaalde waarde die je (vaak meerdere keren) nodig hebt in je code.  
In jouw stuk code is een variabele voor *snelheid* handig. Zo'n variabele moet je eerst aanmaken.  
Plaats eerst het ``||basic:on Start||`` blok, als deze er nog niet staat. Klik dan op de categorie ``||variables:Variables||`` en klik op **make a variable** (maak een variabele).  
Vul nu de naam in van jouw variabele, in dit geval *snelheid*.  Je ziet nu meerdere nieuwe blokken verschijnen.  Je pakt eerst het blok ``||variables: set snelheid to ... ||`` en plaatst deze in ``||basic:on Start||``.  
Nu kan je op het ``||variables: set snelheid to ... ||`` de waarde invullen voor *snelheid* en dat is in dit geval **100**.  
Pak dan uit de categorie ``||variables:Variables||``, onder het kopje *Your Variables*, de rode ovaal met snelheid erop. Klik dit blokje op elke plek in je code waar nu 100 als snelheid staat.  
Om te kijken of de variabele goed werkt verander je nu de snelheid naar **20** op het ``||variables: set snelheid to ... ||`` blok.  

``|Download|`` nu dit stuk code op de micro:Maqueen en plaats Maqueen op het papieren met de zwarte lijnen.  
Zie jij een verschil in de snelheid van Maqueen?    

Dankzij het gebruik van een variabele, kan je nu met maar 1 kleine aanpassing de snelheid van Maqueen aanpassen.  
Probeer nog maar eens Maqueen een andere snelheid te geven!    

*Kom je er niet uit? Kijk dan bij de hint en vraag eventueel hulp aan een begeleider*

```blocks
let snelheid = 100
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, snelheid)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, snelheid)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, snelheid)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, snelheid)
    }
})
```

## Afsluiting
Gefeliciteerd, je hebt de tutorial afgerond! Maqueen kan nu een zwarte lijn volgen en je weet nu wat variabelen zijn
en hoe je die gebruikt bij programmeren!   

Voer nadat je op ``|Finish|`` hebt gedrukt de challenge uit.  
Is het gelukt? Laat het dan zien aan begeleiding!        

**challenge:** Maak zowel voor de waarden van *zwart & wit* variabelen aan, als een *stop (snelheid = 0)* variabele en gebruikt deze in jouw code.