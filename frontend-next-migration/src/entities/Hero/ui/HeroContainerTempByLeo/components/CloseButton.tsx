import Link from "next/link";
import cls from './CloseButton.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

type Props = Readonly<{
    href: string;
    combinedModCss: Mods
}>
export default function CloseButton({ href, combinedModCss }: Props) {
    return(
        <div className={classNames(cls.xLinkButton, combinedModCss)}>
            {' '}
            <Link href={href}><h1>X</h1></Link>
        </div>
    );
}