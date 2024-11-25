import Footer from "@/components/Footer";

export const metadata = {
	title: "Maximiliens | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
