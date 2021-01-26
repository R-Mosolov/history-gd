# About the SPA
**«History of Genius Discovery»** (shortly _«History GD»_ or _«GitHub for Scientists»_) is the scientific portal that was created to help 
scientists to keep own manuscripts (e.g., scientific articles, 
university manuals, and monographs).

# The Prerequisites of Creation
The software is based on following scientific article
containing main software targets and the conception:

**Mosolov R.V. Programma "Istorija genial'nogo otkrytija" //
Elektronnyye biblioteki. 2020. V. 23. No 6. https://doi.org/10.26907/1562-5419-2020-23-6-1239-1278.**

# The Current GUI
At current time, GUI looks so as shown below. This GUI presents 
part of project's worked functionality on 04.05.2020 on the left. 
![File:GUI on 04.05.2020](src/assets/gui-on-04.05.2020.png "GUI on 04.05.2020")

# The List of Planned SPA Functionality
1) creating manuscripts;
2) keeping manuscripts as reserve copies in Internet;
3) generating manuscripts to PDF to print them;
4) accumulating big data about manuscripts to search regularities 
of scientific discoveries;
5) scientific self-analysis;
6) et al.

# The List of Planned Technological Stack
## Frontend
| # | Technology    | Role                                    |
| - |:-------------:|:---------------------------------------:|
| 1 | HTML          | Adds layout                             |
| 2 | CSS           | Adds stylization                        |
| 3 | JavaScript    | Frontend PL                             |
| 4 | TypeScript    | Adds strong types to variables          | 
| 5 | React.js      | Main high-level library for JS          |
| 6 | Material UI   | Adds templates of frontend components   |
| 7 | React Router  | Adds paths between pages                |
| 8 | Redux         | Manages all SPA conditions              |
| 9 | Redux Saga    | Deletes sides effects                   |
| 10 | React Hemlet | Makes the SPA more familiarity with SEO |
| 11 | ESLint       | Checks code quality into modules        |
| 12 | Jest         | Tests modules code quality              |

The additional technoligical stack: Next.js, Redux Thunk, Reselect, GraphQL/Apollo.

## Backend
| # | Technology      | Role                                  |
| - |:---------------:|:-------------------------------------:|
| 1 | Node.js         | Server PL                             |
| 2 | Express.js      | Main high-level library for Node.js   |
| 3 | Google Firebase | NoSQL DBMS and hosting                |
| 4 | Jest            | Tests modules code quality            |

# The Instructions
## How to Run the SPA: For guests
Run following terminal commands from root directory:
1. `npm install`
2. `npm start`

Then open a browser on: http://localhost:3000/

## How to Run the SPA: For workers
1. `clear && npx eslint --fix src/ && tsc src/**/*.ts`
2. `clear && npm start`

## How to Compile Modules from JS Language to TypeScript
### The Manual Method
`tsc src/**/*.ts && tsc src/**/*.tsx`
### The Automatic Method (by using Grunt library)
`grunt watch`

## How to Check Syntax Quality into Modules
`npx eslint --fix src/`

# The Project Technical Task and Timekeeping in Russian
More information about project's technical details, planned 
functionality, and planned pages of the SPA: 

https://drive.google.com/open?id=1KYWEs8QmNs79tw7Br3JS5j9R07W0w6GC

Also you can to learn statistic of work time that was oriented to 
this project: 

https://drive.google.com/open?id=1CIHTwmnrYNzT6RYXHrQ99lInUuDib980M8JNQ23s6y4
