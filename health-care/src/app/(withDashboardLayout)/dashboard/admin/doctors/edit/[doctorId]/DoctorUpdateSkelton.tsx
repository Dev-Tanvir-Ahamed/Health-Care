import { Box, Skeleton, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

const DoctorUpdateSkeleton: React.FC = () => {
  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Stack spacing={4}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Skeleton variant="rectangular" width={200} height={40} />
        </Box>

        {/* Grid 1 */}
        <Grid container spacing={2}>
          {[...Array(3)].map((_, index) => (
            <Grid item xs={4} key={`grid1-${index}`}>
              <Skeleton variant="rectangular" height={56} />
            </Grid>
          ))}
        </Grid>

        {/* Grid 2 */}
        <Grid container spacing={2}>
          {[...Array(3)].map((_, index) => (
            <Grid item xs={4} key={`grid2-${index}`}>
              <Skeleton variant="rectangular" height={56} />
            </Grid>
          ))}
        </Grid>

        {/* Grid 3 */}
        <Grid container spacing={2}>
          {[...Array(3)].map((_, index) => (
            <Grid item xs={4} key={`grid3-${index}`}>
              <Skeleton variant="rectangular" height={56} />
            </Grid>
          ))}
        </Grid>

        {/* Grid 4 */}
        <Grid container spacing={2}>
          {[...Array(2)].map((_, index) => (
            <Grid item xs={4} key={`grid4-${index}`}>
              <Skeleton variant="rectangular" height={56} />
            </Grid>
          ))}
          <Grid item xs={4}>
            <Skeleton
              variant="rectangular"
              height={56}
              sx={{ visibility: "hidden" }}
            />
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Skeleton variant="rectangular" width={100} height={36} />
        </Box>
      </Stack>
    </Box>
  );
};

export default DoctorUpdateSkeleton;
