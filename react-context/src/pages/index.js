import { Header, Left, Right } from "@/components";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Left />
        <Right />
      </div>
    </div>
  );
}