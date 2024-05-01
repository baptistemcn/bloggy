import { TitleCard } from "@/components";
import { Divider } from "@/ui";

export const Feed = () => {
  return (
    <div>
      <div className="m-4">
        <TitleCard author="author" label="label" title="title" />
        <Divider title="Title" full />
      </div>
    </div>
  );
};
