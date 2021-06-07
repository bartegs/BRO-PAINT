# BRO PAINT API

#### Skrypt uruchamiający serwer 
- npm run dev:server
#### Katalog z API 
- /server
#### Obsługa błędnego endpointu
- Błędny endpoint jest obsłużony w /controllers/commons.ts oraz w /routes/commons.ts


## Routy dla awaitingOrders
##### Dodawanie nowego oczekującego zlecenia
- POST /awaiting-orders
##### Wyszukiwanie wszystkich oczekujących zleceń
- GET /awaiting-orders
##### Wyszukiwanie oczekującego zlecenia o podanym ID
- GET /awaiting-orders/awaitingOrderId
##### Aktualizacja oczekującego zlecenia o podanym ID
- PUT /awaiting-orders/awaitingOrderId
##### Usuwanie oczekującego zlecenia o podanym ID
- DELETE /awaiting-orders/awaitingOrderId

## Routy dla employees
##### Dodawanie nowego pracownika
- POST /employees
##### Wyszukiwanie wszystkich pracowników
- GET /employees
##### Wyszukiwanie pracownika o podanym ID
- GET /employees/employeeId
##### Aktualizacja pracownika o podanym ID
- PUT /employees/employeeId
##### Usuwanie pracownika o podanym ID
- DELETE /employees/employeeId
##### Logowanie dla pracownika
- POST /employees/login

## Routy dla positions
##### Dodawanie nowego stanowiska
- POST /positions
##### Wyszukiwanie wszystkich stanowisk
- GET /positions
##### Wyszukiwanie stanowiska o podanym ID
- GET /positions/positionId
##### Aktualizacja stanowiska o podanym ID
- PUT /positions/positionId
##### Usuwanie stanowiska o podanym ID
- DELETE /positions/positionId

## Routy dla services
##### Dodawanie nowej usługi
- POST /services
##### Wyszukiwanie wszystkich usług
- GET /services
##### Wyszukiwanie usługi o podanym ID
- GET /services/serviceId
##### Aktualizacja usługi o podanym ID
- PUT /services/serviceId
##### Usuwanie usługi o podanym ID
- DELETE /services/serviceId


