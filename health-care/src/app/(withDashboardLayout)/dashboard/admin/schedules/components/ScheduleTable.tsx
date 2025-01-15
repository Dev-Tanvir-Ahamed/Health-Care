"use client";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";
import { ISchedule } from "@/types";
import { formatDate } from "@/utils/formatDate";
import { formatTime } from "@/utils/formetTime";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const ScheduleTable = () => {
  const { data, isLoading } = useGetAllSchedulesQuery({});
  // console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Transform data directly after fetching
  const allSchedule =
    data?.schedules?.map((item: ISchedule, index: number) => ({
      sl: index + 1,
      id: item.id,
      startDate: formatDate(item.startDate),
      endDate: formatDate(item.endDate),
      startTime: formatTime(item.startDate),
      endTime: formatTime(item.endDate),
    })) || [];
  // console.log(allSchedule);

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
      renderCell: () => {
        return (
          <IconButton aria-label="delete">
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        );
      },
    },
  ];

  return (
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
  );
};

export default ScheduleTable;
