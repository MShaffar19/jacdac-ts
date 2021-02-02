import { ReflectedLightReg, ReflectedLightVariant, SRV_REFLECTED_LIGHT } from "../jdom/constants";
import JDRegisterHost from "../jdom/registerhost";
import JDAnalogSensorServiceHost from "./analogsensorservicehost";
import JDSensorServiceHost from "./sensorservicehost";

export default class ReflectedLightServiceHost extends JDAnalogSensorServiceHost {
    readonly variant: JDRegisterHost<[ReflectedLightVariant]>;

    constructor(options?: { variant?: ReflectedLightVariant }) {
        super(SRV_REFLECTED_LIGHT, { readingValues: [0] })
        const { variant } = options || {};

        this.variant = this.addRegister<[ReflectedLightVariant]>(ReflectedLightReg.Variant, [variant || ReflectedLightVariant.InfraredDigital])
    }
}