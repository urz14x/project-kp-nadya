import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"

import { Button, buttonVariants } from "@/Components/ui/button"
import { CalendarIcon } from "lucide-react"
import Welcome from "./Welcome"
import { Link, usePage } from "@inertiajs/react"
export default function Kegiatan({activities}) {
console.log(activities);
  return (
    <>
    <main className=" container px-4">
        <h1 className="text-2xl mt-4 mb-3 font-bold">Kegiatan SDN 042 Gambir</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 space-x-5">
    {activities.data.map((activity, i) => (
        <Card key={i} className="">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{activity.title}</CardTitle>
          <CardDescription className="flex items-center mt-2">
            {/* <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Author" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar> */}
            <span className="text-sm text-muted-foreground">John doe</span>
            <CalendarIcon className="h-4 w-4 ml-4 mr-1" />
            <span className="text-sm text-muted-foreground">{activity.created_at}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
            {activity.description}
          </p>
        </CardContent>
        <CardFooter>
          <Link href={route('kegiatan.detail', activity.slug)} className={buttonVariants({variant: 'outline'}, 'w-full')} as="button">Read More</Link>
        </CardFooter>
      </Card>
    ))}
    </div>

    </main>

    </>


  )
}
Kegiatan.layout = page => <Welcome children={page} />
