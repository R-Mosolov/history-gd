# Table of Contents

- [Table of Contents](#table-of-contents)
- [About the SPA](#about-the-spa)
- [The Test Access for Guests](#the-test-access-for-guests)
- [The Prerequisites of Creation](#the-prerequisites-of-creation)
- [The Current GUI](#the-current-gui)
- [The List of Planned SPA Functionality](#the-list-of-planned-spa-functionality)
- [The List of Planned Technological Stack](#the-list-of-planned-technological-stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [The Instructions](#the-instructions)
  - [How to Run the SPA](#how-to-run-the-spa)
  - [How to Check Code Style](#how-to-check-code-style)
- [The Project Technical Task](#the-project-technical-task)
- [History GD API](#history-gd-api)
  - [Manuscripts Page](#manuscripts-page)
  - [Auth Process](#auth-process)

# About the SPA

**«History of Genius Discovery»** (shortly _«History GD»_) is the scientific portal that was created to help
scientists to keep own manuscripts (e.g., scientific articles,
university manuals, and monographs).

# The Test Access for Guests

<p><b>Login</b>: M.V.Lomonosov@history-gd.ru</p>
<p><b>Password</b>: 123456</p>

# The Prerequisites of Creation

The software is based on following scientific article
containing main software targets and the conception:

**Mosolov R.V. Programma "Istorija genial'nogo otkrytija" //
Elektronnyye biblioteki. 2020. V. 23. No 6. https://doi.org/10.26907/1562-5419-2020-23-6-1239-1278.**

# The Current GUI

At current time, GUI looks so as shown below. This GUI presents
part of project's worked functionality on 04.05.2020 on the left.
![File:GUI at 04.05.2020](./client/src/assets/gui-at-04.05.2020.png 'GUI at 04.05.2020')

# The List of Planned SPA Functionality

1. creating manuscripts;
1. keeping manuscripts as reserve copies in Internet;
1. generating manuscripts to PDF to print them;
1. accumulating big data about manuscripts to search regularities
   of scientific discoveries;
1. scientific self-analysis;
1. et al.

# The List of Planned Technological Stack

## Frontend

| #   |       Technology       |                     Role                      |
| --- | :--------------------: | :-------------------------------------------: |
| 1   |          HTML          |                  Adds layout                  |
| 2   |          CSS           |               Adds stylization                |
| 3   |       JavaScript       |                  Frontend PL                  |
| 4   |       TypeScript       |        Adds strong types to variables         |
| 5   |        Next.js         |    Makes the SPA more familiarity with SEO    |
| 6   |        React.js        |        Main high-level library for JS         |
| 7   |      Material UI       |     Adds templates of frontend components     |
| 8   |      React Router      |         Adds URL paths between pages          |
| 9   |         Redux          |       Manages all SPA states centrally        |
| 10  | Redux Thunk/Redux Saga |             Deletes sides effects             |
| 11  |     GraphQL/Apollo     | Sets strong types for data exchanging with DB |
| 12  |   ESLint + Prettier    |    Check and fix code styles into modules     |
| 13  |       Grunt/Gulp       |          Automates manual operations          |
| 14  |          Jest          |          Tests modules code quality           |

The additional technological stack: Reselect.

## Backend

| #   |   Technology    |                         Role                         |
| --- | :-------------: | :--------------------------------------------------: |
| 1   |     Node.js     |          Main server platform on JS syntax           |
| 1   |     Python      | Server PL to integrate GUI with scientific libraries |
| 2   |   Express.js    |         Main high-level library for Node.js          |
| 3   | Google Firebase |            Main DBMS and hosting for SPA             |
| 4   |     MongoDB     |             2nd DBMS for saving backups              |
| 5   |   PostgreSQL    |             3rd DBMS for saving backups              |
| 6   |       JWT       |    Creates tokens to authenticate an user session    |
| 7   |      Jest       |              Tests modules code quality              |

# The Instructions

## How to Run the SPA

Run following terminal commands from root directory:

1. Firstable, install all the project dependencies:
   1. `npm run install-global`
   1. `npm run install-client`
   1. `npm run install-server`
1. Type in 1st terminal window `npm run client` to render GUI
1. Type in 2nd window terminal `npm run server` to run the server

Finally, open a browser at: http://localhost:3000/

## How to Check Code Style

`npm run pretty`

# The Project Technical Task

More information about project's technical details, planned
functionality, and planned pages of the SPA:

https://drive.google.com/open?id=1KYWEs8QmNs79tw7Br3JS5j9R07W0w6GC

Also you can to learn statistic of work time that was oriented to
this project:

https://drive.google.com/open?id=1CIHTwmnrYNzT6RYXHrQ99lInUuDib980M8JNQ23s6y4

# History GD API

## Manuscripts Page

| #   | Method |   Endpoint   |     Query      |                          Body                           |        Role         |
| --- | :----: | :----------: | :------------: | :-----------------------------------------------------: | :-----------------: |
| 1   |  GET   | /manuscripts |   collection   |                            –                            | Get all manuscripts |
| 3   |  GET   | /manuscripts |       –        |                            –                            |  Get a manuscript   |
| 2   |  POST  | /manuscripts |   collection   | userId, manuscriptId, title, author, creationDate, type |  Post a manuscript  |
| 4   | UPDATE | /manuscripts | collection, id |                      title, author                      | Update a manuscript |
| 5   | DELETE | /manuscripts | collection, id |                            –                            | Delete a manuscript |

## Auth Process

| #   | Method | Endpoint |      Query      | Body |           Role           |
| --- | :----: | :------: | :-------------: | :--: | :----------------------: |
| 1   |  POST  |  /auth   |      email      |  –   | Reset an user's password |
| 2   |  POST  |  /auth   | email, password |  –   |   Authenticate an user   |
