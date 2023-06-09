# CarCar

Team:

- Person 1: Will Mo | Microservice: Auto Service | Inventory:
- Person 2: Matt Snyder| Microservice: Auto Sales | Inventory - Models - list/form, Automobile - Form

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Approach: Pull Automobile VIN and SOLD information to my Sale class. Create required classes and their respective components to showcase list and forms.

Potential barriers: figuring out how to deal with multiple foreign keys under one class.
Updated solution- found out you can fetchdata from multiple urls and useEffect hooks to update the gathered data.

For special features, I will define a variable for unsold_autos and filter them and integrate that function with my sales form to only display unsold automobiles.

In order to show sold status for automobiles, I will need to configure my handlesubmit in my sales form to link the autmobile Url and update the sold vehicle by id or vin.
