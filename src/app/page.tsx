import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const colors = {
  neutral: {
    0: "#FFFFFF",
    50: "#F5F7FA",
    100: "#F3F5F8",
    200: "#E0E4EA",
    300: "#CACFD8",
    400: "#99A0AE",
    500: "#717784",
    600: "#525866",
    700: "#2B303B",
    800: "#232530",
    900: "#191B25",
    950: "#0E121B",
  },
  blue: {
    50: "#EBF1FF",
    500: "#335CFF",
    700: "#2547D0",
  },
  green: {
    100: "#21C16B",
    500: "#D1FBE9",
  },
  red: {
    100: "#FB3748",
    500: "#FFD5D8",
  },
};

export default function Home() {
  return (
    <div className="text-2xl">
      <div className="flex gap-400 h-1000 items-center">
        <div>
          <p>Default</p>
          <Input placeholder="default" />
        </div>

        <div>
          <p>Password Toggle</p>
          <Input name="password" type="password" placeholder="password" />
        </div>

        <div>
          <p>Default with Error</p>
          <Input error type="password" placeholder="password" />
        </div>

        <div>
          <p>Password Toggle with Error</p>
          <Input name="password" error type="password" placeholder="password" />
        </div>
        <div>
          <p>Disabled</p>
          <Input disabled placeholder="password" />
        </div>
      </div>

      <div className="flex gap-400 h-1000 items-center">
        <Button variant="primary" className="m-2">
          Primary Button
        </Button>
        <Button variant="secondary" className="m-2">
          Secondary Button
        </Button>
        <Button variant="border" className="m-2">
          <Image
            src="/images/icon-restore.svg"
            alt="refresh"
            width={24}
            height={24}
          />
          Border Button
        </Button>
        <Button disabled>
          <Image
            src="/images/icon-restore.svg"
            alt="refresh"
            width={24}
            height={24}
          />
          Border Button
        </Button>
      </div>

      <header className="border border-green-100 rounded-4 flex gap-1000">
        <h1 className="font-inter tracking-tight">Inter</h1>
        <h1 className="font-noto tracking-normal">Noto Serif</h1>
        <h1 className="font-sourceCode tracking-wide">Source Code Pro</h1>
      </header>

      <div>
        {Object.entries(colors).map(([colorName, shades]) => (
          <div key={colorName}>
            <h2>{colorName.charAt(0).toUpperCase() + colorName.slice(1)}</h2>
            {Object.entries(shades).map(([shade, value]) => (
              <p
                key={shade}
                className={`text-${colorName}-${shade}`}
                style={{ backgroundColor: value }}
              >
                {`${
                  colorName.charAt(0).toUpperCase() + colorName.slice(1)
                } - ${shade}`}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
