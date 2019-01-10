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
import GaussKrueger2FormatFactory from "./GaussKrueger2FormatFactory";
import GaussKrueger3FormatFactory from "./GaussKrueger3FormatFactory";
import GaussKrueger4FormatFactory from "./GaussKrueger4FormatFactory";
import GaussKrueger5FormatFactory from "./GaussKrueger5FormatFactory";
import UTM32FormatFactory from "./UTM32FormatFactory";
import UTM33FormatFactory from "./UTM33FormatFactory";
import WGS84geografischFormatFactory from "./WGS84geografischFormatFactory";
import WGS84PseudoMercatorFormatFactory from "./WGS84PseudoMercatorFormatFactory";

export default class Config {


    activate(componentContext) {
        let props = this._properties;
        if (props.ETRS89geografisch) {
            let bundleContext = componentContext.getBundleContext();
            let serviceInstance = new ETRS89geografischFormatFactory().createInstance();
            let interfaces = ["coordinateconversion.Format"];
            this._serviceregistration = bundleContext.registerService(interfaces, serviceInstance, {});
        }
        if (props.GaussKrueger2) {
            let bundleContext = componentContext.getBundleContext();
            let serviceInstance = new GaussKrueger2FormatFactory().createInstance();
            let interfaces = ["coordinateconversion.Format"];
            this._serviceregistration = bundleContext.registerService(interfaces, serviceInstance, {});
        }
        if (props.GaussKrueger3) {
            let bundleContext = componentContext.getBundleContext();
            let serviceInstance = new GaussKrueger3FormatFactory().createInstance();
            let interfaces = ["coordinateconversion.Format"];
            this._serviceregistration = bundleContext.registerService(interfaces, serviceInstance, {});
        }
        if (props.GaussKrueger4) {
            let bundleContext = componentContext.getBundleContext();
            let serviceInstance = new GaussKrueger4FormatFactory().createInstance();
            let interfaces = ["coordinateconversion.Format"];
            this._serviceregistration = bundleContext.registerService(interfaces, serviceInstance, {});
        }
        if (props.GaussKrueger5) {
            let bundleContext = componentContext.getBundleContext();
            let serviceInstance = new GaussKrueger5FormatFactory().createInstance();
            let interfaces = ["coordinateconversion.Format"];
            this._serviceregistration = bundleContext.registerService(interfaces, serviceInstance, {});
        }
        if (props.UTM32) {
            let bundleContext = componentContext.getBundleContext();
            let serviceInstance = new UTM32FormatFactory().createInstance();
            let interfaces = ["coordinateconversion.Format"];
            this._serviceregistration = bundleContext.registerService(interfaces, serviceInstance, {});
        }
        if (props.UTM33) {
            let bundleContext = componentContext.getBundleContext();
            let serviceInstance = new UTM33FormatFactory().createInstance();
            let interfaces = ["coordinateconversion.Format"];
            this._serviceregistration = bundleContext.registerService(interfaces, serviceInstance, {});
        }
        if (props.WGS84geografisch) {
            let bundleContext = componentContext.getBundleContext();
            let serviceInstance = new WGS84geografischFormatFactory().createInstance();
            let interfaces = ["coordinateconversion.Format"];
            this._serviceregistration = bundleContext.registerService(interfaces, serviceInstance, {});
        }
        if (props.WGS84PseudoMercator) {
            let bundleContext = componentContext.getBundleContext();
            let serviceInstance = new WGS84PseudoMercatorFormatFactory().createInstance();
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
