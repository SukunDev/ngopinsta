export const metadata = {
  title: "404 not found",
};

export default function NotFound() {
  return (
    <div className="absolute inset-0 m-auto w-fit h-fit">
      <div className="flex items-center gap-4">
        <h1>404</h1>
        <div className="h-8 border-l-2"></div>
        <h2>This page could not be found.</h2>
      </div>
    </div>
  );
}
