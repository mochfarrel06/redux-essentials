import {Navbar} from "../../app/Navbar";

export default function Layouts({children}) {
  return (
    <>
      <Navbar />
      <div className="app">{children}</div>
    </>
  );
}
