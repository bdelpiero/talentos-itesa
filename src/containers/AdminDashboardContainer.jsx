import React from "react";
import { useHistory,useRouteMatch} from "react-router-dom";
import { authUser } from "../../firebase/auth";
import { useRecoilState } from "recoil";
import { user } from "../atoms/index";


// COMPONENTS & CONTAINERS
import Error404 from "../components/404";
import AdminDashboard from "../components/AdminDashboard";

function AdminDashboardContainer() {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const { logout } = authUser();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/login");
  };
  return !currentUser ? (
    <Error404 />
  ) : (
      <AdminDashboard 
      handleLogout={handleLogout}
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