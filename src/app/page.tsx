import { Profile } from "./components/Profile";
import { Backpack } from "./components/Backpack";
import { Story } from "./components/Story";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div className="space-y-16">
      <Profile />
      <Backpack />
      <Story />
      <Contact />
    </div>
  );
}