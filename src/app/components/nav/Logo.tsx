export default function Logo() {
  return (
    <div>
      {" "}
      <a href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Memo Master</span>
        <img alt="Logo" className="h-14 w-auto" src="./logo.svg" />
      </a>
    </div>
  );
}
