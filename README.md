# Coordinateconversion Formats
The Coordinateconversion Formats bundle adds additional coordinateconversion formats to the coordinateconversion bundle.

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_coordinateconversionformats/index.html

## Installation Guide
**Requirement: map.apps 4.5.0**

Simply add the bundle "dn_coordinateconversionformats" to your map.apps 4 app.
For more information have a look at the Coordinateconversion documentation:
https://demos.conterra.de/mapapps/resources/jsregistry/root/coordinateconversion/latest/README.md

### Configurable Components of dn_coordinateconversionformats:
``` 

        "dn_coordinateconversionformats":{
            "Config":{
                "ETRS89geografisch": true,
                "GaussKrueger2": true,
                "GaussKrueger3": true,
                "GaussKrueger4": true,
                "GaussKrueger5": true,
                "UTM32": true,
                "UTM33": true,
                "WGS84PseudoMercator": true,
                "WGS84geografisch": true
            }
        }
```

##### Properties
 | Property                       | Type     | Possible Values               | Default            | Description                                                 |
 |--------------------------------|----------|-------------------------------|--------------------|-------------------------------------------------------------|
 | ETRS89geografisch              | Booelan  | ```true``` &#124; ```false``` |   true             | Format will appear in tool                                  |
 | GaussKrueger2                  | Booelan  | ```true``` &#124; ```false``` |   true             | Format will appear in tool                                  |
 | GaussKrueger3                  | Booelan  | ```true``` &#124; ```false``` |   true             | Format will appear in tool                                  |
 | GaussKrueger4                  | Booelan  |```true``` &#124; ```false```  |   true             | Format will appear in tool                                  |
 | GaussKrueger5                  | Booelan  |```true``` &#124; ```false```  |   true             | Format will appear in tool                                  |
 | UTM32                          | Booelan  |```true``` &#124; ```false```  |   true             | Format will appear in tool                                  |
 | UTM33                          | Booelan  |```true``` &#124; ```false```  |   true             | Format will appear in tool                                  |
 | WGS84PseudoMercator            | Booelan  |```true``` &#124; ```false```  |   true             | Format will appear in tool                                  |
 | WGS84geografisch               | Booelan  |```true``` &#124; ```false```  |   true             | Format will appear in tool                                  |


## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
