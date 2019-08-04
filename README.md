Do zrobienia:
    - logowanie:
        * dodanie możliwośc logowania zarówno mailem jak i nazwą użytkownika
    - rejestracja:
        * sprawdzanie na bieżąco czy email/nazwa użytkownika jest wolna
        * hasło musi spełaniać wymogi
    - zaprojektować sposób komunikacji z użytkownikiem o zmianie ceny
    - dodanie inversify
    - dodanie strony z ustawieniami
    - localStorage
        * GUID jako nazwa
        * chwilowo nie wiem jak automatycznie usuwać dane z localStorage
        * sprawdzanie czy token jest ważny przed autoryzowanym zapytaniem
    - serwer w przypadku braku połączenia z bazą danych nic nie zwraca
    - zmiana kursora podczas ładowania danych (do naprawy -> pointer nadpisuje progress)
    - ProductsList: 
        * zmiana daty dodania na datę ostatniej modyfikacji
        * dodanie linku to sklepu
        * poprawić sortowanie (nie obsługuje polskich znaków)
    - redux;
        * error message nie powienien zapisywać się w localStorage 