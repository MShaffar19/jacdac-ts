import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useCallback, useContext, useMemo } from "react";
import { JDDevice } from "../../../../src/jdom/device";
import useSelectedNodes from "../../jacdac/useSelectedNodes";
import { isReading, isValueOrIntensity } from "../../../../src/jdom/spec";
import { splitFilter, strcmp } from "../../../../src/jdom/utils";
import Alert from "../ui/Alert";
import useDevices from "../hooks/useDevices";
import DashboardDevice from "./DashboardDevice";
import { MOBILE_BREAKPOINT } from "../layout";
import JACDACContext, { JDContextProps } from "../../../../src/react/Context";
import { VIRTUAL_DEVICE_NODE_NAME } from "../../../../src/jdom/constants";
import KindIcon from "../KindIcon";
import GridHeader from "../ui/GridHeader"
import ConnectButton from "../../jacdac/ConnectButton";
import AppContext from "../AppContext";
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip";
import { GridBreakpoints } from "../useGridBreakpoints";

function deviceSort(l: JDDevice, r: JDDevice): number {
    const srvScore = (srv: jdspec.ServiceSpec) => srv.packets
        .reduce((prev, pkt) => prev + (isReading(pkt) ? 10 : isValueOrIntensity(pkt) ? 1 : 0), 0)
    const score = (srvs: jdspec.ServiceSpec[]) => srvs.reduce((prev, srv) => srvScore(srv), 0)

    const ls = score(l.services().slice(1).map(srv => srv.specification))
    const rs = score(r.services().slice(1).map(srv => srv.specification))
    if (ls !== rs)
        return -ls + rs;
    return strcmp(l.deviceId, r.deviceId);
}

function DeviceItem(props: {
    device: JDDevice,
    expanded: boolean,
    toggleExpanded: () => void,
}) {
    const { device, expanded, toggleExpanded } = props;
    const readingCount = device.services()
        .map(srv => srv.readingRegister ? 1 : 0)
        .reduce((c: number, v) => c + v, 0);
    const breakpoints: GridBreakpoints = useMemo(() => {
        if (readingCount > 2)
            return { xs: 12, sm: 12, md: 12, lg: 8, xl: 6 };
        else if (readingCount == 2)
            return { xs: 12, sm: 6, md: 6, lg: 6, xl: 4 };
        else
            return { xs: expanded ? 12 : 6, sm: 6, md: 6, lg: 4, xl: "auto" };
    }, [expanded, readingCount]);

    // based on size, expanded or reduce widget size
    return <Grid item {...breakpoints}>
        <DashboardDevice
            device={device}
            expanded={expanded}
            toggleExpanded={toggleExpanded} />
    </Grid>
}

function DeviceGroup(props: {
    title: string,
    action?: JSX.Element,
    devices: JDDevice[],
    expanded: (device: JDDevice) => boolean,
    toggleExpanded: (device: JDDevice) => void,
    children?: JSX.Element | JSX.Element[]
}) {
    const { title, action, devices, expanded, toggleExpanded, children } = props;
    const handleExpand = (device: JDDevice) => () => toggleExpanded(device)
    return <section>
        <Grid container spacing={2}>
            <GridHeader title={title} action={action} />
            {devices?.map(device => <DeviceItem
                key={device.id}
                device={device}
                expanded={expanded(device)}
                toggleExpanded={handleExpand(device)} />)}
            {children}
        </Grid>
    </section>
}

export default function Dashboard() {
    const { bus } = useContext<JDContextProps>(JACDACContext)
    const { toggleShowDeviceHostsDialog } = useContext(AppContext)
    const devices = useDevices({ announced: true, ignoreSelf: true })
        .sort(deviceSort);
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(MOBILE_BREAKPOINT));
    const { selected, toggleSelected } = useSelectedNodes(mobile)
    const [hosted, physicals] = splitFilter(devices, d => !!bus.deviceHost(d.deviceId))

    return <>
        <DeviceGroup
            title="Simulators"
            action={<IconButtonWithTooltip
                title="start simulator"
                onClick={toggleShowDeviceHostsDialog}>
                <KindIcon kind={VIRTUAL_DEVICE_NODE_NAME} />
            </IconButtonWithTooltip>}
            devices={hosted}
            expanded={selected}
            toggleExpanded={toggleSelected} />
        <DeviceGroup
            title="Devices"
            action={<ConnectButton full={false} transparent={true} showAlways={true} />}
            devices={physicals}
            expanded={selected}
            toggleExpanded={toggleSelected}>
            {!physicals.length && <Grid item xs={12}>
                <Alert severity="info">
                    Please <ConnectButton full={true} transparent={true} /> to see your physical devices.
                </Alert>
            </Grid>}
        </DeviceGroup>
    </>
}