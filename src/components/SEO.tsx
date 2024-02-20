import thumbnail from "@/assets/thumbnail.webp";
import { Helmet } from "react-helmet";

interface SEOProps {
  theme?: "primary" | "accent-red" | "accent-purple";
}

const SEO = (props: SEOProps) => {
  const { theme = "primary" } = props;
  const title = "JohnJud";
  const description =
    "ชมรมสวัสดิภาพสัตว์ เป็นชมรมจิตอาสาที่มีหน้าที่เข้าไปช่วยสอดส่องดูแลสุขภาพและเพิ่มสวัสดิภาพที่ดีขึ้นให้แก่สุนัขและแมวจรจัด ภายในบริเวณจุฬาลงกรณ์มหาวิทยาลัยและชุมชนโดยรอบ";
  const image = thumbnail;

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: "th" }}
      meta={[
        { name: "description", content: description },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:image",
          content: image,
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:creator",
          content: "@centos559",
        },
        {
          property: "twitter:title",
          content: title,
        },
        {
          property: "twitter:description",
          content: description,
        },
        {
          property: "twitter:image",
          content: image,
        },
        {
          property: "theme-color",
          content:
            theme == "primary"
              ? "#08878E"
              : theme == "accent-red"
                ? "#C81425"
                : "#3D0D40",
        },
      ]}
    />
  );
};

export default SEO;
