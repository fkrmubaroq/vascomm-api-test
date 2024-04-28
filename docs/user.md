# User API Spec

## Get User API

Endpoint : GET /api/user

Query params :

- take : limit data (optional) default 20
- skip : offset data (optional) default 0
- search : Search by product_name using like (optional)

Response Body Success :

```json
{
  "code": 200,
  "message": "ok",
  "data": [
    {
      "id": 1,
      "email_telp": "1-847-478-2653",
      "role": "USR",
      "is_active": "1"
    },
    {
      "id": 2,
      "email_telp": "Julianne_Hirthe@yahoo.com",
      "role": "USR",
      "is_active": "1"
    }
  ]
}
```

## Create User API

Endpoint : POST /api/user

Request Body :

```json
{
  "email_telp": "fkrmubaroq@gmail.com",
  "password": "123",
  "role": "USR" // optional
}
```

Response Body :

```json
{
  "code": 201,
  "message": "successfully added",
  "data": {
    "id": 61,
    "is_active": "1",
    "email_telp": "fkrmubaroq@gmail.com",
    "password": "123",
    "role": "USR"
  }
}
```

Response Error : 

```json
{
  "code": 400,
  "errors": "email or phone already exist"
}
```

## Update User API

Endpoint : PUT /api/user/:id

Request Body :

```json
{
  "email_telp": "fkrmubaroq@gmail.com", // optional
  "password": "12345", // optional
  "role": "USR" // optional
}
```

Response Body :

```json
{
  "code": 200,
  "message": "successfully update",
  "data": {
    "id": 49,
    "email_telp": "fkrmubaroq@gmail.com",
    "password": "12345",
    "role": "USR",
    "is_active": "1"
  }
}
```

Response Error : 

```json
{
  "code": 400,
  "errors": "email or phone already exist"
}

## Soft Delete User API

Endpoint : PATCH /api/user/soft-delete/:id

Response Body :

```json
{
  "code": 200,
  "message": "successfully soft deleted",
  "data": {
    "id": 49,
    "email_telp": "fkrmubaroq@gmail.com",
    "password": "123",
    "role": "USR",
    "is_active": "1"
  }
}
```

## Restore User API

Endpoint : PATCH /api/user/restore/:id

Response Body :

```json
{
  "code": 200,
  "message": "successfully soft restored",
  "data": {
    "id": 49,
    "email_telp": "fkrmubaroq@gmail.com",
    "password": "123",
    "role": "USR",
    "is_active": "1"
  }
}
```

## Destroy User API

Endpoint : DELETE /api/user/:id

Response Body :

```json
{
  "code": 200,
  "message": "successfully soft deleted",
  "data": 1
}
```
