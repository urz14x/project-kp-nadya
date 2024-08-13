import { TableAdmin } from "@/Components/TableAdmin";
import { Button } from "@/Components/ui/button";
import App from "@/Layouts/App";
import { Head, useForm, usePage } from "@inertiajs/react";
import { PlusCircle } from "lucide-react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../Components/ui/drawer";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";

export default function Dashboard({ images }) {
    const { auth } = usePage().props;
    console.log(images);
    const { data, setData, errors, post, progress } = useForm({
        title: "",
        description: "",
        image: null,
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("admin.create.store"));

        setData("title", '');
        setData("description", '');
        setData("image", null);
    };
    return (
        <>
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-3xl font-bold mb-3">
                                Selamat datang! {auth.user.name}
                            </h1>
                            <h3 className="text-sm mb-3">
                                Berikut Jadwal Kegiatan Di SDN 042 Gambir
                            </h3>

                            <Drawer>
                                <DrawerTrigger asChild>
                                    <Button className="flex items-center justify-center mb-3 gap-2">
                                        <span>Tambah Kegiatan</span>
                                        <span>
                                            <PlusCircle
                                                width={16}
                                                height={16}
                                            />
                                        </span>
                                    </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
                                        <DrawerTitle className="mb-10">
                                            Form Kegiatan sekolah SDN 046 Gambir
                                        </DrawerTitle>
                                        <form
                                            onSubmit={submit}
                                            encType="multipart/form-data"
                                        >
                                            <div>
                                                <Input
                                                    type="text"
                                                    className="mb-3"
                                                    name="title"
                                                    placeholder="Nama Kegiatan?"
                                                    value={data.title}
                                                    onChange={(e) =>
                                                        setData(
                                                            "title",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <span className="text-red-600">
                                                    {errors.title}
                                                </span>
                                                <Textarea
                                                    value={data.description}
                                                    name="description"
                                                    onChange={(e) =>
                                                        setData(
                                                            "description",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Deksripsi Kegiatan."
                                                />
                                                <span className="text-red-600">
                                                    {errors.description}
                                                </span>
                                                <input
                                                    type="file"
                                                    className="w-full px-4 py-2"
                                                    label="Image"
                                                    name="image"
                                                    onChange={(e) => setData("image", e.target.files[0])}
                                                />
                                                <span className="text-red-600">
                                                    {errors.image}
                                                </span>
                                                {progress && (
                                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                                        <div
                                                            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                                            width={
                                                                progress.percentage
                                                            }
                                                        >

                                                            {
                                                                progress.percentage
                                                            }
                                                            %
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <Button type="submit">
                                                Submit
                                            </Button>

                                            <Button variant="outline">
                                                Cancel
                                            </Button>
                                        </form>
                                    </DrawerHeader>
                                </DrawerContent>
                            </Drawer>

                            <TableAdmin posts={images} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page) => <App children={page} />;
