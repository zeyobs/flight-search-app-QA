# Bug Report

# Flight Search Page > Flight Search Fields must not take identical city values

'To' and 'From' fields must not accept the same city name. The current implementation allows entering the same value in both fields, leading to a validation failure.


## Steps to Reproduce

1. The user is on the flight search page
2. The user enters '<From>' and '<To>' values to the flight search fields
3. The system should not allow to the search with identical values

  Examples:
  |From            |To                       
 |---------------|-------------------|
 |`Istanbul `    |  `Istanbul `
 |`Paris`        |  `Paris `         
  


## Expected Result

User should not be able to perform a search by entering the same value in specified fields. 

## Actual Result

User is able to perform a search by entering the same value in the fields. The validation process fails for these fields.


## Environment

-   Browser: Electron 114
-   Operating System: Windows 11






