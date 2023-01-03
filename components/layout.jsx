import Sidebar from "./sidebar";

function Layout({children}) {
  return (
    <div className="flex selection:bg-cyan-700 selection:text-cyan-50">
      <Sidebar />
      <main className="p-12 w-full ml-[18rem]">{children}</main>
    </div>
  )
}

// the ml-[18rem] on main is to make space for the sidebar, since the sidebar isn't part of the document's normal flow as it has fixed positioning (so that it stays where it is on scroll)

export default Layout;