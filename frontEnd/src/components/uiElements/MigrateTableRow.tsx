import { Avatar, Grid, TableCell, TableRow, Typography } from "@material-ui/core";

import { AvatarGroup } from "@material-ui/lab";
import { BigNumber } from "ethers";
import { BorrowerCountdownContext } from "../../hooks/borrowerCountdown";
import { CustomButton } from "..";
import React from "react";
import { Token } from "../../util/token";
import { V1Context } from "../../hooks/v1";
import { formatBigNumber } from "../../util/tools";
import { useConnectedWeb3Context } from "../../hooks/connectedWeb3";
import { useTokenBalance } from "../../hooks/useTokenBalance";
import { useTokenInterest } from "../../hooks/useTokenInterest";
import { useWarpControl } from "../../hooks/useWarpControl";

interface Props {
    onMigrateClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
    onWithdrawClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
    token: Token
    type: "lending" | "borrowing"
}

export const MigrateTableRow: React.FC<Props> = (props: Props) => {

    const context = useConnectedWeb3Context();
    const { walletBalance, vaultBalance } = useTokenBalance(props.token, context);
    const { control } = useWarpControl(context);
    const { tokenBorrowRate, tokenSupplyRate } = useTokenInterest(control, props.token, context);
    const uniVersion = props.token.lpType;

    const [availableAmount, setAvailableAmount] = React.useState(BigNumber.from(0));

    React.useEffect(() => {
        let available = walletBalance ? walletBalance : BigNumber.from(0);

        setAvailableAmount(available);
    }, [walletBalance, vaultBalance]);

    let icon: any;
    if (props.type === "lending") {
        icon = <Avatar alt={props.token.image} src={props.token.image} />;
    } else {
        icon = <AvatarGroup max={2}>
            <Avatar alt={props.token.image} src={props.token.image} />;
      <Avatar alt={props.token.image2} src={props.token.image2} />;
    </AvatarGroup>
    }

    return (
        <TableRow>
            <TableCell>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={2}
                >

                    {icon}
                    <Grid
                        item
                        direction="column"
                    >
                        <Grid item>
                            <Typography variant="subtitle1">
                                {props.token.symbol}
                            </Typography>
                        </Grid>
                        {
                            (props.type === "lending") ? (
                                <Grid item>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {tokenSupplyRate.toLocaleString(undefined, { minimumFractionDigits: 2 }) + "%"}
                                    </Typography>
                                </Grid>
                            ) : null
                        }
                    </Grid>
                </Grid>
            </TableCell>
            <TableCell>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid item>
                        <Typography variant="subtitle1">
                            {formatBigNumber(availableAmount, props.token.decimals) + " " + props.token.symbol}
                        </Typography>
                    </Grid>
                    {props.type === "borrowing" ?
                        <Grid item>
                            <Typography color="textSecondary">
                                {uniVersion}
                            </Typography>
                        </Grid> :
                        null
                    }
                </Grid>
            </TableCell>
            <TableCell>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                    spacing={1}
                >
                    <Grid item>
                        <CustomButton
                            onClick={props.onWithdrawClick}
                            text={"Withdraw"}
                            type={"short"} />
                    </Grid>
                    <Grid item>
                        <CustomButton
                            onClick={props.onMigrateClick}
                            text={"Migrate"}
                            type={"short"} />
                    </Grid>
                </Grid>
            </TableCell>
        </TableRow>
    )
}