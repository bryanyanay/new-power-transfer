import Sidebar from "./sidebar";

function Layout({children}) {
  return (
    <div className="flex selection:bg-cyan-700 selection:text-cyan-50">
      <Sidebar />
      <main className="p-12 w-full">{children}</main>
    </div>
  )
}

export default Layout;