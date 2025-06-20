import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutMePage() {
  return (
    <div>
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex flex-col items-center">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardTitle className="text-3xl font-bold">About Me</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p>
            Hello! I'm a passionate developer who loves building beautiful and
            functional web applications. I specialize in Next.js, React, and
            TypeScript.
          </p>
          <p>
            When I'm not coding, you can find me exploring the great outdoors or
            experimenting with new recipes in the kitchen.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
