import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface TarjetaTareaProps {
  id: string;
  name: string;
  description: string;
  estimatedFinishDate: string;
  status: string;
  points: string;
  columnId: number;
}

const TarjetaTarea = ({
  name,
  description,
  estimatedFinishDate,
  status,
  points,
  columnId,
}: TarjetaTareaProps) => {
  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-amber-700">
          {name}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="text-sm space-y-2">
        <p>
          <strong>Estado:</strong> {status}
        </p>
        <p>
          <strong>Pts:</strong> {points} | <strong>Columna:</strong> {columnId}
        </p>
      </CardContent>

      <CardFooter className="text-xs text-muted-foreground">
        Fin estimado: {new Date(estimatedFinishDate).toLocaleDateString()}
      </CardFooter>
    </Card>
  );
};

export default TarjetaTarea;
