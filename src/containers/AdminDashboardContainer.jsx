import React from "react";
import { useHistory,useRouteMatch} from "react-router-dom";
import { authUser } from "../../firebase/auth";

// COMPONENTS & CONTAINERS
import Error404 from "../components/404";
import AdminDashboard from "../components/AdminDashboard";

function AdminDashboardContainer() {
  const { logout, currentUser } = authUser();
  const history = useHistory();

  return !currentUser ? (
    <Error404 />
  ) : (
      <AdminDashboard 
      logout={logout} 
      history={history}
      />
    );
}

export default AdminDashboardContainer;



{/* <Layout>
<Sidebar />
<Layout>
  <Navbar/>
    <HeaderComponent />
  <Content>

  </Content>
</Layout>
</Layout> */}