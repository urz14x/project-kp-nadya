import React from "react";
import Container from "./Container";
import { Facebook, Twitter, Youtube } from "lucide-react";
import { Link } from "@inertiajs/react";

export default function Header() {
    return (
        <header>
            <ul className="flex items-center space-x-6 bg-[#148F77] py-3 text-white px-32">
                <li>
                    <Link href="/">
                        <Facebook width={27} height={27} />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <Youtube width={27} height={27} />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <Twitter width={27} height={27} />
                    </Link>
                </li>
            </ul>
        </header>
    );
}
