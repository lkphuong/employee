import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

interface IAlertProps {
  severity: "success" | "info" | "warning" | "error";
  message: string;
}

export default function CAlerts(props: IAlertProps) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity={props.severity}>{props.message}</Alert>
    </Stack>
  );
}
