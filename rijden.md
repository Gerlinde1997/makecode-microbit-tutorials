# Maqueen gaat rijden!

## Introductie @showdialog

In deze tutorial ga jij Maqueen laten rondrijden.  
Je gaat er zelfs voor zorgen dat die nergens tegenaan gaat botsen!

## Stap 1
In de werkruimte zie je weer de twee containerblokken 
``||basic:on start||`` en ``||basic:forever||`` staan. 
Klik nu in de **blokkenlade** op de categorie ``||maqueen:Maqueen||``. 
*In deze categorie staan de blokken die speciaal voor de Maqueen robot zijn.*
Sleep hieruit het blok ``||maqueen: motor ... move ... at speed ...||`` en 
plaats die in het ``||basic:forever||`` blok.

```blocks
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.Left, maqueen.Dir.CW, 0)
})
```

## Stap 2
Om Maqueen recht vooruit te laten rijden, moet je wat aanpassingen doen aan het ``||maqueen: motor ... move ... at speed ...||`` blok.  
Beide motoren (All) moeten vooruit (Forward) op een snelheid (speed) van 100.  
Vul deze gegevens in op het ``||maqueen: motor ... move ... at speed ...||`` blok en ``||Download||`` dit stukje code op de micro:Maqueen.  

Zet de Maqueen aan en hij gaat rijden!

```blocks
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
})
```

## Stap 3 
Zoals je gemerkt zult hebben, rijd de Maqueen nu alleen vooruit en stopt die niet als de iets tegenkomt.  
Om hem te laten stoppen als die iets tegenkomt ga je nu gebruik maken van logica blokken.  

Klik in de **blokkenlade** op de categorie ``||logic:Logic||``.
Sleep hieruit het blok ``||logic: if ... then||`` blok.  
Haal ``||maqueen: motor ... move ... at speed ...||`` uit het ``||basic:forever||`` blok en stop ``||logic: if ... then||`` erin.  

Je ziet op dit blok een ruitvorm met true erin staan. In makeCode is de ruit een comparison (vergelijking).  
Als (if) de vergelijking waar (true) is, dan (then) wordt de code in dat blok uitgevoerd.  

Sleep uit de **blokkenlade** van de categorie ``||logic:Logic||`` het ruitvormige blok ``||logic: 0 = 0||``.  
Deze klik je op de true van het ``||logic: if ... then||`` blok. Hier kan je in de volgende stap de juiste waardes invullen om de Maqueen te laten doen wat jij wilt.  

```blocks
basic.forever(function () {
    if (0 == 0) {
        
    }
})
```

## Stap 4
In deze stap ga je gebruik maken van de 'ogen' van de Maqueen, de ultrasonic sensoren. 
Het doel van deze stap is dat Maqueen stopt als die een voorwerp 'ziet' dichterbij dan 10 cm. 
Pak uit ``||maqueen:Maqueen||`` het ronde blok ``||maqueen: read ultrasonic sensor||``.  
Dit blok klik je in de linker 0. Klik dan op het **=** teken en verander deze in **<**. Daarna vul je **10** in op de rechter 0. 
Pak nu uit ``||maqueen:Maqueen||`` het blok ``||maqueen: motor ... stop||``. Klik dit blok in het ``||logic: if ... then||`` blok. 
Verander nu op dat blok **Left** in **All**.  


## Stap 5
Bij ``||logic: if ... then||`` hoort ook een stuk code voor zo niet ... dan (else).    
Druk hiervoor op het plusje links onder op het ``||logic: if ... then||``.  
In dit geval wil je dat Maqueen vooruit rijd, als die niet dichterbij dan 10cm van een obstakel is. Oftewel,
als (If) Maqueen dichterbij dan 10 cm is van een voorwerp is, dan (then) stopt hij. Zo niet (else) rijd hij voorruit.  
Sleep nu het ``||maqueen: motor ... move ... at speed ...||`` in het else blok.  


``||Download||`` dit stuk code op de micro:Maqueen en kijk of die optijd stopt!  

*Kom je er niet uit? Kijk dan bij de hint en vraag eventueel hulp aan een begeleider*


```blocks
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
})
```

## Stap 6  
Nu je weet dat Maqueen optijd stop kan je de code gaan schrijven om hem voorwerpen te gaan laten ontwijken.  
Het doel is om hem in de buurt van een obstakel achteruit te laten rijden en hem een stukje laten draaien, zodat die weer verder kan rijden.  

Gooi nu eerst het ``||maqueen: motor ... stop||`` blok weg.  Plaats nu op die plek het blok ``||maqueen: motor ... move ... at speed ...||``.  
Vul dit blok zo in dat beide motoren (All) achteruit (Backward) op een snelheid (speed) van 50 gaan rijden.  
Je wilt dat die 1 seconde lang achteruit rijd.    
Plaats ``||basic:pause||`` onder ``||maqueen: motor ... move ... at speed ...||`` en vul daar 1 seconden in. 

``||Download||`` dit stuk code op de micro:Maqueen en kijk of die achteruit rijdt!  

*Kom je er niet uit? Kijk dan bij de hint en vraag eventueel hulp aan een begeleider*

```blocks
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        basic.pause(1000)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
})
```


## Stap 7
In deze stap laat je Maqueen draaien na het achteruit rijden.
Plaats onder ``||basic:pause||`` 2x het ``||maqueen: motor ... move ... at speed ...||`` blok.  
Om Maqueen te laten draaien moet 1 motor vooruit en 1 motor achteruit.  Vul nu de twee ``||maqueen: motor ... move ... at speed ...||`` zo in dat Maqueen draait op een snelheid van 50.  

Maqueen moet natuurlijk niet te lang draaien en weer verder rijden.  
Plaats onder het 2e ``||maqueen: motor ... move ... at speed ...||`` blok een ``||basic:pause||`` blok van 200 ms(milliseconden).   

In theorie zou Maqueen nu bij een obstakel achteruit gaan rijden, een stukje draaien en weer verder gaan rijden vooruit.  

``||Download||`` je code en test of het klopt!    

*Kom je er niet uit? Kijk dan bij de hint en vraag eventueel hulp aan een begeleider*

```blocks
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        basic.pause(200)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
})
```
## Stap 8
Gefeliciteerd! Maqueen kan nu rondrijden, zonder tegen obstakels aan te botsen!

