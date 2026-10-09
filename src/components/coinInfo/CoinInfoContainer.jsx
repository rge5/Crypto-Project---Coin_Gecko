import CoinInfo from "./coinInfo";
import PageLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory";

function CoinInfoCointainer({ coinId }) {
  const {
    historicData,
    isLoading,
    isError,
    setCoinInterval,
    setDays,
    days,
    currency,
 } = useFetchCoinHistory(coinId);

  if (isLoading) {
    return <PageLoader />;
  }
  if (isError) {
    return <Alert message="Error fetchin data" type="error" />;
  }
  return (
    <>
      <CoinInfo
        historicData={historicData}
        setDays={setDays}
        setCoinInterval={setCoinInterval}
        days={days}
        currency={currency}
      />
    </>
  );
}

export default CoinInfoCointainer;
