import dbConnect from "@/lib/mongodb";
import User from "@/model/user";
import Test from "@/src/components/Test";

async function getData() {
  await dbConnect();

  const project = await User.find();
  // console.log(project);
  return project;
}

export default async function Page() {
  const data = await getData();
  console.log(data, "hhfh");

  return (
    <main>
      dddnd
      <Test data={data} />
    </main>
  );
}

// export default async function Home() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const res = await data.json();
//   console.log(res);
//   return <main>hyyy</main>;
// }
