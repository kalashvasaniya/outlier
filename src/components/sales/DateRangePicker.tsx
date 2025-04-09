"use client"

import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import dynamic from 'next/dynamic'
import { useState } from "react"

const DynamicCalendar = dynamic(
    () => import('@/components/ui/calendar').then((mod) => mod.Calendar),
    { ssr: false }
)

export function DateRangePicker() {
    const [date, setDate] = useState<Date>()

    return (
        <div className="flex items-center gap-2">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className={cn(
                            "w-[240px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <DynamicCalendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
} 