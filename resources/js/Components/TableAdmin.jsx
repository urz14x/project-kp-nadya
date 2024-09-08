import { Link, router } from "@inertiajs/react";
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
import { Button, buttonVariants } from "./ui/button";

export function TableAdmin({ activities }) {
    const deletePost = (id) => {
        router.delete(route('admin.delete', id));
    };
    return (
        <>
            {activities.length > 0 ? (
                <Table>
                    <TableCaption>List data dari halaman kegiatan</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>Nama Kegiatan</TableHead>
                            <TableHead>Deskripsi Kegiatan</TableHead>
                            <TableHead>Gambar</TableHead>
                            <TableHead>Aksi</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {activities.map((data, i) => (
                            <TableRow key={i}>
                                <TableCell className="font-medium">
                                    {data.id + i}
                                </TableCell>
                                <TableCell>{data.title}</TableCell>
                                <TableCell>
                                    {data.description}
                                </TableCell>
                                <TableCell>
                                    <img
                                        src={`/upload/${data.image}`}
                                        width="100px"
                                        alt={data.image}
                                    />
                                </TableCell>
                                <TableCell className="flex items-center gap-x-4">
                                    <Button
                                        onClick={() => deletePost(data.id)}
                                        variant="destructive"
                                    >
                                        Hapus
                                    </Button>
                                    <Link as="button"
                                       href={route('admin.edit', data.id)}
                                       className={buttonVariants({ variant: "outline" })}

                                    >
                                        Edit
                                    </Link>
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
