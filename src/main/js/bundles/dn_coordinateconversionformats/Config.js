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
import ETRS89geografischFormatFactory from "./ETRS89geografischFormatFactory";

export default class Config {


    activate(componentContext) {
        let props = this._properties;
        if (props.ETRS89geografisch) {
            let bundleContext = componentContext.getBundleContext();
            let serviceInstance = new ETRS89geografischFormatFactory().createInstance();
            let interfaces = ["coordinateconversion.Format"];
            this._serviceregistration = bundleContext.registerService(interfaces, serviceInstance, {});
        }
    }

    stop(bundleContext) {
        let registration = this._serviceregistration;
        this._serviceregistration = null;
        registration.unregister();
    }

}
