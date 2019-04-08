# Clarify API

_Allows a user to search through a selection of Spotify's Kaggle Dataset and return suggested songs based on prebuilt DS model._

https://bw-spotify-backend.herokuapp.com/

#### Deployed

https://bw-spotify.netlify.com/

#### Project Management

[Trello](https://trello.com/b/fJ6ZMDlS/spotify-clone)

## Table of Contents

- [Clarify API](#clarifyapi)
  - [API - https://bw-spotify-backend.herokuapp.com/](#api--httpsyelpfeelersherokuappcom)
  - [Project Management](#project-management)
  - [Summary Table of API Endpoints](#summary-table-of-api-endpoints)
    - [Auth](#auth)
    - [Users](#users)
    - [Songs](#songs)
    - [Faves](#faves)
  - [Dependencies](#dependencies)
  - [Author](#author)

## Summary Table of API Endpoints

| Type   | Endpoints          | Description                                                                     |
| ------ | ------------------ | ------------------------------------------------------------------------------- |
| POST   | /api/login         | Login                                                                           |
| POST   | /api/register      | Register                                                                        |
| GET    | /api/users         | get all users                                                                   |
| GET    | /api/users/:id     | get user by id                                                                  |
| GET    | /api/songs?        | get a list songs using pagination or a single song by id (with suggested songs) |
| GET    | /api/songs/search? | search songs by query string                                                    |
| GET    | /api/faves         | add business to your bookmarks                                                  |
| POST   | /api/faves         | add a favorite song to current user                                             |
| DELETE | /api/faves         | remove a favorite song from current user                                        |

# _Auth_

## Register

_URL: /api/register_

**Schema:**

| name     | type   | required | description       |
| :------- | :----- | :------- | :---------------- |
| username | string | yes      | username (unique) |
| password | string | yes      | password          |

_Example_

```javascript
{
  "username": "test2",
  "password": "test"
}
```

## Login

_URL: /api/login_

**Schema:**

| name     | type   | required | description       |
| :------- | :----- | :------- | :---------------- |
| username | string | yes      | username (unique) |
| password | string | yes      | password          |

_Example_

```javascript
{
  "username": "test2",
  "password": "test"
}
```

# _Users_

## All Users

_[GET] URL: /api/users_

_Reponses_

```javascript
[
  {
    id: 1,
    username: "max",
    created_at: "2019-03-12 19:39:15",
    updated_at: "2019-03-12 19:39:15"
  },
  {
    id: 2,
    username: "jim",
    created_at: "2019-03-12 19:39:15",
    updated_at: "2019-03-12 19:39:15"
  }
];
```

## User By ID

_[GET] URL: /api/users/:id_

_Reponses_

```javascript
[
  {
    id: 1,
    username: "max",
    created_at: "2019-03-12 19:39:15",
    updated_at: "2019-03-12 19:39:15"
  }
];
```

# _Songs_

## Get All Songs

_[GET] URL: /api/songs (with pagination, and sorting)_

_Example_

```
/songs?page=1&limit=10sortby=artist_name&sortdir=desc
```

_Responses_

```javascript
[
  {
    id: 1,
    username: "max",
    created_at: "2019-03-12 19:39:15",
    updated_at: "2019-03-12 19:39:15"
  },
  {
    id: 2,
    username: "jim",
    created_at: "2019-03-12 19:39:15",
    updated_at: "2019-03-12 19:39:15"
  }
];
```

## Get Song By ID

_[GET] URL: /api/songs (includes 10 predicted songs)_

_Example_

```
/songs?id=5RkS8NsjKoSCh5jpctvEdT
```

_Responses_

```javascript
[
  {
    artist_name: "ｊａｒｊａｒｊｒ",
    id: "5RkS8NsjKoSCh5jpctvEdT",
    track_name: "Manhattan Warmonger",
    acousticness: 0.62,
    danceability: 0.7829999999999999,
    duration_ms: 102312,
    energy: 0.621,
    instrumentalness: 0.158,
    key: 4,
    liveness: 0.099,
    loudness: -5.003,
    mode: 1,
    speechiness: 0.245,
    tempo: 84.552,
    time_signature: 4,
    valence: 0.7979999999999999,
    popularity: 19,
    similars: [
      {
        artist_name: "Atmosphere",
        track_name: "Ha, This One Is About Alcohol Too",
        id: "7esaplJKY1ots6MAAlQxkA"
      },
      {
        artist_name: "Baby Bash",
        track_name: "If It Ain't Playamade",
        id: "7u2ZvmASYpnQpFcPFkYS5q"
      }
    ]
  }
];
```

## Search Songs

_[GET] URL: /api/songs/search (with pagination, and sorting)_

_Example_

```
songs/search?q="Game"
```

_Responses_

```javascript
[
  {
    artist_name: "sumishii",
    id: "0Uy1eIL59ayYyIdmSRekeQ",
    track_name: "Game Over",
    acousticness: 0.41600000000000004,
    danceability: 0.501,
    duration_ms: 123758,
    energy: 0.48200000000000004,
    instrumentalness: 0.878,
    key: 6,
    liveness: 0.11,
    loudness: -5.7829999999999995,
    mode: 0,
    speechiness: 0.132,
    tempo: 174.771,
    time_signature: 4,
    valence: 0.525,
    popularity: 0
  }
];
```

# _Faves_

## Get All User's Faves

_[GET] URL: /api/faves (uses logged in users token)_

_Responses_

```javascript
[
  {
    id: "5yWrzJklf4DhscRKSZk4Vj",
    artist_name: "p0gman",
    track_name: "Drop That"
  }
];
```

## Add Fave

_[POST] URL: /api/faves (uses logged in users token)_

**Schema:**

| name   | type   | required | description    |
| :----- | :----- | :------- | :------------- |
| songId | string | yes      | song id string |

_Example_

```javascript
{
	"songId": "5yWrzJklf4DhscRKSZk4Vj"
}
```

_Responses_

```javascript
[
  {
    id: "5RkS8NsjKoSCh5jpctvEdT",
    artist_name: "ｊａｒｊａｒｊｒ",
    track_name: "Manhattan Warmonger"
  },
  {
    id: "5yWrzJklf4DhscRKSZk4Vj",
    artist_name: "p0gman",
    track_name: "Drop That"
  }
];
```

## Delete Fave

_[DELETE] URL: /api/faves (uses logged in users token)_

**Schema:**

| name   | type   | required | description    |
| :----- | :----- | :------- | :------------- |
| songId | string | yes      | song id string |

_Example_

```javascript
{
	"songId": "5RkS8NsjKoSCh5jpctvEdT"
}
```

_Responses_

_(only a 204)_

## Dependencies

```javascript
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^6.2.0",
    "express": "^4.16.4",
    "helmet": "^3.16.0",
    "jsonwebtoken": "^8.5.0",
    "knex": "^0.16.3",
    "lodash": "^4.17.11",
    "morgan": "^1.9.1",
    "pg": "^7.8.2",
    "sqlite3": "^4.0.6"
  },
  "devDependencies": {
    "cross-env": "^5.2.0",
    "jest": "^24.4.0",
    "knex-cleaner": "^1.1.4",
    "nodemon": "^1.18.10",
    "supertest": "^4.0.0"
  }
```

### Author

-Max McFerren
