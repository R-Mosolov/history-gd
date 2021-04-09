# History GD API

## Manuscripts Page

| #   | Method |   Endpoint   |     Query      |           Body           |        Role         |
| --- | :----: | :----------: | :------------: | :----------------------: | :-----------------: |
| 1   |  GET   | /manuscripts |   collection   |            –             | Get all manuscripts |
| 3   |  GET   | /manuscripts |       –        |            –             |  Get a manuscript   |
| 2   |  POST  | /manuscripts |   collection   | A manuscript meta info\* |  Post a manuscript  |
| 4   | UPDATE | /manuscripts | collection, id |      title, author       | Update a manuscript |
| 5   | DELETE | /manuscripts | collection, id |            –             | Delete a manuscript |

- A manuscript meta info may contains: userId, manuscriptId, title, author, creationDate, type.

## Auth Process

| #   | Method |        Endpoint        | Query |        Body         |           Role           |
| --- | :----: | :--------------------: | :---: | :-----------------: | :----------------------: |
| 1   |  POST  | /users/reset-password  |   –   |        email        | Reset an user's password |
| 2   |  POST  |   /users/check-auth    |   –   |   email, password   |   Authenticate an user   |
| 3   |  POST  |    /users/main-info    |   –   |   email, password   |   Authenticate an user   |
| 4   |  POST  | /users/additional-info |   –   | An user full info\* |   Authenticate an user   |

...

- An user full info may contains: lastName, firstName, middleName, academicDegree, profDegree, researchInterests, university.

## Cases When Should Be Used Authentication Process

Before accessing the following cases, we need to check an user:

1.1. [Manuscripts] reading a manuscript's meta information (going on Manuscripts page);

1.2. [Manuscripts] reading a manuscript's full information (going on Full Manuscript page);

1.3. [Manuscripts] adding a new manuscript;

1.4. [Manuscripts] updating an manuscript;

1.5. [Manuscripts] deleting a manuscript;

2.1-2.5. [Dairy] all CRUD operations with an user diaries;

3.1-3.5. [Scientific Notes] all CRUD operations with an user scientific notes.

The maximum value of authentication token (special unique key of an user
session) duration is **8 hours**. If an user (mostly, a scientist) go on
the web application when he work, this value will be actual for an work
8-hours day.

If after 8 hours the system sees that an user settlement on Add Manuscript
page, the system should be save scientific works in Local Storage of a browser
to minimize probability of scientific heritage's lost.
