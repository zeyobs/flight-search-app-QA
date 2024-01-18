Feature: Flight Availability Search and List

  @run
  Scenario Outline: Prevent identical values in search fields
    Given The user is on the flight search page
    When The user enters '<From>' and '<To>' values to the flight search fields
    Then The system should not allow to the search with identical values
  
      Examples:
      | From      | To          |
      | Istanbul  | Istanbul    |

  @run
  Scenario Outline: Validate the number of listed flights
    Given The user is on the flight search page
    When The user enters '<From>' and '<To>' values to the flight search fields
    Then The number of listed flights should match the number in listed flight count text
    
      Examples:
      | From      | To          |
      | Istanbul  | Los Angeles |

   #To assert that we are on the page, we can add a background to the feature and check it in the "before all" hook. Our test can be faster and more reusable. However, since our scenario is small and not complex, I wrote it this way just for this scenario. 

   #Or we could have delete the example table and use json file to store the data, or just write the value in the step definitions. But I think this is the most readable way for this project.