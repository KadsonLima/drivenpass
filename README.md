
## Install

    npm install

## Run the app

    npm start or npm run dev

# Driven Pass API 


### SignUp

```http
POST /sign-up
```

#### Request:


| Body               | Type       | Description                       |
| :------------------| :--------- | :---------------------------------|
| `name`             | `string`   | **Required**.    name             |
| `email`            | `string`   | **Required**.    email            |
| `password`         | `string`   | **Required**.    password         |
| `confirm_password` | `string`   | **Required**.    confirm_password |



</br>

#### Response:

```
	Status:201 Created

```

### SignIn

```http
GET /sign-in
```

#### Request:

| Body   	         | Type       | Description                     |
|:-----------------|:-----------|:--------------------------------|
| `email`          | `string`   | **Required**.    email          |
| `password`       | `string`   | **Required**.    password       |

</br>

#### Response:

```json
	Status:200
{
  "token": ""
}
```
### Authorization

| Headers         | Type     | Description               |
| :-------------- | :------- | :------------------------ |
| `Authorization` | `string` | **Required**. valid token |

`Authorization format: Bearer jsonwebtoken`

**All following routes request authorization header**

<br/>

### Create Credential

```http
POST /credential/
```

#### Request:

| Body   	         | Type       | Description                     |
|:-----------------|:-----------|:--------------------------------|
| `userName`       | `string`   | **Required**.    userName       |
| `password`       | `string`   | **Required**.    password 	    |
| `title`          | `string`   | **Required**.    title          |
| `name`           | `string`   | **Required**.    name           |
| `label`          | `string`   | **Required**.    label          |
| `url`            | `string`   | **Required**.    url            |

</br>

#### Response:

```json
{	
  "id": ,
  "url": "",
  "userName": "",
  "password": "",
  "title": "",
  "name": "",
  "label": "",
  "userId": 

}
```

### Find All Credential

```http
GET /credential/
```


</br>

#### Response:

```json
[
  {
    "id": 1,
    "url": "",
    "userName": "",
    "password": "",
    "title": "",
    "name": "",
    "label": "",
    "userId": 4
  },
  {
    "id": 2,
    "url": "",
    "userName": "",
    "password": "",
    "title": "",
    "name": "",
    "label": "",
    "userId": 4
  }
]
```


#### Get a credential by identifier

```http
GET /credential/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
{
    "id": 2,
    "url": "",
    "userName": "",
    "password": "",
    "title": "",
    "name": "",
    "label": "",
    "userId": 4
  }
```

#

#### Delete a credential by identifier

```http
DELETE /credential/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

### Create Notes

```http
POST /notes/
```

#### Request:

| Body   	         | Type       | Description                     |
|:-----------------|:-----------|:--------------------------------|
| `title`          | `string`   | **Required**.    title          |
| `content`        | `string`   | **Required**.    content        |

</br>

#### Response:

```json
{	
  "id": ,
  "title": "",
  "content": "",
  "createdAt": "",
  "userId": ""
}
```

### Find All Notes

```http
GET /notes/
```


</br>

#### Response:

```json
[
   {  
    "id": ,
    "title": "",
    "content": "",
    "createdAt": "",
    "userId": ""
  },
    { 
    "id": ,
    "title": "",
    "content": "",
    "createdAt": "",
    "userId": ""
  }
]
```


#### Get a Note by identifier

```http
GET /notes/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
  { 
    "id": ,
    "title": "",
    "content": "",
    "createdAt": "",
    "userId": ""
  }
```

#

#### Delete a Note by identifier

```http
DELETE /notes/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>


### Create Wifi

```http
POST /wifi/
```

#### Request:

| Body             | Type       | Description                     |
|:-----------------|:-----------|:--------------------------------|
| `title`          | `string`   | **Required**.    title          |
| `name`           | `string`   | **Required**.    name           |
| `password`       | `string`   | **Required**.    password       |

</br>

#### Response:

```json
{ 
 "id": ,
  "title": "",
  "name": "",
  "password": "",
  "createdAt": "",
  "userId": 
}
```

### Find All wifi

```http
GET /wifi/
```


</br>

#### Response:

```json
[
   {  
    "id": ,
    "title": "",
    "name": "",
    "password": "",
    "createdAt": "",
    "userId": ""
  },
    { 
    "id": ,
    "title": "",
    "name": "",
    "password": "",
    "createdAt": "",
    "userId": ""
  }
]
```


#### Get a Wifi by identifier

```http
GET /wifi/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
  {  
    "id": ,
    "title": "",
    "name": "",
    "password": "",
    "createdAt": "",
    "userId": ""
  }
```

#

#### Delete a Wifi by identifier

```http
DELETE /wifi/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>


### Create Card

```http
POST /card/
```

#### Request:

| Body             | Type       | Description                     |
|:-----------------|:-----------|:--------------------------------|
| `number`         | `string`   | **Required**.    number         |
| `holderName`     | `string`   | **Required**.    holderName     |
| `title`          | `string`   | **Required**.    title          |
| `password`       | `string`   | **Required**.    password       |
| `cvv`            | `string`   | **Required**.    cvv            |
| `expiryDate`     | `date`     | **Required**.    expiryDate     |
| `isVirtual`      | `boolean`  | **Required**.    isVirtual      |
| `type`           | `type`     | **Required**.    type           |


type : [credit, debit, credit_debit]
</br>

#### Response:

```json
{
  "id": ,
  "title": "",
  "number": "",
  "holderName": "",
  "cvv": "",
  "expiryDate": "",
  "password": "",
  "isVirtual": true,
  "type": "credit",
  "createdAt": "2022-09-12T20:48:12.992Z",
  "userId": 4
}
```

### Find All Card

```http
GET /card/
```


</br>

#### Response:

```json
[
   {
  "id": ,
  "title": "",
  "number": "",
  "holderName": "",
  "cvv": "",
  "expiryDate": "",
  "password": "",
  "isVirtual": true,
  "type": "credit",
  "createdAt": "2022-09-12T20:48:12.992Z",
  "userId": 4
},
    {
  "id": ,
  "title": "",
  "number": "",
  "holderName": "",
  "cvv": "",
  "expiryDate": "",
  "password": "",
  "isVirtual": true,
  "type": "credit",
  "createdAt": "2022-09-12T20:48:12.992Z",
  "userId": 4
}
]
```


#### Get a Card by identifier

```http
GET /card/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
 {
  "id": ,
  "title": "",
  "number": "",
  "holderName": "",
  "cvv": "",
  "expiryDate": "",
  "password": "",
  "isVirtual": true,
  "type": "credit",
  "createdAt": "2022-09-12T20:48:12.992Z",
  "userId": 4
}
```

#

#### Delete a Card by identifier

```http
DELETE /card/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>
