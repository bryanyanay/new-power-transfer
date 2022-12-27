import Sidebar from "./sidebar";

function Layout({children}) {
  return (
    <div className="flex selection:bg-cyan-700 selection:text-cyan-50">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}

export default Layout;