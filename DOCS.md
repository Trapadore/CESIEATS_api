# cesieats-api v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	- [Authenticate with Google](#authenticate-with-google)
	
- [Menus](#menus)
	- [Create menus](#create-menus)
	- [Delete menus](#delete-menus)
	- [Retrieve menus](#retrieve-menus)
	- [Retrieve menus by restaurant](#retrieve-menus-by-restaurant)
	- [Update menus](#update-menus)
	
- [Operations](#operations)
	- [Create operations](#create-operations)
	- [Delete operations](#delete-operations)
	- [Retrieve operations](#retrieve-operations)
	- [Update operations](#update-operations)
	
- [Products](#products)
	- [Create products](#create-products)
	- [Delete products](#delete-products)
	- [Retrieve products](#retrieve-products)
	- [Retrieve products by restaurant](#retrieve-products-by-restaurant)
	- [Update products](#update-products)
	
- [Restaurants](#restaurants)
	- [Create restaurants](#create-restaurants)
	- [Delete restaurants](#delete-restaurants)
	- [Retrieve restaurants](#retrieve-restaurants)
	- [Update restaurants](#update-restaurants)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

## Authenticate with Google



	POST /auth/google


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Google user accessToken.</p>							|

# Menus

## Create menus



	POST /menus


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| name			| 			|  <p>Menus's name.</p>							|
| price			| 			|  <p>Menus's price.</p>							|
| restaurantId			| 			|  <p>Menus's restaurantId.</p>							|
| products			| 			|  <p>Menus's products.</p>							|
| image			| 			|  <p>Menus's image.</p>							|

## Delete menus



	DELETE /menus/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve menus



	GET /menus


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Retrieve menus by restaurant



	GET /menus/byrestaurant/:restaurantId


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Update menus



	PUT /menus/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| name			| 			|  <p>Menus's name.</p>							|
| price			| 			|  <p>Menus's price.</p>							|
| restaurantId			| 			|  <p>Menus's restaurantId.</p>							|
| products			| 			|  <p>Menus's products.</p>							|
| image			| 			|  <p>Menus's image.</p>							|

# Operations

## Create operations



	POST /operations


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| userId			| 			|  <p>Operations's userId.</p>							|
| restaurantId			| 			|  <p>Operations's restaurantId.</p>							|
| delivererId			| 			|  <p>Operations's delivererId.</p>							|
| orderContent			| 			|  <p>Operations's orderContent.</p>							|
| orderState			| 			|  <p>Operations's orderState.</p>							|

## Delete operations



	DELETE /operations/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve operations



	GET /operations


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update operations



	PUT /operations/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| userId			| 			|  <p>Operations's userId.</p>							|
| restaurantId			| 			|  <p>Operations's restaurantId.</p>							|
| delivererId			| 			|  <p>Operations's delivererId.</p>							|
| orderContent			| 			|  <p>Operations's orderContent.</p>							|
| orderState			| 			|  <p>Operations's orderState.</p>							|
| createdAt			| 			|  <p>Operations's createdAt.</p>							|

# Products

## Create products



	POST /products


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| name			| 			|  <p>Products's name.</p>							|
| price			| 			|  <p>Products's price.</p>							|
| productType			| 			|  <p>Products's productType.</p>							|
| image			| 			|  <p>Products's image.</p>							|
| restaurantId			| 			|  <p>Products's restaurantId.</p>							|

## Delete products



	DELETE /products/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve products



	GET /products


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Retrieve products by restaurant



	GET /products/byrestaurants/:restaurantId


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Update products



	PUT /products/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| name			| 			|  <p>Products's name.</p>							|
| price			| 			|  <p>Products's price.</p>							|
| productType			| 			|  <p>Products's productType.</p>							|
| image			| 			|  <p>Products's image.</p>							|
| restaurantId			| 			|  <p>Products's restaurantId.</p>							|

# Restaurants

## Create restaurants



	POST /restaurants


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| name			| 			|  <p>Restaurants's name.</p>							|
| address			| 			|  <p>Restaurants's address.</p>							|
| image			| 			|  <p>Restaurants's image.</p>							|
| description			| 			|  <p>Restaurants's description.</p>							|

## Delete restaurants



	DELETE /restaurants/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve restaurants



	GET /restaurants


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update restaurants



	PUT /restaurants/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| name			| 			|  <p>Restaurants's name.</p>							|
| address			| 			|  <p>Restaurants's address.</p>							|
| image			| 			|  <p>Restaurants's image.</p>							|
| description			| 			|  <p>Restaurants's description.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's role.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


