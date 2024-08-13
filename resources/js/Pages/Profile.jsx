import App from "@/Layouts/App";
import React from "react";
import Welcome from "./Welcome";

export default function Profile() {
    return (
        <div className="text-center container mx-auto">
            <h1 className="text-3xl font-semibold">SDN 042 GAMBIR KOTA BANDUNG <br/> SEKOLAH TERBAIK DI KOTA BANDUNG</h1>
            <p className="mb-5">
               <span className="font-bold">Jl. Kiara Condong No.416, Binong,</span>  <br/> KECAMATAN BATUNUNGGAL, KOTA
                BANDUNG, JAWABARAT 40284
            </p>
            <h1 className="text-3xl font-bold">SEJARAH SDN 042 GAMBIR BANDUNG</h1>
            <p>
                SD negeri ini pertama kali berdiri pada tahun 1950. Saat ini SD
                Negeri 042 Gambir Kota Bandung memakai panduan kurikulum belajar
                pemerintah yaitu SD 2013. SDN 042 Gambir Kota Bandung dibawah
                kepemimpinan seorang kepala sekolah yang bernama Nunun Komala
                dibantu oleh operator bernama Dede Nurkholis Majid.
            </p>

            <h2 className="text-xl font-bold underline mt-2">Pertanyaan Yang Sering Ditanyakan</h2>
            <ul className=" flex flex-col items-center gap-10 italic text-center justify-center">
                <li className="mt-5">
                    1. Di mana alamat SDN 042 Gambir Kota Bandung? <br /> SDN 042
                    Gambir Kota Bandung beralamat lengkap di Jl. Gambir No. 25,
                    Kota Bandung, Prov. Jawa Barat.
                </li>
                <li>
                    2. Apa akreditasi SDN 042 Gambir Kota Bandung?<br /> SDN 042 Gambir
                    Kota Bandung mendapatkan status akreditasi B dari BAN-S/M
                    (Badan Akreditasi Nasional) Sekolah/Madrasah
                </li>
                <li>
                    3. Siapa nama kepala sekolah SDN 042 Gambir Kota Bandung?<br /> SDN
                    042 Gambir Kota Bandung dipimpin oleh kepala sekolah bernama
                    Nunun Komala.
                </li>
                <li>
                    4. Berapa biaya masuk SDN 042 Gambir Kota Bandung? <br />Untuk
                    informasi biaya masuk SDN 042 Gambir Kota Bandung Anda bisa
                    langsung menghubungi pihak sekolah .
                </li>
                <li>
                    5. Kapan SDN 042 Gambir Kota Bandung pertama kali dibuka?<br /> Jika
                    merunut pada SK Operasional sekolah, SDN 042 Gambir Kota
                    Bandung didirikan sejak 25 January 2017.
                </li>
            </ul>
        </div>
    );
}
Profile.layout = (page) => <Welcome children={page} />;
