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
Om hem te laten stoppen als die iets tegenkomt ga je nu gebruik maken van o.a. logica codeblokken.  

Klik in de **blokkenlade** op de categorie ``||logic:Logic||``.
Sleep hieruit het blok ``||logic: if ... then||`` en plaats die in het ``||basic:on start||`` blok, onder het
blok ``||maqueen: motor ... move at speed ...||`` . 
Je ziet op dit blok een ruitvorm met true erin staan. In makeCode is de ruit een comparison (vergelijking).  
Als (if) de vergelijking waar (true) is, dan (then) wordt de code in dat blok uitgevoerd.  

Sleep uit de **blokkenlade** van de categorie ``||logic:Logic||`` het ruitvormige blok ``||logic: 0 = 0||``.  
Deze klik je op de true van het ``||logic: if ... then||`` blok. Hier kan je in de volgende stap de juiste waardes invullen om de Maqueen te laten doen wat jij wilt.  

```blocks
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
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
Als je nu je hele code leest staat er:  
Wanneer het programma begint (on Start) rijd de Maqueen met alle (All) motoren aan, vooruit (Forward) op en snelheid (speed) van 100.  
Als (If) de ulstrasonic sensor een afstand meet kleiner dan (<) 10 cm, dan (then) stopt de Maqueen alle motoren.  

``||Download||`` dit stuk code op de micro:Maqueen en kijk of die optijd stopt!

*Kom je er niet uit? Kijk dan bij de hint en vraag eventueel hulp aan een begeleider*


```blocks
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
```


