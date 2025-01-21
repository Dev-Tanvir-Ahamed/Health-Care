/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorsQuery,
} from "@/redux/api/doctorsApi";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
const DoctorsDataTable = ({ query }: Record<string, any>) => {
  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  console.log(data);

  const [deleteDoctor] = useDeleteDoctorMutation();
  const [open, setOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!selectedDoctorId) return;
    try {
      const res = (await deleteDoctor(selectedDoctorId).unwrap()) as any;
      // console.log(res);

      if (res?.id) {
        toast.success("Doctor deleted successfully!");
      }
    } catch (error: any) {
      console.log(error.message);
      toast.error("Failed to delete the doctor.");
    } finally {
      setOpen(false);
      setSelectedDoctorId(null);
    }
  };

  const confirmDelete = (id: string) => {
    setSelectedDoctorId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDoctorId(null);
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "apointmentFee", headerName: "Appointment Fee", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <Box>
          <IconButton onClick={() => confirmDelete(row.id)} aria-label="delete">
            <DeleteIcon sx={{ marginRight: "20px" }} />
          </IconButton>
          <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
            <IconButton aria-label="delete">
              <EditIcon />
            </IconButton>
          </Link>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this doctor&apos;s data? This action
            cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleDelete} color="error" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      {!isLoading ? (
        <Box sx={{ height: 400, width: "100%" }} my={3}>
          <DataGrid
            rows={data?.doctors}
            columns={columns}
            loading={isLoading}
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
        <h1>Loading....</h1>
      )}
    </Box>
  );
};

export default DoctorsDataTable;
