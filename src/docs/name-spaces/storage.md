# Storage

## About the Module

This module contains the name space to save data in NoSQL DBMS (Google Firebase),
Storage service.

## The project minimum value product (MVP)

1. Manuscript
1. Diary
1. Scientific Note

## Main Criteria to Save Data in DB

1. Data type:
   | Data type | Short record for DB |
   | ----------------|:-------------------:|
   | Manuscript | man |
   | Diary | diary |
   | Scientific Note | note |
1. User ID (uid)
1. Manuscript version (v)
1. File title
1. Manuscript title (title)
1. Manuscript author(-s) (auth)

## Storage Directory Structure

1. mansContent
1. diariesContent
1. notesContent

## Example of Absolute Paths to a File

**Notation**: _ext_ – a file extension.

1. storage/mansContent/uid_XX**man_YY**v_ZZ**auth_author-name**title_manuscript-title.ext,
   where XX, YY, and ZZ are numeric values.
