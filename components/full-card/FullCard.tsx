import { ReImage } from "@/ui";

interface FullCardProps {
  label: string;
  title: string;
  author: string;
  description: string;
  date: string;
}

export const FullCard = (props: FullCardProps) => {
  return (
    <div className="rounded-lg shadow-lg">
      <ReImage
        src={"https://dummyimage.com/800x400/d9d9d9/d9d9d9"}
        alt="dummy image"
      />
      <div className="p-4">
        <div className="my-2">
          <p className="font-light text-sm text-green">{props.label}</p>
          <p className="font-bold text-xl">{props.title}</p>
          <p className="font-normal text-sm">
            <span className="font-bold text-sm">By</span> {props.author}
          </p>
        </div>
        <div className="my-1">
          <p className="text-wrap">{props.description.slice(0, 50) + "..."}</p>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};
