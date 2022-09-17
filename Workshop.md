### Projekt kantorek
1. Zrób `input` typu number, 2 x `select` na opcje wyboru walut, przycisk z napisem (np. oblicz/romień) i paragraf 
   na wynik. Nadaj im ID po 
   którym łatwo będzie je znaleźć i 
   odróżnić.
2. Za pomocą selektorów dodaj je jako zmienne w `index.js`
3. Dodaj obiekt o nazwie currencies i dodaj klucze (na początek mogą być 2) z wartością waluty w PLN. Klucze powinny 
   mieć nazwę małymi literami typu `pln: 1`
4. Dodaj opcje do elementu `select` tak żęby jego value pokrywało się z kluczami z obiektu currencies
5. Napisz funkcję która będzie pobierać wartości z inputów i przeliczać walutę
6. Wynik z funkcji powinien być umieszczany w paragrafie za pomocą `element.innerText`
7. Dodaj funkcję na `click` do przycisku
8. Można zająć się stylowaniem, efekt końcowy powinien wyglądać jak w pliku `FinishedProject.png`

Bonus: jeżeli starczy czasu będziemy pobierać JSON'a z https://github.com/fawazahmed0/currency-api
i na podstawie tego przeliczać waluty
