import { Card, ReImage } from "@/ui";

interface TitleCardProps {
  label: string;
  title: string;
  author: string;
}

export const TitleCard = (props: TitleCardProps) => {
  return (
    <Card>
      <div className="relative">
        <ReImage
          src={"https://dummyimage.com/800x400/d9d9d9/d9d9d9"}
          alt="dummy image"
        />
        <div className="absolute bottom-4 left-4">
          <p className="font-light text-sm" data-testid="label">
            {props.label}
          </p>
          <p className="font-bold text-xl" data-testid="title">
            {props.title}
          </p>
          <p className="font-normal text-sm" data-testid="author">
            <span className="font-bold text-sm">By</span> {props.author}
          </p>
        </div>
      </div>
    </Card>
  );
};
