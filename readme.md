# Readme: Präsentation CSS Präprozessoren DHBW 2021

###### Autor: Gloria Tamakloe und Julian Fleischmann

## Beschreibung

In diesem Ordner finden Sie die Präsentation zu CSS Präprozessoren 2021.<br>
Die Ordnerstruktur basiert auf einem eigenen Framework von Julian Fleischmann und orientiert sich dabei an dem häufig verwendeten Shopsystem Shopware (5). Diese ist nachfolgend aufgelistet.


### Diese ist hier wiefolgt aufgebaut (Ordnerstruktur)

* Die Datenstruktur teilt sich auf die folgenden Ordner auf:
    * die Website-Struktur mit **Index-Datei** befindet sich in ```frontend/index/index.html```
    * die Styles und Scripte unterteilen sich dabei in ````src```` und ````vendors````
        * Ordner ````src```` beinhaltet alle selbst erstellten und abgeleiteten Objekte 
            * unter ```frontend/_public/src/css/*``` befinden sich die Stylesheets
            * unter ```frontend/_public/src/img/*``` befinden sich die die Bilder
            * unter ```frontend/_public/src/js/*``` befinden sich die ergänzende Scripte
        
        * Ordner ````vendors```` beinhaltet alle **externen** und **gelieferten Skripte,** Schriften von denen abgeleitet wird
            * ````Bootstrap```` in Version 5, alle Styles Zusammengefasst in der **bootstrap.css** --> dient der Übersichtlichkeit
            * ````fonts```` alle Fonts werden zusammengefasst in der **fonts.css** --> dient der Übersichtlichkeit
            
### Vorteile und Gründe dieser Struktur // Warum wurde sich dafür entschieden?

Es wurde sich explizit für diese Ordnerstruktur entschieden um Struktur, Styles und externe Skripte klar zu trennen.
Durch das Vererbungsprinzip von CSS 3 werden die Skripte in einer Reihenvolge geladen, die es ermöglicht jederzeit **updatefähig** zu sein. 
So ist es jederzeit möglich Bootstrap upzudaten, ohne, dass die custom-Styles davon betroffen sind.


### Vererbung in diesem Projekt
1. Externe Skripte (Vendors)
2. Eigene Skripte (src), vererbt von 1. Externe Skripte
     
## Verwendete Hardware, Software

### Hardware-Übersicht
 
    Modellname: MacBook Pro
    Modell-Identifizierung: MacBookPro15,1
    Prozessortyp: Intel Core i7
    Prozessorgeschwindigkeit: 2,2 GHz
    Anzahl der Prozessoren: 1
    Gesamtanzahl der Kerne: 6
    Speicher: 16 GB
    
### Software-Übersicht

* Entwickelt wurde mit der Software PhpStorm


    PhpStorm 2021.2.3
    Build #PS-212.5457.49, built on October 13, 2021
    Licensed to Julian Fleischmann
    Subscription is active until September 21, 2022.
    For educational use only.
    Runtime version: 11.0.12+7-b1504.40 x86_64
    VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o.
    macOS 12.0.1
    
* Getestet wurde auf dem folgenden Browser: Mozilla Firefox Version 93.0 (64-Bit)

    
## Externe Bibliotheken

* Bootstrap 5.x mit JQuery Paket: https://getbootstrap.com/


## Warum wurde sich für eine Bibliothek entschieden?

* CSS-Styles auf alle gängigen Browser von vornherein geprüft und optimiert
* deutlich schnellere Ergebnisse erzielbar
* Responsivität bereits integriert


## Weitere Quellen

* Grundgerüst HTML: https://wiki.selfhtml.org/wiki/HTML/Tutorials/HTML5/
* Bootstrap: https://getbootstrap.com/
* Fontawesome: https://fontawesome.com/
* Framework (Derzeit nichtöffentlich): https://github.com/Julianfleischmann/FinalExam
