# Hoe werkt de editor?

## Introductie @showdialog
Welkom in de MakeCode editor!  
In deze tutorial ga je de basis van de MakeCode editor leren kennen.  
Hierna weet je hoe je kan programmeren in deze editor, hoe je jouw geschreven programma's 
kan testen en laten uitvoeren door de **micro:bit**.  


*Klik op de groene OK knop om door te gaan*

## Stap 1
In deze box zie je de uitleg van de tutorial die je volgt.  
In het balkje hierboven zie je bij welke stap je bent.    
Wil je een stap terug? Klik dan op de pijl links. 
  
**Druk nu op de pijl rechts**. Dan gaan we verder naar de volgende stap!

## Stap 2
Onder deze uitleg zie je de blokken ``||basic:on start||`` en ``||basic:forever||``.  
Deze blokken staan in de **werkruimte**. Dat is het gebied waar je gaat programmeren.  
Links heb je de **blokkenlade**. Door blokken vanuit de **blokkenlade** naar de **werkruimte** te slepen en aan elkaar te klikken schrijf jij straks jouw eigen code!  


## Stap 3
Klik in de blokkenlade op de categorie ``||basic: Basic||`` en sleep het blok ``||basic: show number||`` in de werkruimte.   
Het blok is nu geel en doet nog niks.  
Zie jij ook het verschil in vorm tussen het ``||basic:forever||`` en het ``||basic: show number||`` blok?  
In de volgende stap leer je wat dat verschil betekent.

![blocks in workspace](https://raw.githubusercontent.com/Aletho-ICT-Dagbesteding/MakeCode-MicroBit-Tutorials/main/docs/static/tutorials/editor_tutorial1.png)


## Stap 4
Het ``||basic:forever||`` blok heet een **container blok**. Containerblokken hebben een platte boven- en onderkant. Daartussen kunnen andere blokken geklikt worden. Containerblokken bepalen *wanneer* de code in dat blok wordt uitgevoerd.    
``||basic: show number||`` is een **standaard blok**. Standaard blokken klik je in containerblokken en worden van boven naar beneden, om de beurt, uitgevoerd.    
Laten we er in de volgende stap mee aan het werk gaan!

## Stap 5
Klik nu ``||basic: show number||`` in het ``||basic:forever||`` blok.  
Zie je ook dat ``||basic: show number||`` nu ingekleurd is?  
*Dat betekent dat ``||basic: show number||`` nu actief is en zal in dit geval de hele tijd (forever) worden uitgevoerd.*  
Klik nu op het witte ovaal in het ``||basic: show number||`` blok, vul daar je leeftijd in en druk op Enter.  


Gefeliciteerd! Je hebt zojuist je eerste stuk code geschreven!

```blocks
basic.forever(function () {
    basic.showNumber(24)
})
```


## Stap 6
Het stukje code wat je net gemaakt hebt gaan we nu testen op de micro:bit **simulator**.  
De simulator is de grote micro:bit links op je scherm. Deze voert automatisch jouw gemaakte code uit. Daarop kan je gelijk zien of jouw geschreven code werkt en doet wat jij wilt! 


Je kunt de simulator **aan/uit** zetten met de meest linkse **play/stop knop**.  
**Herstarten** doe je met het knopje rechts ernaast (de twee pijltjes).  
Met het kevertje kun je jouw code debuggen. *Deze optie zul je later pas gaan gebruiken. Je hoeft nog niet te snappen wat het doet en hoe het werkt.*  
Met het **luidsprekerknopje** kan je het **geluid aan/uit** zetten en met de knop daarnaast, met **het vierkantje**, kan je de simulator op **fullscreen** zetten. Als je de simlutor op fullscreen modus hebt staan, kan je dat weer weghalen door op diezelfde knop te drukken.  


Zie jij jouw leeftijd afgespeeld worden op de simulator?   
Als hij het doet, werkt jouw code goed en kan je door naar de volgende stap!  


*Werkt het niet? Kijk eens bij de hint van de vorige stap. Komt dit plaatje overeen met jouw code?*    
*Kom je er niet uit? Vraag dan iemand van de begeleiding om hulp.*


## Stap 7
We gaan nu jouw code op de echte micro:bit zetten.  
Stop de USB-kabel in de computer en de micro-USB kant in de micro:bit. Wacht nu zo'n 5 seconden, totdat naast de ``|Download|`` knop het ovaaltje met 2 stippen erin is verschenen. Nu kan je op ``|Download|`` klikken. Wacht totdat hij klaar is met downloaden.  
Zie jij jouw leeftijd afgespeeld worden op de micro:bit? 


Super gedaan! Jouw geschreven code wordt nu goed uitgevoerd door de micro:bit.  


*Werkt het niet? Vraag dan iemand van de begeleiding om hulp.*
![connected](https://raw.githubusercontent.com/Aletho-ICT-Dagbesteding/MakeCode-MicroBit-Tutorials/main/docs/static/trello/connect_2.png)

## Afsluiting
Gefeliciteerd! Je hebt zojuist jouw eerste programma voor de micro:bit gemaakt en uitgevoerd.  


Daarnaast snap je nu de basis van de MakeCode Editor. Je weet hoe je blokken kunt gebruiken en hoe de simulator werkt.  
Als je nu op ``|Finish|`` drukt sluit je deze tutorial af.  
Je zult je zien dat er dan meer categorieën in de blokkenlade te vinden zijn.  
Klik straks maar eens op een paar categorieën om te ontdekken wat erin zit!  

Veel plezier!

*Het zijn erg veel verschillende blokken. Waarschijnlijk heb je ook nog geen idee wat het allemaal doet.*  
*Dat is logisch en helemaal niet erg! In de loop van verschillende tutorials zul je steeds meer blokken ontdekken en leren gebruiken.*
