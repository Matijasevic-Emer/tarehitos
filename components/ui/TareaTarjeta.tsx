import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {
    title:string,
    desc:string,
    date:Date,
    isCompleted:boolean
}
const TareaTarjeta = ({title,desc,date,isCompleted}:Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-amber-700">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">{desc}</CardDescription>
      </CardHeader>
        <CardAction>{isCompleted ? "👍" : "🤞"}</CardAction>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>{date?.toDateString()}</p>
      </CardFooter>
    </Card>
  );
};

export default TareaTarjeta;
