# lab-3-API i kursen Backend-baserad webbutveckling, DT207G

**Genomförd av joha2102**

Detta projekt är en del av Laboration 3 i kursen Backend-baserad webbutveckling.
Syftet är att skapa en REST-baserad webbtjänst som kan hantera data och kommunicera med en frontend-applikation. Del 2 av uppgiften är en frontend-applikation som finns här: https://github.com/JohannaHannahoJ/bbw-labb-3-frontend

Den här delen av uppgiften, API-delen är skapad med NodeJS, Express och CORS samt databasen i MongoDB.

## Om applikationen
Applikationen hanterar arbetserfarenheter och hanterar CRUD-operationer (Create, Read och Delete) mot en databas.

Applikatioen använder även validering: 
- Obligatoriska fält måste skickas med i POST
- När data saknas, visas ett felmeddelande
- Statuskoder används

## Databas
Projektet använder databasen MongoDB som körs via Mongoose.

API:t ansluter till en lokal MongoDB-instans: mongodb://localhost:27017/cv.
Databasen cv skapas automatiskt vid första inmatning av en arbetslivserfarenhet via API:et.

Arbetslivserfarenheterna lagras i collectionen "workexperiences". 

### Schema

Varje arbetserfarenhet innehåller följande fält:
- company_name (String, required)
- job_title (String, required)
- start_date (Date, required)
- end_date (Date, optional)
- description (String, optional)

### Testdata
Testdata kan läggas in via Thunder Client eller Bruno genom POST-anrop till: "/workexperiences".

## Installation

1. Klona repositoryt  
2. Installera dependencies:

```bash
npm install
```
3. Starta servern:
`npm start`

Servern körs på:
`http://localhost:3000`

## API Endpoints
| Metod | Ändpunkt            | Beskrivning                        |
|-------|-------------------- |------------------------------------|
| GET   | /workexperiences    | Hämtar alla arbetserfarenheter     |
| POST  | /workexperiences    | Lägger till en ny arbetserfarenhet |
| DELETE| /workexperiences/:id| Tar bort en arbetserfarenhet       |