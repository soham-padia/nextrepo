import { Inter, Libre_Barcode_128_Text, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const barcode = Libre_Barcode_128_Text({ subsets: ['latin'],weight:'400'});
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });
