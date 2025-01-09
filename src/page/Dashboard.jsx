import { ChartDonation, DonorList } from "../components";
import Container from "../components/application-ui/application-shells/stacked/dark_nav_with_compact_white_page_header";
import DataDisplay from "../components/application-ui/data-display/stats/with_shared_borders";
import Dropwdown from "../components/application-ui/elements/dropdowns/simple";

const Dashboard = () => {
  return (
    <>
      <Container>
        <Dropwdown />
        <main className="w-full flex flex-col lg:flex-row gap-6">
          <div className="lg:w-3/5 flex flex-col gap-6">
            <DataDisplay />
            <ChartDonation />
          </div>
         <DonorList/>
        </main>
      </Container>
    </>
  );
};

export default Dashboard;
