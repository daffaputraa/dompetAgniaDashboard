import Container from "../components/application-ui/application-shells/stacked/dark_nav_with_compact_white_page_header"
import DataDisplay from "../components/application-ui/data-display/stats/with_shared_borders"
import Dropwdown from "../components/application-ui/elements/dropdowns/simple"
const Dashboard = () => {
  return (
    <>
        <Container>
            <Dropwdown/>
            <main className=" grid grid-cols-12">
              <DataDisplay/>
            </main>
        </Container>
    </>
  )
}

export default Dashboard