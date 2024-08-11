import { Navbar } from '@/widgets/Navbar';
import { Footer } from '@/widgets/Footer';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  navBarType?: string;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar overlaid={true} navBarType='Heroes' />
      <main>{children}</main>
      <Footer />
    </>
  );
}
