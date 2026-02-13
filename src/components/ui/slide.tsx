import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface SlideProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
}

export const Slide = forwardRef<HTMLElement, SlideProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "min-h-[100dvh] h-[100dvh] w-full snap-start flex items-center justify-center relative p-6 md:p-12 overflow-clip isolate",
                    className
                )}
                {...props}
            >
                <div className="w-full max-w-7xl relative z-10">
                    {children}
                </div>
            </section>
        );
    }
);

Slide.displayName = "Slide";
