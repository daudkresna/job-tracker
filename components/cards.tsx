import { Card, CardTitle } from "@/components/ui/card";
import { getStatusCounts, statusColors } from "@/lib/utils";

const Cards = () => {
  const statusCounts = getStatusCounts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
      <Card className="p-4">
        <CardTitle>
          <h1 className={`${statusColors.Applied} text-3xl`}>
            {statusCounts.Applied}
          </h1>
          <p className="text-gray-500 text-sm">Applied</p>
        </CardTitle>
      </Card>
      <Card className="p-4">
        <CardTitle>
          <h1 className={`${statusColors.Interviewing} text-3xl`}>
            {statusCounts.Interviewing}
          </h1>
          <p className="text-gray-500 text-sm">Interview</p>
        </CardTitle>
      </Card>
      <Card className="p-4">
        <CardTitle>
          <h1 className={`${statusColors.Offer} text-3xl`}>
            {statusCounts.Offer}
          </h1>
          <p className="text-gray-500 text-sm">Offer</p>
        </CardTitle>
      </Card>
      <Card className="p-4">
        <CardTitle>
          <h1 className={`${statusColors.Rejected} text-3xl`}>
            {statusCounts.Rejected}
          </h1>
          <p className="text-gray-500 text-sm">Rejected</p>
        </CardTitle>
      </Card>
    </div>
  );
};

export default Cards;
