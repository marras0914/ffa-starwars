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

https://api.brewerydb.com/v2/menu?styles&key=7c1b5905b50b778751d381cd69ff2b90



################################ Definitions #####################################

SRM =   Standard Reference Measure. It’s a standard method of referring to the color of beer.
        Without getting too technical: 0 = clear. 40 = black

        Degrees Lovibond (Â°L) and EBC  
        Joseph Lovibond used samples of colored glass to match beer colors in a standard manner. When the Standard Reference Measure was developed, it was done so at a particular wavelength of light to match Â°L as closely as possible, so Â°L and SRM are essentially interchangeable

        EBC is the European Brewing Convention.
        SRM * 1.97 = EBC

IBU =   International Bittering Units. the higher the IBU the more bitter your beer is
        AAU (Alpha Acid Units) and HBU (Homebrew Bitterness Units) refer to the bittering potential of hops 

OG =    Original gravity. Original gravity refers to the specific gravity of the wort pre-fermentation.        The higher the number, the more sugar is present. An OG of 1.054 would be 54 GUs

FG =    Final gravity. refers to the specific gravity of the liquid post-fermentation.

ABV =   (OG – FG)*1000/7.36. Alcohol by Volume
        if your OG = 1.054 and your FG = 1.008, your ABV = 6.25% alcohol.
        It’s easier if you just drop the “1.” 
        54-8 = 46
        46/7.36 = 6.25

BU:GU   Bittering Unit to Gravity Unit
        Light lager: 10 BUs to 30 GUs (1:3) (little-to-no hop flavor)
        Bohemian Pilsner (like Pilsner Urquell): 40 BUs to 50 GUs (1:1.25) (fairly well-balanced, hops evident)
        English IPA: 50 BUs to 62 GUs (1:1.25) (fairly well-balanced, hops evident)
        American IPA: 65 BUs to 65 GUs (1:1) (hoppy)
        Imperial IPA: 90 BUs to 80 GUs (1.125:1) (very hoppy)
        English Barleywine: 52 BUs to 100 GUs (1:2) (sweet, low hop flavor)
        American Barleywine: 85 BUs to 100 GUs (1:1.2) (sweet, hops evident)

http://www.topfermented.com/2009/08/19/those-wacky-numbers-and-what-they-mean-about-your-beer/







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



################################ Sierra Nevada PA #####################################

{
      "id": "cdkpyx",
      "name": "Pale Ale",
      "nameDisplay": "Pale Ale",
      "description": "Our most popular beer, Sierra Nevada Pale Ale, is a delightful interpretation of a classic style. It has a deep amber color and an exceptionally full-bodied, complex character. Generous quantities of premium Cascade hops give the Pale Ale its fragrant bouquet and spicy flavor.\r\n\r\n“Sierra Nevada Pale Ale is the flagship beer, the one that made Chico famous. It is a flawless beer that opens with bright, perky high notes of maltiness and orange blossom and segues into a delectable hoppiness.”",
      "abv": "5.6",
      "ibu": "37",
      "glasswareId": 5,
      "availableId": 1,
      "styleId": 25,
      "isOrganic": "N",
      "labels": {
        "icon": "https://s3.amazonaws.com/brewerydbapi/beer/cdkpyx/upload_GUIYRA-icon.png",
        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/cdkpyx/upload_GUIYRA-medium.png",
        "large": "https://s3.amazonaws.com/brewerydbapi/beer/cdkpyx/upload_GUIYRA-large.png"
      },
      "status": "verified",
      "statusDisplay": "Verified",
      "createDate": "2012-01-03 02:43:54",
      "updateDate": "2015-12-16 03:48:33",
      "glass": {
        "id": 5,
        "name": "Pint",
        "createDate": "2012-01-03 02:41:33"
      },
      "available": {
        "id": 1,
        "name": "Year Round",
        "description": "Available year round as a staple beer."
      },
      "style": {
        "id": 25,
        "categoryId": 3,
        "category": {
          "id": 3,
          "name": "North American Origin Ales",
          "createDate": "2012-03-21 20:06:45"
        },
        "name": "American-Style Pale Ale",
        "shortName": "American Pale",
        "description": "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
        "ibuMin": "30",
        "ibuMax": "42",
        "abvMin": "4.5",
        "abvMax": "5.6",
        "srmMin": "6",
        "srmMax": "14",
        "ogMin": "1.044",
        "fgMin": "1.008",
        "fgMax": "1.014",
        "createDate": "2012-03-21 20:06:45",
        "updateDate": "2015-04-07 15:25:18"
      }