import { FileX2, FileX2Icon } from "lucide-react";
import React from "react";

const NoDataFound = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
      <FileX2 className="h-16 w-16 text-muted-foreground" />
      <h2 className="text-lg font-medium">No data found</h2>
    </div>
  );
};

export default NoDataFound;
