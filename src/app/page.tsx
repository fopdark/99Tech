import { Button } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <Title>Problem 1</Title>
      <p className="whitespace-pre-line text-left">
        {`Provide 3 unique implementations of the following function in JavaScript.
          **Input**: 'n' - any integer *Assuming this input will always produce a result lesser than 'Number.MAX_SAFE_INTEGER'*. 
          **Output**: 'return' - summation to 'n', i.e. 'sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15'.
        `}
      </p>
      <Button type="primary">
        <Link href={"/sum"}>Click to view result</Link>
      </Button>
    </main>
  );
}
