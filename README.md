
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
