import { format } from "date-fns";

export default function dateToday() {
    return format(new Date(), "MM/dd/yyyy");
}