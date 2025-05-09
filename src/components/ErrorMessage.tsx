import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorMessageProps {
  message: string;
  retry?: () => void;
}

export function ErrorMessage({ message, retry }: ErrorMessageProps) {
  return (
    <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-6 text-center">
      <div className="flex justify-center mb-4">
        <AlertTriangle className="h-10 w-10 text-destructive" />
      </div>
      <h3 className="text-lg font-medium text-destructive mb-2">
        Something went wrong
      </h3>
      <p className="text-muted-foreground mb-4">{message}</p>
      {retry && (
        <Button onClick={retry} variant="outline" className="gap-2">
          Try Again
        </Button>
      )}
    </div>
  );
}
