import * as React from "react";

import { Card, CardContent, Grid, Table, TableCell, TableContainer, TableRow, Typography } from "@material-ui/core";

import { CustomButton } from "..";
import { NftTimeContext } from "../../hooks/nftTime";

interface Props {
}

export const LeaderboardCardRight: React.FC<Props> = (props: Props) => {

    return (
        <NftTimeContext.Consumer>
            {({ nftTime }) => (
                <Grid
                    alignItems="center"
                    container
                    direction="column"
                    item
                >
                    <Typography variant="h5">
                        {nftTime === true ? "Social NFTs claim" : "Information"}
                    </Typography>
                    <Card>
                        <CardContent>
                            <Grid
                                container
                                direction="column"
                                justify="space-around"
                                alignItems={nftTime === true ? "center" : "flex-start"}
                            >
                                {nftTime === true ?
                                    <React.Fragment>
                                        <Typography variant="subtitle1" >
                                            You have earned:
                                        </Typography>
                                        <TableContainer>
                                            <Table>
                                                <TableRow>
                                                    <TableCell>
                                                        <Typography variant="subtitle1" color="textSecondary">
                                                            Legendary
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography variant="subtitle1">
                                                            14 NFTs
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <CustomButton text="Claim" type="short" />
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <Typography variant="subtitle1" color="textSecondary">
                                                            Epic
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography variant="subtitle1">
                                                            14 NFTs
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <CustomButton text="Claim" type="short" />
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <Typography variant="subtitle1" color="textSecondary">
                                                            Rare
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography variant="subtitle1">
                                                            14 NFTs
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <CustomButton text="Claim" type="short" />
                                                    </TableCell>
                                                </TableRow>
                                            </Table>
                                        </TableContainer>
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Top 1–3 Teams
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            Legendary 150% booster
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Top 4–10 Teams
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            Epic 75% booster
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Remaining Participating Teams
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            Rare 15% booster
                                        </Typography>
                                    </React.Fragment>
                                }
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            )}
        </NftTimeContext.Consumer>
    )
}
