import { useAuthContext } from "@/features/auth/hooks/useAuthContext";

const Home = () => {

const { currentUser } = useAuthContext();


  return (
    <>
      <h1 className="font-bold text-2xl">
        Home Page
      </h1>
      <p>Welcome to your home page {currentUser?.displayName ?? "Inconnu"}</p>
    </>
  );
};

export default Home;