import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Welcome({ children }) {
    return (
        <>
            <Head title="Selamat Datang" />

            <div className="min-h-screen bg-gray-100">
                <Header />
                <Navbar />

                <main>{children}</main>
            </div>
        </>
    );
}
