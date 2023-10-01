import { Outlet, useParams } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useEffect, useState } from "react";

export const MainLayout = () => {
  const [step, setStep] = useState<number>(1);
  const { id } = useParams<{ id: string | undefined }>();

  useEffect(() => {
    if (id) {
      setStep(2);
    } else {
      setStep(1);
    }
  }, [id]);

  return (
    <div>
      <Header step={step} />
      <Outlet />
      <Footer />
    </div>
  );
};
