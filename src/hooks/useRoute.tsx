import { useNavigate } from "react-router-dom";

const useRoute = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToAccount = () => {
    navigate("/account");
  };

  const goToAnime = (id: number) => {
    navigate(`/anime/${id}`);
  };

  return {
    goToHome,
    goToAccount,
    goToAnime,
  };
};

export default useRoute;
