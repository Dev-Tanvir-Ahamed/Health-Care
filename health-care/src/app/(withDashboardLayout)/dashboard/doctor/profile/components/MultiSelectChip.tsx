import { TSpecialty } from "@/types/specialities";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";
type TSelectModalProps = {
  secialitiesData: TSpecialty[] | undefined;
  specialitesIds: string[];
  setSpecialitiesIds: React.Dispatch<React.SetStateAction<string[]>>;
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  const isSelected = personName.includes(name);
  return {
    fontWeight: isSelected
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
    backgroundColor: isSelected ? theme.palette.action.selected : "inherit",
    color: isSelected ? theme.palette.primary.contrastText : "inherit",
  };
}

export default function MultiSelectChip({
  secialitiesData,
  specialitesIds,
  setSpecialitiesIds,
}: TSelectModalProps) {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof specialitesIds>) => {
    const {
      target: { value },
    } = event;
    setSpecialitiesIds(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Specialities</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={specialitesIds}
          onChange={handleChange}
          input={
            <OutlinedInput id="select-multiple-chip" label="Specialities" />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((id) => {
                const specialist = secialitiesData.find(
                  (item) => item.id === id
                );
                return <Chip key={id} label={specialist?.title} />;
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {secialitiesData.map((specialist) => (
            <MenuItem
              key={specialist.id}
              value={specialist.id}
              style={getStyles(specialist.id, specialitesIds, theme)}
            >
              {specialist.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
