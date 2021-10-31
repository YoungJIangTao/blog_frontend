import { Carousel } from "antd";
export function Home() {
  const urls = [
    "https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*P0S-QIRUbsUAAAAAAAAAAABkARQnAQ",
  ];
  return (
    <div
      style={{
        background: "#fff",
        width: "1140px",
        margin: "0 auto 24px auto",
        padding: "24px",
      }}
    >
      <Carousel autoplay>
        {urls.map((url) => (
          <div key={url}>
            <img style={{ width: "100%" }} src={url} alt="error" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
