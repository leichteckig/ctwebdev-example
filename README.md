# <c't webdev>-example

## End-to-end Testing wie es sein sollte

![image](https://user-images.githubusercontent.com/29896429/144920466-20571efc-de13-4ba0-b25a-184ee32c8bbb.png)

Wenn es um UI-Tests in der Webentwicklung geht, sind manche Entwickler sehr zurückhaltend. Sind diese Tests langsam, unzuverlässig, schwer zu schreiben und zu unterhalten? 

Cypress.io (oder kurz Cypress) bekommt derzeit eine Menge Aufmerksamkeit, wenn es um End-to-End-Tests geht. Besonders in JavaScript-Umgebungen scheint sich Cypress.io langsam durchzusetzen. Es macht viele Dinge richtig und ist meiner Meinung nach Selenium-basierten Ansätzen vorzuziehen. In meiner Session möchte ich Cypress vorstellen und seine Möglichkeiten erforschen.

## Slides
Die Slides findet ihr [hier](https://speakerdeck.com/leichteckig/end-to-end-testing-wie-es-sein-sollte).

## Plugins, die ich verwende
* [E2E Platform Testsuite](https://github.com/shopware/e2e-testsuite-platform) for Shopware 6: Wie der NAme sagt, sehr auf Shopware bezogen
* [cypress-dark](https://github.com/bahmutov/cypress-dark), weil es ist ein Dark Mode.
* [Eslint](https://github.com/cypress-io/eslint-plugin-cypress) für Cypress
* [cypress-grep](https://github.com/cypress-io/cypress-grep) fürs Tagging von Tests
* [cypress-file-upload](https://github.com/abramenal/cypress-file-upload), um einen nativen File Upload zu unterstützen
* Visual Testing: [Visual Regression Tracker](https://github.com/Visual-Regression-Tracker/agent-cypress) für ein Open Source Tool oder [Percy](https://docs.percy.io/docs/cypress)

Weitere Plugins (von Cypress reviewed) könnt ihr [hier](https://docs.cypress.io/plugins/directory) finden. 
