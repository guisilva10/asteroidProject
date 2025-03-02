import { Rocket } from "lucide-react";

const LoadingHome = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Rocket className="h-16 w-16 animate-bounce text-blue-500" />
    </div>
  );
};

export default LoadingHome;
