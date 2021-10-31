import { useState, useEffect } from "react";
import { getArticleById } from "../../api/blog";
import { PageHeader, Skeleton } from "antd";
import { useHistory } from "react-router";

export function BlogDetail({ match }: any) {
  const { id } = match.params;
  const history = useHistory();
  const [article, setArticle] = useState<any>({
    title: "",
    id: "",
    introduce: "",
    content: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function asyncFunc() {
      const res = await getArticleById({ id });

      setArticle(res.data);
      setLoading(false);
    }

    asyncFunc();
  }, [id]);

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
        <PageHeader
          onBack={() => history.goBack()}
          title={article.title}
          subTitle={article.introduce}
        />
        <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </Skeleton>
    </div>
  );
}
