const TitleMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl mb-2 text-center">
        Welcome to the{" "}
        <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent font-bold">
          social media{" "}
        </span>{" "}
        app!
      </h1>
      <p className="text-gray text-xl text-center">
        Feel free to add posts, react to them, write comments and interact with
        people all over the world!
      </p>
    </div>
  );
};

export default TitleMessage;
