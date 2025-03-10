import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2 className="h-4 w-4 animate-spin" />
    </div>
  );
}

export default Loader