import Link from "next/link";
import Logo from '../../assets/logo.webp';
import { LogoImage } from "./styles";

export function LogoComponent() {
  return (
    <Link href="/" passHref>
      <LogoImage src={Logo} alt="Pokemon" width={150} height={80} />
    </Link>
  )
}
