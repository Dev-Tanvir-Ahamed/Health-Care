export type ISchedule = {
  [x: string]: any;
  id?: string;
  startDate: string;
  endDate: string;
};

export type TScheduleProps = {
  id: string;
  createdAt: string; // ISO timestamp string
  updatedAt: string; // ISO timestamp string
  startDate: string; // ISO timestamp string
  endDate: string; // ISO timestamp string
};

export interface MultiSelectProps {
  schedules: TScheduleProps[]; // Define the type for schedules
}
