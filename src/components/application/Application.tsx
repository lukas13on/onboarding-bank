import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function Application({children}: {children: React.ReactNode}) {
  return (
    <main>
        {children}
    </main>
  );
}