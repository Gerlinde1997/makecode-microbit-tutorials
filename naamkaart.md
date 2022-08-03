# Naamkaartje voor Maqueen

## Introductie @showdialog

In deze tutorial ga jij micro:Maqueen een naamkaartje geven!

## Stap 1
Met het ``||basic:show string||`` kan je tekst laten zien op de micro:bit.  
Plaats ``||basic:show string||`` in het ``||basic:forever||`` blok.

```blocks
basic.forever(function(){
    basic.showString("Hello!")
})
```

## Stap 2
In het ``||basic:show string||`` zie je een wit ovaal. Je ziet dit bij veel verschillende blokken terugkomen.  
Dit zijn **variabelen**. Hiermee kan je informatie *(bijvoorbeeld een getal of woord)* aan het blok toevoegen, zodat dat door het blok wordt gebruikt bij het uitvoeren.  
Klik nu op **"Hello!"** in het ``||basic:show string||`` blok en typ daar Maqueen.    
Zie je de naam verschijnen op de micro:bit simulator?

```blocks
basic.forever(function(){
    basic.showString("Maqueen")
})
```
## Stap 3
Verbind nu de micro:bit met de computer en ``|Download|`` het programma.    
Zie je **Maqueen** verschijnen op de echte micro:bit?

*Werkt het niet? Kijk eens bij de hint. Komt dit plaatje overeen met jouw code?*    
*Kom je er niet uit? Vraag dan iemand van de begeleiding om hulp.*

```blocks
basic.forever(function(){
    basic.showString("Maqueen")
})
```

## Stap 4
Goed gedaan! Nu kan iedereen zien dat je robot Maqueen heet!    

Natuurlijk wil iedereen ook weten hoe oud Maqueen is.    
Om een getal te laten zien, gebruik je het blok ``||basic:show number||``.  
Plaats deze onder het ``||basic:show string||`` blok en vul de leeftijd in die jij Maqueen wil geven. *(bijv. 2)*        

Verbind nu de micro:bit met de computer en ``|Download|`` het programma.  
Zie je **Maqueen** en daarna zijn leeftijd verschijnen op de micro:bit?    

*Kom je er niet uit? Vraag dan iemand van de begeleiding om hulp.*

```blocks
basic.forever(function(){
    basic.showString("Maqueen")
    basic.showNumber(2)
})
```

## Afsluiting
Super! Nu weet iedereen hoe je robot heet en hoe oud hij is!  
De tutorial heb je nu afgerond. Voer nadat je op ``|Finish|`` hebt gedrukt de challenge uit en laat dit zien aan begeleiding.    

Veel plezier!    

**Challenge:** Laat Maqueen jouw naam en leeftijd zien.

