import Joystick404 from "../components/icons/Joystick404";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl md:text-4xl">
        <span className="text-branding">404</span> - Page Not Found
      </h1>
      <Joystick404 />
    </div>
  );
}
