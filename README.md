# CarCar

Team:

- Person 1: Will Mo | Microservice: Auto Service | Inventory: Manufacturers - List/Form, Automobile - List
- Person 2: Matt Snyder| Microservice: Auto Sales | Inventory: Models - List/Form, Automobile - Form

## Design

## Service microservice

For the inventory, Matt and I separated the endpoints based on entities. He took vehicleModel and I took manufacturer. We split the automobile entity in two with Matt taking create an automobile and I created the automobile list.

For the service microservice, I initiated through creating views, models, and urls for the API endpoints. I then tested to make sure they all worked using Insomnia. After which I tested my polling to make sure it was connected to AutomobileVO.

Finally I integrated the inventory microservice with the service microservice using React frontend. I created functional components to link to App.js and pulled data from both Service and Inventory microservices and integrated them to create the CarCar website.

## Sales microservice

Approach: Pull Automobile VIN and SOLD information to my Sale class. Create required classes and their respective components to showcase list and forms.

Potential barriers: figuring out how to deal with multiple foreign keys under one class.
Updated solution- found out you can fetchdata from multiple urls and useEffect hooks to update the gathered data.

For special features, I will define a variable for unsold_autos and filter them and integrate that function with my sales form to only display unsold automobiles.

In order to show sold status for automobiles, I will need to configure my handlesubmit in my sales form to link the autmobile Url and update the sold vehicle by id or vin.
