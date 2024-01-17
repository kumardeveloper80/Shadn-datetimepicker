"use client";

import { DateTimePicker } from "@/components/ui/date-time-picker/date-time-picker";
import { TimePicker } from "@/components/ui/date-time-picker/time-picker";
import { useState } from "react";

interface DateTimeState {
  date: Date | null;
  hasTime: boolean;
}

export default function Home() {
  const [dateTime, setDateTime] = useState<DateTimeState>({
    hasTime: false,
    date: null,
  });

  const handleDateTimeChange = (value: DateTimeState) => {
    console.log("value", value);
    setDateTime(value);
  };

  return (
    <main className="p-8 space-y-8">
      <p>Date Time Picker</p>

      <DateTimePicker onChange={handleDateTimeChange} value={dateTime} />
    </main>
  );
}
