type MainProps = {
  title: string;
  description: string;
};

const Main = ({ title, description }: MainProps) => {
  return (
    <main className="bg-[#06092b] text-white w-full h-full p-12 text-center flex flex-col items-center justify-center">
      <h1>{title}</h1>
      <h2>{description}</h2>
    </main>
  )
}

export default Main;
