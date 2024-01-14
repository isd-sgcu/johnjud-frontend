import Button from "@/components/Button";
import usePathStyle from "@/hooks/usePathStyle";

const DownloadButton = () => {
  const style = usePathStyle().download;
  return (
    <>
      <Button
        text="บันทึกลงเครื่อง"
        icon="lucide:download"
        variant={"primary"}
        rounded="2xl"
        className={style}
        onClick={() => {}}
      />
    </>
  );
};

export default DownloadButton;
