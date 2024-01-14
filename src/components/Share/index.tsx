import Button from "@/components/Button";
import usePathStyle from "@/hooks/usePathStyle";

const DownloadButton = () => {

    const style = usePathStyle();

  return (
    <>
      <Button
        text="แชร์"
        icon="ph:share"
        variant="accent-red"
        rounded="2xl"
        className={style.color}
        onClick={() => {}}
      />
    </>
  );
};

export default DownloadButton;
