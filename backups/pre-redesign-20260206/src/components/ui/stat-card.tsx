import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
    value: string | number;
    label: string;
    sub?: string;
    source?: string;
    icon?: LucideIcon;
    trend?: "up" | "down" | "neutral";
    trendValue?: string;
    className?: string;
    color?: "violet" | "cyan" | "indigo" | "white";
}

export function StatCard({
    value,
    label,
    sub,
    source,
    icon: Icon,
    trend,
    trendValue,
    className,
    color = "white"
}: StatCardProps) {
    const colorClasses = {
        violet: "from-data-neon-violet to-purple-400",
        cyan: "from-data-neon-cyan to-blue-400",
        indigo: "from-data-neon-indigo to-violet-400",
        white: "from-white to-gray-300"
    };

    return (
        <div className={cn("p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col h-full overflow-hidden", className)}>
            <div className="flex justify-between items-start mb-2">
                {Icon && <Icon className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                {trend && (
                    <div className={cn(
                        "text-[10px] font-mono px-2 py-0.5 rounded-full flex-shrink-0",
                        trend === "up" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                    )}>
                        {trendValue}
                    </div>
                )}
            </div>

            <div className={cn("text-3xl md:text-4xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r truncate", colorClasses[color])}>
                {value}
            </div>

            <div className="font-mono text-xs tracking-wider text-gray-300 uppercase mb-1 truncate">
                {label}
            </div>

            {sub && <div className="text-xs text-gray-500 leading-snug line-clamp-2">{sub}</div>}

            {source && (
                <div className="mt-auto pt-2 border-t border-white/5 text-[10px] text-gray-600 font-mono truncate">
                    SRC: {source}
                </div>
            )}
        </div>
    );
}
