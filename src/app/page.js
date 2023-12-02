import SideBar from "./components/SideBar.component";
import DataInputForm from "./components/DataInputForm.component";
export default function Home() {
  return (
    <main>
      <div className="flex flex-row bg-pink-50 min-h-screen h-full w-full">
        <SideBar />
        <DataInputForm />
      </div>
    </main>
  );
}
