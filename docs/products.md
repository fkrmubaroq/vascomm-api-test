# Products API Spec

## Get Products API

Endpoint : GET /api/products

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
      "product_name": "optio sub conforto",
      "image": "https://loremflickr.com/640/480?lock=5248824664653824",
      "price": 46235
    },1
    {
      "id": 2,
      "product_name": "optio voluptatem officiis",
      "image": "https://loremflickr.com/640/480?lock=422447062974464",
      "price": 839872
    }
  ]
}
```

## Insert Products API

Endpoint : POST /api/product

Request Body : 
```json
{
  "product_name": "optio voluptatem officiis",
  "image": "https://loremflickr.com/640/480?lock=422447062974464",
  "price": 839872
}
```

Response Body : 
```json
{
    "code": 201,
    "message": "successfully added",
    "data": {
        "is_active": "1",
        "id": 50,
        "product_name": "Kunpay YAKUN",
        "price": 101010,
        "image": "XXX"
    }
}
```

## Update Products API
Endpoint : PUT /api/product/:id

Request Body : 
```json
{
  "product_name": "optio voluptatem officiis", // optional
  "image": "https://loremflickr.com/640/480?lock=422447062974464", // optional
  "price": 839872 // optional
}
```

Response Body : 
```json
{
  "code": 200,
  "message": "successfully update",
  "data": {
      "id": 49,
      "product_name": "optio voluptatem officiis",
      "image": "https://loremflickr.com/640/480?lock=422447062974464",
      "price": 839872,
      "is_active": "1"
  }
}
```


## Soft Delete Products API
Endpoint : PATCH /api/product/soft-delete/:id

Response Body : 
```json
{
  "code": 200,
  "message": "successfully soft deleted",
  "data": {
      "id": 49,
      "product_name": "optio voluptatem officiis",
      "image": "https://loremflickr.com/640/480?lock=422447062974464",
      "price": 839872,
      "is_active": "1"
  }
}
```

## Restore Products API
Endpoint : PATCH /api/product/restore/:id

Response Body : 
```json
{
  "code": 200,
  "message": "successfully soft restored",
  "data": {
      "id": 49,
      "product_name": "optio voluptatem officiis",
      "image": "https://loremflickr.com/640/480?lock=422447062974464",
      "price": 839872,
      "is_active": "1"
  }
}
```


## Destroy Products API
Endpoint : DELETE /api/product/:id

Response Body : 
```json
{
  "code": 200,
  "message": "successfully soft deleted",
  "data": 1
}
```

