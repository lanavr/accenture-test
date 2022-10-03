Feature: Automobile Insurance Quote Form

  Scenario: Customer has all required data 
    Given Customer accessed the website
    And Customer filled in all required vehicle data 
    | make               | Audi       |
    | model              | Scooter    |
    | cylindercapacity   | 2000       |
    | engineperformance  | 300        |
    | dateofmanufacture  | 12/12/2002 |
    | numberofseats      | 3          |
    | fuel               | Petrol     |
    | payload            | 200        |
    | totalweight        | 300        |
    | listprice          | 3000       |
    | licenseplatenumber | AB301A0    |
    | annualmileage      | 3000       | 
    When Customer clicks next

    Given Customer filled in all required insurant data
    | firstname     | Lizzy      |
    | lastname      | McFizzy    |
    | birthdate     | 12/12/1999 |
    | streetaddress | Streety St |
    | country       | Brazil     |
    | zipcode       | 1231       |
    | city          | Citie      |
    | occupation    | Employee   |
    | website       | webie.com  |
    When Customer clicks next

    Given Customer filled in all required product data
    | startdate       | 12/12/2022    |
    | insurancesum    | 3000000       |
    | meritrating     | Bonus 1       |
    | damageinsurance | Full Coverage |
    | courtesycar     | No            |
    When Customer clicks next

    Given Customer chose a price option
    When Customer clicks next

    Given Customer filled in all required email data
    | email           | lizzy@mail.com       |
    | phone           | 213131231            |
    | username        | lizzy                |
    | password        | passwordD2           |
    | confirmpassword | passwordD2           |
    | Comments        | This is my comment   |
    When Customer clicks send 
    Then Success message is displayed 
