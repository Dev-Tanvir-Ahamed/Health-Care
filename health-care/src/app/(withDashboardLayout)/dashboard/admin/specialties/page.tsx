/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  useDeleteSpecialistsMutation,
  useGetSpecialistsQuery,
} from "@/redux/api/specialistsApi";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import SpecialistsModal from "./components/SpecialistsModal";
const AdminSpecialtiesPage = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetSpecialistsQuery({});
  const [deleteSpecialisties] = useDeleteSpecialistsMutation();
  console.log(data);
  const handleDelete = async (id: string) => {
    console.log(id);
    try {
      const res = await deleteSpecialisties(id);
      console.log(res);
      if (res?.data?.id) {
        toast.success("Data Deleted Successfully!");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
            <Image src={row.icon} height={20} width={20} alt="img" />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button onClick={() => setOpen(true)}>Create Specialists</Button>
        <SpecialistsModal open={open} setOpen={setOpen} />
        <TextField type="small" placeholder="search" />
      </Stack>
      {!isLoading ? (
        <Box sx={{ height: 400, width: "100%" }} my={3}>
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      ) : (
        <h1>Loading</h1>
      )}
    </Box>
  );
};

export default AdminSpecialtiesPage;
