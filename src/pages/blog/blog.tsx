import React, { useState, useEffect } from "react";

import { List, Space, Tooltip, Typography } from "antd";
import { ArrowRightOutlined, CalendarOutlined } from "@ant-design/icons";
import { getAllArticles } from "../../api/blog";

const { Link, Paragraph } = Typography;

export function Blog() {
  const [dataSource, setDataSource] = useState<any[]>([]);

  useEffect(() => {
    getAllArticles().then((res) => {
      setDataSource(res.data.reverse());
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
      <List
        itemLayout="vertical"
        dataSource={dataSource}
        rowKey={(d) => d.id}
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 4,
        }}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <Tooltip
                title={"上次更新于:" + new Date(item.updateAt).toLocaleString()}
                placement="bottom"
              >
                <Space>
                  {React.createElement(CalendarOutlined)}
                  {new Date(item.createAt).toLocaleString()}
                </Space>
              </Tooltip>,
              <Link href={`#/blog/detail/${item.id}`}>
                <Space>
                  {React.createElement(ArrowRightOutlined)}
                  {"查看"}
                </Space>
              </Link>,
            ]}
            // extra={
            //   <img
            //     width={272}
            //     alt="logo"
            //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            //   />
            // }
          >
            <List.Item.Meta
              // avatar={<Avatar src={item.avatar} />}
              key={item.id}
              title={<a href={`#/blog/detail/${item.id}`}>{item.title}</a>}
              description={item.category ? item.category.name : ""}
            />
            <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: "more" }}>
              {item.introduce}
            </Paragraph>
          </List.Item>
        )}
      ></List>
    </div>
  );
}
