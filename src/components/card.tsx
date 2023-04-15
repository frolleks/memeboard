import Image from "next/image";

interface Props {
  title: string;
  image: string;
  alt: string;
}

const Card = ({ title, image, alt }: Props) => {
  return (
    <div className="m-2 flex w-fit flex-col space-y-1.5 rounded-md bg-zinc-800">
      <div className="relative h-auto w-auto rounded-t-md">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover" // Add this line
        />
      </div>
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default Card;
