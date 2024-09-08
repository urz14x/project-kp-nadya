import Container from "@/Components/Container";
import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

import { Textarea } from "@/Components/ui/textarea";
import App from "@/Layouts/App";
import { Head, useForm } from "@inertiajs/react";

export default function Edit({ activity }) {
    const { data, setData, post, errors } = useForm({
        title: "",
        description: "",
        image: null,
    });
    const handleUpdate = (e) => {
        e.preventDefault();
        post(`/kegiatan-baru/update/${activity.id}`, {
            forceFormData: true
        });
    };
    return (
        <>
            <Head title="Edit" />
            <Container className="mt-5">
                <form onSubmit={handleUpdate}>
                    <Card className="w-full max-w-2xl mx-auto">
                        <CardHeader>
                            <CardTitle>Edit Data Kegiatan</CardTitle>
                            <CardDescription>Edit Kegi</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Judul</Label>
                                <Input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    placeholder="Kegiatan di SDN 042 Gambir"
                                />
                                {errors.title && (
                                    <InputError message={errors.title} />
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Deskripsi</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    placeholder="Deskripsi Kegiatan di SDN 042 Gambir"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Gambar</Label>
                                <input
                                    type="file"
                                    className="w-full px-4 py-2"
                                    label="Image"
                                    name="image"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="w-full">
                                Save changes
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </Container>
        </>
    );
}
Edit.layout = (page) => <App children={page} />;
