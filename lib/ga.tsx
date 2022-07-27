import { event } from "nextjs-google-analytics";

export function trackEventClick(category: string): void {
  event("click", {
    category: category,
    label: "click",
  });
}
