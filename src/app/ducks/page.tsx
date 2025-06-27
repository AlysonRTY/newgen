import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FunniestDuckPage() {
  return (
    <div className="p-4 md:p-10">
      <Card>
        <CardHeader>
          <CardTitle>Funniest Duck of the Week</CardTitle>
          <CardDescription>
            This week&apos;s funniest duck, guaranteed to make you quack up.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://images.unsplash.com/photo-1598433827840-1457492e74d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <AvatarFallback>FD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xl font-medium leading-none">Sir Quackers</p>
              <p className="text-lg text-muted-foreground">
                The duck with a PhD in comedy.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
