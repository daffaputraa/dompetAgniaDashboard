import { useEffect, useState } from "react";
import Container from "../components/application-ui/application-shells/stacked/dark_nav_with_compact_white_page_header";
import Dropdown from "../components/application-ui/elements/dropdowns/simple"
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Table from "../components/application-ui/lists/tables/with_avatars_and_multi_line_content"
import { calculateDateRange } from "../utils/DateRange";
import { FilterDropdown } from "../components";

const Peringkat = () => {

 
  return (
    <>
        <Container>
        <div className="flex gap-4">
          <FilterDropdown />
        </div>
        <Table/>
        </Container>
    </>
  )
}

export default Peringkat