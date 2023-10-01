import { useParams } from "react-router-dom";

interface HeaderProps {
  step: number;
}
export const Header = ({ step }: HeaderProps) => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="header">
      <div>
        <span>Choose Service </span>
        <span>Step {step}/2</span>
      </div>
    </div>
  );
};
