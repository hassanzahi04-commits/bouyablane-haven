import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function LocalClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const fmt = new Intl.DateTimeFormat("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Africa/Casablanca",
      });
      setTime(fmt.format(new Date()));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="inline-flex items-center gap-2 text-sm text-foreground/75">
      <Clock className="size-4 text-olive" />
      <span className="font-mono tabular-nums">{time}</span>
    </div>
  );
}
