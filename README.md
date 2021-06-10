# BRO PAINT API

#### Skrypt uruchamiający serwer 
- npm run dev:server
#### Katalog z API 
- /server
#### Obsługa błędnego endpointu
- Błędny endpoint jest obsłużony w /controllers/commons.ts oraz w /routes/commons.ts
#### Oznaczenie Endpointu wymagającego zalogowania (token)
- :no_entry:

# Routy

## Routy dla awaitingOrders
##### Dodawanie nowego oczekującego zlecenia
- POST /awaiting-orders
##### Wyszukiwanie wszystkich oczekujących zleceń
- GET /awaiting-orders :no_entry:
##### Wyszukiwanie oczekującego zlecenia o podanym ID
- GET /awaiting-orders/awaitingOrderId :no_entry:
##### Aktualizacja oczekującego zlecenia o podanym ID
- PUT /awaiting-orders/awaitingOrderId :no_entry: 
##### Usuwanie oczekującego zlecenia o podanym ID
- DELETE /awaiting-orders/awaitingOrderId :no_entry:

## Routy dla employees
##### Dodawanie nowego pracownika
- POST /employees :no_entry:
##### Wyszukiwanie wszystkich pracowników
- GET /employees :no_entry:
##### Wyszukiwanie pracownika o podanym ID
- GET /employees/employeeId :no_entry:
##### Aktualizacja pracownika o podanym ID
- PUT /employees/employeeId :no_entry:
##### Usuwanie pracownika o podanym ID
- DELETE /employees/employeeId :no_entry:
##### Logowanie dla pracownika
- POST /employees/login

## Routy dla positions
##### Dodawanie nowego stanowiska
- POST /positions :no_entry:
##### Wyszukiwanie wszystkich stanowisk
- GET /positions :no_entry:
##### Wyszukiwanie stanowiska o podanym ID
- GET /positions/positionId :no_entry:
##### Aktualizacja stanowiska o podanym ID
- PUT /positions/positionId :no_entry:
##### Usuwanie stanowiska o podanym ID
- DELETE /positions/positionId :no_entry:

## Routy dla services
##### Dodawanie nowej usługi
- POST /services :no_entry:
##### Wyszukiwanie wszystkich usług
- GET /services
##### Wyszukiwanie usługi o podanym ID
- GET /services/serviceId
##### Aktualizacja usługi o podanym ID
- PUT /services/serviceId :no_entry:
##### Usuwanie usługi o podanym ID
- DELETE /services/serviceId :no_entry:

# Dane do sprawdzania JSON
##### Logowanie
    {
    "login": {
        "nickName": "michalmalarz",
        "password": "okon123"
      }
    }
#### Autoryzacja
    Authorization => Bearer Token
##### Dodawanie/Modyfikacja* awaitingOrders
###### *( awaitingOrderId = 60be2d2d42d8223a48689092 )

    {
      "customerInfo": {
          "firstName": "Michał",
          "lastName": "Jeleń",
          "email": "michal.j@gmail.com",
          "telephone": "000000000"
      },
      "carInfo": {
          "productionYear": "1999",
          "model": "A6",
          "licensePlate": "XXX00XX",
          "paintCode": "LZ6H"
      },
      "orderInfo": {
          "serviceType": "60b51c927aad1a388c44f73d",
          "comments": "Uszkodzona maska i prawy błotnik"
      }
    }
##### Dodawanie/Modyfikacja* employees
###### *( employeeId = 60be2ec142d8223a48689094 ) 
    {
      "login": {
          "nickName": "sebastianblacharz",
          "password": "blacha2021"
        },
        "employeeInfo": {
          "firstName": "Sebastian",
          "lastName": "Andryszak",
          "position": "60be2f4442d8223a48689095",
          "telephone": "000000000",
          "email": "sandr@gmail.com",
          "pesel": "99999907876",
          "birthDate": "01022001",
          "accountNumber": "00000000000000000000",
          "address": {
            "street": "zielona",
            "apartment": "61",
            "city": "pieniezno",
            "postalCode": "21270"
          }
        }
    }
##### Dodawanie/Modyfikacja* positions
###### *( positionId = 60be31bb42d8223a48689097 )
    {
      "name": "Detailer"
    }
##### Dodawanie/Modyfikacja* services
###### *( serviceId = 60be308a42d8223a48689096 )
    {
      "name": "sprzątanie"
    }
