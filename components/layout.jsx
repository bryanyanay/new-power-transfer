import Sidebar from "./sidebar";

function Layout({children}) {
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}

export default Layout;