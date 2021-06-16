import { Footer } from './footer';
import { Navbar } from './navbar';

export function Layout(props: any) {
  return (<>
    <Navbar />
    <section className="main-content-wrapper">
      {props.children}
    </section>
    <Footer />
  </>);
}
