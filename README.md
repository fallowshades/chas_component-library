# Skapa ett komponent-bibliotek

I dagens uppgift ska ni få öva på att skapa komponenter som är gjorda för att återanvändas.

### Sätt upp projektet

1. Öppna en terminal och gå med `cd` där du vill skapa projektet.
2. Skriv `npm create vite@latest component-library -- --template react`.
3. Gå in i projektet: `cd component-library`.
4. Installera dependencies: `npm install`.
5. Om ni vill använda tailwind: Följ guiden från steg 2. [Install Tailwind](https://tailwindcss.com/docs/guides/vite)

## Hur du klarar uppgiften

Skapa alla komponenter nedan och presentera dom i App.jsx. Varje komponent ska
presenteras med en rubrik och hur den ser ut med olika props. Obligatoriska props listas
för varje komponent, men ni får gärna skapa flera props. Ta inspiration från länkarna
på varje komponent.

### Förkunskaper

Läs på fram till och med "Passing Props to a Component" på [react.dev](https://react.dev/learn) under sektionen "Describing the ui"

1. [Buttons](https://flowbite-react.com/buttons)
   Obligatoriska Props: size, color, disabled

1. [Alerts](https://flowbite-react.com/alerts)
   Obligatoriska Props: color, icon

1. [Badges](https://flowbite-react.com/badges)
   Obligatoriska Props: color, size, icon

   Använd ikoner från [React Icons](https://react-icons.github.io/react-icons/)

1. [Card](https://www.flowbite-react.com/docs/components/card#card-with-image)
   Obligatoriska Props: href, imgAlt, imgSrc, children

### :runner: Extrauppgifter

[Modal](https://flowbite-react.com/modal)
Obligatoriska Props: show, onClose, size, children
Obligatoriska komponenter: Modal, Modal.Header, Modal.Body, Modal.Footer

För att få till show och close behöver ni använda useState. Se koden länkad för Modal. Om show är falskt kan ni göra en "Early return" i Modal-komponenten. Vilket betyder att ni gör `return null` innan html-koden returneras.

För att ge punktnotation till komponenterna som är children av Modal så kan ni göra så här:

```
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
export default Modal;
```

## Hur du lämnar in

1. Skapa ett repo på github.
2. Ladd up dina filer till github:

```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <Adressen till ditt repo>
git push -u origin main
```

3. Klicka på uppgiften i canvas och ange länken till ditt repo.

---

### :boom: Success!

Efter denna uppgift ska ni kunna skapa återanvändbara komponenter i React.

---
