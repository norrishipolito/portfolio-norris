import getCurrentTime from "../../hooks/getCurrentTime";

function CurrentTime() {
  const { phTime } = getCurrentTime();

  return <>{phTime}</>;
}

export default CurrentTime;
