# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body : 

```json
  {
    "username" : "fikri",
    "password" : "pa",
    "name" : "fikri Mubaroq"
  }
```

Response Body Success : 

```json
{
  "data": {
    "username": "fikri",
    "name": "fikri Mubaroq"
  },
  "errors": "message"
}
```

Response Body Error : 

```json
{
  "errors" : "username already registered"
}
```

## Login User API

Endpoint : POST/api/users/login

Request Body :

```json
  {
    "username": "fikri",
    "password": "123"
  }
```

Response body Success: 

```json
  {
   "data":{
    "token": "unique-token"
   } 
  }
```

Response body Error : 
```json
{
  "errors" : "username or password wrong"
}
```

## Update User API
Endpoint : PATCH /api/users/current

Headers :
- Authorization : token

Request Body :
```json
{
  "name" : "fikri husni mubaroq",
  "password" : "new password"
}
```

Response Body Success : 
```json
{
  "data" : {
    "username" : "fikri",
    "name" : "fikri husni mubaroq"
  }
}

Response Body Error : 
```json
  {
    "errors" : "Name length max 100"
  }
```
## Get User API

Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body Success : 
```json
{
  "data": {
    "username" : "fikri",
    "name" : "fikri husni mubaroq"
  }
}
```

Response Body Error : 
```json
{
  "errors" : "Unauthorize"
}
```


## Logout User API

Endpoint : DELETE /api/users/logout

Headers :
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
 "erros" : "Unauthorize" 
}
```