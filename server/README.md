# History GD API

## Manuscripts page

| #   | Method |   Endpoint   |     Query      |                          Body                           |        Role         |
| --- | :----: | :----------: | :------------: | :-----------------------------------------------------: | :-----------------: |
| 1   |  GET   | /manuscripts |   collection   |                            –                            | Get all manuscripts |
| 3   |  GET   | /manuscripts |       –        |                            –                            |  Get a manuscript   |
| 2   |  POST  | /manuscripts |   collection   | userId, manuscriptId, title, author, creationDate, type |  Post a manuscript  |
| 4   | UPDATE | /manuscripts | collection, id |                      title, author                      | Update a manuscript |
| 5   | DELETE | /manuscripts | collection, id |                            –                            | Delete a manuscript |
