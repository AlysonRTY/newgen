import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DucksPage() {
  return (
    <div>
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center text-4xl font-bold">
            All About Ducks
          </CardTitle>
          <CardDescription className="text-center">
            An overview of our feathered friends.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center mb-4">
            <Image
              src="/ducks.jpg"
              alt="A picture of a duck"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <p>
              Ducks are amazing waterfowl found all over the world. They are
              part of the family Anatidae, which also includes swans and geese.
              Ducks are mostly aquatic birds and can be found in both fresh
              water and sea water.
            </p>
            <p>
              There are many different species of ducks, each with their own
              unique characteristics. Some of the most well-known types include
              Mallards, Pekin ducks, and Wood ducks.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">Go back home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
