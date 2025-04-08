import React from "react";
import { Box, Typography } from "@mui/material";

const classes = {
    container: {
        display: "flex",
        alignItems: "center"
    },
    border: {
        borderBottom: "2px solid lightgray",
        width: "100%"
    },
    content: {
        pt: .5,
        pb: .5,
        pr: 2,
        pl: 2,
        fontWeight: 500,
        fontSize: 22,
        color: "lightgray"
    }
}

export default function DividerWithText({ children }: any) {
    return <Box sx={classes.container}>
        <Box sx={classes.border} />
        <Typography component="span" sx={classes.content}>{children}</Typography>
        <Box sx={classes.border} />
    </Box>;
}