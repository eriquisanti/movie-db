import { CardContent, CardImage, Card, } from "@/components/card";

export function CardLoading() {
  return (
    <div className="animate-pulse w-full max-w-72">
      <Card cardId={0}>
        <CardImage />
        <CardContent>
          <div className="text-gray-400 bg-gray-700 h-4 w-3/4 mb-2 rounded"></div>
          <div className="flex items-center">
            <div className="bg-gray-700 h-4 w-10 rounded"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}