import React, { useContext } from "react"
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core"
import JACDACContext, { JDContextProps } from "../../../../src/react/Context"
import { SRV_ROLE_MANAGER } from "../../../../src/jdom/constants"
import useChange from "../../jacdac/useChange"
import { BusState } from "../../../../src/jdom/bus"
import ConnectAlert from "../alert/ConnectAlert"
import Alert from "../ui/Alert"
import RoleManagerService from "../RoleManagerService"

export default function RoleManager(props: { clearRoles?: boolean }) {
    const { clearRoles } = props;
    const { bus, connectionState } = useContext<JDContextProps>(JACDACContext)

    const services = useChange(bus, b => b.services({ serviceClass: SRV_ROLE_MANAGER }));

    return <>
        {<ConnectAlert serviceClass={SRV_ROLE_MANAGER} />}
        {!services.length && connectionState == BusState.Connected && <Alert severity="info">We could not find any device with the role manager service on the bus!</Alert>}
        <Grid container spacing={2}>
            {services.map(service => <Grid key={service.id} item xs={12}>
                <RoleManagerService service={service} clearRoles={clearRoles} />
            </Grid>)}
        </Grid>
    </>
}