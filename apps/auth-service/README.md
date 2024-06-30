# Authorization Service

This service is responsible for managing the authorization of users. It provides the following features:

- User registration
- User login
- User logout
- User password reset


## API

### User Registration

#### Request

```http
POST /api/v1/auth/register
```

```json
{
  "email": "
    "password": "
}
```

#### Response

```json
{
  "id": 1,
  "email": "
}
```

### User Login

#### Request

```http
POST /api/v1/auth/login
```

```json
{
  "email": "
    "password": "
}
```

#### Response

```json
{
  "id": 1,
  "email": "
}
```

### User Logout

#### Request

```http
POST /api/v1/auth/logout
```

#### Response

```json
{
  "message": "User logged out successfully"
}
```

### User Password Reset

#### Request

```http

POST /api/v1/auth/reset-password
```

```json
{
  "email": "
}
```


#### Response

```json
{
  "message": "Password reset link sent to email"
}
```

## Development

### Installation

```bash
npm install
```