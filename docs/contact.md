# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts 

Headers : 
- Authorization : token

Request Body : 

```json
{
  "first_name": "fikri",
  "last_name": "mubaroq",
  "email" : "fikrimubarok19@gmail.com",
  "phone" : "08886351120"
}
```
Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "fikri",
    "last_name": "mubaroq",
    "email" : "fikrimubarok19@gmail.com",
    "phone" : "08886351120"
  }
}
```
Response Body Error :
```json
{
  "erros": "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers : 
- Authorization : token

Request Body : 
```json
{
  "first_name": "Fikri",
  "last_name": "mubaroq",
  "email": "fikrimubarok19@gmail.com","phone": "08886351120"
}
```

Response Body Success :

```json
{
  "data": {
    "id":1,
    "first_name": "Fikri",
    "last_name": "mubaroq",
    "email": "fikrimubarok19@gmail.com",
    "phone": "08886351120"
  }
}
```
Response Body Error :
```json
{
  "erros": "Email is not valid format"
}
```
## Get Contact API

Endpoint : GET /api/contacts/:id

Headers : 
- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id":1,
    "first_name": "Fikri",
    "last_name": "mubaroq",
    "email": "fikrimubarok19@gmail.com",
    "phone": "08886351120"
  }
}
```

Response Body Error :
```json
{
  "errors": "contact is not found"
}
```

## Search Contact API

Endpoint : GET /api/contacts

Headers : 
- Authorization : token

Query params : 
- name : Search by first_name or last_name, using like, optional
- email : Search by email using like optional
- phone : Search by phone using like, optional
- page : number of page, default 1
- size : size per page, default 10

Request Body : 
```json
{
  "data": [
    {
      "id":1,
      "first_name": "Fikri",
      "last_name": "mubaroq",
      "email": "fikrimubarok19@gmail.com",
      "phone": "08886351120"
    },
    {
      "id":2,
      "first_name": "Andri",
      "last_name": "mubaroq",
      "email": "adnrimubaroq@gmail.com",
      "phone": "087732268236"
    }
  ],
  "paging": {
    "page": 1,
    "total_page": 3,
    "total_item": 30
  }
}
```

Response Body Success :

Response Body Error :

## Remove Contact API

Headers : 

Endpoint : DELETE /api/contacts/:id

- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "Contact is not found"
}
```
