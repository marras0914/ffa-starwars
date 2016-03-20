brewerydb.com

API key: 7c1b5905b50b778751d381cd69ff2b90

http://api.brewerydb.com/v2/?key=7c1b5905b50b778751d381cd69ff2b90

http://api.brewerydb.com/v2/search?q=%5C(beer/oeGSxs)&type=beer&withBreweries=Y&locality=Ottawa&region=Ontario&countryIsoCode=CA&key=7c1b5905b50b778751d381cd69ff2b90&format=json&p=1

http://api.brewerydb.com/v2/locations?locality=Ottawa&region=Ontario&countryIsoCode=CA&key=7c1b5905b50b778751d381cd69ff2b90

https://api.brewerydb.com/v2/beers?name=budweiser&key=7c1b5905b50b778751d381cd69ff2b90

http://api.brewerydb.com/v2/search?q=60%2Bminute&type=beer&key=7c1b5905b50b778751d381cd69ff2b90

https://api.brewerydb.com/v2/beers?name=budweiser&key=7c1b5905b50b778751d381cd69ff2b90

https://api.brewerydb.com/v2/beers?style=3&key=7c1b5905b50b778751d381cd69ff2b90

https://api.brewerydb.com/v2/styles?styleId=5&key=7c1b5905b50b778751d381cd69ff2b90




budweiser styleId= 93
https://api.brewerydb.com/v2/styles?styleId=93&key=7c1b5905b50b778751d381cd69ff2b90

https://api.brewerydb.com/v2/beers?styleId=93&key=7c1b5905b50b778751d381cd69ff2b90



################################ KEYS #####################################

api:
https://api.brewerydb.com/v2/<queries>&key=<mykey>

mykey:
7c1b5905b50b778751d381cd69ff2b90

beer:
beers?name=60%20minute%20IPA
beers?ids=oeGSxs
beers?name, abv, ibu, glasswareId, srmId, availableId, styleId, ids

location:
locations?locality=Ottawa&region=Ontario&countryIsoCode=CA

style:
styles?styleId=
