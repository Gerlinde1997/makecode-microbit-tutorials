# Maqueen besturen met de afstandbediening

## Introductie @showdialog
In deze tutorial ga jij Maqueen besturen met de infrarood afstandbediening!  

## Stap 1
*Het blok* ``||basic:forever||`` *kan je weggooien, deze heb je niet nodig deze tutorial.*
Klik in de blokkenlade op de categorie ``||IR:IR||``. *In deze categorie staan de blokken die voor de infrarood sensor zijn.*  
Sleep hieruit het blok ``||IR:on IR received (message)||`` en plaats die in de werkruimte.  
In dit blok kan je andere blokken plaatsen die moeten worden uitgevoerd wanneer de infraroodsensor (IR) een bepaald bericht (message) ontvangt (received).  
Wat opvalt aan dit blok is dat message een rood, ovaal blokje is.  Dit betekend dat message (bericht) een **variabele** is.  
In de volgende stap ga je kijken wat er eigenlijk voor een bericht (message) wordt verstuurd door de afstandbediening.  

## Stap 2
Pak uit de categorie ``||basic:basic||`` het blok ``||basic:show number||``.  
Pak dan uit de categorie ``||variables:variables||`` het blok ``||variables:message||``.  
Plaats deze in het witte ovaal van ``||basic:show number||``.  
Je kan nu op de micro:bit het nummer zien (show number) die door de afstandbediening als bericht (message) wordt verstuurd.  

``|Download|`` nu het programma op de micro:bit.  
Zie jij verschillende getallen verschijnen op de micro:bit wanneer je op verschillende knopjes van de afstandbediening drukt?  
 
```blocks
IR.IR_callbackUser(function (message) {
    basic.showNumber(IR.IR_read())
})
basic.forever(function () {
	
})
```
## Stap 3
Nu je weet dat de afstandbediening bij elk knopje een ander getal verstuurd, kan je hiervan gebruik gaan maken in je code.  
In de komende stappen ga jij Maqueen voorruit laten rijden door op het pijltje naar boven te drukken op de afstandsbediening.    

Sleep het ``||basic:show number||`` blok uit het ``||IR:on IR received (message)||`` blok en gooi deze weg.  
Pak nu uit de categorie ``||logic:Logic||`` het blok ``||logic: if ... then||``en plaats deze in het ``||IR:on IR received (message)||``.  
Pak nu uit ``||logic:Logic||`` het ruitvormige comparison (vergelijking) blok ``||logic: 0 = 0||`` en klik deze op de true van het ``||logic: if ... then||`` blok.  

## Stap 4
Het knopje met het pijltje naar boven (op de afstandbediening) verzendt het getal **70**.  
Je wilt dus dat als message (bericht) gelijk is aan **70**, Maqueen vooruit gaat rijden. 
Pak nu uit de categorie ``||variables:variables||`` het blok ``||variables:message||`` en klik die in de linker 0.    
Vul hiervoor **70** in op de rechter 0.   
Pak dan het blok ``||maqueen: motor ... move ... at speed ...||`` en plaats deze in het ``||logic: if ... then||`` blok.  
Vul het ``||maqueen: motor ... move ... at speed ...||`` blok zo in dat beide motoren (All) voorruit (Forward) op een snelheid (speed) van 100 gaan rijden.   

De hele code die je nu hebt geschreven lees je als:  
Als er op de infraroodsensor een bericht wordt ontvangen (On IR received message), dan wordt er naar de code gekeken in dat ``||IR:on IR received (message)||`` blok.  
In dit geval dus, als (if) het bericht (message) die is ontvangen (received) door Maqueen gelijk is (=) aan het getal dat de afstandbediening met het knopje met het pijltje naar boven verzendt.
(Bij deze afstandbediening dus het getal **70**), dan (then) gaat Maqueen vooruit rijden met een snelheid van 100.  

*Kom je er niet uit? Kijk dan bij de hint en vraag eventueel hulp aan een begeleider*

```blocks
IR.IR_callbackUser(function (message) {
    if (message == 70) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
})
basic.forever(function () {
	
})
```

## Stap 5
Ga nu de code testen die je hebt geschreven. ``|Download|`` het programma op de micro:bit en kijk of Maqueen voorruit gaat wanneer je op het pijltje naar boven hebt gedrukt!  

*Doet Maqueen niet wat je verwacht? Ga dan terug naar de vorige stap en kijk bij de hint.*  
*Komt jouw code overeen?*  
*Kom je er niet uit? Vraag dan hulp aan een begeleider*  

