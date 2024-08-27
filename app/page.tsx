"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { counterActions } from "./context/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./context/store";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Card>
        <CardHeader>
          <CardTitle className="text-center text-4xl">{count}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid
            sint molestias delectus!
          </p>
        </CardContent>

        <CardFooter className="space-x-4">
          <Button size="lg" onClick={() =>dispatch(counterActions.increment())}>+</Button>
          <Button size="lg" onClick={() =>dispatch(counterActions.decrement())}>-</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
