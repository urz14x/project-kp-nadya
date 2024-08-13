import { router } from "@inertiajs/react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../Components/ui/table";
import { Button } from "./ui/button";

export function TableAdmin({ posts }) {
    const deletePost = (id) => {
        router.delete(`/kegiatan-hapus/${id}`);
    };
    return (
        <>
            {posts.length > 0 ? (
                <Table>
                    <TableCaption>List data dari halaman kegiatan</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>Nama Kegiatan</TableHead>
                            <TableHead>Deskripsi Kegiatan</TableHead>
                            <TableHead>Gambar</TableHead>
                            <TableHead className="text-right">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {posts.map((data, i) => (
                            <TableRow>
                                <TableCell className="font-medium">
                                    {data.id + i}
                                </TableCell>
                                <TableCell>{data.title}</TableCell>
                                <TableCell className="line-clamp-3">
                                    {data.description}
                                </TableCell>
                                <TableCell>
                                    <img
                                        src={`/upload/${data.name}`}
                                        width="100px"
                                        alt={data.name}
                                    />
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button
                                        onClick={() => deletePost(data.id)}
                                        variant="destructive"
                                    >
                                        Hapus
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                "Tidak ada data"
            )}
        </>
    );
}
