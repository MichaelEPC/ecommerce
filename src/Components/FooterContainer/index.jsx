import "./style.css";

function FooterContainer() {
  return (
    <footer className="FooterContainer flex h-12 items-center justify-center">
      <ul className="flex h-auto w-full items-center justify-center">
        <li className="mr-3 cursor-pointer text-text-color underline">
          <p className="font-semibold">TechInc 2024@</p>
        </li>
        <li className="mr-3 cursor-pointer text-text-color underline">
          <p className="font-semibold">Privacy</p>
        </li>
        <li className="mr-3 cursor-pointer text-text-color underline">
          <p className="font-semibold">Terms</p>
        </li>
        <li className="mr-3 cursor-pointer text-text-color underline">
          <p className="font-semibold">Support</p>
        </li>
      </ul>
    </footer>
  );
}

export default FooterContainer;
