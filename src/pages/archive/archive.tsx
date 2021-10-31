import { useState, useEffect } from "react";
import { Timeline, Space, Typography, Tag, Skeleton } from "antd";
import { getAllArticles } from "../../api/blog";

const { Text, Link } = Typography;
export function Archive() {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getAllArticles().then((res) => {
      setDataSource(res.data.reverse());
      setLoading(false);
    });
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        width: "1140px",
        margin: "24px auto",
        padding: "24px",
      }}
    >
      <Skeleton loading={loading} active avatar>
        <Timeline>
          {dataSource.map((item) => (
            <Timeline.Item key={item.id}>
              <Space>
                <Text italic>
                  {new Date(item.createAt).toLocaleDateString()}
                </Text>

                <Link href={`#/blog/detail/${item.id}`}>{item.title}</Link>
                {item.category && (
                  <Tag color="magenta">{item.category.name}</Tag>
                )}
                <Text type="secondary">{item.introduce}</Text>
              </Space>
            </Timeline.Item>
          ))}
        </Timeline>
      </Skeleton>
    </div>
  );
}
