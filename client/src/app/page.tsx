import { Checkbox, FormControlLabel } from "@mui/material";

import { FilterWidget } from "@/widgets/Filter";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-red-400">
        Hello world!
      </h1>

      <div className="w-[300px] px-0 py-4">
        <FilterWidget title="language" isDivider>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        </FilterWidget>
      </div>
    </>
  );
}
