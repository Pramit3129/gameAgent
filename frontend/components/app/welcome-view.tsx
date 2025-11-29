import { Navbar } from "./navbar";
import { Hero } from "./hero";
interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref}>
      <Navbar />
      <Hero onStartCall={onStartCall} />
    </div>
  );
};