## Stap 6
Nu Maqueen vooruit rijdt met het pijltje omhoog, kan je de rest van de richtingen gaan programmeren!
In de stap programmeer je het pijltje naar beneden. Hiermee ga je Maqueen achteruit laten rijden.  
Voor elke richting heb je bijna dezelfde code nodig. Druk met de rechter muisknop op het ``||logic: if ... then||`` blok en druk op duplicate (kopiëren).  
Plaats dit gekopieerde blok onder de andere ``||logic: if ... then||``.  
Hier kan je nu de waardes zo in aanpassen dat Maqueen achteruit gaat met het pijltje naar beneden.  
Het knopje met het pijltje naar beneden verzendt het getal **21**. Verander dus de vergelijking (ruitvormig) op het nieuwe ``||logic: if ... then||`` blok van ``||logic: message = 70||`` naar
``||logic: message = 21||``.    
Daarnaast verander je op het ``||maqueen: motor ... move ... at speed ...||`` blok Forward (vooruit) in Backward (achteruit).    

``|Download|`` de code op je micro:bit en test of je nieuwe code werkt!

*Kom je er niet uit? Kijk dan bij de hint en vraag eventueel hulp aan een begeleider*

```blocks
IR.IR_callbackUser(function (message) {
    if (message == 70) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
    if (message == 21) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    }
})
```

## Stap 7
Nu ga je de pijl naar links programmeren.  
Kopieer weer het ``||logic: if ... then||`` blok. De message van de pijl links is **68**. Pas deze aan op het nieuwe ``||logic: if ... then||`` blok.  
Om Maqueen naar links te laten draaien heb je twee ``||maqueen: motor ... move ... at speed ...||`` blokken nodig, waarvan één motor vooruit en één motor achteruit draait.  
Kopieer hiervoor het ``||maqueen: motor ... move ... at speed ...||`` blok en plaats die onder hetzelfde blok die er al staat.  
Vul nu het bovenste ``||maqueen: motor ... move ... at speed ...||`` blok zo in dat de linker motor (Left) achteruit (Backward) draait met een snelheid (speed) van 30.  
Vul daarna het ``||maqueen: motor ... move ... at speed ...||`` blok daaronder zo in dat de rechter motor (Right) vooruit (Forward) draait met een snelheid (speed) van 30.  

``|Download|`` weer jouw code op je micro:bit en test of het werkt!

*Kom je er niet uit? Kijk dan bij de hint en vraag eventueel hulp aan een begeleider*

```blocks
IR.IR_callbackUser(function (message) {
    if (message == 70) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
    if (message == 21) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    }
    if (message == 68) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    }
})
```

## Stap 8
Als laatste stap van deze tutorial ga je de rechter pijl programmeren.  
Je kunt nu het hele ``||logic: if ... then||`` blok kopiëren (duplicate) van de vorige stap.  
Nu hoef je alleen nog maar de waardes weer aan te passen, zodat Maqueen reageert op de rechter pijl en die dan ook naar rechts draait!    

Dit zijn de gegevens die je nodig hebt en probeer deze zelf in op de juiste plek in te vullen:    
De message van de rechter pijl is **67**.  
De linker motor (Left) moet vooruit (Forward) draaien met een snelheid (speed) van 30.
De rechter motor (Right) moet achteruit (Backward) draaien met een snelheid (speed) van 30.    

``|Download|`` de code op je micro:bit en test of het werkt!    

*Kom je er niet uit? Kijk dan bij de hint en vraag eventueel hulp aan een begeleider*

```blocks
IR.IR_callbackUser(function (message) {
    if (message == 70) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
    if (message == 21) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    }
    if (message == 68) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    }
    if (message == 67) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
    }
})
```

## Stap 8
Gefeliciteerd jij kan nu de micro:Maqueen besturen met de infrarood afstandsbediening!    

**Tijd voor een challenge!**  
Laat de micro:Maqueen stoppen met rijden door op de knop met het getal 0 te drukken.  

*Tip: Onderzoek eerst welke message de 0-knop verzendt (zoals in stap 1 van deze tutorial).*    

*Kom je er niet uit? Kijk dan bij de hint en vraag eventueel hulp aan een begeleider*

```blocks
IR.IR_callbackUser(function (message) {
    if (message == 70) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
    if (message == 21) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    }
    if (message == 68) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    }
    if (message == 67) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
    }
    if (message == 82) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
```

## Afsluiting
Goed gedaan! Jij kan nu Maqueen besturen met de infrarood afstandsbediening!

Voer nadat je op ``|Finish|`` hebt gedrukt de nog één challenges uit. Probeer daarna vooral ook andere blokken uit die je vindt in de blokkenlade! Zo kan je misschien de afstandsbediening nog hele andere dingen laten doen bij de micro:Maqueen...
Ben je tevreden? Laat dit zien aan begeleiding.        

**Challenge:** Laat micro:Maqueen stoppen door op het OK-knopje van de afstandsbediening te drukken.  
    