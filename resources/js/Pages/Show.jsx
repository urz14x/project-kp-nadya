import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import { Separator } from "@/Components/ui/separator";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import Welcome from "./Welcome";
import { Head } from "@inertiajs/react";

export default function Show({ activity }) {
    return (
        <>
            <Head title={activity.title} />
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <div className="flex items-center space-x-4">
                        <div>
                            <h2 className="text-2xl font-bold">
                                {activity.title}
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                By John Doe • {activity.created_at}
                            </p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <img
                        src={`/upload/${activity.image}`}
                        className="object-contain mb-3 rounded-md"
                        alt={activity.image}
                    />
                    <p className="mb-4">{activity.description}</p>

                    <Separator className="my-4" />
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="sm">
                                <Heart className="mr-2 h-4 w-4" />
                                Like
                            </Button>
                            <Button variant="ghost" size="sm">
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Comment
                            </Button>
                        </div>
                        <Button variant="ghost" size="sm">
                            <Share2 className="mr-2 h-4 w-4" />
                            Share
                        </Button>
                    </div>
                </CardContent>

            </Card>
        </>
    );
}
Show.layout = (page) => <Welcome children={page} />;
