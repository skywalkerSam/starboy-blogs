import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const StardateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  const formatter = format(date, "LLLL	d, yyyy");
  const stardate = formatter
  console.log(stardate);
  return <time dateTime={dateString}>{stardate}</time>;
};

export default StardateFormatter;
