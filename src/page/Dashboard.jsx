import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ChartDonation, DonorList } from "../components";
import Container from "../components/application-ui/application-shells/stacked/dark_nav_with_compact_white_page_header";
import DataDisplay from "../components/application-ui/data-display/stats/with_shared_borders";

const Dashboard = () => {
  return (
    <Container>
      {/* Tabs for filtering data */}
      <Tabs defaultValue="bulan">
        <TabsList className="tab-list">
          {["bulan", "minggu", "hari"].map((value) => (
            <TabsTrigger key={value} className="tabs-trigger" value={value}>
              {value === "bulan"
                ? "Bulan Ini"
                : value === "minggu"
                ? "Minggu ini"
                : "Hari ini"}
            </TabsTrigger>
          ))}
        </TabsList>

        {["bulan", "minggu", "hari"].map((value) => (
          <TabsContent
            key={value}
            className="w-full flex flex-col lg:flex-row gap-6"
            value={value}
          >
            <div className="lg:w-3/5 flex flex-col gap-6">
              <DataDisplay />
              <ChartDonation />
            </div>
            <DonorList />
          </TabsContent>
        ))}
      </Tabs>
    </Container>
  );
};

export default Dashboard;
