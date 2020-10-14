import { JDBus } from "./bus";
import Packet from "./packet";
import { isInstanceOf, serviceSpecificationFromName } from "./spec";
import { SMap } from "./utils";

export type PacketFilter = (pkt: Packet) => boolean;

export function parsePacketFilter(bus: JDBus, text: string): PacketFilter {
    if (!text) {
        return (pkt) => true
    }

    let filters: PacketFilter[] = [];
    let flags = new Set<string>()
    let serviceClasses = new Set<number>();
    let pkts = new Set<string>();
    let repeatedAnnounce = true;
    let announce = true;
    let regGet = false;
    let regSet = false;
    let devices: SMap<{ from: boolean; to: boolean; }> = {};
    text.split(/\s+/g).forEach(part => {
        const [match, prefix, _, value] = /([a-z\-_]+)([:=]([^\s]+))?/.exec(part) || [];
        switch (prefix || "") {
            case "kind":
            case "k":
                if (!value)
                    break;
                flags.add(value.toLowerCase())
                break;
            case "service":
            case "srv":
                if (!value)
                    break;
                const service = serviceSpecificationFromName(value)
                const serviceClass = service?.classIdentifier || parseInt(value, 16);
                if (serviceClass !== undefined)
                    serviceClasses.add(serviceClass)
                break;
            case "announce":
            case "a":
                if (!parseBoolean(value))
                    announce = false;
                break;
            case "repeated-announce":
            case "ra":
                if (!parseBoolean(value))
                    repeatedAnnounce = false;
                break;
            case "device":
            case "dev":
            case "to":
            case "from":
                if (!value)
                    break;
                // resolve device by name
                const deviceId = bus.devices().find(d => d.shortId === value || d.name === value)?.deviceId;
                if (deviceId) {
                    const data = devices[deviceId] || (devices[deviceId] = { from: false, to: false })
                    if (prefix === "from")
                        data.from = true;
                    else if (prefix === "to")
                        data.to = true;
                }
                break;
            case "pkt":
                if (!value) return;
                // find register
                const id = parseInt(value, 16);
                if (!isNaN(id))
                    pkts.add(id.toString(16));
                break;
            case "reg-get":
            case "get":
                regGet = true;
                break;
            case "reg-set":
            case "set":
                regSet = true;
                break;
            case "requires-ack":
                filters.push(pkt => pkt.requires_ack);
                break;
        }
    });

    if (!announce) {
        filters.push(pkt => !pkt.isAnnounce)
    }
    if (!repeatedAnnounce)
        filters.push(pkt => !pkt.isAnnounce || !pkt.isRepeatedAnnounce)
    if (flags.size)
        filters.push(pkt => hasAnyFlag(pkt))
    if (regGet || regSet)
        filters.push(pkt => pkt.is_reg_get || pkt.is_reg_set)
    else if (regGet)
        filters.push(pkt => pkt.is_reg_get)
    else if (regSet)
        filters.push(pkt => pkt.is_reg_set)
    if (Object.keys(devices).length)
        filters.push(pkt => {
            if (!pkt.device) return false;
            const f = devices[pkt.device.deviceId];
            return !!f && (!f.from || !pkt.is_command) && (!f.to || pkt.is_command);
        })
    if (serviceClasses.size) {
        const scs = Array.from(serviceClasses.keys());
        filters.push(pkt => scs.some(serviceClass => isInstanceOf(pkt.service_class, serviceClass)));
    }
    if (pkts.size) {
        const scs = Array.from(pkts.keys());
        filters.push(pkt => pkts.has(pkt.decoded?.info.identifier.toString(16)));
    }

    //  const name = `filter` + bus.timestamp
    return (pkt: Packet) => {
        const r = filters.every(filter => filter(pkt));
        //console.log(`${name} ${pkt} -> ${r}`)
        return r;
    }

    function hasAnyFlag(pkt: Packet) {
        const k = pkt.decoded?.info.kind;
        return !!k && flags.has(k);
    }

    function parseBoolean(value: string) {
        if (value === "false" || value === "no")
            return false;
        else
            return true;
    }
}