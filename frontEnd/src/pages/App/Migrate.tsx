import * as React from "react";

import { Grid, Typography } from "@material-ui/core";
import { Header, MigrateTable, RowModal, WithdrawMigrateModal } from "../../components";

import { MigrateModal } from "../../components/modals/MigrateModal";
import { Token } from "../../util/token";
import { getLogger } from "../../util/logger";
import { useConnectedWeb3Context } from "../../hooks/connectedWeb3";
import { useLPTokens } from "../../hooks/useLPTokens";
import { useStableCoinTokens } from "../../hooks/useStableCoins";

interface Props {
}

const logger = getLogger("Page::Migrate");

export const Migrate: React.FC<Props> = (props: Props) => {
    const context = useConnectedWeb3Context();
    const stableCoins = useStableCoinTokens(context);
    const lpTokens = useLPTokens(context);

    const [withdrawAmountValue, setWithdrawAmountValue] = React.useState("");
    const [withdrawModalOpen, setWithdrawModalOpen] = React.useState(false);

    const [currentToken, setCurrentToken] = React.useState<Token>({} as Token);

    const [withdrawCollateralAmountValue, setWithdrawCollateralAmountValue] = React.useState("");
    const [withdrawCollateralModalOpen, setWithdrawCollateralModalOpen] = React.useState(false);

    const [migrateAmountValue, setMigrateAmountValue] = React.useState("");
    const [migrateModalOpen, setMigrateModalOpen] = React.useState(false);
    const [migrateDepositDisabled, setMigrateDepositDisabled] = React.useState(true);
    const [migrateWithdrawDisabled, setMigrateWithdrawDisabled] = React.useState(true);

    // TO-DO: Web3 Integration
    const onMigrateLendingAssetClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setMigrateModalOpen(true);
    }
    const onMigrateBorrowAssetClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setMigrateModalOpen(true);
    }
    const onWithdrawLendingAssetClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setWithdrawModalOpen(true);
    }
    const onWithdrawBorrowAssetClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setWithdrawCollateralModalOpen(true);
    }
    const onWithdraw = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setWithdrawModalOpen(false);
        setWithdrawAmountValue("");
        setMigrateWithdrawDisabled(false);
    }
    const handleWithdrawClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
        setWithdrawModalOpen(false);
        setWithdrawAmountValue("");
    }
    const onWithdrawAmountChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setWithdrawAmountValue(event.target.value);
    };
    const onWithdrawMax = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    }
    const onWithdrawCollateral = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setWithdrawCollateralModalOpen(false);
        setWithdrawCollateralAmountValue("");
        setMigrateWithdrawDisabled(false);
    }
    const handleWithdrawCollateralClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
        setWithdrawCollateralModalOpen(false);
        setWithdrawCollateralAmountValue("");
    }
    const onWithdrawCollateralAmountChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setWithdrawCollateralAmountValue(event.target.value);
    };
    const onWithdrawMaxCollateral = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    }
    const handleMigrateClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
        setMigrateModalOpen(false);
        setMigrateAmountValue("");
    }
    const onMigrateDeposit = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setMigrateAmountValue("");
        setMigrateDepositDisabled(true);
        setMigrateWithdrawDisabled(true);
        setWithdrawModalOpen(false);
        // TO-DO: Web3 integration: once all deposits are migrated, disable V1
    }
    const onMigrateWithdraw = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setMigrateAmountValue("");
        setMigrateDepositDisabled(false);
        setMigrateWithdrawDisabled(true);
    }
    const onMigrateAmountChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setMigrateAmountValue(event.target.value);
    }

    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                spacing={3}
            >
                <Header />
                <Grid item>
                    <Typography variant="h5">
                        Migrate to v2 for further LP support
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" color="textSecondary">
                        Users can either choose to withdraw funds, or continue exploring Warp with v1
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="stretch"
                >
                    <Grid item>
                        <MigrateTable
                            onMigrateClick={onMigrateLendingAssetClick}
                            onWithdrawClick={onWithdrawLendingAssetClick}
                            tokens={stableCoins}
                            type="lending" />
                    </Grid>
                    <Grid item>
                        <MigrateTable
                            onMigrateClick={onMigrateBorrowAssetClick}
                            onWithdrawClick={onWithdrawBorrowAssetClick}
                            tokens={lpTokens}
                            type="borrowing" />
                    </Grid>
                </Grid>
            </Grid>
            <WithdrawMigrateModal
                action={"Withdraw"}
                error={false/*withdrawError*/}
                handleClose={handleWithdrawClose}
                onButtonClick={onWithdraw}
                onChange={onWithdrawAmountChange}
                onMaxButtonClick={onWithdrawMax}
                open={withdrawModalOpen}
                poolIconSrcPrimary={currentToken.image || ""}
                poolIconSrcSecondary={currentToken.image2 || ""}
                token={currentToken}
                value={withdrawAmountValue}
            />
            <RowModal
                action={"Withdraw Collateral"}
                error={false/*withdrawError*/}
                handleClose={handleWithdrawCollateralClose}
                lp={1/*parseBigNumber(withdrawLpValue, currentToken.decimals)*/}
                onButtonClick={onWithdrawCollateral}
                onChange={onWithdrawCollateralAmountChange}
                onMaxButtonClick={onWithdrawMaxCollateral}
                open={withdrawCollateralModalOpen}
                poolIconSrcPrimary={currentToken.image || ""}
                poolIconSrcSecondary={currentToken.image2 || ""}
                token={currentToken}
                value={withdrawCollateralAmountValue}
            />
            <MigrateModal
                action={"Migrate"}
                error={false/*withdrawError*/}
                handleClose={handleMigrateClose}
                migrateDepositDisabled={migrateDepositDisabled}
                migrateWithdrawDisabled={migrateWithdrawDisabled}
                onDepositClick={onMigrateDeposit}
                onChange={onMigrateAmountChange}
                onMaxButtonClick={onWithdrawMax}
                open={migrateModalOpen}
                onWithdrawClick={onMigrateWithdraw}
                poolIconSrcPrimary={currentToken.image || ""}
                poolIconSrcSecondary={currentToken.image2 || ""}
                token={currentToken}
                value={migrateAmountValue}
            />
        </React.Fragment>
    )
}