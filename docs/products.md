# Products API Spec

## GET Products API

Endpoint : GET /api/products

Query params :

- take : limit data (optional) default 20
- skip : offset data (optional) default 0
- search : Search by product_name using like (optional)

Response Body Success :

```json
{
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
