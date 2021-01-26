import JDSensorServiceHost from "./sensorservicehost";
import { RealTimeClockCmd, RealTimeClockReg, RealTimeClockVariant, REFRESH, SRV_REAL_TIME_CLOCK } from "../jdom/constants"
import JDRegisterHost from "../jdom/registerhost";
import { JDBus } from "../jdom/bus";
import Packet from "../jdom/packet";

export type RealTimeClockReadingType = [number, number, number, number, number, number, number, number];

export function dateToClock(n: Date): RealTimeClockReadingType {
    const epoch = (n.getTime() / 1000) >> 0;
    const year = n.getFullYear();
    const month = n.getMonth();
    const date = n.getDate();
    const day = n.getDay()
    const hour = n.getHours()
    const min = n.getMinutes()
    const sec = n.getSeconds()

    return [epoch, year, month, date, day, hour, min, sec];
}

export default class RealTimeClockServiceHost
    extends JDSensorServiceHost<RealTimeClockReadingType> {
    readonly error: JDRegisterHost<[number]>;
    readonly precision: JDRegisterHost<[number]>;
    private lastEpoch: number = 0;

    constructor() {
        super(SRV_REAL_TIME_CLOCK, {
            readingValues: dateToClock(new Date()),
            variant: RealTimeClockVariant.Computer,
            streamingInterval: 1000
        })

        this.error = this.addRegister<[number]>(RealTimeClockReg.Error, [0]);
        this.precision = this.addRegister<[number]>(RealTimeClockReg.Precision, [0]);

        this.addCommand(RealTimeClockCmd.SetTime, this.handleSetTime.bind(this))
        this.on(REFRESH, this.refreshTime.bind(this));
    }

    static async syncTime(bus: JDBus) {
        const values = dateToClock(new Date());
        const pkt = Packet.jdpacked<RealTimeClockReadingType>(RealTimeClockCmd.SetTime,
            "u32 u16 u8 u8 u8 u8 u8 u8",
            values);
        await pkt.sendAsMultiCommandAsync(bus, SRV_REAL_TIME_CLOCK);
    }

    private handleSetTime(pkt: Packet) {
        console.log(`set time`)
    }

    private refreshTime() {
        const r = dateToClock(new Date());
        if (r[0] !== this.lastEpoch) {
            this.reading.setValues(r);
            this.lastEpoch = r[0];
        }
    }
}