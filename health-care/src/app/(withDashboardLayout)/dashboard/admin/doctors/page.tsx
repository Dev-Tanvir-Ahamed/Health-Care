/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useDebounced } from "@/redux/hooks";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import DoctorModal from "./components/DoctorModal";
import DoctorsDataTable from "./components/DoctorsDataTable";

const AdminDoctorPage = () => {
  const [open, setOpen] = useState(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  console.log(searchTerm);
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });
  if (debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button onClick={() => setOpen(true)}>Create New Doctor</Button>
        <DoctorModal open={open} setOpen={setOpen} />
        <TextField
          type="small"
          placeholder="search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
      </Stack>
      <DoctorsDataTable query={query} />
    </Box>
  );
};

export default AdminDoctorPage;
