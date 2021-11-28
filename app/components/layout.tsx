import { Footer } from "~/components/footer";
import { Nav } from "~/components/nav";

export function Layout({ children, year }: { children: React.ReactNode; year: number }) {
  return (
    <>
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer year={year} />
    </>
  );
}
