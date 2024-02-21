import NavBar from "@/app/NavBar";

export default function Home() {
  return (
    <>
      <NavBar
        currentPage="domov"
        currentHeading="Hello"
        currentSubtext="toto je specialni a velice dlouhy text"
      />
      <main className="p-5">Ahoj</main>
    </>
  );
}
