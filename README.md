# PDC-Calc

## About
```
Node Js application for calculating  percentage of days covered for measuring medication adherance.

Database is not included with this project due to size however instructions below for obtaining.
```

## Project setup
```
1. npm install

2. download sample data from CMS.gov:

http://downloads.cms.gov/files/DE1_0_2008_to_2010_Prescription_Drug_Events_Sample_1.zip

3. download and install DBBrowser for sqlite (or use your own DBMS):

https://sqlitebrowser.org/

4. create new database and called rx.db

5. import csv from step 2 into a new table giving it the default name of the file:
DE1_0_2008_to_2010_Prescription_Drug_Events_Sample_1

6. ensure rx.db is in the root folder

7. run index.js (node index.js)

```
## Discussion

The concept of Proportion of Days Covered is described in various locations:

- https://www.youtube.com/watch?v=oAL8WjY46v0

- https://www.usciences.edu/blog/noteworthy/posts/the-difference-between-primary-measures-of-medication-adherence-pdc-and-mpr.html#:~:text=The%20PDC%20is%20calculated%20by,have%20the%20medication%20on%20hand.&text=PDC%20is%20recommended%20for%20assessing,therapies%20at%20the%20same%20time.


- https://www.pharmacist.com/measuring-adherence


- https://www.pharmacytimes.com/contributor/michael-crowe-pharmd-mba-csp-fmpa/2015/07/do-you-know-the-difference-between-these-adherence-measures

- https://www.jmcp.org/doi/pdf/10.18553/jmcp.2019.25.10.1073

When medication is filled early: 

“Covered” denotes the availability of the prescribed daily dose and is tracked using an array of days supply for each fill, wherein an overlapping array start date is moved forward to start on the exhaustion date of the previous fill with any oversupply being truncated beyond the time frame (Figure 1)

## Example Code

The following implementation with SAS is available https://www.lexjansen.com/pharmasug/2008/pr/PR07.pdf with credits to R. Scott Leslie, MedImpact Healthcare Systems, Inc., San Diego, CA for its description and implementation using SAS.

## Goals of Project

1. To provide a nodeJS implementation for the algorithm described by R. Scott Leslie.
2. To serve as an example for publishing nodeJS packages to NPM following https://medium.com/@bretcameron/how-to-publish-your-first-npm-package-b224296fc57b  (Credits to Bret Cameron)


