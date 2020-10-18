// tslint:disable-next-line: no-submodule-imports match-default-export-name
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import StopIcon from '@material-ui/icons/Stop';
import React, { useContext } from "react";
import PacketsContext from "./PacketsContext";
import IconButtonWithProgress, { IconButtonWithProgressProps } from "./IconButtonWithProgress";
import JACDACContext, { JDContextProps } from '../../../src/react/Context';
import { BusState } from '../../../src/dom/bus';

export default function TracePlayButton(props: { component?: string } & IconButtonWithProgressProps) {
    const { disabled, ...others } = props;
    const { toggleTracing, tracing, recording, replayTrace, paused, progress } = useContext(PacketsContext)

    return <IconButtonWithProgress
        {...others}
        disabled={disabled || recording || !replayTrace || paused}
        indeterminate={progress !== undefined}
        title={!replayTrace ? "Load or record a trace to replay it" : tracing ? "Stop trace" : "Play trace"}
        onClick={toggleTracing}
        progress={progress !== undefined && progress * 100}>
        {tracing ? <StopIcon /> : <PlayArrowIcon />}
    </IconButtonWithProgress >
}