/*
 * Copyright (C) 2018 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Format from "esri/widgets/CoordinateConversion/support/Format";
import Point from "esri/geometry/Point";
import {isSupported, load, project} from "esri/geometry/projection";

export default UTM32FormatFactory;

function UTM32FormatFactory() {
    return {
        createInstance: function () {
            // Regular expression to find a number
            let numberSearchPattern = /-?\d+[\.]?\d*/;
            return new Format({
                // The format's name should be unique with respect to other formats used by the widget
                name: "ETRS89 UTM32",
                conversionInfo: {
                    // Define a convert function
                    // Point -> Position
                    convert(point) {
                        let returnPoint = project(point, {wkid: 25832});
                        let x = returnPoint.x.toFixed(4);
                        let y = returnPoint.y.toFixed(4);
                        return {
                            location: returnPoint,
                            coordinate: `${x} ${y}`
                        };
                    },
                    // Define a reverse convert function
                    // String -> Point
                    reverseConvert(string) {
                        string = string.trim();
                        let parts = string.split(" ");
                        return new Point({
                            x: parseFloat(parts[0]),
                            y: parseFloat(parts[1]),
                            spatialReference: {wkid: 25832}
                        });
                    }
                },
                // Define each segment of the coordinate
                coordinateSegments: [
                    {
                        alias: "X",
                        description: "X",
                        searchPattern: numberSearchPattern
                    },
                    {
                        alias: "Y",
                        description: "Y",
                        searchPattern: numberSearchPattern
                    }
                ],
                defaultPattern: "X Y"
            });
        }
    };
}
