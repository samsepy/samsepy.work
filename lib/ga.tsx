import { event } from "nextjs-google-analytics";

export function trackEventClick(category: string) {
  event("click", {
    category: category,
    label: "click",
  });
}
