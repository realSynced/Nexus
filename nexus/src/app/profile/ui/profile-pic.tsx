import { Avatar } from "@nextui-org/react";

export default function Profile() {
  return (
    <div className="flex flex-row space-x-10 items-center p-4 rounded-2xl bg-red-500 justify-normal">
        <div className="">
            <Avatar
                isBordered
                radius="full"
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                className="w-20 h-20 hover:cursor-pointer"
            />
        </div>
        
        <div>
            <h1>@[usernames] profile!</h1>
        </div>
    </div>
  );
}