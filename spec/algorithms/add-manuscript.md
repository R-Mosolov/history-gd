# Add Manuscript

## About

This file defines how will work key algorithms of Add Manuscript page.

## Add Reference Algorithm

When an user adds a new manuscript, he have a choice create or upload his
manuscript. If an user choose first (creating), he can add a reference on
a concrete source. So the following algorithm works here:

1. set a mouse cursor on input with paragraph (the SPA accepts only setting
   sources in a manuscript paragraphs);
1. an user click on the special button ("Сноска" in Russian);
1. an user fills the special dialog with info about a source (e.g., _"author",
   "title", "publication year", etc._);
1. an user clicks on "Создать" button (in Russian);
1. a new reference creates in a manuscript in square brackets with a number of a source
   that we get from the general list of sources, e.g.: _[1]_
1. a new reference info adds in a manuscript end, e.g. in Russian:
   _Ломоносов: Краткий энциклопедический словарь / Рос. акад. наук; Музей М. В. Ломоносова;
   Ред.-сост. Э. П. Карпеев. — СПб.: Наука, 1999._

## Add Formula Algorithm

When an user adds a mathematical formula in a manuscript, it should happen by the
following algorithm:

1. an user click on "Формула" (in Russian) menu element (before this he click on
   "Добавить" (in Russian) button to open the special menu with variants block);
1. the new dialog opens and shows the 1 big window with the 3 small window into this.
   The small windows separate on the following semantic parts:

| Window name                  |                      Description                      | Editable |
| ---------------------------- | :---------------------------------------------------: | :------: |
| "Список допустимых символов" | Shows the full list of accepted mathematical formulas |    -     |
| "Ввод формулы"               |        Shows formulas that have added an user         |    +     |
| "Предпросмотр формулы"       |        Shows the preview of an user's formula         |    -     |

All formulas should take a base from TeX (by D. Knuth) or LaTeX mathematical language.
As a variant, may use iframe for the component for preview of LaTeX or TeX docs.
Optionally, you can make all small windows dynamically (to set new width/height using mouse cursor).

The sources on mathematical formulas list in LaTeX:

1. List of LaTeX symbols: https://latex.wikia.org/wiki/List_of_LaTeX_symbols (03/11/2021);
1. List of LaTeX mathematical symbols: https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols (03/11/2021);
1. LATEX for Beginners: Workbook: http://www.docs.is.ed.ac.uk/skills/documents/3722/3722-2014.pdf (03/11/2021);
1. TEX Reference Card (for Plain TEX): https://www.math.brown.edu/johsilve/ReferenceCards/TeXRefCard.v1.5.pdf (03/11/2021).

The current schema of expected realization settlements below (see Figure).

_Figure_

**The schema of Add Formula component**

![One of the schema variant of Add Formula component.](../schemas/add-formula-schema.png 'One of the schema variant of Add Formula component.')
_Image source_: https://www.figma.com/file/1YaJR9SsOTHrf7LQZhoQ5m/History-GD.-Add-Manuscript-Page.-Schema-of-Add-Formula-Component.-Variant-1?node-id=3%3A5
