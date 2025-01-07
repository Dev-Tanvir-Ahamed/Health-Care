"use client";
import {
  useDeleteDoctorScheduleMutation,
  useGetAllDoctorSchedulesQuery,
} from "@/redux/api/doctorSchedule";
import { ISchedule } from "@/types";
import { formatDate } from "@/utils/formatDate";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import ScheduleDoctorModal from "./components/ScheduleDoctorModal";
const DoctorSchedulesPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [allSchedule, setAllSchedule] = useState<any>([]);
  const [isClient, setIsClient] = useState(false);
  const { data, isLoading } = useGetAllDoctorSchedulesQuery({});
  console.log(data);

  const [deleteDoctorSchedule] = useDeleteDoctorScheduleMutation();
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (data?.doctorSchedules) {
      const updateData = data.doctorSchedules.map(
        (schedule: ISchedule, index: number) => ({
          sl: index + 1,
          id: schedule?.scheduleId,
          startDate: formatDate(schedule?.schedule?.startDate),
          startTime: dayjs(schedule?.startDate).format("hh:mm a"),
          endTime: dayjs(schedule?.endDate).format("hh:mm a"),
        })
      );
      setAllSchedule(updateData);
    }
  }, [data?.doctorSchedules]);

  // Toast for success when modal closes
  // const handleModalClose = () => {
  //   setModalOpen(false);
  //   toast.success("Schedule created successfully!"); // Success message
  // };

  if (!isClient || isLoading) {
    return <div>Loading...</div>;
  }

  const handleDoctorScheduleDelete = async (id: string) => {
    console.log(id);

    try {
      const res = await deleteDoctorSchedule(id);
      console.log(res);

      // if (res?.data?.doctorSchedules?.id) {
      //   toast.success("Schedule Deleted Succesfully!!");
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL" },
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <IconButton
          aria-label="delete"
          onClick={() => handleDoctorScheduleDelete(row.id)}
        >
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
      ),
    },
  ];

  return (
    <Box>
      <Button
        onClick={() => setModalOpen(true)}
        endIcon={<AddIcon />}
        sx={{ mb: 4, mt: 2 }}
      >
        Create Doctor Schedule
      </Button>
      <ScheduleDoctorModal open={isModalOpen} setOpen={setModalOpen} />
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={allSchedule}
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
    </Box>
  );
};

export default DoctorSchedulesPage;
