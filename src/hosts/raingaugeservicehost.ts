import { CHANGE, RainGaugeReg, SRV_RAIN_GAUGE } from "../jdom/constants"
import JDRegisterHost from "../jdom/registerhost";
import JDSensorServiceHost from "./sensorservicehost";

export default class RainGaugeServiceHost extends JDSensorServiceHost {
    readonly precipitationPrecision: JDRegisterHost<[number]>;
    private _tiltCount = 0;
    private _level = 0;

    constructor(options?: { bucketSize?: number }) {
        super(SRV_RAIN_GAUGE, {
            readingValue: 0
        });
        const { bucketSize } = options || {};

        this.precipitationPrecision = this.addRegister<[number]>(RainGaugeReg.PrecipitationPrecision, [bucketSize || 0.2794])
        this._level = 0;
    }

    get tiltCount() {
        return this._tiltCount;
    }

    get level() {
        return this._level;
    }

    async rain(fraction: number) {
        if (!fraction) return;

        this._level += fraction;
        if (this._level >= 1)
            await this.tilt();
        else
            this.emit(CHANGE);
    }

    async tilt() {
        this._tiltCount++;
        this._level = 0;

        const [bucket] = this.precipitationPrecision.values()
        const [current] = this.reading.values();
        this.reading.setValues([current + (bucket || 0.2)]);

        this.emit(CHANGE);
    }
}