# Maqueen gaat rijden!

## Introductie @showdialog

In deze tutorial ga jij Maqueen laten rondrijden.  
Je gaat er zelfs voor zorgen dat die nergens tegenaan gaat botsen!

## Stap 1
In de werkruimte zie je weer de twee containerblokken 
``||basic:on start||`` en ``||basic:forever||`` staan. 
Klik nu in de **blokkenlade** op de categorie ``||maqueen:Maqueen||``. 
*In deze categorie staan de blokken die speciaal voor de Maqueen robot zijn.*
Sleep hieruit het blok ``||maqueen: motor ... move at speed ...||`` en 
plaats die in het ``||basic:on start||`` blok.

```blocks
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
```

## Stap 2
Als je Maqueen nu zou aanzetten zou die al gaan rijden, maar om te voorkomen dat die botst en kapot gaat, gaan je eerst programmeren
dat die kan stoppen.  
Daarvoor gaan je logica toevoegen aan je programma.  
Klik in de **blokkenlade** op de categorie ``||logic:Logic||``.
Sleep hieruit het blok ``||logic: if ... then||`` en plaats die in het ``||basic:on start||`` blok, onder het
blok ``||maqueen: motor ... move at speed ...||`` . 

```blocks
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
if (true) {
	
}
```